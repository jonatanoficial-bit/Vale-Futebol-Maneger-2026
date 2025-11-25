// ======================================================
// VALE FUTEBOL MANAGER 2026 – ENGINE PRINCIPAL
// PARTE 1 — Estruturas, Estado Global, Funções Base
// ======================================================

// ------------------------------------------------------
// 1. ESTADO GLOBAL DO JOGO
// ------------------------------------------------------
let gameState = {
    coachName: "",
    controlledTeamId: null,
    currentCompetitionId: "BRA-A",
    seasonYear: 2026,

    // Dados do time
    balance: 50,
    moraleBoost: 0,

    // Partidas / Rodadas
    fixtures: [],
    standings: {},
    currentRound: 1,
    nextMatchIndex: null,

    // Jogadores
    playerFitness: {},     // condição física (%) de cada jogador
    playerMorale: {},      // moral individual
    playerCards: {},       // amarelos e vermelhos
    injuredPlayers: {},    // jogadores lesionados
};

// ------------------------------------------------------
// 2. FUNÇÕES DE ACESSO A DADOS
// ------------------------------------------------------

function getTeamById(id) {
    return teams.find(t => t.id === id) || null;
}

function getPlayersByTeam(teamId) {
    return players.filter(p => p.teamId === teamId);
}

function getPlayerById(pid) {
    return players.find(p => p.id === pid) || null;
}

// ------------------------------------------------------
// 3. INICIALIZAÇÃO DOS ATRIBUTOS INTERNOS DO JOGADOR
// ------------------------------------------------------

function initPlayerInternalData(teamId) {
    const squad = getPlayersByTeam(teamId);
    squad.forEach(p => {
        gameState.playerFitness[p.id] = 100;  // condição física inicial
        gameState.playerMorale[p.id] = 70;    // moral inicial média
        gameState.playerCards[p.id] = { yellow: 0, red: false };
        gameState.injuredPlayers[p.id] = 0;    // 0 = sem lesão
    });
}

// ------------------------------------------------------
// 4. FORÇA DO TIME
// ------------------------------------------------------

function getTeamStrength(teamId) {
    const squad = getPlayersByTeam(teamId);

    const available = squad.filter(p => gameState.injuredPlayers[p.id] === 0);

    if (!available.length) return 65;

    let total = 0;

    available.forEach(p => {
        const ov = (p.overall || 60);

        const fit = gameState.playerFitness[p.id] ?? 100;
        const morale = gameState.playerMorale[p.id] ?? 70;

        const fitInfluence = (fit - 70) / 10;
        const moraleInfluence = (morale - 70) / 10;

        total += ov + fitInfluence + moraleInfluence;
    });

    return Math.round(total / available.length);
}

// ------------------------------------------------------
// 5. TABELA DO CAMPEONATO
// ------------------------------------------------------

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

// ------------------------------------------------------
// 6. GERAÇÃO DO CALENDÁRIO (38 RODADAS)
// ------------------------------------------------------

function generateLeagueFixtures(teamIds, competitionId = "BRA-A") {
    const fixtures = [];

    const total = teamIds.length;
    const rounds = 2 * (total - 1); // 38 rodadas para 20 times

    let teams = [...teamIds];
    const fixed = teams.shift(); // primeiro time fixo

    for (let round = 1; round <= rounds; round++) {
        let half = Math.floor(teams.length / 2);

        for (let i = 0; i < half; i++) {
            const home = (round % 2 === 0) ? teams[i] : (i === 0 ? fixed : teams[i]);
            const away = (round % 2 === 0) ? (i === 0 ? fixed : teams[teams.length - i - 1]) : teams[teams.length - i - 1];

            fixtures.push({
                competitionId,
                round,
                homeTeamId: home,
                awayTeamId: away,
                homeGoals: null,
                awayGoals: null,
                played: false
            });
        }

        // Rotação dos times (exceto o fixo)
        teams.splice(0, 0, teams.pop());
    }

    return fixtures;
}

