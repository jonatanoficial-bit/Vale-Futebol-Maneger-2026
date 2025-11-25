// ======================================================
// VALE FUTEBOL MANAGER 2026
// database.js
// ======================================================

// --------------------------
// TIMES SÉRIE A
// --------------------------

const teams = [
  { id: "FLA", name: "Flamengo",        shortName: "Flamengo",   division: "A" },
  { id: "PAL", name: "Palmeiras",       shortName: "Palmeiras",  division: "A" },
  { id: "BOT", name: "Botafogo",        shortName: "Botafogo",   division: "A" },
  { id: "INT", name: "Internacional",   shortName: "Inter",      division: "A" },
  { id: "AMG", name: "Atlético-MG",     shortName: "Atl-MG",     division: "A" },
  { id: "COR", name: "Corinthians",     shortName: "Corinthians",division: "A" },
  { id: "SAO", name: "São Paulo",       shortName: "São Paulo",  division: "A" },
  { id: "FLU", name: "Fluminense",      shortName: "Fluminense", division: "A" },
  { id: "GRE", name: "Grêmio",          shortName: "Grêmio",     division: "A" },
  { id: "SAN", name: "Santos",          shortName: "Santos",     division: "A" },
  { id: "CRU", name: "Cruzeiro",        shortName: "Cruzeiro",   division: "A" },
  { id: "VAS", name: "Vasco",           shortName: "Vasco",      division: "A" },
  { id: "BAH", name: "Bahia",           shortName: "Bahia",      division: "A" },
  { id: "FOR", name: "Fortaleza",       shortName: "Fortaleza",  division: "A" },
  { id: "RBB", name: "RB Bragantino",   shortName: "Bragantino", division: "A" },
  { id: "CEA", name: "Ceará",           shortName: "Ceará",      division: "A" },
  { id: "SPT", name: "Sport",           shortName: "Sport",      division: "A" },
  { id: "JUV", name: "Juventude",       shortName: "Juventude",  division: "A" },
  { id: "VIT", name: "Vitória",         shortName: "Vitória",    division: "A" },
  { id: "MIR", name: "Mirassol",        shortName: "Mirassol",   division: "A" }
];

// --------------------------
// FUNÇÃO AUXILIAR
// --------------------------

function makePlayer(id, teamId, name, position, overall) {
  return {
    id,
    teamId,
    name,
    position,
    overall,
    age: 27,
    morale: 75,
    value: 10
  };
}

// --------------------------
// JOGADORES SÉRIE A
// (resumido – já jogável)
// --------------------------

