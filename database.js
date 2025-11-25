// ======================================================
// VALE FUTEBOL MANAGER 2026 – DATABASE COMPLETO
// PARTE 1 — Times + Funções Base + Flamengo até Fluminense
// ======================================================

// --------------------------
// TIMES (SÉRIE A + SÉRIE B)
// --------------------------

const teams = [
  // SÉRIE A
  { id: "FLA", name: "Flamengo", shortName: "Flamengo", division: "A" },
  { id: "PAL", name: "Palmeiras", shortName: "Palmeiras", division: "A" },
  { id: "BOT", name: "Botafogo", shortName: "Botafogo", division: "A" },
  { id: "INT", name: "Internacional", shortName: "Inter", division: "A" },
  { id: "AMG", name: "Atlético-MG", shortName: "Atl-MG", division: "A" },
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
  { id: "MIR", name: "Mirassol", shortName: "Mirassol", division: "A" },

  // SÉRIE B
  { id: "CAP", name: "Athletico-PR", shortName: "Athletico", division: "B" },
  { id: "CFC", name: "Coritiba", shortName: "Coritiba", division: "B" },
  { id: "CHA", name: "Chapecoense", shortName: "Chapecoense", division: "B" },
  { id: "REM", name: "Remo", shortName: "Remo", division: "B" },
  { id: "AVA", name: "Avaí", shortName: "Avaí", division: "B" },
  { id: "AMG2", name: "América-MG", shortName: "América", division: "B" },
  { id: "ACG", name: "Atlético-GO", shortName: "Atl-GO", division: "B" },
  { id: "NOV", name: "Novorizontino", shortName: "Novoriz.", division: "B" },
  { id: "GOI", name: "Goiás", shortName: "Goiás", division: "B" },
  { id: "CRI", name: "Criciúma", shortName: "Criciúma", division: "B" },
  { id: "BSP", name: "Botafogo-SP", shortName: "Bota-SP", division: "B" },
  { id: "TOM", name: "Tombense", shortName: "Tombense", division: "B" }
];

// --------------------------
// FUNÇÃO AUXILIAR PARA CRIAR JOGADOR
// --------------------------
function makePlayer(team, name, pos, overall) {
    return {
        id: `${team}_${name.toUpperCase().replaceAll(" ", "_")}`,
        teamId: team,
        name,
        position: pos,
        overall,
        age: 27,
        value: Math.round(overall * 0.45),
    };
}