// ------------------------------------------------------
// 7. RESET DE CARREIRA / INÍCIO DE NOVA TEMPORADA
// ------------------------------------------------------

function resetGameStateForNewCareer(teamId, coachName) {
    const divisionATeams = teams.filter(t => t.division === "A").map(t => t.id);

    gameState = {
        coachName: coachName || "Técnico",
        controlledTeamId: teamId,
        currentCompetitionId: "BRA-A",
        seasonYear: 2026,
        balance: 50,
        moraleBoost: 0,

        fixtures: generateLeagueFixtures(divisionATeams, "BRA-A"),
        standings: initStandings(divisionATeams),
        currentRound: 1,
        nextMatchIndex: null,

        playerFitness: {},
        playerMorale: {},
        playerCards: {},
        injuredPlayers: {},
    };

    initPlayerInternalData(teamId);

    saveGameState();

    return gameState;
}

// ------------------------------------------------------
// 8. SALVAR / CARREGAR JOGO
// ------------------------------------------------------

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
// ======================================================
// VALE FUTEBOL MANAGER 2026 – ENGINE
// PARTE 2 — Partidas, Rodadas e Classificação
// ======================================================

// ------------------------------------------------------
// 9. BUSCAR PRÓXIMO JOGO DO TIME CONTROLADO
// ------------------------------------------------------

function getNextMatchForControlledTeam() {
    const teamId = gameState.controlledTeamId;
    if (!teamId || !gameState.fixtures || !gameState.fixtures.length) return null;

    const match = gameState.fixtures.find(m =>
        !m.played && (m.homeTeamId === teamId || m.awayTeamId === teamId)
    );

    if (!match) return null;

    gameState.nextMatchIndex = gameState.fixtures.indexOf(match);
    return match;
}

// Lista de jogos de uma rodada
function getMatchesByRound(round, competitionId = "BRA-A") {
    return gameState.fixtures.filter(
        m => m.competitionId === competitionId && m.round === round
    );
}

// ------------------------------------------------------
// 10. SIMULAÇÃO DE UM JOGO DO TIME CONTROLADO
// ------------------------------------------------------

function simulateMatchForControlledTeam() {
    const match = getNextMatchForControlledTeam();
    if (!match) return null;

    const index = gameState.fixtures.indexOf(match);
    if (index === -1) return null;

    return simulateMatchByIndex(index);
}

// ------------------------------------------------------
// 11. SIMULAÇÃO GENÉRICA DE PARTIDA
// ------------------------------------------------------

function simulateMatchByIndex(index) {
    if (!gameState.fixtures || index == null || index < 0 || index >= gameState.fixtures.length) {
        return null;
    }

    const match = gameState.fixtures[index];
    if (!match || match.played) {
        return null;
    }

    const homeStrength = getTeamStrength(match.homeTeamId);
    const awayStrength = getTeamStrength(match.awayTeamId);

    // Pequena vantagem de mando de campo
    const homeBonus = 3;
    const effectiveHome = homeStrength + homeBonus;
    const effectiveAway = awayStrength;

    // Geração de gols: simples, mas com base na força
    const homeBase = Math.max(0, (effectiveHome - 65) / 10);
    const awayBase = Math.max(0, (effectiveAway - 65) / 10);

    // Aleatoriedade com leve peso na diferença de força
    const homeGoals = Math.max(
        0,
        Math.round(
            homeBase +
            Math.random() * 2 +
            (effectiveHome - effectiveAway) / 30
        )
    );

    const awayGoals = Math.max(
        0,
        Math.round(
            awayBase +
            Math.random() * 2 +
            (effectiveAway - effectiveHome) / 40
        )
    );

    match.homeGoals = homeGoals;
    match.awayGoals = awayGoals;
    match.played = true;

    // Atualiza rodada atual
    if (typeof match.round === "number") {
        gameState.currentRound = Math.max(gameState.currentRound, match.round);
    }

    // Atualiza classificação
    updateStandingsWithMatch(match);

    // Aplica efeitos de pós-jogo (fadiga, moral, cartões, lesões etc.)
    if (typeof applyPostMatchEffects === "function") {
        applyPostMatchEffects(match);
    }

    saveGameState();
    return match;
}

