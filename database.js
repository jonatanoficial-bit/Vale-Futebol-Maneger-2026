// ======================================================
// VALE FUTEBOL MANAGER 2026
// database.js
// ======================================================

// --------------------------
// TIMES SÉRIE A
// --------------------------

const teams = [
  // Série A
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
  { id: "MIR", name: "Mirassol",        shortName: "Mirassol",   division: "A" },

  // Série B
  { id: "CFC", name: "Coritiba",        shortName: "Coritiba",   division: "B" },
  { id: "CAP", name: "Athletico-PR",    shortName: "Athletico-PR", division: "B" },
  { id: "CHA", name: "Chapecoense",     shortName: "Chapecoense",division: "B" },
  { id: "REM", name: "Remo",            shortName: "Remo",       division: "B" },
  { id: "CRI", name: "Criciúma",        shortName: "Criciúma",   division: "B" },
  { id: "GOI", name: "Goiás",           shortName: "Goiás",      division: "B" },
  { id: "NOV", name: "Novorizontino",   shortName: "Novorizontino", division: "B" },
  { id: "CRB", name: "CRB",             shortName: "CRB",        division: "B" },
  { id: "AVA", name: "Avaí",            shortName: "Avaí",       division: "B" },
  { id: "CUI", name: "Cuiabá",          shortName: "Cuiabá",     division: "B" },
  { id: "ACG", name: "Atlético-GO",     shortName: "Atlético-GO",division: "B" },
  { id: "OPE", name: "Operário",        shortName: "Operário",   division: "B" },
  { id: "VNO", name: "Vila Nova",       shortName: "Vila Nova",  division: "B" },
  { id: "AME", name: "América-MG",      shortName: "América-MG",division: "B" },
  { id: "ATC", name: "Athletic",        shortName: "Athletic",   division: "B" },
  { id: "BFS", name: "Botafogo-SP",     shortName: "Botafogo-SP",division: "B" },
  { id: "FER", name: "Ferroviária",     shortName: "Ferroviária",division: "B" },
  { id: "AMA", name: "Amazonas",        shortName: "Amazonas",   division: "B" },
  { id: "VOL", name: "Volta Redonda",   shortName: "Volta Redonda", division: "B" },
  { id: "PAY", name: "Paysandu",        shortName: "Paysandu",   division: "B" }
];

// --------------------------
// FUNÇÃO AUXILIAR (FORMATO B)
// --------------------------

function makePlayer(
  id,
  teamId,
  name,
  position,
  overall,
  age = 27,
  morale = 75,
  value = 10,
  face = ""
) {
  return {
    id,
    teamId,
    name,
    position,
    overall,
    age,
    morale,
    value,
    face
  };
}

// --------------------------
// JOGADORES SÉRIE A + B
// --------------------------