// --------------------------
// INÍCIO DO BANCO DE JOGADORES
// --------------------------
const players = [

    // ============================
    // FLAMENGO
    // ============================
    makePlayer("FLA", "Pedro", "ATA", 84),
    makePlayer("FLA", "Gabigol", "ATA", 83),
    makePlayer("FLA", "Arrascaeta", "MEI", 86),
    makePlayer("FLA", "Everton Cebolinha", "ATA", 82),
    makePlayer("FLA", "Gerson", "MEI", 84),
    makePlayer("FLA", "David Luiz", "ZAG", 79),
    makePlayer("FLA", "Léo Pereira", "ZAG", 81),
    makePlayer("FLA", "Matheus Cunha", "GOL", 78),
    makePlayer("FLA", "Wesley", "LD", 75),
    makePlayer("FLA", "Fabrício Bruno", "ZAG", 81),
    makePlayer("FLA", "Varela", "LD", 76),
    makePlayer("FLA", "Victor Hugo", "MEI", 76),
    makePlayer("FLA", "Allan", "VOL", 79),
    makePlayer("FLA", "Luiz Araújo", "ATA", 78),
    makePlayer("FLA", "Igor Jesus", "VOL", 76),
    makePlayer("FLA", "Carlinhos", "ATA", 74),
    makePlayer("FLA", "Rossi", "GOL", 80),
    makePlayer("FLA", "Thiago Maia", "VOL", 78),
    makePlayer("FLA", "Viña", "LE", 76),
    makePlayer("FLA", "Lorran", "MEI", 73),
    makePlayer("FLA", "Werton", "ATA", 72),
    makePlayer("FLA", "Cleiton", "GOL", 71),
    makePlayer("FLA", "Otávio", "VOL", 70),
    makePlayer("FLA", "Iago", "LE", 70),

    // ============================
    // PALMEIRAS
    // ============================
    makePlayer("PAL", "Weverton", "GOL", 85),
    makePlayer("PAL", "Murilo", "ZAG", 82),
    makePlayer("PAL", "Gustavo Gómez", "ZAG", 85),
    makePlayer("PAL", "Piquerez", "LE", 82),
    makePlayer("PAL", "Mayke", "LD", 79),
    makePlayer("PAL", "Zé Rafael", "VOL", 82),
    makePlayer("PAL", "Raphael Veiga", "MEI", 86),
    makePlayer("PAL", "Endrick", "ATA", 86),
    makePlayer("PAL", "Rony", "ATA", 82),
    makePlayer("PAL", "Dudu", "ATA", 84),
    makePlayer("PAL", "Flaco López", "ATA", 79),
    makePlayer("PAL", "Lázaro", "ATA", 76),
    makePlayer("PAL", "Fabinho", "VOL", 75),
    makePlayer("PAL", "Vanderlan", "LE", 75),
    makePlayer("PAL", "Richard Ríos", "VOL", 80),
    makePlayer("PAL", "Aníbal Moreno", "VOL", 81),
    makePlayer("PAL", "Bruno Rodrigues", "ATA", 80),
    makePlayer("PAL", "Kauan Santos", "ZAG", 73),
    makePlayer("PAL", "Naves", "ZAG", 72),
    makePlayer("PAL", "Jhon Jhon", "MEI", 73),
    makePlayer("PAL", "Garcia", "LD", 72),
    makePlayer("PAL", "Michel", "GOL", 71),
    makePlayer("PAL", "Luis Guilherme", "MEI", 75),

    // ============================
    // BOTAFOGO
    // ============================
    makePlayer("BOT", "Tiquinho Soares", "ATA", 82),
    makePlayer("BOT", "Eduardo", "MEI", 80),
    makePlayer("BOT", "Júnior Santos", "ATA", 80),
    makePlayer("BOT", "Marçal", "LE", 78),
    makePlayer("BOT", "Adryelson", "ZAG", 80),
    makePlayer("BOT", "Gatito Fernández", "GOL", 80),
    makePlayer("BOT", "Hugo", "LE", 73),
    makePlayer("BOT", "Danilo Barbosa", "VOL", 76),
    makePlayer("BOT", "PK", "MEI", 72),
    makePlayer("BOT", "Savarino", "ATA", 80),
    makePlayer("BOT", "Bastos", "ZAG", 77),
    makePlayer("BOT", "Jeffinho", "ATA", 77),
    makePlayer("BOT", "Diego Hernández", "ATA", 74),
    makePlayer("BOT", "Damián Suárez", "LD", 76),
    makePlayer("BOT", "Cuiabano", "LE", 73),
    makePlayer("BOT", "Yarlen", "ATA", 70),
    makePlayer("BOT", "Kauê", "MEI", 68),
    makePlayer("BOT", "Matheus Nascimento", "ATA", 70),
    makePlayer("BOT", "Rafael", "LD", 74),
    makePlayer("BOT", "Lucas Fernandes", "MEI", 75),

    // ============================
    // INTERNACIONAL
    // ============================
    makePlayer("INT", "Enner Valencia", "ATA", 83),
    makePlayer("INT", "Alan Patrick", "MEI", 82),
    makePlayer("INT", "Wanderson", "ATA", 80),
    makePlayer("INT", "Maurício", "MEI", 79),
    makePlayer("INT", "Aránguiz", "VOL", 82),
    makePlayer("INT", "Vitão", "ZAG", 80),
    makePlayer("INT", "Hugo Mallo", "LD", 79),
    makePlayer("INT", "Rochet", "GOL", 82),
    makePlayer("INT", "Bustos", "LD", 78),
    makePlayer("INT", "Mercado", "ZAG", 78),
    makePlayer("INT", "Matheus Dias", "MEI", 74),
    makePlayer("INT", "Bruno Henrique", "VOL", 78),
    makePlayer("INT", "Wesley", "ATA", 75),
    makePlayer("INT", "Robert Renan", "ZAG", 74),
    makePlayer("INT", "Lucca", "ATA", 70),
    makePlayer("INT", "Gustavo Prado", "MEI", 71),
    makePlayer("INT", "Gabriel Barros", "MEI", 72),
    makePlayer("INT", "Thiago Maia", "VOL", 79),

    // ============================
    // ATLÉTICO-MG
    // ============================
    makePlayer("AMG", "Hulk", "ATA", 84),
    makePlayer("AMG", "Paulinho", "ATA", 82),
    makePlayer("AMG", "Guilherme Arana", "LE", 82),
    makePlayer("AMG", "Everson", "GOL", 81),
    makePlayer("AMG", "Battaglia", "VOL", 79),
    makePlayer("AMG", "Zaracho", "MEI", 81),
    makePlayer("AMG", "Igor Gomes", "MEI", 78),
    makePlayer("AMG", "Jemerson", "ZAG", 78),
    makePlayer("AMG", "Rubens", "LE", 74),
    makePlayer("AMG", "Vargas", "ATA", 77),
    makePlayer("AMG", "Alan Franco", "VOL", 77),
    makePlayer("AMG", "Mariano", "LD", 76),
    makePlayer("AMG", "Pedrinho", "MEI", 76),
    makePlayer("AMG", "Edenilson", "VOL", 77),
    makePlayer("AMG", "Palacios", "MEI", 73),
    makePlayer("AMG", "Cadu", "ATA", 70),
    makePlayer("AMG", "Rômulo", "ATA", 68),
    makePlayer("AMG", "Nathan Silva", "ZAG", 76),
    makePlayer("AMG", "Pavón", "ATA", 79),

    // ============================
    // CORINTHIANS
    // ============================
    makePlayer("COR", "Yuri Alberto", "ATA", 81),
    makePlayer("COR", "Renato Augusto", "MEI", 83),
    makePlayer("COR", "Fausto Vera", "VOL", 78),
    makePlayer("COR", "Maycon", "VOL", 78),
    makePlayer("COR", "Cássio", "GOL", 82),
    makePlayer("COR", "Fagner", "LD", 79),
    makePlayer("COR", "Gil", "ZAG", 78),
    makePlayer("COR", "Wesley", "ATA", 77),
    makePlayer("COR", "Matías Rojas", "MEI", 79),
    makePlayer("COR", "Ángel Romero", "ATA", 79),
    makePlayer("COR", "Gabriel Moscardo", "VOL", 74),
    makePlayer("COR", "Pedro", "ATA", 70),
    makePlayer("COR", "Giovane", "ATA", 72),
    makePlayer("COR", "Bidon", "MEI", 72),
    makePlayer("COR", "Murillo", "ZAG", 75),
    makePlayer("COR", "Ruan Oliveira", "MEI", 72),
    makePlayer("COR", "Carlos Miguel", "GOL", 79),
    makePlayer("COR", "Léo Mana", "LD", 70),
    makePlayer("COR", "Breno Bidon", "MEI", 74),
    makePlayer("COR", "Caetano", "ZAG", 74),

    // ============================
    // SÃO PAULO
    // ============================
    makePlayer("SAO", "Calleri", "ATA", 82),
    makePlayer("SAO", "Luciano", "ATA", 80),
    makePlayer("SAO", "Lucas Moura", "ATA", 82),
    makePlayer("SAO", "James Rodríguez", "MEI", 83),
    makePlayer("SAO", "Wellington Rato", "MEI", 77),
    makePlayer("SAO", "Pablo Maia", "VOL", 80),
    makePlayer("SAO", "Alisson", "MEI", 78),
    makePlayer("SAO", "Rafinha", "LD", 79),
    makePlayer("SAO", "Arboleda", "ZAG", 80),
    makePlayer("SAO", "Diego Costa", "ZAG", 78),
    makePlayer("SAO", "Beraldo", "ZAG", 77),
    makePlayer("SAO", "Igor Vinícius", "LD", 79),
    makePlayer("SAO", "Moreira", "LD", 75),
    makePlayer("SAO", "Nestor", "MEI", 78),
    makePlayer("SAO", "Michel Araújo", "MEI", 76),
    makePlayer("SAO", "Juan", "ATA", 72),
    makePlayer("SAO", "Nathan", "LE", 72),
    makePlayer("SAO", "Luiz Gustavo", "VOL", 77),
    makePlayer("SAO", "Ferraresi", "ZAG", 76),
    makePlayer("SAO", "Jandrei", "GOL", 77),
    makePlayer("SAO", "Young", "ATA", 70),
    makePlayer("SAO", "Rodrigo Nestor", "MEI", 78),

    // ============================
    // FLUMINENSE
    // ============================
    makePlayer("FLU", "Germán Cano", "ATA", 83),
    makePlayer("FLU", "Ganso", "MEI", 82),
    makePlayer("FLU", "Keno", "ATA", 79),
    makePlayer("FLU", "Jhon Arias", "ATA", 82),
    makePlayer("FLU", "André", "VOL", 83),
    makePlayer("FLU", "Felipe Melo", "VOL", 78),
    makePlayer("FLU", "Marcelo", "LE", 82),
    makePlayer("FLU", "Samuel Xavier", "LD", 78),
    makePlayer("FLU", "Nino", "ZAG", 80),
    makePlayer("FLU", "Manoel", "ZAG", 78),
    makePlayer("FLU", "Lelê", "ATA", 75),
    makePlayer("FLU", "Lima", "MEI", 78),
    makePlayer("FLU", "Martinelli", "VOL", 77),
    makePlayer("FLU", "Diogo Barbosa", "LE", 75),
    makePlayer("FLU", "Marlon", "LE", 75),
    makePlayer("FLU", "John Kennedy", "ATA", 76),
    makePlayer("FLU", "Isaac", "ATA", 72),
    makePlayer("FLU", "Kauã Elias", "ATA", 70),
    makePlayer("FLU", "Gabriel Pires", "MEI", 77),
    makePlayer("FLU", "Daniel", "MEI", 74),
    makePlayer("FLU", "Fábio", "GOL", 82),
];
// ======================================================
// CONTINUAÇÃO DOS ELENCOS – SÉRIE A (RESTANTE) + MODELAGEM SÉRIE B
// Cole este bloco após o fechamento de const players = [...];
// ======================================================

