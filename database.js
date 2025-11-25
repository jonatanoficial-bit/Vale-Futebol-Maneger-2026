// ======================================================
// VALE FUTEBOL MANAGER 2026
// database.js - Série A completa
// ------------------------------------------------------
// Aqui estão:
// - Times da Série A 2026 (lista base)
// - Elencos dos clubes (com atributos genéricos jogáveis)
// - Configuração do Brasileirão Série A
// ------------------------------------------------------
// Depois você pode:
// - Ajustar overall, idade, valor, posição
// - Acrescentar Série B, Copa do Brasil, Libertadores
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

// ======================================================
// FUNÇÃO AUXILIAR PARA ATRIBUTOS GENÉRICOS
// (para não ficar tudo 75 igual, mas também não ser
//  uma loucura. Você pode editar jogador por jogador
//  depois, se quiser mais realismo.)
// ======================================================

function makePlayer(id, teamId, name, position = "MEI", base = 75) {
  return {
    id,
    teamId,
    name,
    position,
    overall: base,
    age: 27,
    morale: 75,
    value: 10 // em milhões
  };
}

// ======================================================
// JOGADORES - SÉRIE A
// (baseados nas listas que você mandou)
// ======================================================

const players = [

  // ---------------- Flamengo (FLA) ----------------
  makePlayer("FLA_PEDRO", "FLA", "Pedro", "ATA", 84),
  makePlayer("FLA_GABIGOL", "FLA", "Gabigol", "ATA", 83),
  makePlayer("FLA_ARRASCAETA", "FLA", "Arrascaeta", "MEI", 86),
  makePlayer("FLA_EV_CEBOLINHA", "FLA", "Everton Cebolinha", "ATA", 82),
  makePlayer("FLA_GERSON", "FLA", "Gerson", "MEI", 84),
  makePlayer("FLA_DAVID_LUIZ", "FLA", "David Luiz", "ZAG", 80),
  makePlayer("FLA_LEO_PEREIRA", "FLA", "Léo Pereira", "ZAG", 80),
  makePlayer("FLA_MATHEUS_CUNHA", "FLA", "Matheus Cunha", "GOL", 78),
  makePlayer("FLA_WESLEY", "FLA", "Wesley", "LD", 76),
  makePlayer("FLA_FABRICIO_BRUNO", "FLA", "Fabrício Bruno", "ZAG", 80),
  makePlayer("FLA_VARELA", "FLA", "Varela", "LD", 78),
  makePlayer("FLA_VICTOR_HUGO", "FLA", "Victor Hugo", "MEI", 76),
  makePlayer("FLA_ALLAN", "FLA", "Allan", "VOL", 79),
  makePlayer("FLA_LUIZ_ARAUJO", "FLA", "Luiz Araújo", "ATA", 78),
  makePlayer("FLA_IGOR_JESUS", "FLA", "Igor Jesus", "MEI", 74),
  makePlayer("FLA_CARLINHOS", "FLA", "Carlinhos", "ATA", 74),
  makePlayer("FLA_ROSSI", "FLA", "Rossi", "GOL", 78),
  makePlayer("FLA_THIAGO_MAIA", "FLA", "Thiago Maia", "VOL", 79),
  makePlayer("FLA_VINA", "FLA", "Viña", "LE", 78),
  makePlayer("FLA_LORRAN", "FLA", "Lorran", "MEI", 72),
  makePlayer("FLA_WERTON", "FLA", "Werton", "ATA", 70),
  makePlayer("FLA_CLEITON", "FLA", "Cleiton", "ZAG", 72),
  makePlayer("FLA_OTAVIO", "FLA", "Otávio", "VOL", 73),
  makePlayer("FLA_IAGO", "FLA", "Iago", "LD", 72),

  // ---------------- Palmeiras (PAL) ----------------
  makePlayer("PAL_WEVERTON", "PAL", "Weverton", "GOL", 84),
  makePlayer("PAL_MURILO", "PAL", "Murilo", "ZAG", 80),
  makePlayer("PAL_G_GOMEZ", "PAL", "Gustavo Gómez", "ZAG", 85),
  makePlayer("PAL_PIQUEREZ", "PAL", "Piquerez", "LE", 82),
  makePlayer("PAL_MAYKE", "PAL", "Mayke", "LD", 80),
  makePlayer("PAL_ZE_RAF", "PAL", "Zé Rafael", "MEI", 82),
  makePlayer("PAL_VEIGA", "PAL", "Raphael Veiga", "MEI", 85),
  makePlayer("PAL_ENDRICK", "PAL", "Endrick", "ATA", 86),
  makePlayer("PAL_RONY", "PAL", "Rony", "ATA", 82),
  makePlayer("PAL_DUDU", "PAL", "Dudu", "ATA", 84),
  makePlayer("PAL_FLACO_LOPEZ", "PAL", "Flaco López", "ATA", 80),
  makePlayer("PAL_LAZARO", "PAL", "Lázaro", "ATA", 76),
  makePlayer("PAL_FABINHO", "PAL", "Fabinho", "VOL", 75),
  makePlayer("PAL_VANDERLAN", "PAL", "Vanderlan", "LE", 74),
  makePlayer("PAL_RICHARD_RIOS", "PAL", "Richard Ríos", "VOL", 79),
  makePlayer("PAL_ANIBAL_MORENO", "PAL", "Aníbal Moreno", "VOL", 79),
  makePlayer("PAL_BRUNO_RODRIGUES", "PAL", "Bruno Rodrigues", "ATA", 78),
  makePlayer("PAL_KAUAN_SANTOS", "PAL", "Kauan Santos", "MEI", 72),
  makePlayer("PAL_NAVES", "PAL", "Naves", "ZAG", 72),
  makePlayer("PAL_JHON_JHON", "PAL", "Jhon Jhon", "MEI", 73),
  makePlayer("PAL_GARCIA", "PAL", "Garcia", "LD", 72),
  makePlayer("PAL_MICHEL", "PAL", "Michel", "ZAG", 72),
  makePlayer("PAL_LUIS_GUILHERME", "PAL", "Luis Guilherme", "MEI", 74),

  // ---------------- Botafogo (BOT) ----------------
  makePlayer("BOT_TIQUINHO", "BOT", "Tiquinho Soares", "ATA", 82),
  makePlayer("BOT_EDUARDO", "BOT", "Eduardo", "MEI", 80),
  makePlayer("BOT_JUNIOR_SANTOS", "BOT", "Júnior Santos", "ATA", 80),
  makePlayer("BOT_MARCAL", "BOT", "Marçal", "LE", 78),
  makePlayer("BOT_ADRYELSON", "BOT", "Adryelson", "ZAG", 79),
  makePlayer("BOT_GATITO", "BOT", "Gatito Fernández", "GOL", 80),
  makePlayer("BOT_HUGO", "BOT", "Hugo", "LE", 74),
  makePlayer("BOT_DANILO_BAR", "BOT", "Danilo Barbosa", "VOL", 77),
  makePlayer("BOT_PK", "BOT", "PK", "MEI", 73),
  makePlayer("BOT_SAVARINO", "BOT", "Savarino", "ATA", 80),
  makePlayer("BOT_BASTOS", "BOT", "Bastos", "ZAG", 77),
  makePlayer("BOT_JEFFINHO", "BOT", "Jeffinho", "ATA", 76),
  makePlayer("BOT_DIEGO_HERN", "BOT", "Diego Hernández", "MEI", 74),
  makePlayer("BOT_DAMIAN_SUAREZ", "BOT", "Damián Suárez", "LD", 78),
  makePlayer("BOT_CUIABANO", "BOT", "Cuiabano", "LE", 73),
  makePlayer("BOT_YARLEN", "BOT", "Yarlen", "ATA", 72),
  makePlayer("BOT_KAUE", "BOT", "Kauê", "MEI", 72),
  makePlayer("BOT_MATHEUS_NAS", "BOT", "Matheus Nascimento", "ATA", 74),
  makePlayer("BOT_RAFEL", "BOT", "Rafael", "LD", 74),
  makePlayer("BOT_LUCAS_FERN", "BOT", "Lucas Fernandes", "MEI", 76),

  // ---------------- Internacional (INT) ----------------
  makePlayer("INT_ENNER_VALENCIA", "INT", "Enner Valencia", "ATA", 83),
  makePlayer("INT_ALAN_PATRICK", "INT", "Alan Patrick", "MEI", 82),
  makePlayer("INT_WANDERSON", "INT", "Wanderson", "ATA", 80),
  makePlayer("INT_MAURICIO", "INT", "Maurício", "MEI", 79),
  makePlayer("INT_ARANGUIZ", "INT", "Aránguiz", "MEI", 82),
  makePlayer("INT_VITAO", "INT", "Vitão", "ZAG", 79),
  makePlayer("INT_HUGO_MALLO", "INT", "Hugo Mallo", "LD", 78),
  makePlayer("INT_ROCHET", "INT", "Rochet", "GOL", 82),
  makePlayer("INT_BUSTOS", "INT", "Bustos", "LD", 79),
  makePlayer("INT_MERCADO", "INT", "Mercado", "ZAG", 78),
  makePlayer("INT_MATHEUS_DIAS", "INT", "Matheus Dias", "MEI", 73),
  makePlayer("INT_BRUNO_HENRIQUE", "INT", "Bruno Henrique", "VOL", 77),
  makePlayer("INT_WESLEY", "INT", "Wesley", "ATA", 74),
  makePlayer("INT_ROBERT_RENAN", "INT", "Robert Renan", "ZAG", 74),
  makePlayer("INT_LUCCA", "INT", "Lucca", "ATA", 73),
  makePlayer("INT_GUSTAVO_PRADO", "INT", "Gustavo Prado", "MEI", 72),
  makePlayer("INT_GABRIEL_BARROS", "INT", "Gabriel Barros", "ATA", 73),
  makePlayer("INT_THIAGO_MAIA", "INT", "Thiago Maia", "VOL", 79),

  // ---------------- Atlético-MG (AMG) ----------------
  makePlayer("AMG_HULK", "AMG", "Hulk", "ATA", 84),
  makePlayer("AMG_PAULINHO", "AMG", "Paulinho", "ATA", 82),
  makePlayer("AMG_G_ARANA", "AMG", "Guilherme Arana", "LE", 82),
  makePlayer("AMG_EVERSON", "AMG", "Everson", "GOL", 81),
  makePlayer("AMG_BATTAGLIA", "AMG", "Battaglia", "VOL", 79),
  makePlayer("AMG_ZARACHO", "AMG", "Zaracho", "MEI", 81),
  makePlayer("AMG_IGOR_GOMES", "AMG", "Igor Gomes", "MEI", 79),
  makePlayer("AMG_JEMERSON", "AMG", "Jemerson", "ZAG", 78),
  makePlayer("AMG_RUBENS", "AMG", "Rubens", "LE", 74),
  makePlayer("AMG_OTAVIO", "AMG", "Otávio", "VOL", 79),
  makePlayer("AMG_VARGAS", "AMG", "Vargas", "ATA", 79),
  makePlayer("AMG_ALAN_FRANCO", "AMG", "Alan Franco", "MEI", 78),
  makePlayer("AMG_MARIANO", "AMG", "Mariano", "LD", 77),
  makePlayer("AMG_PEDRINHO", "AMG", "Pedrinho", "MEI", 78),
  makePlayer("AMG_EDENILSON", "AMG", "Edenilson", "MEI", 80),
  makePlayer("AMG_PALACIOS", "AMG", "Palacios", "MEI", 75),
  makePlayer("AMG_CADU", "AMG", "Cadu", "ATA", 73),
  makePlayer("AMG_ROMULO", "AMG", "Rômulo", "MEI", 73),
  makePlayer("AMG_NATHAN_SILVA", "AMG", "Nathan Silva", "ZAG", 78),
  makePlayer("AMG_PAVON", "AMG", "Pavón", "ATA", 80),

  // ---------------- Corinthians (COR) ----------------
  makePlayer("COR_YURI_ALBERTO", "COR", "Yuri Alberto", "ATA", 81),
  makePlayer("COR_RENATO_AUGUSTO", "COR", "Renato Augusto", "MEI", 83),
  makePlayer("COR_FAUSTO_VERA", "COR", "Fausto Vera", "VOL", 78),
  makePlayer("COR_MAYCON", "COR", "Maycon", "VOL", 78),
  makePlayer("COR_CASSIO", "COR", "Cássio", "GOL", 82),
  makePlayer("COR_FAGNER", "COR", "Fagner", "LD", 79),
  makePlayer("COR_GIL", "COR", "Gil", "ZAG", 79),
  makePlayer("COR_WESLEY", "COR", "Wesley", "ATA", 75),
  makePlayer("COR_MATIAS_ROJAS", "COR", "Matías Rojas", "MEI", 79),
  makePlayer("COR_ANGEL_ROMERO", "COR", "Ángel Romero", "ATA", 78),
  makePlayer("COR_GABRIEL_MOSCARDO", "COR", "Gabriel Moscardo", "VOL", 74),
  makePlayer("COR_PEDRO", "COR", "Pedro", "ATA", 72),
  makePlayer("COR_GIOVANE", "COR", "Giovane", "ATA", 73),
  makePlayer("COR_BIDON", "COR", "Bidon", "MEI", 72),
  makePlayer("COR_MURILLO", "COR", "Murillo", "ZAG", 74),
  makePlayer("COR_RUAN_OLIVEIRA", "COR", "Ruan Oliveira", "MEI", 72),
  makePlayer("COR_CARLOS_MIGUEL", "COR", "Carlos Miguel", "GOL", 74),
  makePlayer("COR_LEO_MANA", "COR", "Léo Mana", "LD", 72),
  makePlayer("COR_BRENO_BIDON", "COR", "Breno Bidon", "MEI", 72),
  makePlayer("COR_CAETANO", "COR", "Caetano", "ZAG", 73),

  // ---------------- São Paulo (SAO) ----------------
  makePlayer("SAO_CALLERI", "SAO", "Calleri", "ATA", 82),
  makePlayer("SAO_LUCIANO", "SAO", "Luciano", "ATA", 80),
  makePlayer("SAO_LUCAS_MOURA", "SAO", "Lucas Moura", "ATA", 82),
  makePlayer("SAO_JAMES", "SAO", "James Rodríguez", "MEI", 83),
  makePlayer("SAO_WELLINGTON_RATO", "SAO", "Wellington Rato", "MEI", 78),
  makePlayer("SAO_PABLO_MAIA", "SAO", "Pablo Maia", "VOL", 78),
  makePlayer("SAO_ALISSON", "SAO", "Alisson", "MEI", 76),
  makePlayer("SAO_RAFINHA", "SAO", "Rafinha", "LD", 78),
  makePlayer("SAO_ARBOLEDA", "SAO", "Arboleda", "ZAG", 80),
  makePlayer("SAO_DIEGO_COSTA", "SAO", "Diego Costa", "ZAG", 78),
  makePlayer("SAO_BERALDO", "SAO", "Beraldo", "ZAG", 76),
  makePlayer("SAO_IGOR_VINICIUS", "SAO", "Igor Vinícius", "LD", 77),
  makePlayer("SAO_MOREIRA", "SAO", "Moreira", "LD", 73),
  makePlayer("SAO_NESTOR", "SAO", "Rodrigo Nestor", "MEI", 79),
  makePlayer("SAO_MICHEL_ARAUJO", "SAO", "Michel Araújo", "MEI", 76),
  makePlayer("SAO_JUAN", "SAO", "Juan", "ATA", 73),
  makePlayer("SAO_NATHAN", "SAO", "Nathan", "LE", 73),
  makePlayer("SAO_LUIZ_GUSTAVO", "SAO", "Luiz Gustavo", "VOL", 79),
  makePlayer("SAO_FERRARESI", "SAO", "Ferraresi", "ZAG", 77),
  makePlayer("SAO_JANDREI", "SAO", "Jandrei", "GOL", 76),
  makePlayer("SAO_YOUNG", "SAO", "Young", "MEI", 70),

  // ---------------- Fluminense (FLU) ----------------
  makePlayer("FLU_GERMAN_CAN0", "FLU", "Germán Cano", "ATA", 83),
  makePlayer("FLU_GANSO", "FLU", "Ganso", "MEI", 82),
  makePlayer("FLU_KENO", "FLU", "Keno", "ATA", 80),
  makePlayer("FLU_JHON_ARIAS", "FLU", "Jhon Arias", "ATA", 82),
  makePlayer("FLU_ANDRE", "FLU", "André", "VOL", 83),
  makePlayer("FLU_FELIPE_MELO", "FLU", "Felipe Melo", "VOL", 79),
  makePlayer("FLU_MARCELO", "FLU", "Marcelo", "LE", 82),
  makePlayer("FLU_SAMUEL_XAVIER", "FLU", "Samuel Xavier", "LD", 78),
  makePlayer("FLU_NINO", "FLU", "Nino", "ZAG", 81),
  makePlayer("FLU_MANOEL", "FLU", "Manoel", "ZAG", 78),
  makePlayer("FLU_LELE", "FLU", "Lelê", "ATA", 76),
  makePlayer("FLU_LIMA", "FLU", "Lima", "MEI", 78),
  makePlayer("FLU_MARTINELLI", "FLU", "Martinelli", "VOL", 78),
  makePlayer("FLU_DIOGO_BARBOSA", "FLU", "Diogo Barbosa", "LE", 76),
  makePlayer("FLU_MARLON", "FLU", "Marlon", "ZAG", 75),
  makePlayer("FLU_JOHN_KENNEDY", "FLU", "John Kennedy", "ATA", 78),
  makePlayer("FLU_ISAAC", "FLU", "Isaac", "MEI", 72),
  makePlayer("FLU_KAUA_ELIAS", "FLU", "Kauã Elias", "ATA", 72),
  makePlayer("FLU_GABRIEL_PIRES", "FLU", "Gabriel Pires", "MEI", 77),
  makePlayer("FLU_DANIEL", "FLU", "Daniel", "MEI", 76),
  makePlayer("FLU_FABIO", "FLU", "Fábio", "GOL", 82),

  // ---------------- Grêmio (GRE) ----------------
  makePlayer("GRE_LUIS_SUAREZ", "GRE", "Luis Suárez", "ATA", 84),
  makePlayer("GRE_VILLASANTI", "GRE", "Villasanti", "VOL", 79),
  makePlayer("GRE_CRISTALDO", "GRE", "Cristaldo", "MEI", 80),
  makePlayer("GRE_CARBALLO", "GRE", "Carballo", "MEI", 78),
  makePlayer("GRE_KANNEMANN", "GRE", "Kannemann", "ZAG", 81),
  makePlayer("GRE_GEROMEL", "GRE", "Geromel", "ZAG", 80),
  makePlayer("GRE_REINALDO", "GRE", "Reinaldo", "LE", 78),
  makePlayer("GRE_JOAO_PEDRO", "GRE", "João Pedro", "LD", 77),
  makePlayer("GRE_FERREIRA", "GRE", "Ferreira", "ATA", 79),
  makePlayer("GRE_NATHAN_FERN", "GRE", "Nathan Fernandes", "ATA", 74),
  makePlayer("GRE_GALDINO", "GRE", "Galdino", "ATA", 74),
  makePlayer("GRE_PEPE", "GRE", "Pepê", "MEI", 78),
  makePlayer("GRE_RODRIGO_ELY", "GRE", "Rodrigo Ely", "ZAG", 76),
  makePlayer("GRE_GUSTAVO_MARTINS", "GRE", "Gustavo Martins", "ZAG", 73),
  makePlayer("GRE_GABRIEL_GRANDO", "GRE", "Gabriel Grando", "GOL", 75),
  makePlayer("GRE_ANDRE_HENRIQUE", "GRE", "André Henrique", "ATA", 73),
  makePlayer("GRE_EDENILSON", "GRE", "Edenilson", "MEI", 80),
  makePlayer("GRE_GUSTAVO_NUNES", "GRE", "Gustavo Nunes", "ATA", 72),
  makePlayer("GRE_CUIABANO", "GRE", "Cuiabano", "LE", 73),
  makePlayer("GRE_RONALD", "GRE", "Ronald", "MEI", 72),

  // ---------------- Santos (SAN) ----------------
  makePlayer("SAN_MARCOS_LEONARDO", "SAN", "Marcos Leonardo", "ATA", 82),
  makePlayer("SAN_SOTELDO", "SAN", "Soteldo", "ATA", 81),
  makePlayer("SAN_JOAO_BASSO", "SAN", "João Basso", "ZAG", 77),
  makePlayer("SAN_JOAQUIM", "SAN", "Joaquim", "ZAG", 76),
  makePlayer("SAN_DODO", "SAN", "Dodô", "LE", 78),
  makePlayer("SAN_JOAO_PAULO", "SAN", "João Paulo", "GOL", 81),
  makePlayer("SAN_LUCAS_LIMA", "SAN", "Lucas Lima", "MEI", 78),
  makePlayer("SAN_RODRIGO_FERNANDEZ", "SAN", "Rodrigo Fernández", "VOL", 77),
  makePlayer("SAN_KEVYSON", "SAN", "Kevyson", "LE", 72),
  makePlayer("SAN_MIGUELITO", "SAN", "Miguelito", "MEI", 72),
  makePlayer("SAN_IVONEI", "SAN", "Ivonei", "MEI", 72),
  makePlayer("SAN_SANDRY", "SAN", "Sandry", "VOL", 73),
  makePlayer("SAN_FELIPE_JONATAN", "SAN", "Felipe Jonatan", "LE", 76),
  makePlayer("SAN_MESSIAS", "SAN", "Messias", "ZAG", 77),
  makePlayer("SAN_GABRIEL_INOCENCIO", "SAN", "Gabriel Inocêncio", "LD", 73),
  makePlayer("SAN_MORELOS", "SAN", "Morelos", "ATA", 78),
  makePlayer("SAN_NONATO", "SAN", "Nonato", "MEI", 76),
  makePlayer("SAN_FURMAN", "SAN", "Furman", "VOL", 73),
  makePlayer("SAN_WESLLEY_PATATI", "SAN", "Weslley Patati", "ATA", 72),
  makePlayer("SAN_RINCON", "SAN", "Rincón", "VOL", 74),

  // ---------------- Cruzeiro (CRU) ----------------
  makePlayer("CRU_MATHEUS_PEREIRA", "CRU", "Matheus Pereira", "MEI", 82),
  makePlayer("CRU_WESLEY", "CRU", "Wesley", "ATA", 76),
  makePlayer("CRU_RAF_CABRAL", "CRU", "Rafael Cabral", "GOL", 79),
  makePlayer("CRU_LUCAS_SILVA", "CRU", "Lucas Silva", "VOL", 78),
  makePlayer("CRU_FILIPE_MACHADO", "CRU", "Filipe Machado", "VOL", 75),
  makePlayer("CRU_WILLIAM", "CRU", "William", "LD", 76),
  makePlayer("CRU_MARLON", "CRU", "Marlon", "LE", 76),
  makePlayer("CRU_OLIVEIRA", "CRU", "Oliveira", "ZAG", 75),
  makePlayer("CRU_ZE_IVALDO", "CRU", "Zé Ivaldo", "ZAG", 77),
  makePlayer("CRU_VITAL", "CRU", "Vital", "MEI", 76),
  makePlayer("CRU_ARTHUR_GOMES", "CRU", "Arthur Gomes", "ATA", 76),
  makePlayer("CRU_FERNANDO_HENRIQUE", "CRU", "Fernando Henrique", "MEI", 73),
  makePlayer("CRU_PALACIOS", "CRU", "Palacios", "MEI", 73),
  makePlayer("CRU_ROBERT", "CRU", "Robert", "ATA", 72),
  makePlayer("CRU_RAMIRO", "CRU", "Ramiro", "VOL", 77),
  makePlayer("CRU_KAIKI", "CRU", "Kaiki", "LE", 72),
  makePlayer("CRU_STENIO", "CRU", "Stênio", "ATA", 72),
  makePlayer("CRU_JUSSA", "CRU", "Jussa", "VOL", 74),
  makePlayer("CRU_JOAO_MARCELO", "CRU", "João Marcelo", "ZAG", 73),
  makePlayer("CRU_RAF_ELIAS", "CRU", "Rafael Elias", "ATA", 75),

  // ---------------- Vasco (VAS) ----------------
  makePlayer("VAS_VEGETTI", "VAS", "Vegetti", "ATA", 81),
  makePlayer("VAS_PAYET", "VAS", "Payet", "MEI", 83),
  makePlayer("VAS_PRAXEDES", "VAS", "Praxedes", "MEI", 76),
  makePlayer("VAS_LEO_JARDIM", "VAS", "Léo Jardim", "GOL", 78),
  makePlayer("VAS_MEDEL", "VAS", "Medel", "ZAG", 80),
  makePlayer("VAS_PUMA_RODRIGUEZ", "VAS", "Puma Rodríguez", "LD", 77),
  makePlayer("VAS_LUCAS_PITON", "VAS", "Lucas Piton", "LE", 78),
  makePlayer("VAS_MAICON", "VAS", "Maicon", "ZAG", 76),
  makePlayer("VAS_PAULINHO", "VAS", "Paulinho", "ATA", 76),
  makePlayer("VAS_GABRIEL_PEC", "VAS", "Gabriel Pec", "ATA", 79),
  makePlayer("VAS_ERS_MARCUS", "VAS", "Erick Marcus", "ATA", 73),
  makePlayer("VAS_HUGO_MOURA", "VAS", "Hugo Moura", "VOL", 75),
  makePlayer("VAS_JAIR", "VAS", "Jair", "MEI", 78),
  makePlayer("VAS_ROSSI", "VAS", "Rossi", "ATA", 76),
  makePlayer("VAS_ROBSON_BAMBU", "VAS", "Robson Bambu", "ZAG", 75),
  makePlayer("VAS_JOAO_VICTOR", "VAS", "João Victor", "ZAG", 76),
  makePlayer("VAS_RAYAN", "VAS", "Rayan", "ATA", 72),
  makePlayer("VAS_DAVID", "VAS", "David", "ATA", 76),
  makePlayer("VAS_PAULO_HENRIQUE", "VAS", "Paulo Henrique", "LD", 73),
  makePlayer("VAS_GALDAMES", "VAS", "Galdames", "MEI", 75),

  // ---------------- Bahia (BAH) ----------------
  makePlayer("BAH_EVERALDO", "BAH", "Everaldo", "ATA", 78),
  makePlayer("BAH_BIEL", "BAH", "Biel", "ATA", 77),
  makePlayer("BAH_CAULY", "BAH", "Cauly", "MEI", 79),
  makePlayer("BAH_ACEVEDO", "BAH", "Acevedo", "VOL", 77),
  makePlayer("BAH_REZENDE", "BAH", "Rezende", "VOL", 76),
  makePlayer("BAH_YAGO_FELIPE", "BAH", "Yago Felipe", "MEI", 76),
  makePlayer("BAH_GILBERTO", "BAH", "Gilberto", "LD", 76),
  makePlayer("BAH_LUCIANO_JUBA", "BAH", "Luciano Juba", "LE", 78),
  makePlayer("BAH_VITOR_HUGO", "BAH", "Vitor Hugo", "ZAG", 74),
  makePlayer("BAH_GABRIEL_XAVIER", "BAH", "Gabriel Xavier", "ZAG", 73),
  makePlayer("BAH_MARCOS_FELIPE", "BAH", "Marcos Felipe", "GOL", 77),
  makePlayer("BAH_CICINHO", "BAH", "Cicinho", "LD", 74),
  makePlayer("BAH_KANU", "BAH", "Kanu", "ZAG", 77),
  makePlayer("BAH_RYAN", "BAH", "Ryan", "LE", 72),
  makePlayer("BAH_ADEMIR", "BAH", "Ademir", "ATA", 77),
  makePlayer("BAH_THACIANO", "BAH", "Thaciano", "MEI", 77),
  makePlayer("BAH_RAF_RATAO", "BAH", "Rafael Ratão", "ATA", 76),
  makePlayer("BAH_LUAN", "BAH", "Luan", "MEI", 73),
  makePlayer("BAH_VINICIUS_MINGOTTI", "BAH", "Vinícius Mingotti", "ATA", 73),
  makePlayer("BAH_JEAN_LUCAS", "BAH", "Jean Lucas", "MEI", 78),

  // ---------------- Fortaleza (FOR) ----------------
  makePlayer("FOR_YAGO_PIKACHU", "FOR", "Yago Pikachu", "LD", 79),
  makePlayer("FOR_LUCERO", "FOR", "Lucero", "ATA", 80),
  makePlayer("FOR_MARINHO", "FOR", "Marinho", "ATA", 79),
  makePlayer("FOR_TITI", "FOR", "Titi", "ZAG", 78),
  makePlayer("FOR_BENEVENUTO", "FOR", "Benevenuto", "ZAG", 78),
  makePlayer("FOR_HERCULES", "FOR", "Hércules", "VOL", 76),
  makePlayer("FOR_PCHETTINO", "FOR", "Pochettino", "MEI", 78),
  makePlayer("FOR_KERVIN_ANDRADE", "FOR", "Kervin Andrade", "MEI", 73),
  makePlayer("FOR_JOAO_RICARDO", "FOR", "João Ricardo", "GOL", 78),
  makePlayer("FOR_BRUNO_PACHECO", "FOR", "Bruno Pacheco", "LE", 77),
  makePlayer("FOR_ZE_WELISON", "FOR", "Zé Welison", "VOL", 77),
  makePlayer("FOR_MOISES", "FOR", "Moisés", "ATA", 79),
  makePlayer("FOR_SASHA", "FOR", "Sasha", "ATA", 77),
  
> Detalhe importante:  
> Tire a vírgula depois do Sasha, porque agora ele vira o **último** jogador da lista.

5. Salve (**Commit changes**).

---

## 🔄 Depois disso

1. Abra o jogo no navegador (GitHub Pages).  
2. Aperte **CTRL + F5** (ou limpar cache no celular).
3. Clique em **NOVO JOGO**:
   - Deve abrir a tela de:
     - Nome do técnico
     - Select de time
4. Seleciona um time ➜ **INICIAR CARREIRA** ➜ Dashboard abre.

---

Se, depois dessa correção, o **Novo Jogo ainda não abrir**, me fala **exatamente** o que acontece (e, se conseguir, copia a mensagem de erro do console do navegador) que eu já te ajudo no próximo ajuste.

Depois que o jogo estiver rodando redondo, a gente volta e completa com o resto dos jogadores da Série A/Série B.
::contentReference[oaicite:2]{index=2}