const players = [

  // ======================
  // SÉRIE A
  // ======================

  // Flamengo
  makePlayer("FLA_PEDRO", "FLA", "Pedro", "ATA", 84, 27, 80, 32, "assets/faces/FLA_PEDRO.png"),
  makePlayer("FLA_GABIGOL", "FLA", "Gabigol", "ATA", 83, 28, 78, 30, "assets/faces/FLA_GABIGOL.png"),
  makePlayer("FLA_ARRASCAETA", "FLA", "Arrascaeta", "MEI", 86, 30, 82, 35, "assets/faces/FLA_ARRASCAETA.png"),
  makePlayer("FLA_GERSON", "FLA", "Gerson", "MEI", 84, 27, 80, 28, "assets/faces/FLA_GERSON.png"),
  makePlayer("FLA_EV_CEBOLINHA", "FLA", "Everton Cebolinha", "ATA", 82, 29, 78, 24, "assets/faces/FLA_EV_CEBOLINHA.png"),

  // Palmeiras
  makePlayer("PAL_WEVERTON", "PAL", "Weverton", "GOL", 84, 36, 82, 20, "assets/faces/PAL_WEVERTON.png"),
  makePlayer("PAL_G_GOMEZ", "PAL", "Gustavo Gómez", "ZAG", 85, 31, 84, 32, "assets/faces/PAL_G_GOMEZ.png"),
  makePlayer("PAL_VEIGA", "PAL", "Raphael Veiga", "MEI", 85, 29, 83, 34, "assets/faces/PAL_VEIGA.png"),
  makePlayer("PAL_ENDRICK", "PAL", "Endrick", "ATA", 86, 18, 85, 60, "assets/faces/PAL_ENDRICK.png"),
  makePlayer("PAL_RONY", "PAL", "Rony", "ATA", 82, 29, 80, 22, "assets/faces/PAL_RONY.png"),

  // Botafogo
  makePlayer("BOT_TIQUINHO", "BOT", "Tiquinho Soares", "ATA", 82, 33, 80, 20, "assets/faces/BOT_TIQUINHO.png"),
  makePlayer("BOT_JR_SANTOS", "BOT", "Júnior Santos", "ATA", 80, 29, 79, 18, "assets/faces/BOT_JR_SANTOS.png"),
  makePlayer("BOT_EDUARDO", "BOT", "Eduardo", "MEI", 80, 34, 78, 16, "assets/faces/BOT_EDUARDO.png"),
  makePlayer("BOT_GATITO", "BOT", "Gatito Fernández", "GOL", 80, 36, 77, 12, "assets/faces/BOT_GATITO.png"),
  makePlayer("BOT_ADRYELSON", "BOT", "Adryelson", "ZAG", 79, 26, 78, 15, "assets/faces/BOT_ADRYELSON.png"),

  // Internacional
  makePlayer("INT_ENNER_VAL", "INT", "Enner Valencia", "ATA", 83, 34, 80, 18, "assets/faces/INT_ENNER_VAL.png"),
  makePlayer("INT_ALAN_PATRICK", "INT", "Alan Patrick", "MEI", 82, 32, 80, 18, "assets/faces/INT_ALAN_PATRICK.png"),
  makePlayer("INT_WANDERSON", "INT", "Wanderson", "ATA", 80, 29, 78, 15, "assets/faces/INT_WANDERSON.png"),
  makePlayer("INT_ARANGUIZ", "INT", "Aránguiz", "MEI", 82, 35, 80, 15, "assets/faces/INT_ARANGUIZ.png"),
  makePlayer("INT_ROCHET", "INT", "Rochet", "GOL", 82, 31, 81, 20, "assets/faces/INT_ROCHET.png"),

  // Atlético-MG
  makePlayer("AMG_HULK", "AMG", "Hulk", "ATA", 84, 38, 82, 20, "assets/faces/AMG_HULK.png"),
  makePlayer("AMG_PAULINHO", "AMG", "Paulinho", "ATA", 82, 24, 82, 28, "assets/faces/AMG_PAULINHO.png"),
  makePlayer("AMG_G_ARANA", "AMG", "Guilherme Arana", "LE", 82, 27, 81, 25, "assets/faces/AMG_G_ARANA.png"),
  makePlayer("AMG_ZARACHO", "AMG", "Zaracho", "MEI", 81, 26, 80, 22, "assets/faces/AMG_ZARACHO.png"),
  makePlayer("AMG_EVERSON", "AMG", "Everson", "GOL", 81, 33, 80, 16, "assets/faces/AMG_EVERSON.png"),

  // Corinthians
  makePlayer("COR_YURI_ALB", "COR", "Yuri Alberto", "ATA", 81, 23, 78, 22, "assets/faces/COR_YURI_ALB.png"),
  makePlayer("COR_RENATO_AUG", "COR", "Renato Augusto", "MEI", 83, 36, 80, 15, "assets/faces/COR_RENATO_AUG.png"),
  makePlayer("COR_FAUSTO_VERA", "COR", "Fausto Vera", "VOL", 78, 24, 77, 14, "assets/faces/COR_FAUSTO_VERA.png"),
  makePlayer("COR_CASSIO", "COR", "Cássio", "GOL", 82, 37, 80, 10, "assets/faces/COR_CASSIO.png"),
  makePlayer("COR_FAGNER", "COR", "Fagner", "LD", 79, 34, 78, 10, "assets/faces/COR_FAGNER.png"),

  // São Paulo
  makePlayer("SAO_CALLERI", "SAO", "Calleri", "ATA", 82, 30, 81, 24, "assets/faces/SAO_CALLERI.png"),
  makePlayer("SAO_LUCIANO", "SAO", "Luciano", "ATA", 80, 30, 79, 18, "assets/faces/SAO_LUCIANO.png"),
  makePlayer("SAO_LUCAS_MOURA", "SAO", "Lucas Moura", "ATA", 82, 32, 80, 22, "assets/faces/SAO_LUCAS_MOURA.png"),
  makePlayer("SAO_JAMES", "SAO", "James Rodríguez", "MEI", 83, 33, 80, 25, "assets/faces/SAO_JAMES.png"),
  makePlayer("SAO_ARBOLEDA", "SAO", "Arboleda", "ZAG", 80, 32, 79, 18, "assets/faces/SAO_ARBOLEDA.png"),

  // Fluminense
  makePlayer("FLU_CAN0", "FLU", "Germán Cano", "ATA", 83, 36, 82, 20, "assets/faces/FLU_CAN0.png"),
  makePlayer("FLU_GANSO", "FLU", "Ganso", "MEI", 82, 34, 80, 18, "assets/faces/FLU_GANSO.png"),
  makePlayer("FLU_JHON_ARIAS", "FLU", "Jhon Arias", "ATA", 82, 27, 82, 26, "assets/faces/FLU_JHON_ARIAS.png"),
  makePlayer("FLU_ANDRE", "FLU", "André", "VOL", 83, 23, 83, 32, "assets/faces/FLU_ANDRE.png"),
  makePlayer("FLU_MARCELO", "FLU", "Marcelo", "LE", 82, 36, 80, 18, "assets/faces/FLU_MARCELO.png"),

  // Grêmio
  makePlayer("GRE_SUAREZ", "GRE", "Luis Suárez", "ATA", 84, 37, 83, 22, "assets/faces/GRE_SUAREZ.png"),
  makePlayer("GRE_VILLASANTI", "GRE", "Villasanti", "VOL", 79, 27, 79, 16, "assets/faces/GRE_VILLASANTI.png"),
  makePlayer("GRE_CRISTALDO", "GRE", "Cristaldo", "MEI", 80, 28, 79, 18, "assets/faces/GRE_CRISTALDO.png"),
  makePlayer("GRE_KANNEMANN", "GRE", "Kannemann", "ZAG", 81, 33, 80, 18, "assets/faces/GRE_KANNEMANN.png"),
  makePlayer("GRE_GEROMEL", "GRE", "Geromel", "ZAG", 80, 38, 78, 10, "assets/faces/GRE_GEROMEL.png"),

  // Santos
  makePlayer("SAN_MARCOS_LEO", "SAN", "Marcos Leonardo", "ATA", 82, 21, 82, 28, "assets/faces/SAN_MARCOS_LEO.png"),
  makePlayer("SAN_SOTELDO", "SAN", "Soteldo", "ATA", 81, 27, 80, 22, "assets/faces/SAN_SOTELDO.png"),
  makePlayer("SAN_LUCAS_LIMA", "SAN", "Lucas Lima", "MEI", 78, 33, 76, 10, "assets/faces/SAN_LUCAS_LIMA.png"),
  makePlayer("SAN_JOAO_PAULO", "SAN", "João Paulo", "GOL", 81, 28, 80, 18, "assets/faces/SAN_JOAO_PAULO.png"),
  makePlayer("SAN_DODO", "SAN", "Dodô", "LE", 78, 30, 77, 12, "assets/faces/SAN_DODO.png"),

  // Cruzeiro
  makePlayer("CRU_MATHEUS_PER", "CRU", "Matheus Pereira", "MEI", 82, 28, 81, 24, "assets/faces/CRU_MATHEUS_PER.png"),
  makePlayer("CRU_RAF_CABRAL", "CRU", "Rafael Cabral", "GOL", 79, 34, 78, 12, "assets/faces/CRU_RAF_CABRAL.png"),
  makePlayer("CRU_LUCAS_SILVA", "CRU", "Lucas Silva", "VOL", 78, 31, 77, 12, "assets/faces/CRU_LUCAS_SILVA.png"),
  makePlayer("CRU_WILLIAM", "CRU", "William", "LD", 76, 28, 76, 10, "assets/faces/CRU_WILLIAM.png"),
  makePlayer("CRU_ZE_IVALDO", "CRU", "Zé Ivaldo", "ZAG", 77, 27, 77, 12, "assets/faces/CRU_ZE_IVALDO.png"),

  // Vasco
  makePlayer("VAS_VEGETTI", "VAS", "Vegetti", "ATA", 81, 36, 80, 16, "assets/faces/VAS_VEGETTI.png"),
  makePlayer("VAS_PAYET", "VAS", "Payet", "MEI", 83, 38, 80, 18, "assets/faces/VAS_PAYET.png"),
  makePlayer("VAS_GABRIEL_PEC", "VAS", "Gabriel Pec", "ATA", 79, 23, 80, 22, "assets/faces/VAS_GABRIEL_PEC.png"),
  makePlayer("VAS_MEDEL", "VAS", "Medel", "ZAG", 80, 36, 79, 10, "assets/faces/VAS_MEDEL.png"),
  makePlayer("VAS_LUCAS_PITON", "VAS", "Lucas Piton", "LE", 78, 23, 78, 16, "assets/faces/VAS_LUCAS_PITON.png"),

  // Bahia
  makePlayer("BAH_EVERALDO", "BAH", "Everaldo", "ATA", 78, 30, 77, 12, "assets/faces/BAH_EVERALDO.png"),
  makePlayer("BAH_BIEL", "BAH", "Biel", "ATA", 77, 23, 78, 14, "assets/faces/BAH_BIEL.png"),
  makePlayer("BAH_CAULY", "BAH", "Cauly", "MEI", 79, 28, 79, 18, "assets/faces/BAH_CAULY.png"),
  makePlayer("BAH_LUC_JUBA", "BAH", "Luciano Juba", "LE", 78, 25, 78, 16, "assets/faces/BAH_LUC_JUBA.png"),
  makePlayer("BAH_JEAN_LUCAS", "BAH", "Jean Lucas", "MEI", 78, 26, 78, 16, "assets/faces/BAH_JEAN_LUCAS.png"),

  // Fortaleza
  makePlayer("FOR_LUCERO", "FOR", "Lucero", "ATA", 80, 26, 80, 18, "assets/faces/FOR_LUCERO.png"),
  makePlayer("FOR_YAGO_PIKA", "FOR", "Yago Pikachu", "LD", 79, 32, 79, 16, "assets/faces/FOR_YAGO_PIKA.png"),
  makePlayer("FOR_MARINHO", "FOR", "Marinho", "ATA", 79, 34, 77, 12, "assets/faces/FOR_MARINHO.png"),
  makePlayer("FOR_BENEVENUTO", "FOR", "Benevenuto", "ZAG", 78, 28, 78, 14, "assets/faces/FOR_BENEVENUTO.png"),
  makePlayer("FOR_JOAO_RICARDO", "FOR", "João Ricardo", "GOL", 78, 35, 78, 10, "assets/faces/FOR_JOAO_RICARDO.png"),

  // RB Bragantino
  makePlayer("RBB_HELINHO", "RBB", "Helinho", "ATA", 79, 24, 79, 18, "assets/faces/RBB_HELINHO.png"),
  makePlayer("RBB_VITINHO", "RBB", "Vitinho", "ATA", 78, 24, 78, 16, "assets/faces/RBB_VITINHO.png"),
  makePlayer("RBB_JUN_CAP", "RBB", "Juninho Capixaba", "LE", 78, 26, 78, 16, "assets/faces/RBB_JUN_CAP.png"),
  makePlayer("RBB_CLEITON", "RBB", "Cleiton", "GOL", 78, 26, 77, 12, "assets/faces/RBB_CLEITON.png"),
  makePlayer("RBB_SASHA", "RBB", "Eduardo Sasha", "ATA", 79, 32, 78, 14, "assets/faces/RBB_SASHA.png"),

  // Ceará
  makePlayer("CEA_ERICK", "CEA", "Erick", "ATA", 77, 25, 77, 12, "assets/faces/CEA_ERICK.png"),
  makePlayer("CEA_VINA", "CEA", "Vina", "MEI", 79, 31, 78, 14, "assets/faces/CEA_VINA.png"),
  makePlayer("CEA_CLEBER", "CEA", "Cléber", "ATA", 76, 27, 76, 10, "assets/faces/CEA_CLEBER.png"),
  makePlayer("CEA_RICHARD", "CEA", "Richard", "VOL", 76, 28, 76, 10, "assets/faces/CEA_RICHARD.png"),
  makePlayer("CEA_TIAGO_PAG", "CEA", "Tiago Pagnussat", "ZAG", 76, 33, 75, 8, "assets/faces/CEA_TIAGO_PAG.png"),

  // Sport
  makePlayer("SPT_GUSTAVO_COUT", "SPT", "Gustavo Coutinho", "ATA", 77, 25, 77, 12, "assets/faces/SPT_GUSTAVO_COUT.png"),
  makePlayer("SPT_JUBA", "SPT", "Luciano Juba", "MEI", 78, 24, 78, 14, "assets/faces/SPT_JUBA.png"),
  makePlayer("SPT_ALAN_RUIZ", "SPT", "Alan Ruiz", "MEI", 77, 30, 76, 10, "assets/faces/SPT_ALAN_RUIZ.png"),
  makePlayer("SPT_RAF_THYERE", "SPT", "Rafael Thyere", "ZAG", 77, 30, 77, 12, "assets/faces/SPT_RAF_THYERE.png"),
  makePlayer("SPT_SABINO", "SPT", "Sabino", "ZAG", 77, 28, 77, 12, "assets/faces/SPT_SABINO.png"),

  // Juventude
  makePlayer("JUV_GILBERTO", "JUV", "Gilberto", "ATA", 77, 34, 76, 10, "assets/faces/JUV_GILBERTO.png"),
  makePlayer("JUV_NENE", "JUV", "Nenê", "MEI", 78, 42, 75, 6, "assets/faces/JUV_NENE.png"),
  makePlayer("JUV_JADSON", "JUV", "Jadson", "VOL", 76, 30, 76, 10, "assets/faces/JUV_JADSON.png"),
  makePlayer("JUV_ALAN_RUSCHEL", "JUV", "Alan Ruschel", "LE", 75, 34, 75, 8, "assets/faces/JUV_ALAN_RUSCHEL.png"),
  makePlayer("JUV_CESAR", "JUV", "César", "GOL", 76, 31, 76, 10, "assets/faces/JUV_CESAR.png"),

  // Vitória
  makePlayer("VIT_LEO_GAMALHO", "VIT", "Léo Gamalho", "ATA", 77, 35, 76, 10, "assets/faces/VIT_LEO_GAMALHO.png"),
  makePlayer("VIT_WAGNER_LEO", "VIT", "Wagner Leonardo", "ZAG", 76, 25, 76, 12, "assets/faces/VIT_WAGNER_LEO.png"),
  makePlayer("VIT_OSVALDO", "VIT", "Osvaldo", "ATA", 76, 37, 74, 6, "assets/faces/VIT_OSVALDO.png"),
  makePlayer("VIT_LUCAS_ARCANJO", "VIT", "Lucas Arcanjo", "GOL", 76, 29, 76, 10, "assets/faces/VIT_LUCAS_ARCANJO.png"),
  makePlayer("VIT_DANIEL", "VIT", "Daniel", "MEI", 76, 28, 76, 10, "assets/faces/VIT_DANIEL.png"),

  // Mirassol
  makePlayer("MIR_ZE_ROBERTO", "MIR", "Zé Roberto", "ATA", 76, 30, 76, 10, "assets/faces/MIR_ZE_ROBERTO.png"),
  makePlayer("MIR_CAMILO", "MIR", "Camilo", "MEI", 78, 38, 75, 6, "assets/faces/MIR_CAMILO.png"),
  makePlayer("MIR_NEGUEBA", "MIR", "Negueba", "ATA", 76, 27, 76, 10, "assets/faces/MIR_NEGUEBA.png"),
  makePlayer("MIR_LUIS_OTAVIO", "MIR", "Luiz Otávio", "ZAG", 75, 28, 75, 8, "assets/faces/MIR_LUIS_OTAVIO.png"),
  makePlayer("MIR_JOAO_PAULO", "MIR", "João Paulo", "GOL", 75, 30, 75, 8, "assets/faces/MIR_JOAO_PAULO.png"),

  // ======================
  // SÉRIE B
  // (somente times com elenco que você já mandou;
  //  os demais você pode completar depois)
  // ======================

  // Athletico-PR (CAP)
  makePlayer("CAP_ZAPELLI", "CAP", "Bruno Zapelli", "MEI", 78, 22, 78, 14, "assets/faces/CAP_ZAPELLI.png"),
  makePlayer("CAP_VITOR_ROQUE", "CAP", "Vitor Roque", "ATA", 82, 20, 82, 35, "assets/faces/CAP_VITOR_ROQUE.png"),
  makePlayer("CAP_FERNANDINHO", "CAP", "Fernandinho", "VOL", 80, 39, 78, 8, "assets/faces/CAP_FERNANDINHO.png"),
  makePlayer("CAP_PABLO", "CAP", "Pablo", "ATA", 78, 31, 77, 12, "assets/faces/CAP_PABLO.png"),
  makePlayer("CAP_BENTO", "CAP", "Bento", "GOL", 81, 25, 80, 22, "assets/faces/CAP_BENTO.png"),

  // Coritiba (CFC)
  makePlayer("CFC_ALEF_MANGA", "CFC", "Alef Manga", "ATA", 78, 29, 77, 12, "assets/faces/CFC_ALEF_MANGA.png"),
  makePlayer("CFC_ROBSON", "CFC", "Robson", "ATA", 77, 32, 76, 10, "assets/faces/CFC_ROBSON.png"),
  makePlayer("CFC_ANDREY", "CFC", "Andrey", "VOL", 77, 25, 77, 12, "assets/faces/CFC_ANDREY.png"),
  makePlayer("CFC_KAIO_CESAR", "CFC", "Kaio César", "ATA", 76, 20, 78, 14, "assets/faces/CFC_KAIO_CESAR.png"),
  makePlayer("CFC_SAMARIS", "CFC", "Samaris", "MEI", 78, 31, 77, 10, "assets/faces/CFC_SAMARIS.png"),

  // Chapecoense (CHA)
  makePlayer("CHA_PEROTTI", "CHA", "Perotti", "ATA", 77, 26, 77, 10, "assets/faces/CHA_PEROTTI.png"),
  makePlayer("CHA_ALISSON_FARIAS", "CHA", "Alisson Farias", "ATA", 76, 27, 76, 10, "assets/faces/CHA_ALISSON_FARIAS.png"),
  makePlayer("CHA_JOAO_PAULO", "CHA", "João Paulo", "GOL", 76, 30, 76, 8, "assets/faces/CHA_JOAO_PAULO.png"),
  makePlayer("CHA_DARLAN", "CHA", "Darlan", "MEI", 75, 25, 75, 8, "assets/faces/CHA_DARLAN.png"),
  makePlayer("CHA_VINI_PAULISTA", "CHA", "Vini Paulista", "ATA", 75, 24, 75, 8, "assets/faces/CHA_VINI_PAULISTA.png"),

  // Remo (REM)
  makePlayer("REM_MURIQUI", "REM", "Muriqui", "ATA", 77, 37, 75, 6, "assets/faces/REM_MURIQUI.png"),
  makePlayer("REM_RONALD", "REM", "Ronald", "MEI", 75, 26, 75, 8, "assets/faces/REM_RONALD.png"),
  makePlayer("REM_NETO_PESSOA", "REM", "Neto Pessoa", "ATA", 76, 28, 76, 8, "assets/faces/REM_NETO_PESSOA.png"),
  makePlayer("REM_VINICIUS", "REM", "Vinícius", "GOL", 76, 32, 76, 8, "assets/faces/REM_VINICIUS.png"),
  makePlayer("REM_LUCAS_SIQUEIRA", "REM", "Lucas Siqueira", "VOL", 76, 34, 75, 6, "assets/faces/REM_LUCAS_SIQUEIRA.png"),

  // Criciúma (CRI)
  makePlayer("CRI_LEO_GAMALHO", "CRI", "Léo Gamalho", "ATA", 77, 35, 76, 8, "assets/faces/CRI_LEO_GAMALHO.png"),
  makePlayer("CRI_MARQ_GABRIEL", "CRI", "Marquinhos Gabriel", "MEI", 77, 33, 76, 8, "assets/faces/CRI_MARQ_GABRIEL.png"),
  makePlayer("CRI_FELLIPE_MATEUS", "CRI", "Fellipe Mateus", "MEI", 76, 28, 76, 8, "assets/faces/CRI_FELLIPE_MATEUS.png"),
  makePlayer("CRI_ZE_CARLOS", "CRI", "Zé Carlos", "GOL", 76, 35, 75, 6, "assets/faces/CRI_ZE_CARLOS.png"),
  makePlayer("CRI_FABINHO", "CRI", "Fabinho", "ATA", 75, 25, 75, 8, "assets/faces/CRI_FABINHO.png"),

  // Goiás (GOI)
  makePlayer("GOI_VINICIUS", "GOI", "Vinícius", "ATA", 77, 30, 77, 10, "assets/faces/GOI_VINICIUS.png"),
  makePlayer("GOI_APODI", "GOI", "Apodi", "LD", 76, 36, 75, 6, "assets/faces/GOI_APODI.png"),
  makePlayer("GOI_DIEGO_GONCALVES", "GOI", "Diego Gonçalves", "ATA", 76, 27, 76, 10, "assets/faces/GOI_DIEGO_GONCALVES.png"),
  makePlayer("GOI_FELL_BASTOS", "GOI", "Fellipe Bastos", "MEI", 76, 34, 75, 6, "assets/faces/GOI_FELL_BASTOS.png"),
  makePlayer("GOI_TADEU", "GOI", "Tadeu", "GOL", 78, 32, 78, 12, "assets/faces/GOI_TADEU.png"),

  // Novorizontino (NOV)
  makePlayer("NOV_DOUGLAS_BAGGIO", "NOV", "Douglas Baggio", "ATA", 76, 28, 76, 8, "assets/faces/NOV_DOUGLAS_BAGGIO.png"),
  makePlayer("NOV_RONALDO_SILVA", "NOV", "Ronaldo Silva", "ATA", 76, 29, 76, 8, "assets/faces/NOV_RONALDO_SILVA.png"),
  makePlayer("NOV_AYLON", "NOV", "Aylon", "ATA", 75, 28, 75, 8, "assets/faces/NOV_AYLON.png"),
  makePlayer("NOV_GUSTAVO_BOCHECHA", "NOV", "Gustavo Bochecha", "MEI", 76, 26, 76, 8, "assets/faces/NOV_GUSTAVO_BOCHECHA.png"),
  makePlayer("NOV_JOAO_PAULO", "NOV", "João Paulo", "GOL", 75, 30, 75, 6, "assets/faces/NOV_JOAO_PAULO.png"),

  // Avaí (AVA)
  makePlayer("AVA_BISSOLI", "AVA", "Bissoli", "ATA", 77, 26, 77, 10, "assets/faces/AVA_BISSOLI.png"),
  makePlayer("AVA_POTTKER", "AVA", "William Pottker", "ATA", 77, 30, 76, 10, "assets/faces/AVA_POTTKER.png"),
  makePlayer("AVA_RENATO", "AVA", "Renato", "MEI", 76, 34, 75, 6, "assets/faces/AVA_RENATO.png"),
  makePlayer("AVA_BRUNO_SILVA", "AVA", "Bruno Silva", "VOL", 76, 35, 75, 6, "assets/faces/AVA_BRUNO_SILVA.png"),
  makePlayer("AVA_GLEDSON", "AVA", "Gledson", "GOL", 75, 40, 74, 4, "assets/faces/AVA_GLEDSON.png"),

  // Cuiabá (CUI)
  makePlayer("CUI_DEYVERSON", "CUI", "Deyverson", "ATA", 78, 33, 77, 10, "assets/faces/CUI_DEYVERSON.png"),
  makePlayer("CUI_CLAYSON", "CUI", "Clayson", "ATA", 76, 29, 76, 8, "assets/faces/CUI_CLAYSON.png"),
  makePlayer("CUI_JON_CAFU", "CUI", "Jonathan Cafú", "ATA", 76, 31, 76, 8, "assets/faces/CUI_JON_CAFU.png"),
  makePlayer("CUI_WALTER", "CUI", "Walter", "GOL", 77, 36, 76, 8, "assets/faces/CUI_WALTER.png"),
  makePlayer("CUI_PEPE", "CUI", "Pepê", "MEI", 76, 26, 76, 8, "assets/faces/CUI_PEPE.png"),

  // Atlético-GO (ACG)
  makePlayer("ACG_SHAYLON", "ACG", "Shaylon", "MEI", 77, 27, 77, 10, "assets/faces/ACG_SHAYLON.png"),
  makePlayer("ACG_LUIZ_FERNANDO", "ACG", "Luiz Fernando", "ATA", 76, 27, 76, 8, "assets/faces/ACG_LUIZ_FERNANDO.png"),
  makePlayer("ACG_BARALHAS", "ACG", "Baralhas", "VOL", 76, 25, 76, 8, "assets/faces/ACG_BARALHAS.png"),
  makePlayer("ACG_RONALDO", "ACG", "Ronaldo", "GOL", 76, 33, 75, 6, "assets/faces/ACG_RONALDO.png"),
  makePlayer("ACG_PEDRO_RAUL", "ACG", "Pedro Raul", "ATA", 78, 28, 77, 10, "assets/faces/ACG_PEDRO_RAUL.png"),

  // América-MG (AME)
  makePlayer("AME_ALOISIO", "AME", "Aloísio Boi Bandido", "ATA", 77, 35, 76, 8, "assets/faces/AME_ALOISIO.png"),
  makePlayer("AME_BENITEZ", "AME", "Benítez", "MEI", 77, 30, 76, 8, "assets/faces/AME_BENITEZ.png"),
  makePlayer("AME_JUNINHO", "AME", "Juninho", "VOL", 77, 32, 77, 8, "assets/faces/AME_JUNINHO.png"),
  makePlayer("AME_CAVICHIOLI", "AME", "Cavichioli", "GOL", 76, 34, 76, 6, "assets/faces/AME_CAVICHIOLI.png"),
  makePlayer("AME_MASTRIANI", "AME", "Mastriani", "ATA", 78, 31, 77, 10, "assets/faces/AME_MASTRIANI.png"),

  // Botafogo-SP (BFS)
  makePlayer("BFS_GUSTAVO_HENR", "BFS", "Gustavo Henrique", "ATA", 76, 27, 76, 8, "assets/faces/BFS_GUSTAVO_HENR.png"),
  makePlayer("BFS_OSMAN", "BFS", "Osman", "ATA", 75, 28, 75, 8, "assets/faces/BFS_OSMAN.png"),
  makePlayer("BFS_ROBINHO", "BFS", "Robinho", "ATA", 76, 34, 75, 6, "assets/faces/BFS_ROBINHO.png"),
  makePlayer("BFS_MATHEUS_BARB", "BFS", "Matheus Barbosa", "VOL", 76, 29, 76, 8, "assets/faces/BFS_MATHEUS_BARB.png"),
  makePlayer("BFS_JOAO_CARLOS", "BFS", "João Carlos", "GOL", 75, 32, 75, 6, "assets/faces/BFS_JOAO_CARLOS.png")

  // Times da Série B sem elenco ainda:
  // CRB, Operário, Vila Nova, Athletic, Ferroviária, Amazonas,
  // Volta Redonda, Paysandu
  // -> você pode seguir o mesmo padrão para completar depois.
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
  },
  {
    id: "BRA-B",
    name: "Campeonato Brasileiro Série B",
    type: "league",
    pointsForWin: 3,
    pointsForDraw: 1,
    pointsForLoss: 0,
    doubleRoundRobin: true
  }
];