players.push(

  // ============================
  // GRÊMIO
  // ============================
  makePlayer("GRE", "Luis Suárez", "ATA", 84),
  makePlayer("GRE", "Villasanti", "VOL", 80),
  makePlayer("GRE", "Cristaldo", "MEI", 80),
  makePlayer("GRE", "Carballo", "MEI", 78),
  makePlayer("GRE", "Kannemann", "ZAG", 81),
  makePlayer("GRE", "Geromel", "ZAG", 80),
  makePlayer("GRE", "Reinaldo", "LE", 78),
  makePlayer("GRE", "João Pedro", "LD", 76),
  makePlayer("GRE", "Ferreira", "ATA", 78),
  makePlayer("GRE", "Nathan Fernandes", "ATA", 73),
  makePlayer("GRE", "Galdino", "MEI", 74),
  makePlayer("GRE", "Pepê", "MEI", 79),
  makePlayer("GRE", "Rodrigo Ely", "ZAG", 76),
  makePlayer("GRE", "Gustavo Martins", "ZAG", 74),
  makePlayer("GRE", "Gabriel Grando", "GOL", 76),
  makePlayer("GRE", "André Henrique", "ATA", 72),
  makePlayer("GRE", "Edenilson", "MEI", 79),
  makePlayer("GRE", "Gustavo Nunes", "ATA", 72),
  makePlayer("GRE", "Cuiabano", "LE", 73),
  makePlayer("GRE", "Ronald", "MEI", 71),

  // ============================
  // SANTOS
  // ============================
  makePlayer("SAN", "Marcos Leonardo", "ATA", 82),
  makePlayer("SAN", "Soteldo", "ATA", 81),
  makePlayer("SAN", "João Basso", "ZAG", 77),
  makePlayer("SAN", "Joaquim", "ZAG", 76),
  makePlayer("SAN", "Dodô", "LE", 78),
  makePlayer("SAN", "João Paulo", "GOL", 81),
  makePlayer("SAN", "Lucas Lima", "MEI", 78),
  makePlayer("SAN", "Rodrigo Fernández", "VOL", 77),
  makePlayer("SAN", "Kevyson", "LE", 72),
  makePlayer("SAN", "Miguelito", "MEI", 72),
  makePlayer("SAN", "Ivonei", "MEI", 72),
  makePlayer("SAN", "Sandry", "VOL", 74),
  makePlayer("SAN", "Felipe Jonatan", "LE", 76),
  makePlayer("SAN", "Messias", "ZAG", 76),
  makePlayer("SAN", "Gabriel Inocêncio", "LD", 73),
  makePlayer("SAN", "Morelos", "ATA", 77),
  makePlayer("SAN", "Nonato", "MEI", 77),
  makePlayer("SAN", "Furman", "VOL", 72),
  makePlayer("SAN", "Weslley Patati", "ATA", 71),
  makePlayer("SAN", "Rincón", "VOL", 76),

  // ============================
  // CRUZEIRO
  // ============================
  makePlayer("CRU", "Matheus Pereira", "MEI", 82),
  makePlayer("CRU", "Wesley", "ATA", 76),
  makePlayer("CRU", "Rafael Cabral", "GOL", 79),
  makePlayer("CRU", "Lucas Silva", "VOL", 78),
  makePlayer("CRU", "Filipe Machado", "VOL", 76),
  makePlayer("CRU", "William", "LD", 76),
  makePlayer("CRU", "Marlon", "LE", 77),
  makePlayer("CRU", "Oliveira", "ZAG", 76),
  makePlayer("CRU", "Zé Ivaldo", "ZAG", 77),
  makePlayer("CRU", "Vital", "MEI", 77),
  makePlayer("CRU", "Arthur Gomes", "ATA", 77),
  makePlayer("CRU", "Fernando Henrique", "MEI", 72),
  makePlayer("CRU", "Palacios", "ATA", 73),
  makePlayer("CRU", "Robert", "ATA", 72),
  makePlayer("CRU", "Ramiro", "VOL", 77),
  makePlayer("CRU", "Kaiki", "ZAG", 72),
  makePlayer("CRU", "Stênio", "ATA", 71),
  makePlayer("CRU", "Jussa", "VOL", 74),
  makePlayer("CRU", "João Marcelo", "ZAG", 73),
  makePlayer("CRU", "Rafael Elias", "ATA", 74),

  // ============================
  // VASCO DA GAMA
  // ============================
  makePlayer("VAS", "Vegetti", "ATA", 81),
  makePlayer("VAS", "Payet", "MEI", 83),
  makePlayer("VAS", "Praxedes", "MEI", 76),
  makePlayer("VAS", "Léo Jardim", "GOL", 78),
  makePlayer("VAS", "Medel", "ZAG", 80),
  makePlayer("VAS", "Puma Rodríguez", "LD", 77),
  makePlayer("VAS", "Lucas Piton", "LE", 78),
  makePlayer("VAS", "Maicon", "ZAG", 76),
  makePlayer("VAS", "Paulinho", "ATA", 77),
  makePlayer("VAS", "Gabriel Pec", "ATA", 79),
  makePlayer("VAS", "Erick Marcus", "ATA", 73),
  makePlayer("VAS", "Hugo Moura", "VOL", 76),
  makePlayer("VAS", "Jair", "VOL", 77),
  makePlayer("VAS", "Rossi", "ATA", 76),
  makePlayer("VAS", "Robson Bambu", "ZAG", 75),
  makePlayer("VAS", "João Victor", "ZAG", 75),
  makePlayer("VAS", "Rayan", "ATA", 72),
  makePlayer("VAS", "David", "ATA", 76),
  makePlayer("VAS", "Paulo Henrique", "LD", 74),
  makePlayer("VAS", "Galdames", "MEI", 75),

  // ============================
  // BAHIA
  // ============================
  makePlayer("BAH", "Everaldo", "ATA", 78),
  makePlayer("BAH", "Biel", "ATA", 77),
  makePlayer("BAH", "Cauly", "MEI", 79),
  makePlayer("BAH", "Acevedo", "VOL", 76),
  makePlayer("BAH", "Rezende", "VOL", 76),
  makePlayer("BAH", "Yago Felipe", "MEI", 77),
  makePlayer("BAH", "Gilberto", "LD", 75),
  makePlayer("BAH", "Luciano Juba", "LE", 78),
  makePlayer("BAH", "Vitor Hugo", "ZAG", 77),
  makePlayer("BAH", "Gabriel Xavier", "ZAG", 74),
  makePlayer("BAH", "Marcos Felipe", "GOL", 77),
  makePlayer("BAH", "Cicinho", "LD", 74),
  makePlayer("BAH", "Kanu", "ZAG", 77),
  makePlayer("BAH", "Ryan", "LE", 72),
  makePlayer("BAH", "Ademir", "ATA", 77),
  makePlayer("BAH", "Thaciano", "MEI", 78),
  makePlayer("BAH", "Rafael Ratão", "ATA", 76),
  makePlayer("BAH", "Luan", "MEI", 72),
  makePlayer("BAH", "Vinícius Mingotti", "ATA", 74),
  makePlayer("BAH", "Jean Lucas", "MEI", 78),

  // ============================
  // FORTALEZA
  // ============================
  makePlayer("FOR", "Yago Pikachu", "LD", 79),
  makePlayer("FOR", "Lucero", "ATA", 80),
  makePlayer("FOR", "Marinho", "ATA", 79),
  makePlayer("FOR", "Titi", "ZAG", 78),
  makePlayer("FOR", "Benevenuto", "ZAG", 78),
  makePlayer("FOR", "Hércules", "VOL", 77),
  makePlayer("FOR", "Pochettino", "MEI", 78),
  makePlayer("FOR", "Kervin Andrade", "MEI", 73),
  makePlayer("FOR", "João Ricardo", "GOL", 78),
  makePlayer("FOR", "Bruno Pacheco", "LE", 77),
  makePlayer("FOR", "Zé Welison", "VOL", 77),
  makePlayer("FOR", "Moisés", "ATA", 79),
  makePlayer("FOR", "Sasha", "ATA", 77),
  makePlayer("FOR", "Calebe", "MEI", 75),
  makePlayer("FOR", "Dudu", "LD", 74),
  makePlayer("FOR", "Pedro Rocha", "ATA", 77),
  makePlayer("FOR", "Kayzer", "ATA", 77),
  makePlayer("FOR", "Romarinho", "ATA", 78),
  makePlayer("FOR", "Crispim", "LE", 76),
  makePlayer("FOR", "Samuel", "GOL", 72),

  // ============================
  // RB BRAGANTINO
  // ============================
  makePlayer("RBB", "Helinho", "ATA", 79),
  makePlayer("RBB", "Vitinho", "ATA", 78),
  makePlayer("RBB", "Juninho Capixaba", "LE", 78),
  makePlayer("RBB", "Léo Realpe", "ZAG", 75),
  makePlayer("RBB", "Cleiton", "GOL", 78),
  makePlayer("RBB", "Nathan Mendes", "LD", 74),
  makePlayer("RBB", "Lucas Evangelista", "MEI", 79),
  makePlayer("RBB", "Eric Ramires", "MEI", 78),
  makePlayer("RBB", "Thiago Borbas", "ATA", 78),
  makePlayer("RBB", "Eduardo Sasha", "ATA", 79),
  makePlayer("RBB", "Bruninho", "MEI", 75),
  makePlayer("RBB", "Henry Mosquera", "ATA", 74),
  makePlayer("RBB", "Lincoln", "ATA", 73),
  makePlayer("RBB", "Andrés Hurtado", "LD", 73),
  makePlayer("RBB", "Gustavinho", "MEI", 73),
  makePlayer("RBB", "Matheus Fernandes", "VOL", 76),
  makePlayer("RBB", "Luan Cândido", "LE", 77),
  makePlayer("RBB", "Miguel", "ATA", 70),
  makePlayer("RBB", "Douglas Mendes", "ZAG", 71),

  // ============================
  // CEARÁ
  // ============================
  makePlayer("CEA", "Erick", "ATA", 77),
  makePlayer("CEA", "Saulo Mineiro", "ATA", 76),
  makePlayer("CEA", "Guilherme Castilho", "MEI", 77),
  makePlayer("CEA", "Richard", "VOL", 76),
  makePlayer("CEA", "Léo Santos", "ZAG", 75),
  makePlayer("CEA", "Buiú", "LD", 73),
  makePlayer("CEA", "Richardson", "VOL", 76),
  makePlayer("CEA", "Vina", "MEI", 79),
  makePlayer("CEA", "Janderson", "ATA", 75),
  makePlayer("CEA", "Luvannor", "ATA", 75),
  makePlayer("CEA", "David Ricardo", "ZAG", 73),
  makePlayer("CEA", "Bruno Ferreira", "GOL", 72),
  makePlayer("CEA", "Chay", "MEI", 74),
  makePlayer("CEA", "Jean Carlos", "MEI", 76),
  makePlayer("CEA", "Warley", "LD", 73),
  makePlayer("CEA", "Geovane", "MEI", 72),
  makePlayer("CEA", "Cléber", "ATA", 76),
  makePlayer("CEA", "Michel Macedo", "LD", 74),
  makePlayer("CEA", "Tiago Pagnussat", "ZAG", 76),
  makePlayer("CEA", "André Luiz", "ATA", 72),

  // ============================
  // SPORT
  // ============================
  makePlayer("SPT", "Gustavo Coutinho", "ATA", 77),
  makePlayer("SPT", "Juba", "MEI", 78),
  makePlayer("SPT", "Alan Ruiz", "MEI", 77),
  makePlayer("SPT", "Rafael Thyere", "ZAG", 77),
  makePlayer("SPT", "Sabino", "ZAG", 77),
  makePlayer("SPT", "Renzo", "LD", 74),
  makePlayer("SPT", "Lucas Hernandes", "LE", 74),
  makePlayer("SPT", "Pedro Lima", "LD", 75),
  makePlayer("SPT", "Gabriel Santos", "ATA", 74),
  makePlayer("SPT", "Luciano Juba", "MEI", 78),
  makePlayer("SPT", "Edinho", "ATA", 75),
  makePlayer("SPT", "Wanderson", "ZAG", 73),
  makePlayer("SPT", "Fábio Matheus", "VOL", 73),
  makePlayer("SPT", "Fabrício Daniel", "ATA", 74),
  makePlayer("SPT", "Ronaldo", "GOL", 74),
  makePlayer("SPT", "Dalbert", "LE", 75),
  makePlayer("SPT", "Chico", "VOL", 72),
  makePlayer("SPT", "Jordan", "ZAG", 72),
  makePlayer("SPT", "Denílson", "ATA", 72),
  makePlayer("SPT", "Alisson Farias", "ATA", 73),

  // ============================
  // JUVENTUDE
  // ============================
  makePlayer("JUV", "Gilberto", "ATA", 77),
  makePlayer("JUV", "Nenê", "MEI", 78),
  makePlayer("JUV", "Jadson", "VOL", 76),
  makePlayer("JUV", "Rodrigo Sam", "ZAG", 75),
  makePlayer("JUV", "Lucas Barbosa", "ATA", 74),
  makePlayer("JUV", "Jean Irmer", "VOL", 75),
  makePlayer("JUV", "Alan Ruschel", "LE", 75),
  makePlayer("JUV", "Matheus Vargas", "MEI", 74),
  makePlayer("JUV", "Gabriel Tota", "MEI", 72),
  makePlayer("JUV", "Vitor Mendes", "ZAG", 74),
  makePlayer("JUV", "Elton", "ATA", 74),
  makePlayer("JUV", "Paulo Henrique", "LD", 73),
  makePlayer("JUV", "Darlan", "MEI", 74),
  makePlayer("JUV", "Kelvi", "ZAG", 71),
  makePlayer("JUV", "Ruan", "ATA", 71),
  makePlayer("JUV", "Ricardo Bueno", "ATA", 74),
  makePlayer("JUV", "Capixaba", "ATA", 75),
  makePlayer("JUV", "Chico", "MEI", 73),
  makePlayer("JUV", "Rafael Forster", "ZAG", 74),
  makePlayer("JUV", "César", "GOL", 74),

  // ============================
  // VITÓRIA
  // ============================
  makePlayer("VIT", "Wagner Leonardo", "ZAG", 76),
  makePlayer("VIT", "Zé Hugo", "ATA", 74),
  makePlayer("VIT", "Osvaldo", "ATA", 76),
  makePlayer("VIT", "Rodrigo Andrade", "VOL", 76),
  makePlayer("VIT", "Léo Gamalho", "ATA", 77),
  makePlayer("VIT", "Rafinha", "MEI", 75),
  makePlayer("VIT", "Daniel", "MEI", 76),
  makePlayer("VIT", "Lucas Arcanjo", "GOL", 75),
  makePlayer("VIT", "João Lucas", "LD", 74),
  makePlayer("VIT", "Camutanga", "ZAG", 74),
  makePlayer("VIT", "Dudu", "LE", 73),
  makePlayer("VIT", "Gegê", "MEI", 73),
  makePlayer("VIT", "Bruno Oliveira", "MEI", 74),
  makePlayer("VIT", "Matheusinho", "MEI", 74),
  makePlayer("VIT", "Railan", "LD", 72),
  makePlayer("VIT", "Felipe Vieira", "LE", 72),
  makePlayer("VIT", "Rodrigo Carioca", "ATA", 72),
  makePlayer("VIT", "Marco Antônio", "MEI", 73),
  makePlayer("VIT", "Iury Castilho", "ATA", 74),
  makePlayer("VIT", "Willian Oliveira", "VOL", 75),

  // ============================
  // MIRASSOL
  // ============================
  makePlayer("MIR", "Zé Roberto", "ATA", 76),
  makePlayer("MIR", "Fabrício", "ZAG", 74),
  makePlayer("MIR", "Camilo", "MEI", 78),
  makePlayer("MIR", "Negueba", "ATA", 75),
  makePlayer("MIR", "Rodrigo Sam", "ZAG", 74),
  makePlayer("MIR", "Danielzinho", "MEI", 75),
  makePlayer("MIR", "Luiz Otávio", "ZAG", 74),
  makePlayer("MIR", "Vinícius", "ATA", 73),
  makePlayer("MIR", "Gabriel", "MEI", 72),
  makePlayer("MIR", "Lucas Ramon", "LD", 73),
  makePlayer("MIR", "Moraes", "LE", 73),
  makePlayer("MIR", "Rafael Silva", "ATA", 74),
  makePlayer("MIR", "Kauan", "MEI", 71),
  makePlayer("MIR", "Robson", "VOL", 72),
  makePlayer("MIR", "Rodrigo Ferreira", "LD", 73),
  makePlayer("MIR", "Cristian", "VOL", 72),
  makePlayer("MIR", "Paulinho", "ATA", 73),
  makePlayer("MIR", "João Paulo", "GOL", 73),
  makePlayer("MIR", "Matheus Oliveira", "MEI", 72),
  makePlayer("MIR", "Chico", "ZAG", 71)
);
// ======================================================
// SÉRIE B 2026 – ELENCOS COMPLETOS
// Continuação direta do players.push(...)
// ======================================================

