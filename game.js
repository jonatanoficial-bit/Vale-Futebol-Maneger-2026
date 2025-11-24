// game.js

// ======================================================
// 1. DADOS BÁSICOS (AQUI VOCÊ VAI EDITAR NO FUTURO)
// ======================================================
//
// IMPORTANTE:
// - Para colocar times reais, basta substituir os exemplos abaixo.
// - Para colocar logo e foto: apenas troque o caminho do arquivo.
//   Exemplo: "assets/logos/flamengo.png" / "assets/faces/jogador_1.png"
//
// Para não te encher de coisa agora, estou usando times fictícios.
// Depois você troca pelos reais com calma.
// ======================================================

// TIMES
const teams = [
  {
    id: "RSP",
    name: "Rio Stars FC",
    shortName: "Rio Stars",
    state: "RJ",
    logo: "assets/logos/rio-stars.png", // coloque o escudo aqui depois
    stadium: "Estádio do Vale",
    reputation: 78
  },
  {
    id: "SPT",
    name: "São Porto Clube",
    shortName: "São Porto",
    state: "SP",
    logo: "assets/logos/sao-porto.png",
    stadium: "Arena Central",
    reputation: 80
  },
  {
    id: "MIN",
    name: "Minas United",
    shortName: "Minas Utd",
    state: "MG",
    logo: "assets/logos/minas-united.png",
    stadium: "Mineirão Vale",
    reputation: 75
  },
  {
    id: "NOR",
    name: "Nordeste Atlético",
    shortName: "Nordeste",
    state: "BA",
    logo: "assets/logos/nordeste-atletico.png",
    stadium: "Arena do Nordeste",
    reputation: 74
  }
];

// JOGADORES
// Cada jogador pertence a um time via teamId.
// Campos principais: position, overall (força geral), age, morale, value.
const players = [
  // Rio Stars
  {
    id: "P1",
    teamId: "RSP",
    name: "João Silva",
    position: "GOL",
    overall: 78,
    age: 28,
    morale: 70,
    value: 15,
    face: "assets/faces/joao-silva.png"
  },
  {
    id: "P2",
    teamId: "RSP",
    name: "Carlos Andrade",
    position: "ZAG",
    overall: 77,
    age: 29,
    morale: 72,
    value: 18,
    face: "assets/faces/carlos-andrade.png"
  },
  {
    id: "P3",
    teamId: "RSP",
    name: "Luis Pereira",
    position: "ATA",
    overall: 80,
    age: 25,
    morale: 75,
    value: 25,
    face: "assets/faces/luis-pereira.png"
  },

  // São Porto
  {
    id: "P4",
    teamId: "SPT",
    name: "Rafael Costa",
    position: "GOL",
    overall: 79,
    age: 27,
    morale: 73,
    value: 16,
    face: "assets/faces/rafael-costa.png"
  },
  {
    id: "P5",
    teamId: "SPT",
    name: "Thiago Moura",
    position: "MEI",
    overall: 82,
    age: 26,
    morale: 78,
    value: 28,
    face: "assets/faces/thiago-moura.png"
  },
  {
    id: "P6",
    teamId: "SPT",
    name: "Pedro Lins",
    position: "ATA",
    overall: 81,
    age: 24,
    morale: 77,
    value: 27,
    face: "assets/faces/pedro-lins.png"
  },

  // Minas United
  {
    id: "P7",
    teamId: "MIN",
    name: "Marcos Luiz",
    position: "ZAG",
    overall: 76,
    age: 30,
    morale: 69,
    value: 14,
    face: "assets/faces/marcos-luiz.png"
  },
  {
    id: "P8",
    teamId: "MIN",
    name: "Eduardo Gomes",
    position: "MEI",
    overall: 79,
    age: 27,
    morale: 74,
    value: 20,
    face: "assets/faces/eduardo-gomes.png"
  },

  // Nordeste Atlético
  {
    id: "P9",
    teamId: "NOR",
    name: "Felipe Sousa",
    position: "GOL",
    overall: 77,
    age: 29,
    morale: 72,
    value: 15,
    face: "assets/faces/felipe-sousa.png"
  },
  {
    id: "P10",
    teamId: "NOR",
    name: "João Paulo",
    position: "ATA",
    overall: 79,
    age: 26,
    morale: 74,
    value: 22,
    face: "assets/faces/joao-paulo.png"
  }
];

