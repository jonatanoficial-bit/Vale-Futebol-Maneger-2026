
 // ======================================================
 // VALE FUTEBOL MANAGER 2026
 // ui.js (Interface e navegação)
 // ------------------------------------------------------
 // DOM / HTML:
 // - troca de telas
 // - botões
 // - tabelas de elenco, campeonatos
 // - interface de partida e transferências
 // ------------------------------------------------------
 // ORDEM NO HTML:
 // <script src="database.js"></script>
 // <script src="game.js"></script>
 // <script src="ui.js"></script>
 // ======================================================

 function showScreen(screenId) {
   document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
   const target = document.getElementById(screenId);
   if (target) target.classList.add("active");
 }

 function loadTeamsInSelect() {
   const select = document.getElementById("team-select");
   if (!select) return;
   select.innerHTML = "";
   const optEmpty = document.createElement("option");
   optEmpty.value = "";
   optEmpty.textContent = "Selecione um clube...";
   select.appendChild(optEmpty);
   const divisionATeams = teams.filter(t => t.division === "A");
   divisionATeams.forEach(team => {
     const opt = document.createElement("option");
     opt.value = team.id;
     opt.textContent = team.name;
     select.appendChild(opt);
   });
 }

 function updateDashboardUI() {
   const team = getTeamById(gameState.controlledTeamId);
   const teamNameEl = document.getElementById("dashboard-team-name");
   const coachNameEl = document.getElementById("dashboard-coach-name");
   const seasonYearEl = document.getElementById("dashboard-season-year");
   const balanceEl = document.getElementById("club-balance");
   const compInfoEl = document.getElementById("dashboard-competition-info");
   const logoEl = document.getElementById("dashboard-team-logo");
   const nextMatchInfoEl = document.getElementById("next-match-info");

   if (teamNameEl) teamNameEl.textContent = team ? team.name : "";
   if (coachNameEl) coachNameEl.textContent = gameState.coachName || "Técnico";
   if (seasonYearEl) seasonYearEl.textContent = gameState.seasonYear || "";
   if (balanceEl) balanceEl.textContent = `R$ ${Number(gameState.balance || 0).toFixed(1)} mi`;
   if (compInfoEl) compInfoEl.textContent = "Campeonato Brasileiro Série A";

   if (logoEl && team) {
     logoEl.src = `assets/logos/${team.id}.png`;
   }

   const nextMatch = getNextMatchForControlledTeam();
   if (nextMatch && nextMatchInfoEl) {
     const home = getTeamById(nextMatch.homeTeamId);
     const away = getTeamById(nextMatch.awayTeamId);
     nextMatchInfoEl.textContent = `${home.shortName} x ${away.shortName} (Rodada ${nextMatch.round})`;
   } else if (nextMatchInfoEl) {
     nextMatchInfoEl.textContent = "Nenhum jogo agendado.";
   }
 }

 function loadSquadScreen() {
   const tbody = document.querySelector("#squad-table tbody");
   if (!tbody) return;
   tbody.innerHTML = "";
   const squad = getPlayersByTeam(gameState.controlledTeamId);
   squad.forEach(p => {
     const tr = document.createElement("tr");
     const tdName = document.createElement("td");
     tdName.textContent = p.name;
     const tdPos = document.createElement("td");
     tdPos.textContent = p.position || "";
     const tdOv = document.createElement("td");
     tdOv.textContent = p.overall || 70;
     const tdAge = document.createElement("td");
     tdAge.textContent = p.age || "-";
     const tdMorale = document.createElement("td");
     tdMorale.textContent = p.morale || 70;
     const tdVal = document.createElement("td");
     tdVal.textContent = (p.value || 5).toFixed(1);
     tr.appendChild(tdName);
     tr.appendChild(tdPos);
     tr.appendChild(tdOv);
     tr.appendChild(tdAge);
     tr.appendChild(tdMorale);
     tr.appendChild(tdVal);
     tbody.appendChild(tr);
   });
 }

 function renderCompetitionSelect() {
   const select = document.getElementById("competition-select");
   if (!select) return;
   select.innerHTML = "";
   const opt = document.createElement("option");
   opt.value = "BRA-A";
   opt.textContent = "Campeonato Brasileiro Série A";
   select.appendChild(opt);
   select.addEventListener("change", () => {
     renderLeagueTable();
     renderFixturesList();
   });
   renderLeagueTable();
   renderFixturesList();
 }

 function renderLeagueTable() {
   const tbody = document.querySelector("#league-table tbody");
   if (!tbody) return;
   tbody.innerHTML = "";
   const rows = getLeagueStandings();
   rows.forEach((row, index) => {
     const team = getTeamById(row.teamId);
     const tr = document.createElement("tr");
     const gd = row.goalsFor - row.goalsAgainst;
     const cols = [
       index + 1,
       team ? team.shortName : row.teamId,
       row.points,
       row.played,
       row.wins,
       row.draws,
       row.losses,
       row.goalsFor,
       row.goalsAgainst,
       gd
     ];
     cols.forEach(val => {
       const td = document.createElement("td");
       td.textContent = val;
       tr.appendChild(td);
     });
     tbody.appendChild(tr);
   });
 }

 function renderFixturesList() {
   const ul = document.getElementById("fixtures-list");
   if (!ul) return;
   ul.innerHTML = "";
   const matches = getCompetitionFixtures("BRA-A");
   matches.slice(0, 40).forEach(m => {
     const li = document.createElement("li");
     const home = getTeamById(m.homeTeamId);
     const away = getTeamById(m.awayTeamId);
     let text = `Rod ${m.round} - ${home.shortName} x ${away.shortName}`;
     if (m.played) {
       text += ` (${m.homeGoals} x ${m.awayGoals})`;
     }
     li.textContent = text;
     ul.appendChild(li);
   });
 }

 function openMatchScreenUI() {
   const match = getNextMatchForControlledTeam();
   if (!match) {
     alert("Não há próxima partida para jogar.");
     return;
   }
   const header = document.getElementById("match-header");
   const scoreEl = document.getElementById("match-score");
   const minuteEl = document.getElementById("match-minute");
   const logEl = document.getElementById("match-log");
   const home = getTeamById(match.homeTeamId);
   const away = getTeamById(match.awayTeamId);
   if (header) header.textContent = `${home.name} x ${away.name} - Rodada ${match.round}`;
   if (scoreEl) scoreEl.textContent = "- x -";
   if (minuteEl) minuteEl.textContent = "0'";
   if (logEl) logEl.innerHTML = "";
   showScreen("screen-match");
 }

 function simulateMatchUI() {
   const result = simulateMatchForControlledTeam();
   if (!result) {
     alert("Nenhuma partida encontrada para simular.");
     return;
   }
   const home = getTeamById(result.homeTeamId);
   const away = getTeamById(result.awayTeamId);
   const scoreEl = document.getElementById("match-score");
   const minuteEl = document.getElementById("match-minute");
   const logEl = document.getElementById("match-log");
   if (scoreEl) scoreEl.textContent = `${result.homeGoals} x ${result.awayGoals}`;
   if (minuteEl) minuteEl.textContent = "90'";
   if (logEl) {
     logEl.innerHTML = "";
     const p = document.createElement("p");
     p.textContent = `Fim de jogo: ${home.shortName} ${result.homeGoals} x ${result.awayGoals} ${away.shortName}`;
     logEl.appendChild(p);
   }
   updateDashboardUI();
   renderLeagueTable();
   renderFixturesList();
 }

 function loadTransferMarketUI() {
   const tbody = document.querySelector("#transfer-table tbody");
   if (!tbody) return;
   tbody.innerHTML = "";
   const list = getTransferList();
   list.forEach(p => {
     const tr = document.createElement("tr");
     const tdName = document.createElement("td");
     tdName.textContent = p.name;
     const tdPos = document.createElement("td");
     tdPos.textContent = p.position || "";
     const tdOv = document.createElement("td");
     tdOv.textContent = p.overall || 70;
     const tdClub = document.createElement("td");
     const team = getTeamById(p.teamId);
     tdClub.textContent = team ? team.shortName : "-";
     const tdVal = document.createElement("td");
     tdVal.textContent = (p.value || 5).toFixed(1);
     const tdAction = document.createElement("td");
     const btnBuy = document.createElement("button");
     btnBuy.textContent = "Contratar";
     btnBuy.className = "btn-primary";
     btnBuy.style.padding = "4px 10px";
     btnBuy.addEventListener("click", () => {
       const res = buyPlayerById(p.id);
       if (!res.ok) {
         alert(res.reason || "Não foi possível contratar.");
       } else {
         alert(`Jogador ${p.name} contratado!`);
         updateDashboardUI();
         loadTransferMarketUI();
       }
     });
     tdAction.appendChild(btnBuy);
     tr.appendChild(tdName);
     tr.appendChild(tdPos);
     tr.appendChild(tdOv);
     tr.appendChild(tdClub);
     tr.appendChild(tdVal);
     tr.appendChild(tdAction);
     tbody.appendChild(tr);
   });
 }

 function startNewGameUI() {
   const select = document.getElementById("team-select");
   const coachInput = document.getElementById("coach-name");
   if (!select) return;
   const teamId = select.value;
   if (!teamId) {
     alert("Selecione um time para começar.");
     return;
   }
   const coachName = coachInput && coachInput.value.trim()
     ? coachInput.value.trim()
     : "Técnico";
   resetGameStateForNewCareer(teamId, coachName);
   updateDashboardUI();
   renderCompetitionSelect();
   showScreen("screen-dashboard");
 }

 function continueGameUI() {
   const loaded = loadGameState();
   if (!loaded) {
     alert("Nenhum jogo salvo encontrado.");
     return;
   }
   updateDashboardUI();
   renderCompetitionSelect();
   showScreen("screen-dashboard");
 }

 function saveGameUI() {
   saveGameState();
   alert("Jogo salvo com sucesso!");
 }

 function setupUIEvents() {
   const btnNew = document.getElementById("btn-new-game");
   if (btnNew) {
     btnNew.addEventListener("click", () => {
       loadTeamsInSelect();
       showScreen("screen-new-game");
     });
   }
   const btnContinue = document.getElementById("btn-continue-game");
   if (btnContinue) {
     btnContinue.addEventListener("click", () => {
       continueGameUI();
     });
   }
   const btnStartGame = document.getElementById("btn-start-game");
   if (btnStartGame) {
     btnStartGame.addEventListener("click", () => {
       startNewGameUI();
     });
   }
   document.querySelectorAll("button[data-back]").forEach(btn => {
     btn.addEventListener("click", () => {
       const target = btn.getAttribute("data-back");
       if (target) showScreen(target);
     });
   });
   const btnGoSquad = document.getElementById("btn-go-squad");
   if (btnGoSquad) {
     btnGoSquad.addEventListener("click", () => {
       loadSquadScreen();
       showScreen("screen-squad");
     });
   }
   const btnGoCompetitions = document.getElementById("btn-go-competitions");
   if (btnGoCompetitions) {
     btnGoCompetitions.addEventListener("click", () => {
       renderCompetitionSelect();
       showScreen("screen-competitions");
     });
   }
   const btnGoTransfers = document.getElementById("btn-go-transfers");
   if (btnGoTransfers) {
     btnGoTransfers.addEventListener("click", () => {
       loadTransferMarketUI();
       showScreen("screen-transfer-market");
     });
   }
   const btnSaveGame = document.getElementById("btn-save-game");
   if (btnSaveGame) {
     btnSaveGame.addEventListener("click", () => {
       saveGameUI();
     });
   }
   const btnPlayNextMatch = document.getElementById("btn-play-next-match");
   if (btnPlayNextMatch) {
     btnPlayNextMatch.addEventListener("click", () => {
       openMatchScreenUI();
     });
   }
   const btnStartSimulation = document.getElementById("btn-start-simulation");
   if (btnStartSimulation) {
     btnStartSimulation.addEventListener("click", () => {
       simulateMatchUI();
     });
   }
 }

 document.addEventListener("DOMContentLoaded", () => {
   setupUIEvents();
 });