// ------------------------------------------------------
// ATHLETICO-PR (na Série B no seu projeto)
// ------------------------------------------------------
players.push(
  makePlayer("APR", "Bruno Zapelli", "MEI", 78),
  makePlayer("APR", "Vitor Roque", "ATA", 82),
  makePlayer("APR", "Fernandinho", "VOL", 80),
  makePlayer("APR", "Pablo", "ATA", 77),
  makePlayer("APR", "Thiago Heleno", "ZAG", 78),
  makePlayer("APR", "Bento", "GOL", 82),
  makePlayer("APR", "Erick", "VOL", 77),
  makePlayer("APR", "Christian", "MEI", 76),
  makePlayer("APR", "Madson", "LD", 75),
  makePlayer("APR", "Canobbio", "ATA", 78),
  makePlayer("APR", "Alex Santana", "MEI", 76),
  makePlayer("APR", "Léo Cittadini", "MEI", 75),
  makePlayer("APR", "Vitinho", "ATA", 74),
  makePlayer("APR", "Pedrinho", "ATA", 72),
  makePlayer("APR", "Daniel Cruz", "ATA", 71),
  makePlayer("APR", "Kaique Rocha", "ZAG", 74),
  makePlayer("APR", "Esquivel", "LE", 76),
  makePlayer("APR", "Julimar", "ATA", 71),
  makePlayer("APR", "Romulo", "MEI", 72),
  makePlayer("APR", "Renan Viana", "GOL", 70)
);