// COMPETIÇÕES
// Aqui já está preparada a lógica para:
// - Brasileiro (liga pontos corridos)
// - Copa (mata-mata ida e volta)
// Você poderá criar outros campeonatos (Libertadores, estaduais etc.)
const competitions = [
  {
    id: "BRA-A",
    name: "Campeonato Brasileiro Série A",
    type: "league",
    teams: ["RSP", "SPT", "MIN", "NOR"], // no futuro: 20 clubes
    pointsForWin: 3,
    pointsForDraw: 1,
    pointsForLoss: 0,
    doubleRoundRobin: true // turno e returno
  },
  {
    id: "COPA-BR",
    name: "Copa do Brasil (Protótipo)",
    type: "cup",
    teams: ["RSP", "SPT", "MIN", "NOR"], // mata-mata
    twoLeggedTies: true
  }
];

// Jogadores disponíveis para transferência (simples)
const transferList = [
  {
    id: "T1",
    name: "André Lima",
    position: "MEI",
    overall: 76,
    currentTeamId: null, // sem clube
    value: 12
  },
  {
    id: "T2",
    name: "Ricardo Nunes",
    position: "ZAG",
    overall: 75,
    currentTeamId: "MIN",
    value: 10
  }
];

// ======================================================
// 2. ESTADO GLOBAL DO JOGO
// ======================================================
let gameState = {
  seasonYear: 2026,
  coachName: "",
  controlledTeamId: null,
  balance: 100, // milhões R$
  competitionsData: {}, // classificações, jogos etc.
  fixtures: {}, // cronogramas de partidas por competição
  currentMatch: null // dados da partida sendo jogada
};

// ======================================================
// 3. FUNÇÕES DE UTILIDADE
// ======================================================
function $(id) {
  return document.getElementById(id);
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.remove("active");
  });
  $(screenId).classList.add("active");
}

function getTeamById(id) {
  return teams.find((t) => t.id === id);
}

function getPlayersByTeam(teamId) {
  return players.filter((p) => p.teamId === teamId);
}

// ======================================================
// 4. GERAÇÃO DE TABELA DE LIGA (PONTOS CORRIDOS)
// ======================================================

function initLeague(competitionId) {
  const comp = competitions.find((c) => c.id === competitionId);
  if (!comp || comp.type !== "league") return;

  const standings = comp.teams.map((teamId) => ({
    teamId,
    pts: 0,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0
  }));

  gameState.competitionsData[competitionId] = {
    standings,
    results: []
  };

  // Gera calendário de jogos (turno e returno)
  gameState.fixtures[competitionId] = generateLeagueFixtures(
    comp.teams,
    comp.doubleRoundRobin
  );
}

// Round-robin simples (usando algoritmo básico)
function generateLeagueFixtures(teamIds, doubleRoundRobin = true) {
  const teamsCopy = [...teamIds];
  if (teamsCopy.length % 2 !== 0) {
    teamsCopy.push(null); // bye
  }
  const n = teamsCopy.length;
  const totalRounds = n - 1;
  const half = n / 2;

  const rounds = [];

  let teamsRound = teamsCopy.slice(1);
  for (let round = 0; round < totalRounds; round++) {
    const roundMatches = [];
    const firstTeam = teamsCopy[0];

    const left = [firstTeam].concat(teamsRound.slice(0, half - 1));
    const right = teamsRound.slice(half - 1).reverse();

    for (let i = 0; i < half; i++) {
      const home = left[i];
      const away = right[i];
      if (home !== null && away !== null) {
        roundMatches.push({
          homeTeamId: home,
          awayTeamId: away,
          played: false,
          compId: "BRA-A"
        });
      }
    }

    rounds.push(roundMatches);

    // Rotacionar
    teamsRound = [
      teamsRound[teamsRound.length - 1],
      ...teamsRound.slice(0, teamsRound.length - 1)
    ];
  }

  // Se tiver turno e returno, duplicamos invertendo mandos
  if (doubleRoundRobin) {
    const returnRounds = rounds.map((roundMatches) =>
      roundMatches.map((m) => ({
        homeTeamId: m.awayTeamId,
        awayTeamId: m.homeTeamId,
        played: false,
        compId: "BRA-A"
      }))
    );
    return rounds.concat(returnRounds);
  }

  return rounds;
}

