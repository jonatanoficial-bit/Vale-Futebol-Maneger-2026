// ======================================================
// VALE FUTEBOL MANAGER 2026 - MOTOR BÁSICO
// ======================================================

// --------------------------
// DADOS BÁSICOS (EXEMPLO)
// --------------------------

// Times (você pode expandir depois)
const teams = [
  { id: "FLA", name: "Flamengo", shortName: "Flamengo", division: "A" },
  { id: "PAL", name: "Palmeiras", shortName: "Palmeiras", division: "A" },
  { id: "BOT", name: "Botafogo", shortName: "Botafogo", division: "A" },
  { id: "COR", name: "Corinthians", shortName: "Corinthians", division: "A" },
  { id: "SAO", name: "São Paulo", shortName: "São Paulo", division: "A" },
  { id: "FLU", name: "Fluminense", shortName: "Fluminense", division: "A" },
  { id: "GRE", name: "Grêmio", shortName: "Grêmio", division: "A" },
  { id: "SAN", name: "Santos", shortName: "Santos", division: "A" },
  { id: "CRU", name: "Cruzeiro", shortName: "Cruzeiro", division: "A" },
  { id: "VAS", name: "Vasco", shortName: "Vasco", division: "A" },
  { id: "BAH", name: "Bahia", shortName: "Bahia", division: "A" },
  { id: "FOR", name: "Fortaleza", shortName: "Fortaleza", division: "A" },
  { id: "RBB", name: "RB Bragantino", shortName: "Bragantino", division: "A" },
  { id: "CEA", name: "Ceará", shortName: "Ceará", division: "A" },
  { id: "SPT", name: "Sport", shortName: "Sport", division: "A" },
  { id: "JUV", name: "Juventude", shortName: "Juventude", division: "A" },
  { id: "VIT", name: "Vitória", shortName: "Vitória", division: "A" },
  { id: "MIR", name: "Mirassol", shortName: "Mirassol", division: "A" }
  // você pode acrescentar mais times aqui
];

// Jogadores (EXEMPLO). Depois você substitui pelos elencos reais.
// Use o mesmo padrão para colar seus jogadores reais (Flamengo, Palmeiras etc.)
const players = [
  // Flamengo exemplo
  { id: "FLA_PEDRO", teamId: "FLA", name: "Pedro", position: "ATA", overall: 84, age: 27, morale: 75, value: 20 },
  { id: "FLA_GABIGOL", teamId: "FLA", name: "Gabigol", position: "ATA", overall: 83, age: 28, morale: 74, value: 22 },
  { id: "FLA_ARRASCAETA", teamId: "FLA", name: "Arrascaeta", position: "MEI", overall: 86, age: 29, morale: 80, value: 30 },

  // Palmeiras exemplo
  { id: "PAL_ENDRICK", teamId: "PAL", name: "Endrick", position: "ATA", overall: 85, age: 18, morale: 80, value: 35 },
  { id: "PAL_VEIGA", teamId: "PAL", name: "Raphael Veiga", position: "MEI", overall: 84, age: 28, morale: 79, value: 28 },
  { id: "PAL_WEVERTON", teamId: "PAL", name: "Weverton", position: "GOL", overall: 83, age: 36, morale: 78, value: 18 },

  // Botafogo exemplo
  { id: "BOT_TIQUINHO", teamId: "BOT", name: "Tiquinho Soares", position: "ATA", overall: 82, age: 33, morale: 78, value: 22 },
  { id: "BOT_EDUARDO", teamId: "BOT", name: "Eduardo", position: "MEI", overall: 81, age: 33, morale: 77, value: 18 },
  { id: "BOT_LUCAS_PERRY", teamId: "BOT", name: "Lucas Perri", position: "GOL", overall: 80, age: 26, morale: 76, value: 17 }

  // (...) cole aqui depois TODOS os seus jogadores reais
];

// Competições (vamos começar só com o Brasileirão A)
const competitions = [
  {
    id: "BRA-A",
    name: "Campeonato Brasileiro Série A",
    type: "league",
    teams: teams.map(t => t.id), // todos os da divisão A
    pointsForWin: 3,
    pointsForDraw: 1,
    pointsForLoss: 0,
    doubleRoundRobin: true
  }
  // depois você pode adicionar Copa do Brasil, Série B, etc.
];

// --------------------------
// ESTADO DO JOGO
---------------------------

let gameState = {
  coachName: "",
  controlledTeamId: null,
  seasonYear: 2026,
  balance: 50, // em milhões
  currentCompetitionId: "BRA-A",
  fixtures: [], // lista de partidas
  results: [],  // resultados jogados
  standings: {}, // tabela do campeonato
  nextMatchIndex: 0
};

// --------------------------
// FUNÇÕES DE UTILIDADE
// --------------------------

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