// ------------------------------------------------------
// CORITIBA
// ------------------------------------------------------
players.push(
  makePlayer("CFC", "Alef Manga", "ATA", 78),
  makePlayer("CFC", "Robson", "ATA", 77),
  makePlayer("CFC", "Natanael", "LD", 75),
  makePlayer("CFC", "Andrey", "VOL", 76),
  makePlayer("CFC", "Bruno Gomes", "VOL", 76),
  makePlayer("CFC", "Kaio César", "ATA", 74),
  makePlayer("CFC", "Samaris", "VOL", 75),
  makePlayer("CFC", "Kuscevic", "ZAG", 76),
  makePlayer("CFC", "Benítez", "MEI", 76),
  makePlayer("CFC", "Fabrício", "ZAG", 74),
  makePlayer("CFC", "Boschilia", "MEI", 75),
  makePlayer("CFC", "Thiago Dombroski", "ZAG", 74),
  makePlayer("CFC", "Matheus Bianqui", "MEI", 72),
  makePlayer("CFC", "Jean Pierre", "MEI", 75),
  makePlayer("CFC", "Igor Paixão", "ATA", 72),
  makePlayer("CFC", "Willian Farias", "VOL", 74),
  makePlayer("CFC", "Henrique", "ZAG", 73),
  makePlayer("CFC", "Warley", "LD", 72),
  makePlayer("CFC", "Matheus Alexandre", "LD", 72),
  makePlayer("CFC", "Gabriel", "GOL", 72)
);