// ======================================================
// 5. INICIALIZAÇÃO DAS COMPETIÇÕES
// ======================================================
function initCompetitions() {
  competitions.forEach((c) => {
    if (c.type === "league") {
      initLeague(c.id);
    }
    if (c.type === "cup") {
      // Protótipo simples: só guardamos os times. Lógica de copa
      // em duas mãos pode ser implementada depois.
      gameState.competitionsData[c.id] = {
        currentRound: 1,
        matches: [] // aqui você pode montar confrontos de ida/volta
      };
    }
  });
}

// ======================================================
// 6. SALVAMENTO E CARREGAMENTO
// ======================================================
const SAVE_KEY = "bfm-save-1";

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
  alert("Jogo salvo!");
}

function loadGame() {
  const data = localStorage.getItem(SAVE_KEY);
  if (!data) return false;
  try {
    gameState = JSON.parse(data);
    return true;
  } catch (e) {
    console.error("Erro ao carregar save:", e);
    return false;
  }
}

// ======================================================
// 7. INTERFACE: PREENCHER LISTAS E TABELAS
// ======================================================
function populateTeamSelect() {
  const sel = $("team-select");
  sel.innerHTML = "";
  teams.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${t.name} (${t.state})`;
    sel.appendChild(opt);
  });
}

function updateDashboard() {
  const team = getTeamById(gameState.controlledTeamId);
  $("dashboard-team-name").textContent = team ? team.name : "";
  $("dashboard-coach-name").textContent = gameState.coachName;
  $("dashboard-season-year").textContent = gameState.seasonYear;
  $("club-balance").textContent = gameState.balance.toFixed(1);

  const comp = competitions.find((c) => c.id === "BRA-A");
  $("dashboard-competition-info").textContent = comp
    ? `Você disputa: ${comp.name}`
    : "";

  const nextMatch = findNextMatch("BRA-A", gameState.controlledTeamId);
  $("next-match-info").textContent = nextMatch
    ? `${getTeamById(nextMatch.homeTeamId).shortName} x ${
        getTeamById(nextMatch.awayTeamId).shortName
      } (Rodada ${nextMatch.round + 1})`
    : "Nenhum jogo restante neste campeonato.";
}

function fillSquadTable() {
  const tbody = $("squad-table").querySelector("tbody");
  tbody.innerHTML = "";

  const squad = getPlayersByTeam(gameState.controlledTeamId);
  squad.forEach((p) => {
    const tr = document.createElement("tr");

    const tdFace = document.createElement("td");
    const img = document.createElement("img");
    img.className = "player-face";
    img.src = p.face || "assets/faces/default.png";
    img.alt = p.name;
    tdFace.appendChild(img);

    const tdName = document.createElement("td");
    tdName.textContent = p.name;

    const tdPos = document.createElement("td");
    tdPos.textContent = p.position;

    const tdOvr = document.createElement("td");
    tdOvr.textContent = p.overall;

    const tdAge = document.createElement("td");
    tdAge.textContent = p.age;

    const tdMorale = document.createElement("td");
    tdMorale.textContent = p.morale;

    tr.append(tdFace, tdName, tdPos, tdOvr, tdAge, tdMorale);
    tbody.appendChild(tr);
  });
}

function populateCompetitionSelect() {
  const sel = $("competition-select");
  sel.innerHTML = "";
  competitions.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name;
    sel.appendChild(opt);
  });
}

function updateLeagueTable(competitionId) {
  const compData = gameState.competitionsData[competitionId];
  if (!compData) return;

  const tableBody = $("league-table").querySelector("tbody");
  tableBody.innerHTML = "";

  const sorted = [...compData.standings].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const sgA = a.goalsFor - a.goalsAgainst;
    const sgB = b.goalsFor - b.goalsAgainst;
    if (sgB !== sgA) return sgB - sgA;
    return b.goalsFor - a.goalsFor;
  });

  sorted.forEach((row, index) => {
    const tr = document.createElement("tr");
    const team = getTeamById(row.teamId);
    const sg = row.goalsFor - row.goalsAgainst;

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${team ? team.shortName : row.teamId}</td>
      <td>${row.pts}</td>
      <td>${row.played}</td>
      <td>${row.wins}</td>
      <td>${row.draws}</td>
      <td>${row.losses}</td>
      <td>${row.goalsFor}</td>
      <td>${row.goalsAgainst}</td>
      <td>${sg}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function updateFixturesList(competitionId) {
  const fixturesList = $("fixtures-list");
  fixturesList.innerHTML = "";

  const rounds = gameState.fixtures[competitionId];
  if (!rounds) return;

  rounds.forEach((roundMatches, roundIndex) => {
    roundMatches.forEach((m) => {
      if (!m.played) {
        const li = document.createElement("li");
        li.textContent = `Rodada ${roundIndex + 1}: ${
          getTeamById(m.homeTeamId).shortName
        } x ${getTeamById(m.awayTeamId).shortName}`;
        fixturesList.appendChild(li);
      }
    });
  });

  if (!fixturesList.children.length) {
    const li = document.createElement("li");
    li.textContent = "Nenhuma partida pendente.";
    fixturesList.appendChild(li);
  }
}

// ======================================================
// 8. ENCONTRAR PRÓXIMO JOGO DO SEU TIME
// ======================================================
function findNextMatch(competitionId, teamId) {
  const rounds = gameState.fixtures[competitionId];
  if (!rounds) return null;

  for (let roundIndex = 0; roundIndex < rounds.length; roundIndex++) {
    for (let match of rounds[roundIndex]) {
      if (!match.played && (match.homeTeamId === teamId || match.awayTeamId === teamId)) {
        return { ...match, round: roundIndex };
      }
    }
  }
  return null;
}

// ======================================================
// 9. SIMULAÇÃO DE PARTIDA
// ======================================================

function startMatch(competitionId) {
  const comp = competitions.find((c) => c.id === competitionId);
  if (!comp || comp.type !== "league") return;

  const nextMatch = findNextMatch(competitionId, gameState.controlledTeamId);
  if (!nextMatch) {
    alert("Não há mais partidas para jogar neste campeonato.");
    return;
  }

  gameState.currentMatch = {
    competitionId,
    roundIndex: nextMatch.round,
    homeTeamId: nextMatch.homeTeamId,
    awayTeamId: nextMatch.awayTeamId,
    minute: 0,
    homeGoals: 0,
    awayGoals: 0,
    log: [],
    finished: false
  };

  // Atualiza tela da partida
  const home = getTeamById(nextMatch.homeTeamId);
  const away = getTeamById(nextMatch.awayTeamId);
  $("match-header").textContent = `${home.name} x ${away.name} - ${comp.name}`;
  $("match-score").textContent = `${home.shortName} 0 x 0 ${away.shortName}`;
  $("match-minute").textContent = "Minuto: 0'";
  $("match-log").innerHTML = "";

  showScreen("screen-match");
}

function simulateMatchTick() {
  const match = gameState.currentMatch;
  if (!match || match.finished) return;

  // Aumenta minuto
  match.minute += 10;
  if (match.minute > 90) match.minute = 90;

  const homePlayers = getPlayersByTeam(match.homeTeamId);
  const awayPlayers = getPlayersByTeam(match.awayTeamId);

  const homeOverall =
    homePlayers.reduce((s, p) => s + p.overall, 0) /
    (homePlayers.length || 1);
  const awayOverall =
    awayPlayers.reduce((s, p) => s + p.overall, 0) /
    (awayPlayers.length || 1);

  // Efeito da tática
  const tactic = $("tactic-select").value;
  let homeBonus = 0;
  let awayBonus = 0;

  const userIsHome = match.homeTeamId === gameState.controlledTeamId;
  const userIsAway = match.awayTeamId === gameState.controlledTeamId;

  if (userIsHome || userIsAway) {
    if (tactic === "ofensivo") {
      if (userIsHome) homeBonus += 3;
      if (userIsAway) awayBonus += 3;
    } else if (tactic === "defensivo") {
      // Defesa melhor: reduz chance de sofrer gol
      if (userIsHome) homeBonus -= 2;
      if (userIsAway) awayBonus -= 2;
    }
  }

  const homeStrength = homeOverall + homeBonus;
  const awayStrength = awayOverall + awayBonus;

  const totalStrength = homeStrength + awayStrength;
  const baseChance = 0.15; // chance de sair 1 gol a cada "tick" (10 min)

  // Sorteio de evento
  if (Math.random() < baseChance) {
    const roll = Math.random() * totalStrength;
    if (roll <= homeStrength) {
      match.homeGoals += 1;
      addMatchLogEvent(
        `${getTeamById(match.homeTeamId).shortName} marcou um gol!`
      );
    } else {
      match.awayGoals += 1;
      addMatchLogEvent(
        `${getTeamById(match.awayTeamId).shortName} marcou um gol!`
      );
    }
  } else {
    // evento neutro
    addMatchLogEvent(`Jogo truncado entre os times, sem grandes chances.`);
  }

  // Atualiza placar
  const homeTeam = getTeamById(match.homeTeamId);
  const awayTeam = getTeamById(match.awayTeamId);
  $("match-score").textContent = `${homeTeam.shortName} ${match.homeGoals} x ${match.awayGoals} ${awayTeam.shortName}`;
  $("match-minute").textContent = `Minuto: ${match.minute}'`;

  if (match.minute >= 90) {
    finishMatch();
  }
}