// ------------------------------------------------------
// 12. ATUALIZAR CLASSIFICAÇÃO COM UM JOGO
// ------------------------------------------------------

function updateStandingsWithMatch(match) {
    if (!gameState.standings) return;

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

// ------------------------------------------------------
// 13. CLASSIFICAÇÃO E TABELA
// ------------------------------------------------------

function getLeagueStandings() {
    if (!gameState.standings) return [];
    return sortStandings(gameState.standings);
}

function getCompetitionFixtures(competitionId) {
    if (!gameState.fixtures) return [];
    return gameState.fixtures.filter(m => m.competitionId === competitionId);
}

function getCurrentRoundFixtures(competitionId = "BRA-A") {
    if (!gameState.fixtures) return [];
    return gameState.fixtures.filter(
        m => m.competitionId === competitionId && m.round === gameState.currentRound
    );
}

// ------------------------------------------------------
// 14. SIMULAR RODADA INTEIRA
// ------------------------------------------------------

function simulateAllMatchesCurrentRound() {
    const matches = getCurrentRoundFixtures(gameState.currentCompetitionId);
    if (!matches.length) return [];

    const results = [];
    for (let i = 0; i < gameState.fixtures.length; i++) {
        const m = gameState.fixtures[i];
        if (
            m.competitionId === gameState.currentCompetitionId &&
            m.round === gameState.currentRound &&
            !m.played
        ) {
            const result = simulateMatchByIndex(i);
            if (result) {
                results.push(result);
            }
        }
    }

    // Avança rodada se todos os jogos dessa rodada foram jogados
    const stillPending = getCurrentRoundFixtures(gameState.currentCompetitionId)
        .some(m => !m.played);

    if (!stillPending) {
        gameState.currentRound++;
        saveGameState();
    }

    return results;
}
// ======================================================
// VALE FUTEBOL MANAGER 2026 – ENGINE
// PARTE 3 — Lesões, Suspensões, Moral, Fitness, Mercado
// ======================================================

// ------------------------------------------------------
// 15. EFEITOS DE PÓS-JOGO (Cansaço, Moral, Lesões, Cartões)
// ------------------------------------------------------

function applyPostMatchEffects(match) {
    const teams = [match.homeTeamId, match.awayTeamId];

    teams.forEach(teamId => {
        const squad = getPlayersByTeam(teamId);

        squad.forEach(player => {
            // 1) Reduz condição física
            let loss = 5 + Math.random() * 10; // entre 5% e 15%
            gameState.playerFitness[player.id] = Math.max(20,
                (gameState.playerFitness[player.id] || 100) - loss
            );

            // 2) Ajuste de moral
            if (teamId === match.homeTeamId) {
                if (match.homeGoals > match.awayGoals) {
                    gameState.playerMorale[player.id] += 3; // vitória
                } else if (match.homeGoals < match.awayGoals) {
                    gameState.playerMorale[player.id] -= 3; // derrota
                } else {
                    gameState.playerMorale[player.id] += 1; // empate
                }
            } else {
                if (match.awayGoals > match.homeGoals) {
                    gameState.playerMorale[player.id] += 3;
                } else if (match.awayGoals < match.homeGoals) {
                    gameState.playerMorale[player.id] -= 3;
                } else {
                    gameState.playerMorale[player.id] += 1;
                }
            }

            gameState.playerMorale[player.id] = Math.min(99,
                Math.max(1, gameState.playerMorale[player.id])
            );

            // 3) Cartões — pequena chance
            if (Math.random() < 0.08) {
                gameState.playerCards[player.id].yellow++;
            }

            // Suspensão por vermelho (chance mínima)
            if (Math.random() < 0.02) {
                gameState.playerCards[player.id].red = true;
            }

            // 4) Lesões aleatórias
            if (Math.random() < 0.03) {
                const days = Math.floor(Math.random() * 3) + 1;
                gameState.injuredPlayers[player.id] = days;
            }
        });
    });

    saveGameState();
}

// ------------------------------------------------------
// 16. REDUZ DIAS DE LESÃO APÓS CADA RODADA
// ------------------------------------------------------

function reduceInjuryDays() {
    for (const pid in gameState.injuredPlayers) {
        if (gameState.injuredPlayers[pid] > 0) {
            gameState.injuredPlayers[pid]--;
        }
    }
}

// ------------------------------------------------------
// 17. SISTEMA DE SUSPENSÃO
// ------------------------------------------------------

function isPlayerSuspended(playerId) {
    const c = gameState.playerCards[playerId];
    if (!c) return false;
    return (c.yellow >= 3 || c.red === true);
}

function clearSuspensions() {
    for (const pid in gameState.playerCards) {
        if (gameState.playerCards[pid].red) {
            gameState.playerCards[pid].red = false;
            gameState.playerCards[pid].yellow = 0;
        }
        if (gameState.playerCards[pid].yellow >= 3) {
            gameState.playerCards[pid].yellow = 0;
        }
    }
}

// ------------------------------------------------------
// 18. RECUPERAÇÃO DE CONDIÇÃO FÍSICA ENTRE RODADAS
// ------------------------------------------------------

function recoverFitness() {
    for (const pid in gameState.playerFitness) {
        gameState.playerFitness[pid] = Math.min(
            100,
            gameState.playerFitness[pid] + (5 + Math.random() * 10)
        );
    }
}

// ------------------------------------------------------
// 19. MERCADO DE TRANSFERÊNCIAS
// ------------------------------------------------------

function getTransferList() {
    return players.filter(p => p.teamId !== gameState.controlledTeamId);
}

function buyPlayerById(playerId) {
    const p = getPlayerById(playerId);
    if (!p) return { ok: false, reason: "Jogador não encontrado." };

    const price = Math.round((p.overall * 0.4) + 5);

    if (gameState.balance < price) {
        return { ok: false, reason: "Saldo insuficiente." };
    }

    if (gameState.injuredPlayers[p.id] > 0) {
        return { ok: false, reason: "Jogador lesionado." };
    }

    p.teamId = gameState.controlledTeamId;
    gameState.balance -= price;

    // Reset atributos internos para esse jogador
    gameState.playerFitness[p.id] = 100;
    gameState.playerMorale[p.id] = 70;
    gameState.playerCards[p.id] = { yellow: 0, red: false };
    gameState.injuredPlayers[p.id] = 0;

    saveGameState();
    return { ok: true, player: p };
}

// ------------------------------------------------------
// 20. AVANÇAR TEMPORADA
// ------------------------------------------------------

function advanceSeasonIfFinished() {
    const pending = gameState.fixtures.some(f => !f.played);

    if (pending) return false;

    // Reset para nova temporada
    gameState.seasonYear++;
    gameState.currentRound = 1;

    const divisionATeams = teams.filter(t => t.division === "A").map(t => t.id);

    gameState.fixtures = generateLeagueFixtures(divisionATeams, "BRA-A");
    gameState.standings = initStandings(divisionATeams);

    // Recupera fitness e moral geral
    for (const pid in gameState.playerFitness) {
        gameState.playerFitness[pid] = 100;
    }
    for (const pid in gameState.playerMorale) {
        gameState.playerMorale[pid] = 70;
    }

    // Limpa cartões e lesões
    for (const pid in gameState.playerCards) {
        gameState.playerCards[pid] = { yellow: 0, red: false };
    }

    for (const pid in gameState.injuredPlayers) {
        gameState.injuredPlayers[pid] = 0;
    }

    saveGameState();
    return true;
}

// ------------------------------------------------------
// 21. EXECUTAR PASSOS ENTRE RODADAS
// ------------------------------------------------------

function applyRoundEndProcesses() {
    recoverFitness();
    reduceInjuryDays();
    clearSuspensions();
    advanceSeasonIfFinished();
    saveGameState();
}