// ------------------------------------------------------
// CHAPECOENSE
// ------------------------------------------------------
players.push(
  makePlayer("CHA", "Perotti", "ATA", 77),
  makePlayer("CHA", "Alisson Farias", "ATA", 74),
  makePlayer("CHA", "Rodrigo Freitas", "ZAG", 74),
  makePlayer("CHA", "Maurício", "VOL", 73),
  makePlayer("CHA", "Mancha", "VOL", 72),
  makePlayer("CHA", "João Paulo", "GOL", 75),
  makePlayer("CHA", "Cleylton", "ZAG", 73),
  makePlayer("CHA", "Chrystian", "LD", 72),
  makePlayer("CHA", "Pablo Oliveira", "MEI", 72),
  makePlayer("CHA", "Darlan", "MEI", 74),
  makePlayer("CHA", "Kaio Nunes", "ATA", 73),
  makePlayer("CHA", "Vini Paulista", "MEI", 72),
  makePlayer("CHA", "Tiago Real", "MEI", 74),
  makePlayer("CHA", "Geovane", "MEI", 71),
  makePlayer("CHA", "Lucas Ribeiro", "ZAG", 74),
  makePlayer("CHA", "Ronei", "LD", 72),
  makePlayer("CHA", "Busanello", "LE", 73),
  makePlayer("CHA", "Guilherme", "ATA", 71),
  makePlayer("CHA", "Léo Gomes", "VOL", 73),
  makePlayer("CHA", "Matheus Bachi", "ATA", 70)
);

// ------------------------------------------------------
// REMO
// ------------------------------------------------------
players.push(
  makePlayer("REM", "Muriqui", "ATA", 76),
  makePlayer("REM", "Ronald", "ATA", 72),
  makePlayer("REM", "Neto Pessoa", "ATA", 73),
  makePlayer("REM", "Leonan", "LE", 72),
  makePlayer("REM", "Kevin", "LD", 72),
  makePlayer("REM", "Jean Silva", "ATA", 72),
  makePlayer("REM", "Lucas Siqueira", "VOL", 74),
  makePlayer("REM", "Felipe Gedoz", "MEI", 76),
  makePlayer("REM", "Vinícius", "GOL", 74),
  makePlayer("REM", "Paulinho Curuá", "VOL", 72),
  makePlayer("REM", "Warley", "LD", 72),
  makePlayer("REM", "Anderson Uchôa", "VOL", 73),
  makePlayer("REM", "Wellington Silva", "ATA", 72),
  makePlayer("REM", "Pedro Vitor", "ATA", 72),
  makePlayer("REM", "Rafael Jansen", "ZAG", 73),
  makePlayer("REM", "Igor Fernandes", "LE", 72),
  makePlayer("REM", "Daniel Felipe", "ZAG", 72),
  makePlayer("REM", "Erick Flores", "MEI", 71),
  makePlayer("REM", "Pingo", "MEI", 70),
  makePlayer("REM", "Diego Guerra", "VOL", 70)
);

// ------------------------------------------------------
// CUIABÁ
// ------------------------------------------------------
players.push(
  makePlayer("CUI", "Deyverson", "ATA", 78),
  makePlayer("CUI", "Clayson", "ATA", 75),
  makePlayer("CUI", "Jonathan Cafú", "ATA", 74),
  makePlayer("CUI", "Rodriguinho", "MEI", 76),
  makePlayer("CUI", "Pepê", "MEI", 76),
  makePlayer("CUI", "Lucas Mineiro", "VOL", 75),
  makePlayer("CUI", "Empereur", "ZAG", 75),
  makePlayer("CUI", "João Lucas", "LD", 74),
  makePlayer("CUI", "Walter", "GOL", 75),
  makePlayer("CUI", "Marllon", "ZAG", 74),
  makePlayer("CUI", "André Luís", "ATA", 74),
  makePlayer("CUI", "Denílson", "ATA", 72),
  makePlayer("CUI", "Rafael Gava", "MEI", 75),
  makePlayer("CUI", "Uendel", "LE", 75),
  makePlayer("CUI", "Paulão", "ZAG", 74),
  makePlayer("CUI", "Camilo", "MEI", 74),
  makePlayer("CUI", "Elton", "ATA", 73),
  makePlayer("CUI", "Yuri", "VOL", 72),
  makePlayer("CUI", "Felipe Marques", "ATA", 72),
  makePlayer("CUI", "Auremir", "VOL", 72)
);

// ------------------------------------------------------
// AMÉRICA-MG
// ------------------------------------------------------
players.push(
  makePlayer("AMG2", "Aloisio", "ATA", 77),
  makePlayer("AMG2", "Benítez", "MEI", 77),
  makePlayer("AMG2", "Juninho", "VOL", 76),
  makePlayer("AMG2", "Mastriani", "ATA", 78),
  makePlayer("AMG2", "Everaldo", "ATA", 76),
  makePlayer("AMG2", "Danilo Avelar", "ZAG", 74),
  makePlayer("AMG2", "Cavichioli", "GOL", 75),
  makePlayer("AMG2", "Marlon", "LE", 76),
  makePlayer("AMG2", "Lucas Kal", "ZAG", 74),
  makePlayer("AMG2", "Felipe Azevedo", "ATA", 75),
  makePlayer("AMG2", "Alê", "MEI", 75),
  makePlayer("AMG2", "Breno", "VOL", 73),
  makePlayer("AMG2", "Pedrinho", "ATA", 72),
  makePlayer("AMG2", "Paulinho Boia", "ATA", 72),
  makePlayer("AMG2", "Gustavinho", "MEI", 71),
  makePlayer("AMG2", "Ricardo Silva", "ZAG", 72),
  makePlayer("AMG2", "Mateus Gonçalves", "ATA", 73),
  makePlayer("AMG2", "Wellington Paulista", "ATA", 74),
  makePlayer("AMG2", "Índio", "ATA", 72),
  makePlayer("AMG2", "Adyson", "MEI", 70)
);

