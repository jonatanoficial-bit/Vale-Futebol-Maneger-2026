// ======================================================
 // VALE FUTEBOL MANAGER 2026
 // game.js (ENGINE)
 // ------------------------------------------------------
 // Lógica do jogo (SEM DOM):
 // - Estado do jogo (gameState)
 // - Geração de tabela / confrontos
 // - Simulação de partidas
 // - Classificação
 // - Transferências
 // - Salvamento / carregamento
 // ======================================================

 let gameState = {
   coachName: "",
   controlledTeamId: null,
   seasonYear: 2026,
   balance: 50,
   currentCompetitionId: "BRA-A",
   fixtures: [],
   standings: {},
   nextMatchIndex: null
 };

 function getTeamById(id) {
   return teams.find(t => t.id === id) || null;
 }

 function getPlayersByTeam(teamId) {
   return players.filter(p => p.teamId === teamId);
 }

 function initStandings(teamIds) {
   const table = {};
   teamIds.forEach(id => {
     table[id] = {
       teamId: id,
       played: 0,
       wins: 0,
       draws: 0,
       losses: 0,
       goalsFor: 0,
       goalsAgainst: 0,
       points: 0
     };
   });
   return table;
 }

 function sortStandings(standingsObj) {
   const rows = Object.values(standingsObj);
   rows.sort((a, b) => {
     if (b.points !== a.points) return b.points - a.points;
     const gdA = a.goalsFor - a.goalsAgainst;
     const gdB = b.goalsFor - b.goalsAgainst;
     if (gdB !== gdA) return gdB - gdA;
     return b.goalsFor - a.goalsFor;
   });
   return rows;
 }

 function generateLeagueFixtures(teamIds, competitionId = "BRA-A") {
   const fixtures = [];
   let round = 1;
   for (let i = 0; i < teamIds.length; i++) {
     for (let j = i + 1; j < teamIds.length; j++) {
       const home = teamIds[i];
       const away = teamIds[j];
       fixtures.push({
         competitionId,
         round: round++,
         homeTeamId: home,
         awayTeamId: away,
         homeGoals: null,
         awayGoals: null,
         played: false
       });
       fixtures.push({
         competitionId,
         round: round++,
         homeTeamId: away,
         awayTeamId: home,
         homeGoals: null,
         awayGoals: null,
         played: false
       });
     }
   }
   return fixtures;
 }

 function getNextMatchForControlledTeam() {
   const teamId = gameState.controlledTeamId;
   if (!teamId) return null;
   return gameState.fixtures.find(m =>
     !m.played && (m.homeTeamId === teamId || m.awayTeamId === teamId)
   ) || null;
 }

 function getTeamStrength(teamId) {
   const squad = getPlayersByTeam(teamId);
   if (!squad.length) return 70;
   const total = squad.reduce((sum, p) => sum + (p.overall || 70), 0);
   return total / squad.length;
 }

 function simulateMatchForControlledTeam() {
   const match = getNextMatchForControlledTeam();
   if (!match) return null;
   const index = gameState.fixtures.indexOf(match);
   gameState.nextMatchIndex = index;
   return simulateMatchByIndex(index);
 }

 function simulateMatchByIndex(index) {
   if (index == null || index < 0 || index >= gameState.fixtures.length) {
     return null;
   }
   const match = gameState.fixtures[index];
   const homeStrength = getTeamStrength(match.homeTeamId);
   const awayStrength = getTeamStrength(match.awayTeamId);

   const baseHome = Math.max(0, Math.round((homeStrength - 60) / 10 + Math.random() * 2));
   const baseAway = Math.max(0, Math.round((awayStrength - 60) / 10 + Math.random() * 2));

   const homeGoals = Math.max(0, baseHome + (Math.random() < 0.4 ? 1 : 0) - (Math.random() < 0.3 ? 1 : 0));
   const awayGoals = Math.max(0, baseAway + (Math.random() < 0.4 ? 1 : 0) - (Math.random() < 0.3 ? 1 : 0));

   match.homeGoals = homeGoals;
   match.awayGoals = awayGoals;
   match.played = true;

   updateStandingsWithMatch(match);
   saveGameState();
   return match;
 }

 function updateStandingsWithMatch(match) {
   const home = gameState.standings[match.homeTeamId];
   const away = gameState.standings[match.awayTeamId];
   if (!home || !away) return;

   home.played++;
   away.played++;
   home.goalsFor += match.homeGoals;
   home.goalsAgainst += match.awayGoals;
   away.goalsFor += match.awayGoals;
   away.goalsAgainst += match.homeGoals;

   if (match.homeGoals > match.awayGoals) {
     home.wins++;
     away.losses++;
     home.points += 3;
   } else if (match.homeGoals < match.awayGoals) {
     away.wins++;
     home.losses++;
     away.points += 3;
   } else {
     home.draws++;
     away.draws++;
     home.points += 1;
     away.points += 1;
   }
 }

 function getTransferList() {
   const myTeamId = gameState.controlledTeamId;
   return players.filter(p => p.teamId !== myTeamId);
 }

 function buyPlayerById(playerId) {
   const player = players.find(p => p.id === playerId);
   if (!player) return { ok: false, reason: "Jogador não encontrado." };
   const price = player.value || 5;
   if (gameState.balance < price) {
     return { ok: false, reason: "Saldo insuficiente." };
   }
   gameState.balance -= price;
   player.teamId = gameState.controlledTeamId;
   saveGameState();
   return { ok: true, player };
 }

 function saveGameState() {
   try {
     const clone = JSON.parse(JSON.stringify(gameState));
     localStorage.setItem("vfm-save", JSON.stringify(clone));
   } catch (e) {
     console.error("Erro ao salvar gameState:", e);
   }
 }

 function loadGameState() {
   try {
     const raw = localStorage.getItem("vfm-save");
     if (!raw) return null;
     const loaded = JSON.parse(raw);
     if (!loaded || !loaded.controlledTeamId) return null;
     gameState = loaded;
     return gameState;
   } catch (e) {
     console.error("Erro ao carregar gameState:", e);
     return null;
   }
 }

 function hasSavedGame() {
   try {
     const raw = localStorage.getItem("vfm-save");
     if (!raw) return false;
     const loaded = JSON.parse(raw);
     return !!(loaded && loaded.controlledTeamId);
   } catch {
     return false;
   }
 }

 function resetGameStateForNewCareer(teamId, coachName) {
   const divisionATeams = teams.filter(t => t.division === "A").map(t => t.id);
   const teamIds = divisionATeams.length ? divisionATeams : teams.map(t => t.id);

   gameState = {
     coachName: coachName || "Técnico",
     controlledTeamId: teamId,
     seasonYear: 2026,
     balance: 50,
     currentCompetitionId: "BRA-A",
     fixtures: generateLeagueFixtures(teamIds, "BRA-A"),
     standings: initStandings(teamIds),
     nextMatchIndex: null
   };

   saveGameState();
   return gameState;
 }

 function getLeagueStandings() {
   return sortStandings(gameState.standings);
 }

 function getCompetitionFixtures(competitionId) {
   return gameState.fixtures.filter(m => m.competitionId === competitionId);
 }
