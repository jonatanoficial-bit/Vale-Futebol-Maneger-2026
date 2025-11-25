// ======================================================
// VALE FUTEBOL MANAGER 2026 – UI CONTROLLER
// Controle visual de todas as telas do jogo
// ======================================================

// ----------------------
// ELEMENTOS DA INTERFACE
// ----------------------
const screens = {
    cover: document.getElementById("screen-cover"),
    selectTeam: document.getElementById("screen-select-team"),
    lobby: document.getElementById("screen-lobby"),
    match: document.getElementById("screen-match"),
    standings: document.getElementById("screen-standings"),
    squad: document.getElementById("screen-squad")
};

// Botões
const btnNewGame = document.getElementById("btn-newgame");
const btnContinue = document.getElementById("btn-continue");
const btnBackCover = document.getElementById("btn-back-cover");
const btnNextMatch = document.getElementById("btn-next-match");
const btnStandings = document.getElementById("btn-standings");
const btnSquad = document.getElementById("btn-squad");
const btnMarket = document.getElementById("btn-market"); // futuro
const btnBackLobby = document.getElementById("btn-back-lobby");
const btnStandingsBack = document.getElementById("btn-standings-back");
const btnSquadBack = document.getElementById("btn-squad-back");
const btnSimulate = document.getElementById("btn-simulate");

// Containers
const teamGrid = document.getElementById("team-grid");
const squadList = document.getElementById("squad-list");
const standingsTable = document.getElementById("standings-table");

// Lobby info
const lobbyTeamLogo = document.getElementById("lobby-team-logo");
const lobbyTeamName = document.getElementById("lobby-team-name");
const lobbySeason = document.getElementById("lobby-season");
const lobbyBalance = document.getElementById("lobby-balance");

// Match
const matchHomeLogo = document.getElementById("match-home-logo");
const matchAwayLogo = document.getElementById("match-away-logo");
const matchHomeName = document.getElementById("match-home-name");
const matchAwayName = document.getElementById("match-away-name");

// ----------------------
// FUNÇÕES AUXILIARES DE TELA
// ----------------------
function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
}

// ----------------------
// 1. CAPA
// ----------------------
btnNewGame.addEventListener("click", () => {
    showScreen("selectTeam");
});

btnContinue.addEventListener("click", () => {
    if (hasSavedGame()) {
        loadGameState();
        loadLobby();
        showScreen("lobby");
    } else {
        alert("Nenhum jogo salvo encontrado.");
    }
});

// ----------------------
// 2. SELEÇÃO DE TIME
// ----------------------
btnBackCover.addEventListener("click", () => {
    showScreen("cover");
});

function loadTeamSelection() {
    teamGrid.innerHTML = "";

    teams.forEach(team => {
        const card = document.createElement("div");
        card.className = "team-card";

        card.innerHTML = `
            <img src="assets/logos/${team.id}.png">
            <p>${team.name}</p>
        `;

        card.addEventListener("click", () => {
            const coachName = prompt("Digite seu nome de treinador:", "Técnico");
            if (!coachName) return;

            resetGameStateForNewCareer(team.id, coachName);
            loadLobby();
            showScreen("lobby");
        });

        teamGrid.appendChild(card);
    });
}

loadTeamSelection();

// ----------------------
// 3. LOBBY
// ----------------------
function loadLobby() {
    const t = getTeamById(gameState.controlledTeamId);

    lobbyTeamLogo.src = `assets/logos/${t.id}.png`;
    lobbyTeamName.textContent = t.name;
    lobbySeason.textContent = `Temporada: ${gameState.seasonYear}`;
    lobbyBalance.textContent = `Saldo: ${gameState.balance} mi`;
}

btnNextMatch.addEventListener("click", () => {
    const match = getNextMatchForControlledTeam();

    if (!match) {
        alert("Não há mais partidas para jogar.");
        return;
    }

    loadMatch(match);
    showScreen("match");
});

btnStandings.addEventListener("click", () => {
    loadStandings();
    showScreen("standings");
});

btnSquad.addEventListener("click", () => {
    loadSquad();
    showScreen("squad");
});

// ----------------------
// 4. TELA DE PARTIDA
// ----------------------
btnBackLobby.addEventListener("click", () => showScreen("lobby"));

function loadMatch(match) {
    const home = getTeamById(match.homeTeamId);
    const away = getTeamById(match.awayTeamId);

    matchHomeLogo.src = `assets/logos/${home.id}.png`;
    matchAwayLogo.src = `assets/logos/${away.id}.png`;

    matchHomeName.textContent = home.name;
    matchAwayName.textContent = away.name;
}

btnSimulate.addEventListener("click", () => {
    const result = simulateMatchForControlledTeam();
    if (!result) {
        alert("Erro ao simular partida.");
        return;
    }

    alert(`
RESULTADO FINAL:
${getTeamById(result.homeTeamId).name} ${result.homeGoals}
X
${result.awayGoals} ${getTeamById(result.awayTeamId).name}
    `);

    applyRoundEndProcesses();
    loadLobby();
    showScreen("lobby");
});

// ----------------------
// 5. CLASSIFICAÇÃO
// ----------------------
btnStandingsBack.addEventListener("click", () => showScreen("lobby"));

function loadStandings() {
    const table = getLeagueStandings();

    standingsTable.innerHTML = `
        <tr>
            <th>Pos</th>
            <th>Time</th>
            <th>Pts</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
        </tr>
    `;

    table.forEach((t, i) => {
        const row = document.createElement("tr");

        const team = getTeamById(t.teamId);

        row.innerHTML = `
            <td>${i + 1}</td>
            <td><img src="assets/logos/${team.id}.png" style="width:22px;margin-right:6px;vertical-align:middle;"> ${team.shortName}</td>
            <td>${t.points}</td>
            <td>${t.played}</td>
            <td>${t.wins}</td>
            <td>${t.draws}</td>
            <td>${t.losses}</td>
            <td>${t.goalsFor}</td>
            <td>${t.goalsAgainst}</td>
        `;

        standingsTable.appendChild(row);
    });
}

// ----------------------
// 6. ELENCO
// ----------------------
btnSquadBack.addEventListener("click", () => showScreen("lobby"));

function loadSquad() {
    const squad = getPlayersByTeam(gameState.controlledTeamId);
    squadList.innerHTML = "";

    squad.forEach(p => {
        const card = document.createElement("div");
        card.className = "player-card";

        card.innerHTML = `
            <img src="assets/faces/${p.id}.png" onerror="this.src='assets/faces/default.png'">
            <div>
                <h3>${p.name}</h3>
                <p>Posição: ${p.position}</p>
                <p>Overall: ${p.overall}</p>
                <p>Físico: ${gameState.playerFitness[p.id]}%</p>
                <p>Moral: ${gameState.playerMorale[p.id]}</p>
            </div>
        `;

        squadList.appendChild(card);
    });
}