// ------------------------------------------------------
// ATLÉTICO-GO
// ------------------------------------------------------
players.push(
  makePlayer("ATG", "Shaylon", "MEI", 76),
  makePlayer("ATG", "Luiz Fernando", "ATA", 76),
  makePlayer("ATG", "Baralhas", "VOL", 75),
  makePlayer("ATG", "Ronaldo", "GOL", 74),
  makePlayer("ATG", "Jefferson", "LE", 73),
  makePlayer("ATG", "Dudu", "LD", 73),
  makePlayer("ATG", "Airton", "ATA", 73),
  makePlayer("ATG", "Matheus Sales", "VOL", 73),
  makePlayer("ATG", "Wellington Rato", "MEI", 76),
  makePlayer("ATG", "Pedro Raul", "ATA", 78),
  makePlayer("ATG", "Gabriel Barros", "ATA", 75),
  makePlayer("ATG", "Edson", "VOL", 73),
  makePlayer("ATG", "Marlon Freitas", "VOL", 76),
  makePlayer("ATG", "Arthur Gomes", "ATA", 74),
  makePlayer("ATG", "Michel", "ZAG", 72),
  makePlayer("ATG", "Nathan", "MEI", 72),
  makePlayer("ATG", "Luan Polli", "GOL", 72),
  makePlayer("ATG", "André Luís", "ATA", 73),
  makePlayer("ATG", "Rickson", "VOL", 72),
  makePlayer("ATG", "Matheus", "MEI", 70)
);

// ------------------------------------------------------
// NOVORIZONTINO
// ------------------------------------------------------
players.push(
  makePlayer("NOV", "Douglas Baggio", "ATA", 75),
  makePlayer("NOV", "Ronaldo Silva", "ATA", 74),
  makePlayer("NOV", "Aylon", "ATA", 74),
  makePlayer("NOV", "Reverson", "LE", 72),
  makePlayer("NOV", "Bruno Aguiar", "ZAG", 73),
  makePlayer("NOV", "Rômulo", "VOL", 73),
  makePlayer("NOV", "Felipe Rodrigues", "LD", 73),
  makePlayer("NOV", "Gustavo Bochecha", "MEI", 73),
  makePlayer("NOV", "Léo Baiano", "VOL", 71),
  makePlayer("NOV", "Cléo Silva", "ATA", 72),
  makePlayer("NOV", "Lucas Mendes", "ZAG", 72),
  makePlayer("NOV", "Hélio Borges", "ATA", 73),
  makePlayer("NOV", "Rodolfo Filemon", "ZAG", 73),
  makePlayer("NOV", "Ricardinho", "MEI", 71),
  makePlayer("NOV", "Ronald", "ATA", 72),
  makePlayer("NOV", "Quirino", "ATA", 73),
  makePlayer("NOV", "Tony", "MEI", 71),
  makePlayer("NOV", "Anderson", "GOL", 72),
  makePlayer("NOV", "Vinícius", "GOL", 71),
  makePlayer("NOV", "João Paulo", "MEI", 72)
);

// ------------------------------------------------------
// GOIÁS
// ------------------------------------------------------
players.push(
  makePlayer("GOI", "Tadeu", "GOL", 79),
  makePlayer("GOI", "Sidimar", "ZAG", 73),
  makePlayer("GOI", "Diego Gonçalves", "ATA", 75),
  makePlayer("GOI", "Fellipe Bastos", "VOL", 75),
  makePlayer("GOI", "Hugo", "LE", 73),
  makePlayer("GOI", "Maguinho", "LD", 73),
  makePlayer("GOI", "Caio Vinícius", "VOL", 73),
  makePlayer("GOI", "Nicolas", "ATA", 74),
  makePlayer("GOI", "Yan Souto", "ZAG", 72),
  makePlayer("GOI", "Matheus Sales", "VOL", 73),
  makePlayer("GOI", "Diego", "MEI", 72),
  makePlayer("GOI", "Marcão", "ZAG", 72),
  makePlayer("GOI", "Everton Brito", "ATA", 72),
  makePlayer("GOI", "Luan Dias", "MEI", 72),
  makePlayer("GOI", "Allano", "ATA", 72),
  makePlayer("GOI", "Danilo Barcelos", "LE", 72),
  makePlayer("GOI", "Sander", "LE", 74),
  makePlayer("GOI", "Pedro Raul", "ATA", 77),
  makePlayer("GOI", "Vinícius", "GOL", 72),
  makePlayer("GOI", "Apodi", "LD", 74)
);

// ------------------------------------------------------
// OUTROS TIMES DA SÉRIE B QUE FALTAM
// PAYSANDU, AMAZONAS, VOLTA REDONDA, VILA NOVA, OPERÁRIO, CRB, AVAÍ, BOTAFOGO-SP, ATHLETIC, FERROVIÁRIA
// (Todos seguem o mesmo padrão – elenco real aproximado baseado nos últimos dados públicos)
// ------------------------------------------------------

// PAYSANDU
players.push(
  makePlayer("PAY", "Mário Sérgio", "ATA", 73),
  makePlayer("PAY", "Genilson", "ZAG", 72),
  makePlayer("PAY", "João Vieira", "ATA", 72),
  makePlayer("PAY", "Bruno Alves", "ATA", 72),
  makePlayer("PAY", "Fábio Matos", "MEI", 72),
  makePlayer("PAY", "Fernando Gabriel", "MEI", 72),
  makePlayer("PAY", "Marcelo", "ZAG", 71),
  makePlayer("PAY", "Edilson", "LD", 72),
  makePlayer("PAY", "Iago", "LE", 71),
  makePlayer("PAY", "Thiago Coelho", "GOL", 72)
);

// AMAZONAS
players.push(
  makePlayer("AMZ", "Diego Torres", "MEI", 74),
  makePlayer("AMZ", "Jô", "ATA", 72),
  makePlayer("AMZ", "Rafael Tavares", "MEI", 73),
  makePlayer("AMZ", "Índio", "ATA", 72),
  makePlayer("AMZ", "Sabino", "ZAG", 72),
  makePlayer("AMZ", "Marlon", "VOL", 72),
  makePlayer("AMZ", "Wellington", "ZAG", 72),
  makePlayer("AMZ", "Patrick", "LD", 71),
  makePlayer("AMZ", "Henrique", "LE", 71),
  makePlayer("AMZ", "Marcelo", "GOL", 72)
);

// VOLTA REDONDA
players.push(
  makePlayer("VRD", "MV", "ATA", 74),
  makePlayer("VRD", "Pedrinho", "ATA", 72),
  makePlayer("VRD", "Bidu", "MEI", 72),
  makePlayer("VRD", "Gilmar", "ATA", 71),
  makePlayer("VRD", "Ricardo Sena", "ZAG", 72),
  makePlayer("VRD", "Marcão", "VOL", 72),
  makePlayer("VRD", "Alix Vinicius", "ZAG", 72),
  makePlayer("VRD", "Luiz Paulo", "ATA", 71),
  makePlayer("VRD", "Bruno Barra", "VOL", 72),
  makePlayer("VRD", "Pedro", "GOL", 71)
);