// Gera confrontos de pontos corridos (ida e volta)
function generateLeagueFixtures(teamIds) {
  const fixtures = [];
  let round = 1;
  for (let i = 0; i < teamIds.length; i++) {
    for (let j = i + 1; j < teamIds.length; j++) {
      const home = teamIds[i];
      const away = teamIds[j];
      fixtures.push({
        competitionId: "BRA-A",
        round: round++,
        homeTeamId: home,
        awayTeamId: away,
        homeGoals: null,
        awayGoals: null,
        played: false
      });
      fixtures.push({
        competitionId: "BRA-A",
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

// Simples média de overall do elenco para usar na simulação
function getTeamStrength(teamId) {
  const squad = getPlayersByTeam(teamId);
  if (!squad.length) return 70;
  const total = squad.reduce((sum, p) => sum + (p.overall || 70), 0);
  return total / squad.length;
}

// --------------------------
// MANIPULAÇÃO DE TELAS
// --------------------------

function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(s => s.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");
}

// --------------------------
// CARREGAR TIMES NO SELECT
// --------------------------

function loadTeamsInSelect() {
  const select = document.getElementById("team-select");
  if (!select) return;
  select.innerHTML = "";

  const optionEmpty = document.createElement("option");
  optionEmpty.value = "";
  optionEmpty.textContent = "Selecione um clube...";
  select.appendChild(optionEmpty);

  // Aqui usamos só times da divisão A para começar
  const divisionATeams = teams.filter(t => t.division === "A");

  divisionATeams.forEach(team => {
    const opt = document.createElement("option");
    opt.value = team.id;
    opt.textContent = team.name;
    select.appendChild(opt);
  });
}

// --------------------------
// SALVAR / CARREGAR JOGO
// --------------------------

function saveGame() {
  try {
    localStorage.setItem("vfm-save", JSON.stringify(gameState));
    alert("Jogo salvo com sucesso!");
  } catch (e) {
    console.error("Erro ao salvar jogo:", e);
    alert("Não foi possível salvar o jogo.");
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem("vfm-save");
    if (!raw) return null;
    const loaded = JSON.parse(raw);
    // Validação simples
    if (!loaded.controlledTeamId) return null;
    return loaded;
  } catch (e) {
    console.error("Erro ao carregar jogo:", e);
    return null;
  }
}

// --------------------------
// ATUALIZAÇÃO DO DASHBOARD
// --------------------------

function updateDashboard() {
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
  if (seasonYearEl) seasonYearEl.textContent = gameState.seasonYear;
  if (balanceEl) balanceEl.textContent = `R$ ${gameState.balance.toFixed(1)} mi`;

  const comp = competitions.find(c => c.id === gameState.currentCompetitionId);
  if (compInfoEl) compInfoEl.textContent = comp ? comp.name : "";

  if (logoEl && team) {
    // Você pode criar logo com nome: assets/logos/FLA.png, PAL.png etc.
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

// --------------------------
// ELENCO (TELA DE SQUAD)
// --------------------------

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
    const tdValue = document.createElement("td");
    tdValue.textContent = (p.value || 5).toFixed(1);

    tr.appendChild(tdName);
    tr.appendChild(tdPos);
    tr.appendChild(tdOv);
    tr.appendChild(tdAge);
    tr.appendChild(tdMorale);
    tr.appendChild(tdValue);

    tbody.appendChild(tr);
  });
}

// --------------------------
// CAMPEONATOS (TABELA)
// --------------------------

function renderCompetitionSelect() {
  const select = document.getElementById("competition-select");
  if (!select) return;
  select.innerHTML = "";

  competitions.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    renderLeagueTable(select.value);
    renderFixturesList(select.value);
  });

  if (competitions.length > 0) {
    select.value = competitions[0].id;
    renderLeagueTable(competitions[0].id);
    renderFixturesList(competitions[0].id);
  }
}

function renderLeagueTable(compId) {
  const tbody = document.querySelector("#league-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const rows = sortStandings(gameState.standings);
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

function renderFixturesList(compId) {
  const ul = document.getElementById("fixtures-list");
  if (!ul) return;
  ul.innerHTML = "";

  const compMatches = gameState.fixtures.filter(m => m.competitionId === compId);
  compMatches.slice(0, 40).forEach(m => {
    const li = document.createElement("li");
    const home = getTeamById(m.homeTeamId);
    const away = getTeamById(m.awayTeamId);

    let text = `Rod ${m.round} - ${home.shortName} x ${away.shortName}`;
    if (m.played) {
      text += `  (${m.homeGoals} x ${m.awayGoals})`;
    }
    li.textContent = text;
    ul.appendChild(li);
  });
}

// --------------------------
// PARTIDA (SIMULAÇÃO)
// --------------------------

function openMatchScreen() {
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

  // Guardamos o índice da partida atual
  const idx = gameState.fixtures.indexOf(match);
  gameState.nextMatchIndex = idx;

  showScreen("screen-match");
}

function simulateMatch() {
  const idx = gameState.nextMatchIndex;
  if (idx == null || idx < 0 || idx >= gameState.fixtures.length) {
    alert("Nenhuma partida para simular.");
    return;
  }

  const match = gameState.fixtures[idx];
  const homeStrength = getTeamStrength(match.homeTeamId);
  const awayStrength = getTeamStrength(match.awayTeamId);

  const baseGoalsHome = Math.max(0, Math.round((homeStrength - 60) / 10 + Math.random() * 2));
  const baseGoalsAway = Math.max(0, Math.round((awayStrength - 60) / 10 + Math.random() * 2));

  const homeGoals = Math.max(0, baseGoalsHome + (Math.random() < 0.4 ? 1 : 0) - (Math.random() < 0.3 ? 1 : 0));
  const awayGoals = Math.max(0, baseGoalsAway + (Math.random() < 0.4 ? 1 : 0) - (Math.random() < 0.3 ? 1 : 0));

  match.homeGoals = homeGoals;
  match.awayGoals = awayGoals;
  match.played = true;

  updateStandingsWithMatch(match);

  const scoreEl = document.getElementById("match-score");
  const minuteEl = document.getElementById("match-minute");
  const logEl = document.getElementById("match-log");

  if (scoreEl) scoreEl.textContent = `${homeGoals} x ${awayGoals}`;
  if (minuteEl) minuteEl.textContent = "90'";
  if (logEl) {
    logEl.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = `Fim de jogo: ${getTeamById(match.homeTeamId).shortName} ${homeGoals} x ${awayGoals} ${getTeamById(match.awayTeamId).shortName}`;
    logEl.appendChild(p);
  }

  // Atualiza dashboard
  updateDashboard();
  // Se a tela de campeonatos estiver sendo usada
  renderLeagueTable(gameState.currentCompetitionId);
  renderFixturesList(gameState.currentCompetitionId);

  saveGame();
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

// --------------------------
// MERCADO DE TRANSFERÊNCIAS (SIMPLIFICADO)
// --------------------------

function loadTransferMarket() {
  const tbody = document.querySelector("#transfer-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const myTeamId = gameState.controlledTeamId;

  const available = players.filter(p => p.teamId !== myTeamId);

  available.forEach(p => {
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
      buyPlayer(p);
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

function buyPlayer(player) {
  const price = player.value || 5;
  if (gameState.balance < price) {
    alert("Saldo insuficiente para essa contratação.");
    return;
  }
  gameState.balance -= price;
  player.teamId = gameState.controlledTeamId;
  alert(`Jogador ${player.name} contratado!`);

  updateDashboard();
  loadTransferMarket();
  saveGame();
}

// --------------------------
// INICIAR NOVO JOGO
// --------------------------

function startNewGame() {
  const select = document.getElementById("team-select");
  const inputCoach = document.getElementById("coach-name");
  if (!select) return;

  const teamId = select.value;
  if (!teamId) {
    alert("Selecione um time para começar.");
    return;
  }

  const coachName = (inputCoach && inputCoach.value.trim()) || "Técnico";

  gameState.coachName = coachName;
  gameState.controlledTeamId = teamId;
  gameState.currentCompetitionId = "BRA-A";
  gameState.seasonYear = 2026;
  gameState.balance = 50;

  const comp = competitions.find(c => c.id === gameState.currentCompetitionId);
  gameState.fixtures = generateLeagueFixtures(comp.teams);
  gameState.standings = initStandings(comp.teams);
  gameState.nextMatchIndex = 0;

  updateDashboard();
  renderCompetitionSelect();
  saveGame();

  showScreen("screen-dashboard");
}

// --------------------------
// CONTINUAR JOGO
// --------------------------

function continueGame() {
  const loaded = loadGame();
  if (!loaded) {
    alert("Nenhum jogo salvo encontrado.");
    return;
  }
  gameState = loaded;

  updateDashboard();
  renderCompetitionSelect();
  showScreen("screen-dashboard");
}

// --------------------------
// EVENTOS / INICIALIZAÇÃO
// --------------------------

function setupEventListeners() {
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
      continueGame();
    });
  }

  const btnStartGame = document.getElementById("btn-start-game");
  if (btnStartGame) {
    btnStartGame.addEventListener("click", () => {
      startNewGame();
    });
  }

  // Botões de "Voltar" (data-back)
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
      loadTransferMarket();
      showScreen("screen-transfer-market");
    });
  }

  const btnSaveGame = document.getElementById("btn-save-game");
  if (btnSaveGame) {
    btnSaveGame.addEventListener("click", () => {
      saveGame();
    });
  }

  const btnPlayNextMatch = document.getElementById("btn-play-next-match");
  if (btnPlayNextMatch) {
    btnPlayNextMatch.addEventListener("click", () => {
      openMatchScreen();
    });
  }

  const btnStartSimulation = document.getElementById("btn-start-simulation");
  if (btnStartSimulation) {
    btnStartSimulation.addEventListener("click", () => {
      simulateMatch();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();

  // Se existir save, habilita continuar
  const save = loadGame();
  if (!save) {
    // nada salvo
  }
});