function addMatchLogEvent(text) {
  const li = document.createElement("li");
  li.textContent = text;
  $("match-log").appendChild(li);
  $("match-log").scrollTop = $("match-log").scrollHeight;
}

function finishMatch() {
  const match = gameState.currentMatch;
  if (!match) return;
  match.finished = true;

  addMatchLogEvent("Fim de jogo!");

  // Atualiza standings da liga
  const compData = gameState.competitionsData[match.competitionId];
  const standings = compData.standings;

  const homeRow = standings.find((s) => s.teamId === match.homeTeamId);
  const awayRow = standings.find((s) => s.teamId === match.awayTeamId);

  // Atualiza estatísticas
  homeRow.played++;
  awayRow.played++;
  homeRow.goalsFor += match.homeGoals;
  homeRow.goalsAgainst += match.awayGoals;
  awayRow.goalsFor += match.awayGoals;
  awayRow.goalsAgainst += match.homeGoals;

  if (match.homeGoals > match.awayGoals) {
    homeRow.wins++;
    awayRow.losses++;
    homeRow.pts += 3;
  } else if (match.homeGoals < match.awayGoals) {
    awayRow.wins++;
    homeRow.losses++;
    awayRow.pts += 3;
  } else {
    homeRow.draws++;
    awayRow.draws++;
    homeRow.pts += 1;
    awayRow.pts += 1;
  }

  // Marca partida como jogada
  const rounds = gameState.fixtures[match.competitionId];
  const roundMatches = rounds[match.roundIndex];
  const matchToMark = roundMatches.find(
    (m) =>
      m.homeTeamId === match.homeTeamId &&
      m.awayTeamId === match.awayTeamId &&
      !m.played
  );
  if (matchToMark) {
    matchToMark.played = true;
    matchToMark.homeGoals = match.homeGoals;
    matchToMark.awayGoals = match.awayGoals;
  }

  // Recompensa financeira simples
  if (match.homeTeamId === gameState.controlledTeamId) {
    gameState.balance += match.homeGoals >= match.awayGoals ? 1 : 0.3;
  } else if (match.awayTeamId === gameState.controlledTeamId) {
    gameState.balance += match.awayGoals >= match.homeGoals ? 1 : 0.3;
  }

  // Atualiza tabela
  updateLeagueTable(match.competitionId);

  // Salva
  localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
}