// VILA NOVA
players.push(
  makePlayer("VNO", "Rodrigo Gelado", "LE", 73),
  makePlayer("VNO", "Alesson", "ATA", 72),
  makePlayer("VNO", "Hiago", "ATA", 71),
  makePlayer("VNO", "Ruan", "MEI", 71),
  makePlayer("VNO", "Matheuzinho", "MEI", 72),
  makePlayer("VNO", "Rafael Donato", "ZAG", 72),
  makePlayer("VNO", "Diego Tavares", "ATA", 72),
  makePlayer("VNO", "João Lucas", "LD", 72),
  makePlayer("VNO", "Dudu", "LE", 71),
  makePlayer("VNO", "Vanderley", "GOL", 72)
);

// OPERÁRIO
players.push(
  makePlayer("OPA", "Xuxa", "ATA", 71),
  makePlayer("OPA", "Giovanni Pavani", "MEI", 72),
  makePlayer("OPA", "William Machado", "ZAG", 72),
  makePlayer("OPA", "Bruno", "ATA", 71),
  makePlayer("OPA", "Sávio", "VOL", 72),
  makePlayer("OPA", "Simão", "GOL", 73),
  makePlayer("OPA", "Humberto", "MEI", 70),
  makePlayer("OPA", "Weverton", "LD", 72),
  makePlayer("OPA", "Fabiano", "LE", 72),
  makePlayer("OPA", "Toledo", "ZAG", 72)
);

// CRB
players.push(
  makePlayer("CRB", "Anselmo Ramon", "ATA", 74),
  makePlayer("CRB", "Fábio Alemão", "ZAG", 73),
  makePlayer("CRB", "Hereda", "LD", 73),
  makePlayer("CRB", "Igor Cariús", "MEI", 74),
  makePlayer("CRB", "Lucas Siqueira", "VOL", 73),
  makePlayer("CRB", "Matheus Ribeiro", "LD", 72),
  makePlayer("CRB", "Richard", "MEI", 71),
  makePlayer("CRB", "Léo Rafael", "MEI", 72),
  makePlayer("CRB", "Fellipe", "GOL", 72),
  makePlayer("CRB", "Dalberto", "ATA", 71)
);

// AVAÍ
players.push(
  makePlayer("AVA", "Bissoli", "ATA", 75),
  makePlayer("AVA", "William Pottker", "ATA", 75),
  makePlayer("AVA", "Renato", "MEI", 73),
  makePlayer("AVA", "Bruno Silva", "VOL", 74),
  makePlayer("AVA", "Raniele", "VOL", 74),
  makePlayer("AVA", "Getúlio", "ATA", 72),
  makePlayer("AVA", "Jean Cléber", "VOL", 72),
  makePlayer("AVA", "Lourenço", "MEI", 72),
  makePlayer("AVA", "Alemão", "ZAG", 72),
  makePlayer("AVA", "Betão", "ZAG", 72),
  makePlayer("AVA", "Gledson", "GOL", 73),
  makePlayer("AVA", "Edilson", "LD", 72),
  makePlayer("AVA", "Vinícius Leite", "ATA", 72),
  makePlayer("AVA", "Marcos Serrato", "MEI", 71),
  makePlayer("AVA", "Júnior Dutra", "ATA", 72),
  makePlayer("AVA", "Jonathan", "LE", 72),
  makePlayer("AVA", "Wesley Soares", "ATA", 71),
  makePlayer("AVA", "Rafael Pereira", "ZAG", 72),
  makePlayer("AVA", "Pedro Castro", "MEI", 73),
  makePlayer("AVA", "Rômulo", "VOL", 71)
);

// BOTAFOGO-SP
players.push(
  makePlayer("BSP", "Gustavo Henrique", "ATA", 74),
  makePlayer("BSP", "Osman", "ATA", 73),
  makePlayer("BSP", "Robinho", "MEI", 74),
  makePlayer("BSP", "Matheus Barbosa", "VOL", 73),
  makePlayer("BSP", "Lucas Delgado", "ATA", 72),
  makePlayer("BSP", "Rafael Tavares", "MEI", 72),
  makePlayer("BSP", "Luiz Henrique", "VOL", 71),
  makePlayer("BSP", "João Diogo", "LD", 72),
  makePlayer("BSP", "Dudu Hatamoto", "MEI", 72),
  makePlayer("BSP", "Bruno Michel", "ATA", 72),
  makePlayer("BSP", "Fillipe Soutto", "VOL", 72),
  makePlayer("BSP", "Edson", "ZAG", 72),
  makePlayer("BSP", "Lucas Mendes", "ZAG", 72),
  makePlayer("BSP", "Douglas Baggio", "ATA", 72),
  makePlayer("BSP", "Guilherme Madruga", "MEI", 73),
  makePlayer("BSP", "Matheus Costa", "ZAG", 72),
  makePlayer("BSP", "Patrick Brey", "LE", 72),
  makePlayer("BSP", "Robson", "ATA", 72),
  makePlayer("BSP", "João Carlos", "GOL", 73),
  makePlayer("BSP", "Emerson", "ZAG", 71)
);

// ATHLETIC
players.push(
  makePlayer("ATC", "Gustavão", "ATA", 74),
  makePlayer("ATC", "Gustavo Henrique", "ZAG", 73),
  makePlayer("ATC", "Ronaldo", "ATA", 72),
  makePlayer("ATC", "Falcão", "MEI", 72),
  makePlayer("ATC", "Diego Fumaça", "VOL", 73),
  makePlayer("ATC", "Alisson", "MEI", 71),
  makePlayer("ATC", "Carlos", "LD", 72),
  makePlayer("ATC", "Cesinha", "ATA", 72),
  makePlayer("ATC", "Lucas Balardin", "ZAG", 72),
  makePlayer("ATC", "Luis", "GOL", 72)
);

// FERROVIÁRIA
players.push(
  makePlayer("FER", "Bruno", "ATA", 74),
  makePlayer("FER", "John Kennedy", "ATA", 72),
  makePlayer("FER", "Marcos Martins", "LD", 73),
  makePlayer("FER", "Alisson", "MEI", 72),
  makePlayer("FER", "Felipe", "ATA", 71),
  makePlayer("FER", "Breno", "MEI", 72),
  makePlayer("FER", "Léo Santos", "ZAG", 73),
  makePlayer("FER", "Matheus", "VOL", 72),
  makePlayer("FER", "Rodrigão", "ATA", 72),
  makePlayer("FER", "Saulo", "GOL", 72)
);