const players = [

  // Flamengo
  makePlayer("FLA_PEDRO", "FLA", "Pedro", "ATA", 84),
  makePlayer("FLA_GABIGOL", "FLA", "Gabigol", "ATA", 83),
  makePlayer("FLA_ARRASCAETA", "FLA", "Arrascaeta", "MEI", 86),
  makePlayer("FLA_GERSON", "FLA", "Gerson", "MEI", 84),
  makePlayer("FLA_EV_CEBOLINHA", "FLA", "Everton Cebolinha", "ATA", 82),

  // Palmeiras
  makePlayer("PAL_WEVERTON", "PAL", "Weverton", "GOL", 84),
  makePlayer("PAL_G_GOMEZ", "PAL", "Gustavo Gómez", "ZAG", 85),
  makePlayer("PAL_VEIGA", "PAL", "Raphael Veiga", "MEI", 85),
  makePlayer("PAL_ENDRICK", "PAL", "Endrick", "ATA", 86),
  makePlayer("PAL_RONY", "PAL", "Rony", "ATA", 82),

  // Botafogo
  makePlayer("BOT_TIQUINHO", "BOT", "Tiquinho Soares", "ATA", 82),
  makePlayer("BOT_JR_SANTOS", "BOT", "Júnior Santos", "ATA", 80),
  makePlayer("BOT_EDUARDO", "BOT", "Eduardo", "MEI", 80),
  makePlayer("BOT_GATITO", "BOT", "Gatito Fernández", "GOL", 80),
  makePlayer("BOT_ADRYELSON", "BOT", "Adryelson", "ZAG", 79),

  // Internacional
  makePlayer("INT_ENNER_VAL", "INT", "Enner Valencia", "ATA", 83),
  makePlayer("INT_ALAN_PATRICK", "INT", "Alan Patrick", "MEI", 82),
  makePlayer("INT_WANDERSON", "INT", "Wanderson", "ATA", 80),
  makePlayer("INT_ARANGUIZ", "INT", "Aránguiz", "MEI", 82),
  makePlayer("INT_ROCHET", "INT", "Rochet", "GOL", 82),

  // Atlético-MG
  makePlayer("AMG_HULK", "AMG", "Hulk", "ATA", 84),
  makePlayer("AMG_PAULINHO", "AMG", "Paulinho", "ATA", 82),
  makePlayer("AMG_G_ARANA", "AMG", "Guilherme Arana", "LE", 82),
  makePlayer("AMG_ZARACHO", "AMG", "Zaracho", "MEI", 81),
  makePlayer("AMG_EVERSON", "AMG", "Everson", "GOL", 81),

  // Corinthians
  makePlayer("COR_YURI_ALB", "COR", "Yuri Alberto", "ATA", 81),
  makePlayer("COR_RENATO_AUG", "COR", "Renato Augusto", "MEI", 83),
  makePlayer("COR_FAUSTO_VERA", "COR", "Fausto Vera", "VOL", 78),
  makePlayer("COR_CASSIO", "COR", "Cássio", "GOL", 82),
  makePlayer("COR_FAGNER", "COR", "Fagner", "LD", 79),

  // São Paulo
  makePlayer("SAO_CALLERI", "SAO", "Calleri", "ATA", 82),
  makePlayer("SAO_LUCIANO", "SAO", "Luciano", "ATA", 80),
  makePlayer("SAO_LUCAS_MOURA", "SAO", "Lucas Moura", "ATA", 82),
  makePlayer("SAO_JAMES", "SAO", "James Rodríguez", "MEI", 83),
  makePlayer("SAO_ARBOLEDA", "SAO", "Arboleda", "ZAG", 80),

  // Fluminense
  makePlayer("FLU_CAN0", "FLU", "Germán Cano", "ATA", 83),
  makePlayer("FLU_GANSO", "FLU", "Ganso", "MEI", 82),
  makePlayer("FLU_JHON_ARIAS", "FLU", "Jhon Arias", "ATA", 82),
  makePlayer("FLU_ANDRE", "FLU", "André", "VOL", 83),
  makePlayer("FLU_MARCELO", "FLU", "Marcelo", "LE", 82),

  // Grêmio
  makePlayer("GRE_SUAREZ", "GRE", "Luis Suárez", "ATA", 84),
  makePlayer("GRE_VILLASANTI", "GRE", "Villasanti", "VOL", 79),
  makePlayer("GRE_CRISTALDO", "GRE", "Cristaldo", "MEI", 80),
  makePlayer("GRE_KANNEMANN", "GRE", "Kannemann", "ZAG", 81),
  makePlayer("GRE_GEROMEL", "GRE", "Geromel", "ZAG", 80),

  // Santos
  makePlayer("SAN_MARCOS_LEO", "SAN", "Marcos Leonardo", "ATA", 82),
  makePlayer("SAN_SOTELDO", "SAN", "Soteldo", "ATA", 81),
  makePlayer("SAN_LUCAS_LIMA", "SAN", "Lucas Lima", "MEI", 78),
  makePlayer("SAN_JOAO_PAULO", "SAN", "João Paulo", "GOL", 81),
  makePlayer("SAN_DODO", "SAN", "Dodô", "LE", 78),

  // Cruzeiro
  makePlayer("CRU_MATHEUS_PER", "CRU", "Matheus Pereira", "MEI", 82),
  makePlayer("CRU_RAF_CABRAL", "CRU", "Rafael Cabral", "GOL", 79),
  makePlayer("CRU_LUCAS_SILVA", "CRU", "Lucas Silva", "VOL", 78),
  makePlayer("CRU_WILLIAM", "CRU", "William", "LD", 76),
  makePlayer("CRU_ZE_IVALDO", "CRU", "Zé Ivaldo", "ZAG", 77),

  // Vasco
  makePlayer("VAS_VEGETTI", "VAS", "Vegetti", "ATA", 81),
  makePlayer("VAS_PAYET", "VAS", "Payet", "MEI", 83),
  makePlayer("VAS_GABRIEL_PEC", "VAS", "Gabriel Pec", "ATA", 79),
  makePlayer("VAS_MEDEL", "VAS", "Medel", "ZAG", 80),
  makePlayer("VAS_LUCAS_PITON", "VAS", "Lucas Piton", "LE", 78),

  // Bahia
  makePlayer("BAH_EVERALDO", "BAH", "Everaldo", "ATA", 78),
  makePlayer("BAH_BIEL", "BAH", "Biel", "ATA", 77),
  makePlayer("BAH_CAULY", "BAH", "Cauly", "MEI", 79),
  makePlayer("BAH_LUC_JUBA", "BAH", "Luciano Juba", "LE", 78),
  makePlayer("BAH_JEAN_LUCAS", "BAH", "Jean Lucas", "MEI", 78),

  // Fortaleza
  makePlayer("FOR_LUCERO", "FOR", "Lucero", "ATA", 80),
  makePlayer("FOR_YAGO_PIKA", "FOR", "Yago Pikachu", "LD", 79),
  makePlayer("FOR_MARINHO", "FOR", "Marinho", "ATA", 79),
  makePlayer("FOR_BENEVENUTO", "FOR", "Benevenuto", "ZAG", 78),
  makePlayer("FOR_JOAO_RICARDO", "FOR", "João Ricardo", "GOL", 78),

  // RB Bragantino
  makePlayer("RBB_HELINHO", "RBB", "Helinho", "ATA", 79),
  makePlayer("RBB_VITINHO", "RBB", "Vitinho", "ATA", 78),
  makePlayer("RBB_JUN_CAP", "RBB", "Juninho Capixaba", "LE", 78),
  makePlayer("RBB_CLEITON", "RBB", "Cleiton", "GOL", 78),
  makePlayer("RBB_SASHA", "RBB", "Eduardo Sasha", "ATA", 79),

  // Ceará
  makePlayer("CEA_ERICK", "CEA", "Erick", "ATA", 77),
  makePlayer("CEA_VINA", "CEA", "Vina", "MEI", 79),
  makePlayer("CEA_CLEBER", "CEA", "Cléber", "ATA", 76),
  makePlayer("CEA_RICHARD", "CEA", "Richard", "VOL", 76),
  makePlayer("CEA_TIAGO_PAG", "CEA", "Tiago Pagnussat", "ZAG", 76),

  // Sport
  makePlayer("SPT_GUSTAVO_COUT", "SPT", "Gustavo Coutinho", "ATA", 77),
  makePlayer("SPT_JUBA", "SPT", "Luciano Juba", "MEI", 78),
  makePlayer("SPT_ALAN_RUIZ", "SPT", "Alan Ruiz", "MEI", 77),
  makePlayer("SPT_RAF_THYERE", "SPT", "Rafael Thyere", "ZAG", 77),
  makePlayer("SPT_SABINO", "SPT", "Sabino", "ZAG", 77),

  // Juventude
  makePlayer("JUV_GILBERTO", "JUV", "Gilberto", "ATA", 77),
  makePlayer("JUV_NENE", "JUV", "Nenê", "MEI", 78),
  makePlayer("JUV_JADSON", "JUV", "Jadson", "VOL", 76),
  makePlayer("JUV_ALAN_RUSCHEL", "JUV", "Alan Ruschel", "LE", 75),
  makePlayer("JUV_CESAR", "JUV", "César", "GOL", 76),

  // Vitória
  makePlayer("VIT_LEO_GAMALHO", "VIT", "Léo Gamalho", "ATA", 77),
  makePlayer("VIT_WAGNER_LEO", "VIT", "Wagner Leonardo", "ZAG", 76),
  makePlayer("VIT_OSVALDO", "VIT", "Osvaldo", "ATA", 76),
  makePlayer("VIT_LUCAS_ARCANJO", "VIT", "Lucas Arcanjo", "GOL", 76),
  makePlayer("VIT_DANIEL", "VIT", "Daniel", "MEI", 76),

  // Mirassol
  makePlayer("MIR_ZE_ROBERTO", "MIR", "Zé Roberto", "ATA", 76),
  makePlayer("MIR_CAMILO", "MIR", "Camilo", "MEI", 78),
  makePlayer("MIR_NEGUEBA", "MIR", "Negueba", "ATA", 76),
  makePlayer("MIR_LUIS_OTAVIO", "MIR", "Luiz Otávio", "ZAG", 75),
  makePlayer("MIR_JOAO_PAULO", "MIR", "João Paulo", "GOL", 75)

];

// --------------------------
// COMPETIÇÕES
// --------------------------

const competitions = [
  {
    id: "BRA-A",
    name: "Campeonato Brasileiro Série A",
    type: "league",
    pointsForWin: 3,
    pointsForDraw: 1,
    pointsForLoss: 0,
    doubleRoundRobin: true
  }
];