// ======================================================
// 10. TRANSFERÊNCIAS SIMPLES
// ======================================================
function fillTransferTable() {
  const tbody = $("transfer-table").querySelector("tbody");
  tbody.innerHTML = "";

  transferList.forEach((p) => {
    const tr = document.createElement("tr");
    const currentTeam = p.currentTeamId ? getTeamById(p.currentTeamId) : null;

    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.position}</td>
      <td>${p.overall}</td>
      <td>${currentTeam ? currentTeam.shortName : "Sem clube"}</td>
      <td>${p.value}</td>
      <td><button data-transfer-id="${p.id}">Comprar</button></td>
    `;

    tbody.appendChild(tr);
  });

  tbody.querySelectorAll("button[data-transfer-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-transfer-id");
      buyPlayer(id);
    });
  });
}

function buyPlayer(transferId) {
  const p = transferList.find((t) => t.id === transferId);
  if (!p) return;

  const price = p.value;
  if (gameState.balance < price) {
    alert("Você não tem dinheiro suficiente para esta transferência.");
    return;
  }

  gameState.balance -= price;

  // Cria um novo jogador vinculado ao seu time (simplificado)
  const newPlayer = {
    id: "NEW_" + Date.now(),
    teamId: gameState.controlledTeamId,
    name: p.name,
    position: p.position,
    overall: p.overall,
    age: 25,
    morale: 70,
    value: p.value,
    face: "assets/faces/default.png"
  };
  players.push(newPlayer);

  alert(`Jogador ${p.name} contratado!`);
  updateDashboard();
  fillSquadTable();
}

// ======================================================
// 11. EVENTOS E INICIALIZAÇÃO
// ======================================================
function setupEvents() {
  $("btn-new-game").addEventListener("click", () => {
    populateTeamSelect();
    showScreen("screen-new-game");
  });

  $("btn-continue-game").addEventListener("click", () => {
    const ok = loadGame();
    if (!ok) {
      alert("Nenhum save encontrado.");
      return;
    }
    showScreen("screen-dashboard");
    updateDashboard();
  });

  document.querySelectorAll("button[data-back]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-back");
      showScreen(target);
      if (target === "screen-dashboard") {
        updateDashboard();
      }
    });
  });

  $("btn-start-game").addEventListener("click", () => {
    const teamId = $("team-select").value;
    const coachName = $("coach-name").value.trim() || "Técnico";

    gameState.controlledTeamId = teamId;
    gameState.coachName = coachName;
    gameState.seasonYear = 2026;
    gameState.balance = 100;

    initCompetitions();

    showScreen("screen-dashboard");
    updateDashboard();
    saveGame();
  });

  $("btn-go-squad").addEventListener("click", () => {
    fillSquadTable();
    showScreen("screen-squad");
  });

  $("btn-go-competitions").addEventListener("click", () => {
    populateCompetitionSelect();
    const compId = $("competition-select").value;
    updateLeagueTable(compId);
    updateFixturesList(compId);
    showScreen("screen-competitions");
  });

  $("competition-select").addEventListener("change", () => {
    const compId = $("competition-select").value;
    updateLeagueTable(compId);
    updateFixturesList(compId);
  });

  $("btn-play-next-match").addEventListener("click", () => {
    startMatch("BRA-A");
  });

  $("btn-start-simulation").addEventListener("click", () => {
    const interval = setInterval(() => {
      const match = gameState.currentMatch;
      if (!match || match.finished) {
        clearInterval(interval);
        updateDashboard();
        return;
      }
      simulateMatchTick();
    }, 700); // 0,7s por "bloco" de 10 min
  });

  $("btn-go-transfers").addEventListener("click", () => {
    fillTransferTable();
    showScreen("screen-transfers");
  });

  $("btn-save-game").addEventListener("click", () => {
    saveGame();
  });
}

// Inicialização
window.addEventListener("load", () => {
  setupEvents();
});
