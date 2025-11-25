\
 // ======================================================
 // VALE FUTEBOL MANAGER 2026
 // database.js
 // ------------------------------------------------------
 // Aqui ficam SOMENTE os dados de:
 // - Times (teams)
 // - Jogadores (players)
 // - Competições (competitions)
 // ------------------------------------------------------
 // Você pode editar / expandir este arquivo à vontade
 // sem mexer na lógica do jogo (game.js) ou na interface (ui.js).
 // ======================================================

 // --------------------------
 // TIMES - EXEMPLO SÉRIE A
 // --------------------------
 // IMPORTANTE:
 // - id: código curto usado no jogo e nos jogadores (teamId)
 // - name: nome completo
 // - shortName: nome curto que aparece em tabelas
 // - division: "A" ou "B" (por enquanto usamos só "A" no motor padrão)
 const teams = [
   { id: "FLA", name: "Flamengo",     shortName: "Flamengo",   division: "A" },
   { id: "PAL", name: "Palmeiras",    shortName: "Palmeiras",  division: "A" },
   { id: "BOT", name: "Botafogo",     shortName: "Botafogo",   division: "A" },
   { id: "INT", name: "Internacional",shortName: "Inter",      division: "A" },
   { id: "AMG", name: "Atlético-MG",  shortName: "Atl-MG",     division: "A" },
   { id: "COR", name: "Corinthians",  shortName: "Corinthians",division: "A" },
   { id: "SAO", name: "São Paulo",    shortName: "São Paulo",  division: "A" },
   { id: "FLU", name: "Fluminense",   shortName: "Fluminense", division: "A" },
   { id: "GRE", name: "Grêmio",       shortName: "Grêmio",     division: "A" },
   { id: "SAN", name: "Santos",       shortName: "Santos",     division: "A" },
   { id: "CRU", name: "Cruzeiro",     shortName: "Cruzeiro",   division: "A" },
   { id: "VAS", name: "Vasco",        shortName: "Vasco",      division: "A" },
   { id: "BAH", name: "Bahia",        shortName: "Bahia",      division: "A" },
   { id: "FOR", name: "Fortaleza",    shortName: "Fortaleza",  division: "A" },
   { id: "RBB", name: "RB Bragantino",shortName: "Bragantino", division: "A" },
   { id: "CEA", name: "Ceará",        shortName: "Ceará",      division: "A" },
   { id: "SPT", name: "Sport",        shortName: "Sport",      division: "A" },
   { id: "JUV", name: "Juventude",    shortName: "Juventude",  division: "A" },
   { id: "VIT", name: "Vitória",      shortName: "Vitória",    division: "A" },
   { id: "MIR", name: "Mirassol",     shortName: "Mirassol",   division: "A" }
   // Se quiser, depois acrescente aqui times da Série B, internacionais, etc.
 ];

 // --------------------------
 // JOGADORES - EXEMPLO
 // --------------------------
 // ATENÇÃO:
 // - id: qualquer identificador único (ex.: FLA_PEDRO)
 // - teamId: deve bater EXACTAMENTE com o id do time em "teams"
 // - position: GOL, ZAG, LD, LE, VOL, MEI, ATA etc.
 // - overall: 0–99 (força geral do jogador)
 // - value: valor de mercado em milhões (número simples)
 // ------------------------------------------------------
 // Abaixo tem APENAS EXEMPLOS para 3 times.
 // Você deve COLAR aqui os elencos reais que já montamos.
 // ------------------------------------------------------

 const players = [
   // ---------------- Flamengo ----------------
   { id: "FLA_PEDRO",       teamId: "FLA", name: "Pedro",            position: "ATA", overall: 84, age: 27, morale: 75, value: 22 },
   { id: "FLA_GABIGOL",     teamId: "FLA", name: "Gabigol",          position: "ATA", overall: 83, age: 28, morale: 74, value: 24 },
   { id: "FLA_ARRASCAETA",  teamId: "FLA", name: "Arrascaeta",       position: "MEI", overall: 86, age: 29, morale: 80, value: 30 },
   { id: "FLA_EV_CEBOLINHA",teamId: "FLA", name: "Everton Cebolinha",position: "ATA", overall: 82, age: 28, morale: 74, value: 18 },
   { id: "FLA_GERSON",      teamId: "FLA", name: "Gerson",           position: "MEI", overall: 84, age: 27, morale: 78, value: 26 },

   // ---------------- Palmeiras ----------------
   { id: "PAL_WEVERTON",    teamId: "PAL", name: "Weverton",         position: "GOL", overall: 84, age: 36, morale: 78, value: 18 },
   { id: "PAL_G_GOMEZ",     teamId: "PAL", name: "Gustavo Gómez",    position: "ZAG", overall: 85, age: 30, morale: 80, value: 28 },
   { id: "PAL_PIQUEREZ",    teamId: "PAL", name: "Piquerez",         position: "LE",  overall: 82, age: 25, morale: 77, value: 22 },
   { id: "PAL_VEIGA",       teamId: "PAL", name: "Raphael Veiga",    position: "MEI", overall: 85, age: 28, morale: 81, value: 30 },
   { id: "PAL_ENDRICK",     teamId: "PAL", name: "Endrick",          position: "ATA", overall: 86, age: 18, morale: 82, value: 40 },

   // ---------------- Botafogo ----------------
   { id: "BOT_TIQUINHO",    teamId: "BOT", name: "Tiquinho Soares",  position: "ATA", overall: 82, age: 33, morale: 78, value: 20 },
   { id: "BOT_JR_SANTOS",   teamId: "BOT", name: "Júnior Santos",    position: "ATA", overall: 81, age: 29, morale: 77, value: 18 },
   { id: "BOT_EDUARDO",     teamId: "BOT", name: "Eduardo",          position: "MEI", overall: 81, age: 33, morale: 76, value: 16 },
   { id: "BOT_GATITO",      teamId: "BOT", name: "Gatito Fernández", position: "GOL", overall: 80, age: 35, morale: 75, value: 14 }

   // ------------------------------------------------------
   // AQUI é onde você vai colando TODOS OS JOGADORES
   // das listas que já montamos (Flamengo, Palmeiras, etc).
   // Use SEMPRE vírgula entre os objetos, MENOS depois do último.
   // ------------------------------------------------------
 ];

 // --------------------------
 // COMPETIÇÕES
 // --------------------------
 // Começamos só com o Brasileirão Série A.
 // Depois você pode adicionar Série B, Copa do Brasil e Libertadores.

 const competitions = [
   {
     id: "BRA-A",
     name: "Campeonato Brasileiro Série A",
     type: "league",
     // Por padrão, usamos todos os times com division === "A"
     // (o motor em game.js pega a lista de ids a partir disso)
     pointsForWin: 3,
     pointsForDraw: 1,
     pointsForLoss: 0,
     doubleRoundRobin: true
   }
   // Exemplo para futuro:
   // {
   //   id: "COPA-BR",
   //   name: "Copa do Brasil",
   //   type: "cup",
   //   twoLeggedTies: true
   // }
 ];

 // ======================================================
 // FIM DO database.js
 // ======================================================
