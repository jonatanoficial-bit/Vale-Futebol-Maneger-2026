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
  // ==== SÉRIE A ====
  {
    id: "CAM",
    name: "Atlético Mineiro",
    shortName: "Atlético-MG",
    state: "MG",
    logo: "assets/logos/CAM.png",
    stadium: "Arena MRV",
    reputation: 82
  },
  {
    id: "BAH",
    name: "Esporte Clube Bahia",
    shortName: "Bahia",
    state: "BA",
    logo: "assets/logos/BAH.png",
    stadium: "Arena Fonte Nova",
    reputation: 78
  },
  {
    id: "BOT",
    name: "Botafogo de Futebol e Regatas",
    shortName: "Botafogo",
    state: "RJ",
    logo: "assets/logos/BOT.png",
    stadium: "Nilton Santos",
    reputation: 80
  },
  {
    id: "CEA",
    name: "Ceará Sporting Club",
    shortName: "Ceará",
    state: "CE",
    logo: "assets/logos/CEA.png",
    stadium: "Arena Castelão",
    reputation: 75
  },
  {
    id: "COR",
    name: "Sport Club Corinthians Paulista",
    shortName: "Corinthians",
    state: "SP",
    logo: "assets/logos/COR.png",
    stadium: "Neo Química Arena",
    reputation: 83
  },
  {
    id: "CRU",
    name: "Cruzeiro Esporte Clube",
    shortName: "Cruzeiro",
    state: "MG",
    logo: "assets/logos/CRU.png",
    stadium: "Mineirão",
    reputation: 79
  },
  {
    id: "FLA",
    name: "Clube de Regatas do Flamengo",
    shortName: "Flamengo",
    state: "RJ",
    logo: "assets/logos/FLA.png",
    stadium: "Maracanã",
    reputation: 88
  },
  {
    id: "FLU",
    name: "Fluminense Football Club",
    shortName: "Fluminense",
    state: "RJ",
    logo: "assets/logos/FLU.png",
    stadium: "Maracanã",
    reputation: 82
  },
  {
    id: "FOR",
    name: "Fortaleza Esporte Clube",
    shortName: "Fortaleza",
    state: "CE",
    logo: "assets/logos/FOR.png",
    stadium: "Arena Castelão",
    reputation: 79
  },
  {
    id: "JUV",
    name: "Esporte Clube Juventude",
    shortName: "Juventude",
    state: "RS",
    logo: "assets/logos/JUV.png",
    stadium: "Alfredo Jaconi",
    reputation: 74
  },
  {
    id: "GRE",
    name: "Grêmio Foot-Ball Porto Alegrense",
    shortName: "Grêmio",
    state: "RS",
    logo: "assets/logos/GRE.png",
    stadium: "Arena do Grêmio",
    reputation: 84
  },
  {
    id: "INT",
    name: "Sport Club Internacional",
    shortName: "Internacional",
    state: "RS",
    logo: "assets/logos/INT.png",
    stadium: "Beira-Rio",
    reputation: 83
  },
  {
    id: "MIR",
    name: "Mirassol Futebol Clube",
    shortName: "Mirassol",
    state: "SP",
    logo: "assets/logos/MIR.png",
    stadium: "Estádio José Maria de Campos Maia",
    reputation: 70
  },
  {
    id: "PAL",
    name: "Sociedade Esportiva Palmeiras",
    shortName: "Palmeiras",
    state: "SP",
    logo: "assets/logos/PAL.png",
    stadium: "Allianz Parque",
    reputation: 88
  },
  {
    id: "RBB",
    name: "Red Bull Bragantino",
    shortName: "RB Bragantino",
    state: "SP",
    logo: "assets/logos/RBB.png",
    stadium: "Nabizão",
    reputation: 80
  },
  {
    id: "SAN",
    name: "Santos Futebol Clube",
    shortName: "Santos",
    state: "SP",
    logo: "assets/logos/SAN.png",
    stadium: "Vila Belmiro",
    reputation: 78
  },
  {
    id: "SAO",
    name: "São Paulo Futebol Clube",
    shortName: "São Paulo",
    state: "SP",
    logo: "assets/logos/SAO.png",
    stadium: "Morumbi",
    reputation: 84
  },
  {
    id: "SPT",
    name: "Sport Club do Recife",
    shortName: "Sport",
    state: "PE",
    logo: "assets/logos/SPT.png",
    stadium: "Ilha do Retiro",
    reputation: 76
  },
  {
    id: "VAS",
    name: "Club de Regatas Vasco da Gama",
    shortName: "Vasco",
    state: "RJ",
    logo: "assets/logos/VAS.png",
    stadium: "São Januário",
    reputation: 80
  },
  {
    id: "VIT",
    name: "Esporte Clube Vitória",
    shortName: "Vitória",
    state: "BA",
    logo: "assets/logos/VIT.png",
    stadium: "Barradão",
    reputation: 75
  },

  // ==== SÉRIE B ====
  {
    id: "CFC",
    name: "Coritiba Foot Ball Club",
    shortName: "Coritiba",
    state: "PR",
    logo: "assets/logos/CFC.png",
    stadium: "Couto Pereira",
    reputation: 77
  },
  {
    id: "CAP",
    name: "Club Athletico Paranaense",
    shortName: "Athletico-PR",
    state: "PR",
    logo: "assets/logos/CAP.png",
    stadium: "Arena da Baixada",
    reputation: 82
  },
  {
    id: "CHA",
    name: "Associação Chapecoense de Futebol",
    shortName: "Chapecoense",
    state: "SC",
    logo: "assets/logos/CHA.png",
    stadium: "Arena Condá",
    reputation: 74
  },
  {
    id: "REM",
    name: "Clube do Remo",
    shortName: "Remo",
    state: "PA",
    logo: "assets/logos/REM.png",
    stadium: "Baenão",
    reputation: 72
  },
  {
    id: "CRI",
    name: "Criciúma Esporte Clube",
    shortName: "Criciúma",
    state: "SC",
    logo: "assets/logos/CRI.png",
    stadium: "Heriberto Hülse",
    reputation: 75
  },
  {
    id: "GOI",
    name: "Goiás Esporte Clube",
    shortName: "Goiás",
    state: "GO",
    logo: "assets/logos/GOI.png",
    stadium: "Estádio da Serrinha",
    reputation: 78
  },
  {
    id: "NOV",
    name: "Grêmio Novorizontino",
    shortName: "Novorizontino",
    state: "SP",
    logo: "assets/logos/NOV.png",
    stadium: "Jorge Ismael de Biasi",
    reputation: 74
  },
  {
    id: "CRB",
    name: "Clube de Regatas Brasil",
    shortName: "CRB",
    state: "AL",
    logo: "assets/logos/CRB.png",
    stadium: "Rei Pelé",
    reputation: 73
  },
  {
    id: "AVA",
    name: "Avaí Futebol Clube",
    shortName: "Avaí",
    state: "SC",
    logo: "assets/logos/AVA.png",
    stadium: "Ressacada",
    reputation: 74
  },
  {
    id: "CUI",
    name: "Cuiabá Esporte Clube",
    shortName: "Cuiabá",
    state: "MT",
    logo: "assets/logos/CUI.png",
    stadium: "Arena Pantanal",
    reputation: 77
  },
  {
    id: "ACG",
    name: "Atlético Clube Goianiense",
    shortName: "Atlético-GO",
    state: "GO",
    logo: "assets/logos/ACG.png",
    stadium: "Antônio Accioly",
    reputation: 76
  },
  {
    id: "OPE",
    name: "Operário Ferroviário Esporte Clube",
    shortName: "Operário-PR",
    state: "PR",
    logo: "assets/logos/OPE.png",
    stadium: "Germano Krüger",
    reputation: 72
  },
  {
    id: "VNO",
    name: "Vila Nova Futebol Clube",
    shortName: "Vila Nova",
    state: "GO",
    logo: "assets/logos/VNO.png",
    stadium: "Onésio Brasileiro Alvarenga",
    reputation: 73
  },
  {
    id: "AME",
    name: "América Futebol Clube",
    shortName: "América-MG",
    state: "MG",
    logo: "assets/logos/AME.png",
    stadium: "Independência",
    reputation: 78
  },
  {
    id: "ATH",
    name: "Athletic Club",
    shortName: "Athletic-MG",
    state: "MG",
    logo: "assets/logos/ATH.png",
    stadium: "Arena Sicredi",
    reputation: 70
  },
  {
    id: "BSP",
    name: "Botafogo Futebol Clube",
    shortName: "Botafogo-SP",
    state: "SP",
    logo: "assets/logos/BSP.png",
    stadium: "Santa Cruz",
    reputation: 73
  },
  {
    id: "FER",
    name: "Associação Ferroviária de Esportes",
    shortName: "Ferroviária",
    state: "SP",
    logo: "assets/logos/FER.png",
    stadium: "Fonte Luminosa",
    reputation: 72
  },
  {
    id: "AMZ",
    name: "Amazonas Futebol Clube",
    shortName: "Amazonas",
    state: "AM",
    logo: "assets/logos/AMZ.png",
    stadium: "Arena da Amazônia",
    reputation: 72
  },
  {
    id: "VRD",
    name: "Volta Redonda Futebol Clube",
    shortName: "Volta Redonda",
    state: "RJ",
    logo: "assets/logos/VRD.png",
    stadium: "Raulino de Oliveira",
    reputation: 71
  },
  {
    id: "PAY",
    name: "Paysandu Sport Club",
    shortName: "Paysandu",
    state: "PA",
    logo: "assets/logos/PAY.png",
    stadium: "Curuzu",
    reputation: 73
  }
];

// JOGADORES
// Cada jogador pertence a um time via teamId.
// Campos principais: position, overall (força geral), age, morale, value.
const players = [
  // ==== FLAMENGO ====
{
  id: "FLA_PEDRO",
  teamId: "FLA",
  name: "Pedro",
  position: "ATA",
  overall: 84,
  age: 28,
  morale: 75,
  value: 30,
  face: "assets/faces/FLA_pedro.png"
},
{
  id: "FLA_GABIGOL",
  teamId: "FLA",
  name: "Gabigol",
  position: "ATA",
  overall: 83,
  age: 29,
  morale: 72,
  value: 28,
  face: "assets/faces/FLA_gabigol.png"
},
{
  id: "FLA_ARRASCAETA",
  teamId: "FLA",
  name: "Arrascaeta",
  position: "MEI",
  overall: 86,
  age: 31,
  morale: 78,
  value: 35,
  face: "assets/faces/FLA_arrascaeta.png"
},
{
  id: "FLA_CEBOLINHA",
  teamId: "FLA",
  name: "Everton Cebolinha",
  position: "ATA",
  overall: 82,
  age: 29,
  morale: 74,
  value: 26,
  face: "assets/faces/FLA_everton_cebolinha.png"
},
{
  id: "FLA_GERSON",
  teamId: "FLA",
  name: "Gerson",
  position: "MEI",
  overall: 84,
  age: 28,
  morale: 76,
  value: 30,
  face: "assets/faces/FLA_gerson.png"
},
{
  id: "FLA_DAVID_LUIZ",
  teamId: "FLA",
  name: "David Luiz",
  position: "ZAG",
  overall: 79,
  age: 38,
  morale: 70,
  value: 8,
  face: "assets/faces/FLA_david_luiz.png"
},
{
  id: "FLA_LEO_PEREIRA",
  teamId: "FLA",
  name: "Léo Pereira",
  position: "ZAG",
  overall: 82,
  age: 28,
  morale: 75,
  value: 22,
  face: "assets/faces/FLA_leo_pereira.png"
},
{
  id: "FLA_MATHEUS_CUNHA",
  teamId: "FLA",
  name: "Matheus Cunha",
  position: "GOL",
  overall: 77,
  age: 23,
  morale: 72,
  value: 12,
  face: "assets/faces/FLA_matheus_cunha.png"
},
{
  id: "FLA_WESLEY",
  teamId: "FLA",
  name: "Wesley",
  position: "LD",
  overall: 75,
  age: 20,
  morale: 71,
  value: 10,
  face: "assets/faces/FLA_wesley.png"
},
{
  id: "FLA_FABRICIO_BRUNO",
  teamId: "FLA",
  name: "Fabrício Bruno",
  position: "ZAG",
  overall: 82,
  age: 28,
  morale: 76,
  value: 24,
  face: "assets/faces/FLA_fabricio_bruno.png"
},
{
  id: "FLA_VARELA",
  teamId: "FLA",
  name: "Varela",
  position: "LD",
  overall: 78,
  age: 31,
  morale: 73,
  value: 14,
  face: "assets/faces/FLA_varela.png"
},
{
  id: "FLA_VICTOR_HUGO",
  teamId: "FLA",
  name: "Victor Hugo",
  position: "MEI",
  overall: 76,
  age: 20,
  morale: 72,
  value: 14,
  face: "assets/faces/FLA_victor_hugo.png"
},
{
  id: "FLA_ALLAN",
  teamId: "FLA",
  name: "Allan",
  position: "VOL",
  overall: 80,
  age: 27,
  morale: 74,
  value: 20,
  face: "assets/faces/FLA_allan.png"
},
{
  id: "FLA_LUIZ_ARAUJO",
  teamId: "FLA",
  name: "Luiz Araújo",
  position: "ATA",
  overall: 79,
  age: 28,
  morale: 73,
  value: 18,
  face: "assets/faces/FLA_luiz_araujo.png"
},
{
  id: "FLA_IGOR_JESUS",
  teamId: "FLA",
  name: "Igor Jesus",
  position: "VOL",
  overall: 74,
  age: 21,
  morale: 70,
  value: 10,
  face: "assets/faces/FLA_igor_jesus.png"
},
{
  id: "FLA_CARLINHOS",
  teamId: "FLA",
  name: "Carlinhos",
  position: "ATA",
  overall: 74,
  age: 22,
  morale: 70,
  value: 9,
  face: "assets/faces/FLA_carlinhos.png"
},
{
  id: "FLA_ROSSI",
  teamId: "FLA",
  name: "Rossi",
  position: "GOL",
  overall: 79,
  age: 29,
  morale: 75,
  value: 15,
  face: "assets/faces/FLA_rossi.png"
},
{
  id: "FLA_THIAGO_MAIA",
  teamId: "FLA",
  name: "Thiago Maia",
  position: "VOL",
  overall: 79,
  age: 27,
  morale: 74,
  value: 18,
  face: "assets/faces/FLA_thiago_maia.png"
},
{
  id: "FLA_VINA",
  teamId: "FLA",
  name: "Viña",
  position: "LE",
  overall: 79,
  age: 26,
  morale: 73,
  value: 16,
  face: "assets/faces/FLA_vina.png"
},
{
  id: "FLA_LORRAN",
  teamId: "FLA",
  name: "Lorran",
  position: "MEI",
  overall: 75,
  age: 18,
  morale: 72,
  value: 14,
  face: "assets/faces/FLA_lorran.png"
},
{
  id: "FLA_WERTON",
  teamId: "FLA",
  name: "Werton",
  position: "ATA",
  overall: 73,
  age: 19,
  morale: 70,
  value: 9,
  face: "assets/faces/FLA_werton.png"
},
{
  id: "FLA_CLEITON",
  teamId: "FLA",
  name: "Cleiton",
  position: "ZAG",
  overall: 73,
  age: 21,
  morale: 70,
  value: 9,
  face: "assets/faces/FLA_cleiton.png"
},
{
  id: "FLA_OTAVIO",
  teamId: "FLA",
  name: "Otávio",
  position: "VOL",
  overall: 74,
  age: 21,
  morale: 70,
  value: 10,
  face: "assets/faces/FLA_otavio.png"
},
{
  id: "FLA_IAGO",
  teamId: "FLA",
  name: "Iago",
  position: "LE",
  overall: 73,
  age: 21,
  morale: 70,
  value: 9,
  face: "assets/faces/FLA_iago.png"
},
// ==== PALMEIRAS ====
{
  id: "PAL_WEVERTON",
  teamId: "PAL",
  name: "Weverton",
  position: "GOL",
  overall: 85,
  age: 36,
  morale: 78,
  value: 22,
  face: "assets/faces/PAL_weverton.png"
},
{
  id: "PAL_MURILO",
  teamId: "PAL",
  name: "Murilo",
  position: "ZAG",
  overall: 81,
  age: 27,
  morale: 76,
  value: 20,
  face: "assets/faces/PAL_murilo.png"
},
{
  id: "PAL_GUSTAVO_GOMEZ",
  teamId: "PAL",
  name: "Gustavo Gómez",
  position: "ZAG",
  overall: 86,
  age: 31,
  morale: 80,
  value: 30,
  face: "assets/faces/PAL_gustavo_gomez.png"
},
{
  id: "PAL_PIQUEREZ",
  teamId: "PAL",
  name: "Piquerez",
  position: "LE",
  overall: 82,
  age: 26,
  morale: 77,
  value: 24,
  face: "assets/faces/PAL_piquerez.png"
},
{
  id: "PAL_MAYKE",
  teamId: "PAL",
  name: "Mayke",
  position: "LD",
  overall: 80,
  age: 32,
  morale: 76,
  value: 16,
  face: "assets/faces/PAL_mayke.png"
},
{
  id: "PAL_ZE_RAFUEL",
  teamId: "PAL",
  name: "Zé Rafael",
  position: "VOL",
  overall: 82,
  age: 31,
  morale: 78,
  value: 22,
  face: "assets/faces/PAL_ze_rafael.png"
},
{
  id: "PAL_VEIGA",
  teamId: "PAL",
  name: "Raphael Veiga",
  position: "MEI",
  overall: 86,
  age: 29,
  morale: 82,
  value: 35,
  face: "assets/faces/PAL_raphael_veiga.png"
},
{
  id: "PAL_ENDRICK",
  teamId: "PAL",
  name: "Endrick",
  position: "ATA",
  overall: 84,
  age: 19,
  morale: 80,
  value: 40,
  face: "assets/faces/PAL_endrick.png"
},
{
  id: "PAL_RONY",
  teamId: "PAL",
  name: "Rony",
  position: "ATA",
  overall: 81,
  age: 30,
  morale: 77,
  value: 20,
  face: "assets/faces/PAL_rony.png"
},
{
  id: "PAL_DUDU",
  teamId: "PAL",
  name: "Dudu",
  position: "ATA",
  overall: 84,
  age: 33,
  morale: 78,
  value: 24,
  face: "assets/faces/PAL_dudu.png"
},
{
  id: "PAL_FLACO_LOPEZ",
  teamId: "PAL",
  name: "Flaco López",
  position: "ATA",
  overall: 80,
  age: 24,
  morale: 75,
  value: 18,
  face: "assets/faces/PAL_flaco_lopez.png"
},
{
  id: "PAL_LAZARO",
  teamId: "PAL",
  name: "Lázaro",
  position: "ATA",
  overall: 78,
  age: 22,
  morale: 74,
  value: 16,
  face: "assets/faces/PAL_lazaro.png"
},
{
  id: "PAL_FABINHO",
  teamId: "PAL",
  name: "Fabinho",
  position: "VOL",
  overall: 77,
  age: 22,
  morale: 73,
  value: 14,
  face: "assets/faces/PAL_fabinho.png"
},
{
  id: "PAL_VANDERLAN",
  teamId: "PAL",
  name: "Vanderlan",
  position: "LE",
  overall: 76,
  age: 22,
  morale: 73,
  value: 13,
  face: "assets/faces/PAL_vanderlan.png"
},
{
  id: "PAL_RICHARD_RIOS",
  teamId: "PAL",
  name: "Richard Ríos",
  position: "VOL",
  overall: 81,
  age: 24,
  morale: 77,
  value: 22,
  face: "assets/faces/PAL_richard_rios.png"
},
{
  id: "PAL_ANIBAL",
  teamId: "PAL",
  name: "Aníbal Moreno",
  position: "VOL",
  overall: 81,
  age: 25,
  morale: 76,
  value: 22,
  face: "assets/faces/PAL_anibal_moreno.png"
},
{
  id: "PAL_BRUNO_RODRIGUES",
  teamId: "PAL",
  name: "Bruno Rodrigues",
  position: "ATA",
  overall: 79,
  age: 27,
  morale: 75,
  value: 18,
  face: "assets/faces/PAL_bruno_rodrigues.png"
},
{
  id: "PAL_KAUAN_SANTOS",
  teamId: "PAL",
  name: "Kauan Santos",
  position: "MEI",
  overall: 74,
  age: 19,
  morale: 71,
  value: 10,
  face: "assets/faces/PAL_kauan_santos.png"
},
{
  id: "PAL_NAVES",
  teamId: "PAL",
  name: "Naves",
  position: "ZAG",
  overall: 75,
  age: 22,
  morale: 72,
  value: 12,
  face: "assets/faces/PAL_naves.png"
},
{
  id: "PAL_JHON_JHON",
  teamId: "PAL",
  name: "Jhon Jhon",
  position: "MEI",
  overall: 76,
  age: 21,
  morale: 72,
  value: 13,
  face: "assets/faces/PAL_jhon_jhon.png"
},
{
  id: "PAL_GARCIA",
  teamId: "PAL",
  name: "Garcia",
  position: "LD",
  overall: 75,
  age: 22,
  morale: 72,
  value: 12,
  face: "assets/faces/PAL_garcia.png"
},
{
  id: "PAL_MICHEL",
  teamId: "PAL",
  name: "Michel",
  position: "ZAG",
  overall: 74,
  age: 20,
  morale: 71,
  value: 11,
  face: "assets/faces/PAL_michel.png"
},
{
  id: "PAL_LUIS_GUILHERME",
  teamId: "PAL",
  name: "Luis Guilherme",
  position: "MEI",
  overall: 78,
  age: 19,
  morale: 75,
  value: 20,
  face: "assets/faces/PAL_luis_guilherme.png"
},
// ==== BOTAFOGO ====
{
  id: "BOT_TIQ_SOARES",
  teamId: "BOT",
  name: "Tiquinho Soares",
  position: "ATA",
  overall: 82,
  age: 34,
  morale: 77,
  value: 18,
  face: "assets/faces/BOT_tiquinho_soares.png"
},
{
  id: "BOT_EDUARDO",
  teamId: "BOT",
  name: "Eduardo",
  position: "MEI",
  overall: 80,
  age: 31,
  morale: 76,
  value: 18,
  face: "assets/faces/BOT_eduardo.png"
},
{
  id: "BOT_JUNIOR_SANTOS",
  teamId: "BOT",
  name: "Júnior Santos",
  position: "ATA",
  overall: 81,
  age: 30,
  morale: 77,
  value: 20,
  face: "assets/faces/BOT_junior_santos.png"
},
{
  id: "BOT_MARCAL",
  teamId: "BOT",
  name: "Marçal",
  position: "LE",
  overall: 78,
  age: 35,
  morale: 73,
  value: 10,
  face: "assets/faces/BOT_marcal.png"
},
{
  id: "BOT_ADRYELSON",
  teamId: "BOT",
  name: "Adryelson",
  position: "ZAG",
  overall: 80,
  age: 26,
  morale: 76,
  value: 20,
  face: "assets/faces/BOT_adryelson.png"
},
{
  id: "BOT_GATITO",
  teamId: "BOT",
  name: "Gatito Fernández",
  position: "GOL",
  overall: 80,
  age: 36,
  morale: 75,
  value: 12,
  face: "assets/faces/BOT_gatito.png"
},
{
  id: "BOT_HUGO",
  teamId: "BOT",
  name: "Hugo",
  position: "LE",
  overall: 75,
  age: 23,
  morale: 72,
  value: 11,
  face: "assets/faces/BOT_hugo.png"
},
{
  id: "BOT_DANILO_BARBOSA",
  teamId: "BOT",
  name: "Danilo Barbosa",
  position: "VOL",
  overall: 78,
  age: 28,
  morale: 74,
  value: 16,
  face: "assets/faces/BOT_danilo_barbosa.png"
},
{
  id: "BOT_PK",
  teamId: "BOT",
  name: "PK",
  position: "VOL",
  overall: 74,
  age: 22,
  morale: 71,
  value: 9,
  face: "assets/faces/BOT_pk.png"
},
{
  id: "BOT_SAVARINO",
  teamId: "BOT",
  name: "Savarino",
  position: "ATA",
  overall: 79,
  age: 28,
  morale: 75,
  value: 18,
  face: "assets/faces/BOT_savarino.png"
},
{
  id: "BOT_BASTOS",
  teamId: "BOT",
  name: "Bastos",
  position: "ZAG",
  overall: 78,
  age: 28,
  morale: 74,
  value: 15,
  face: "assets/faces/BOT_bastos.png"
},
{
  id: "BOT_JEFFINHO",
  teamId: "BOT",
  name: "Jeffinho",
  position: "ATA",
  overall: 78,
  age: 24,
  morale: 74,
  value: 17,
  face: "assets/faces/BOT_jeffinho.png"
},
{
  id: "BOT_DIEGO_HERNANDEZ",
  teamId: "BOT",
  name: "Diego Hernández",
  position: "MEI",
  overall: 76,
  age: 24,
  morale: 72,
  value: 13,
  face: "assets/faces/BOT_diego_hernandez.png"
},
{
  id: "BOT_DAMIAN_SUAREZ",
  teamId: "BOT",
  name: "Damián Suárez",
  position: "LD",
  overall: 79,
  age: 33,
  morale: 74,
  value: 12,
  face: "assets/faces/BOT_damian_suarez.png"
},
{
  id: "BOT_CUIABANO",
  teamId: "BOT",
  name: "Cuiabano",
  position: "LE",
  overall: 75,
  age: 21,
  morale: 72,
  value: 11,
  face: "assets/faces/BOT_cuiabano.png"
},
{
  id: "BOT_YARLEN",
  teamId: "BOT",
  name: "Yarlen",
  position: "ATA",
  overall: 73,
  age: 20,
  morale: 71,
  value: 9,
  face: "assets/faces/BOT_yarlen.png"
},
{
  id: "BOT_KAUE",
  teamId: "BOT",
  name: "Kauê",
  position: "MEI",
  overall: 74,
  age: 20,
  morale: 71,
  value: 10,
  face: "assets/faces/BOT_kaue.png"
},
{
  id: "BOT_MATHEUS_NASC",
  teamId: "BOT",
  name: "Matheus Nascimento",
  position: "ATA",
  overall: 76,
  age: 21,
  morale: 73,
  value: 15,
  face: "assets/faces/BOT_matheus_nascimento.png"
},
{
  id: "BOT_RAFEL",
  teamId: "BOT",
  name: "Rafael",
  position: "LD",
  overall: 75,
  age: 33,
  morale: 72,
  value: 10,
  face: "assets/faces/BOT_rafael.png"
},
{
  id: "BOT_LUCAS_FERNANDES",
  teamId: "BOT",
  name: "Lucas Fernandes",
  position: "MEI",
  overall: 77,
  age: 27,
  morale: 74,
  value: 14,
  face: "assets/faces/BOT_lucas_fernandes.png"
},
// ==== ATHLETICO-PR (SÉRIE B) ====
{
  id: "CAP_BRUNO_ZAPELLI",
  teamId: "CAP",
  name: "Bruno Zapelli",
  position: "MEI",
  overall: 80,
  age: 22,
  morale: 75,
  value: 18,
  face: "assets/faces/CAP_bruno_zapelli.png"
},
{
  id: "CAP_VITOR_ROQUE",
  teamId: "CAP",
  name: "Vitor Roque",
  position: "ATA",
  overall: 84,
  age: 20,
  morale: 80,
  value: 30,
  face: "assets/faces/CAP_vitor_roque.png"
},
{
  id: "CAP_FERNANDINHO",
  teamId: "CAP",
  name: "Fernandinho",
  position: "VOL",
  overall: 83,
  age: 39,
  morale: 78,
  value: 10,
  face: "assets/faces/CAP_fernandinho.png"
},
{
  id: "CAP_PABLO",
  teamId: "CAP",
  name: "Pablo",
  position: "ATA",
  overall: 79,
  age: 32,
  morale: 75,
  value: 14,
  face: "assets/faces/CAP_pablo.png"
},
{
  id: "CAP_THIAGO_HELENO",
  teamId: "CAP",
  name: "Thiago Heleno",
  position: "ZAG",
  overall: 80,
  age: 36,
  morale: 76,
  value: 10,
  face: "assets/faces/CAP_thiago_heleno.png"
},
{
  id: "CAP_BENTO",
  teamId: "CAP",
  name: "Bento",
  position: "GOL",
  overall: 84,
  age: 25,
  morale: 80,
  value: 28,
  face: "assets/faces/CAP_bento.png"
},
{
  id: "CAP_ERICK",
  teamId: "CAP",
  name: "Erick",
  position: "VOL",
  overall: 80,
  age: 27,
  morale: 76,
  value: 18,
  face: "assets/faces/CAP_erick.png"
},
{
  id: "CAP_CHRISTIAN",
  teamId: "CAP",
  name: "Christian",
  position: "MEI",
  overall: 79,
  age: 23,
  morale: 75,
  value: 17,
  face: "assets/faces/CAP_christian.png"
},
{
  id: "CAP_MADSON",
  teamId: "CAP",
  name: "Madson",
  position: "LD",
  overall: 77,
  age: 32,
  morale: 73,
  value: 11,
  face: "assets/faces/CAP_madson.png"
},
{
  id: "CAP_CANOBBIO",
  teamId: "CAP",
  name: "Canobbio",
  position: "ATA",
  overall: 80,
  age: 26,
  morale: 77,
  value: 20,
  face: "assets/faces/CAP_canobbio.png"
},
{
  id: "CAP_ALEX_SANTANA",
  teamId: "CAP",
  name: "Alex Santana",
  position: "MEI",
  overall: 78,
  age: 29,
  morale: 74,
  value: 14,
  face: "assets/faces/CAP_alex_santana.png"
},
{
  id: "CAP_LEO_CITTADINI",
  teamId: "CAP",
  name: "Léo Cittadini",
  position: "MEI",
  overall: 77,
  age: 30,
  morale: 73,
  value: 12,
  face: "assets/faces/CAP_leo_cittadini.png"
},
{
  id: "CAP_VITINHO",
  teamId: "CAP",
  name: "Vitinho",
  position: "ATA",
  overall: 78,
  age: 24,
  morale: 75,
  value: 16,
  face: "assets/faces/CAP_vitinho.png"
},
{
  id: "CAP_PEDRINHO",
  teamId: "CAP",
  name: "Pedrinho",
  position: "MEI",
  overall: 76,
  age: 22,
  morale: 72,
  value: 13,
  face: "assets/faces/CAP_pedrinho.png"
},
{
  id: "CAP_DANIEL_CRUZ",
  teamId: "CAP",
  name: "Daniel Cruz",
  position: "ATA",
  overall: 74,
  age: 21,
  morale: 71,
  value: 10,
  face: "assets/faces/CAP_daniel_cruz.png"
},
{
  id: "CAP_KAIQUE_ROCHA",
  teamId: "CAP",
  name: "Kaique Rocha",
  position: "ZAG",
  overall: 76,
  age: 23,
  morale: 72,
  value: 12,
  face: "assets/faces/CAP_kaique_rocha.png"
},
{
  id: "CAP_ESQUIVEL",
  teamId: "CAP",
  name: "Esquivel",
  position: "LE",
  overall: 77,
  age: 22,
  morale: 73,
  value: 13,
  face: "assets/faces/CAP_esquivel.png"
},
{
  id: "CAP_JULIMAR",
  teamId: "CAP",
  name: "Julimar",
  position: "ATA",
  overall: 74,
  age: 23,
  morale: 71,
  value: 10,
  face: "assets/faces/CAP_julimar.png"
},
{
  id: "CAP_ROMULO",
  teamId: "CAP",
  name: "Romulo",
  position: "MEI",
  overall: 75,
  age: 22,
  morale: 72,
  value: 11,
  face: "assets/faces/CAP_romulo.png"
},
{
  id: "CAP_RENAN_VIANA",
  teamId: "CAP",
  name: "Renan Viana",
  position: "ZAG",
  overall: 73,
  age: 21,
  morale: 70,
  value: 9,
  face: "assets/faces/CAP_renan_viana.png"
},
// ==== CORITIBA ====
{
  id: "CFC_ALEF_MANGA",
  teamId: "CFC",
  name: "Alef Manga",
  position: "ATA",
  overall: 79,
  age: 29,
  morale: 75,
  value: 16,
  face: "assets/faces/CFC_alef_manga.png"
},
{
  id: "CFC_ROBSON",
  teamId: "CFC",
  name: "Robson",
  position: "ATA",
  overall: 78,
  age: 33,
  morale: 73,
  value: 12,
  face: "assets/faces/CFC_robson.png"
},
{
  id: "CFC_NATANAEL",
  teamId: "CFC",
  name: "Natanael",
  position: "LE",
  overall: 75,
  age: 29,
  morale: 72,
  value: 10,
  face: "assets/faces/CFC_natanael.png"
},
{
  id: "CFC_ANDREY",
  teamId: "CFC",
  name: "Andrey",
  position: "VOL",
  overall: 78,
  age: 25,
  morale: 75,
  value: 14,
  face: "assets/faces/CFC_andrey.png"
},
{
  id: "CFC_BRUNO_GOMES",
  teamId: "CFC",
  name: "Bruno Gomes",
  position: "VOL",
  overall: 77,
  age: 23,
  morale: 73,
  value: 13,
  face: "assets/faces/CFC_bruno_gomes.png"
},
{
  id: "CFC_KAIO_CESAR",
  teamId: "CFC",
  name: "Kaio César",
  position: "MEI",
  overall: 76,
  age: 20,
  morale: 73,
  value: 12,
  face: "assets/faces/CFC_kaio_cesar.png"
},
{
  id: "CFC_SAMARIS",
  teamId: "CFC",
  name: "Samaris",
  position: "VOL",
  overall: 78,
  age: 35,
  morale: 74,
  value: 10,
  face: "assets/faces/CFC_samaris.png"
},
{
  id: "CFC_KUSCEVIC",
  teamId: "CFC",
  name: "Kuscevic",
  position: "ZAG",
  overall: 78,
  age: 27,
  morale: 74,
  value: 15,
  face: "assets/faces/CFC_kuscevic.png"
},
{
  id: "CFC_BENITEZ",
  teamId: "CFC",
  name: "Benítez",
  position: "MEI",
  overall: 78,
  age: 30,
  morale: 74,
  value: 15,
  face: "assets/faces/CFC_benitez.png"
},
{
  id: "CFC_FABRICIO",
  teamId: "CFC",
  name: "Fabrício",
  position: "ZAG",
  overall: 75,
  age: 29,
  morale: 72,
  value: 11,
  face: "assets/faces/CFC_fabricio.png"
},
{
  id: "CFC_BOSCHILIA",
  teamId: "CFC",
  name: "Boschilia",
  position: "MEI",
  overall: 77,
  age: 28,
  morale: 73,
  value: 13,
  face: "assets/faces/CFC_boschilia.png"
},
{
  id: "CFC_THIAGO_DOMBROSKI",
  teamId: "CFC",
  name: "Thiago Dombroski",
  position: "ZAG",
  overall: 74,
  age: 22,
  morale: 71,
  value: 10,
  face: "assets/faces/CFC_thiago_dombroski.png"
},
{
  id: "CFC_MATHEUS_BIANQUI",
  teamId: "CFC",
  name: "Matheus Bianqui",
  position: "MEI",
  overall: 75,
  age: 24,
  morale: 72,
  value: 11,
  face: "assets/faces/CFC_matheus_bianqui.png"
},
{
  id: "CFC_JEAN_PIERRE",
  teamId: "CFC",
  name: "Jean Pierre",
  position: "MEI",
  overall: 79,
  age: 26,
  morale: 74,
  value: 16,
  face: "assets/faces/CFC_jean_pierre.png"
},
{
  id: "CFC_IGOR_PAIXAO",
  teamId: "CFC",
  name: "Igor Paixão",
  position: "ATA",
  overall: 79,
  age: 24,
  morale: 76,
  value: 18,
  face: "assets/faces/CFC_igor_paixao.png"
},
{
  id: "CFC_WILLIAN_FARIAS",
  teamId: "CFC",
  name: "Willian Farias",
  position: "VOL",
  overall: 76,
  age: 34,
  morale: 72,
  value: 9,
  face: "assets/faces/CFC_willian_farias.png"
},
{
  id: "CFC_HENRIQUE",
  teamId: "CFC",
  name: "Henrique",
  position: "ZAG",
  overall: 76,
  age: 35,
  morale: 72,
  value: 9,
  face: "assets/faces/CFC_henrique.png"
},
{
  id: "CFC_WARLEY",
  teamId: "CFC",
  name: "Warley",
  position: "LD",
  overall: 75,
  age: 24,
  morale: 72,
  value: 11,
  face: "assets/faces/CFC_warley.png"
},
{
  id: "CFC_MATHEUS_ALEXANDRE",
  teamId: "CFC",
  name: "Matheus Alexandre",
  position: "LD",
  overall: 74,
  age: 24,
  morale: 71,
  value: 10,
  face: "assets/faces/CFC_matheus_alexandre.png"
},
{
  id: "CFC_GABRIEL",
  teamId: "CFC",
  name: "Gabriel",
  position: "GOL",
  overall: 74,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/CFC_gabriel.png"
},
// ==== CHAPECOENSE ====
{
  id: "CHA_PEROTTI",
  teamId: "CHA",
  name: "Perotti",
  position: "ATA",
  overall: 77,
  age: 25,
  morale: 74,
  value: 14,
  face: "assets/faces/CHA_perotti.png"
},
{
  id: "CHA_ALISSON_FARIAS",
  teamId: "CHA",
  name: "Alisson Farias",
  position: "ATA",
  overall: 75,
  age: 27,
  morale: 72,
  value: 11,
  face: "assets/faces/CHA_alisson_farias.png"
},
{
  id: "CHA_RODRIGO_FREITAS",
  teamId: "CHA",
  name: "Rodrigo Freitas",
  position: "ZAG",
  overall: 74,
  age: 25,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_rodrigo_freitas.png"
},
{
  id: "CHA_MAURICIO",
  teamId: "CHA",
  name: "Maurício",
  position: "ZAG",
  overall: 74,
  age: 26,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_mauricio.png"
},
{
  id: "CHA_MANCHA",
  teamId: "CHA",
  name: "Mancha",
  position: "VOL",
  overall: 73,
  age: 27,
  morale: 70,
  value: 9,
  face: "assets/faces/CHA_mancha.png"
},
{
  id: "CHA_JOAO_PAULO",
  teamId: "CHA",
  name: "João Paulo",
  position: "GOL",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/CHA_joao_paulo.png"
},
{
  id: "CHA_CLEYLTON",
  teamId: "CHA",
  name: "Cleylton",
  position: "ZAG",
  overall: 74,
  age: 30,
  morale: 71,
  value: 9,
  face: "assets/faces/CHA_cleylton.png"
},
{
  id: "CHA_CHRYSTIAN",
  teamId: "CHA",
  name: "Chrystian",
  position: "LD",
  overall: 73,
  age: 24,
  morale: 70,
  value: 9,
  face: "assets/faces/CHA_chrystian.png"
},
{
  id: "CHA_PABLO_OLIVEIRA",
  teamId: "CHA",
  name: "Pablo Oliveira",
  position: "MEI",
  overall: 74,
  age: 24,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_pablo_oliveira.png"
},
{
  id: "CHA_DARLAN",
  teamId: "CHA",
  name: "Darlan",
  position: "VOL",
  overall: 74,
  age: 25,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_darlan.png"
},
{
  id: "CHA_KAIO_NUNES",
  teamId: "CHA",
  name: "Kaio Nunes",
  position: "ATA",
  overall: 73,
  age: 25,
  morale: 70,
  value: 9,
  face: "assets/faces/CHA_kaio_nunes.png"
},
{
  id: "CHA_VINI_PAULISTA",
  teamId: "CHA",
  name: "Vini Paulista",
  position: "ATA",
  overall: 73,
  age: 24,
  morale: 70,
  value: 9,
  face: "assets/faces/CHA_vini_paulista.png"
},
{
  id: "CHA_TIAGO_REAL",
  teamId: "CHA",
  name: "Tiago Real",
  position: "MEI",
  overall: 75,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/CHA_tiago_real.png"
},
{
  id: "CHA_GEOVANE",
  teamId: "CHA",
  name: "Geovane",
  position: "MEI",
  overall: 74,
  age: 24,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_geovane.png"
},
{
  id: "CHA_LUCAS_RIBEIRO",
  teamId: "CHA",
  name: "Lucas Ribeiro",
  position: "ZAG",
  overall: 74,
  age: 25,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_lucas_ribeiro.png"
},
{
  id: "CHA_RONEI",
  teamId: "CHA",
  name: "Ronei",
  position: "MEI",
  overall: 73,
  age: 24,
  morale: 70,
  value: 9,
  face: "assets/faces/CHA_ronei.png"
},
{
  id: "CHA_BUSANELLO",
  teamId: "CHA",
  name: "Busanello",
  position: "LE",
  overall: 76,
  age: 25,
  morale: 73,
  value: 13,
  face: "assets/faces/CHA_busanello.png"
},
{
  id: "CHA_GUILHERME",
  teamId: "CHA",
  name: "Guilherme",
  position: "ATA",
  overall: 73,
  age: 23,
  morale: 70,
  value: 9,
  face: "assets/faces/CHA_guilherme.png"
},
{
  id: "CHA_LEO_GOMES",
  teamId: "CHA",
  name: "Léo Gomes",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 71,
  value: 10,
  face: "assets/faces/CHA_leo_gomes.png"
},
{
  id: "CHA_MATHEUS_BACHI",
  teamId: "CHA",
  name: "Matheus Bachi",
  position: "MEI",
  overall: 72,
  age: 23,
  morale: 70,
  value: 8,
  face: "assets/faces/CHA_matheus_bachi.png"
},
// ==== REMO ====
{
  id: "REM_MURIQUI",
  teamId: "REM",
  name: "Muriqui",
  position: "ATA",
  overall: 76,
  age: 38,
  morale: 72,
  value: 7,
  face: "assets/faces/REM_muriqui.png"
},
{
  id: "REM_RONALD",
  teamId: "REM",
  name: "Ronald",
  position: "ATA",
  overall: 74,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/REM_ronald.png"
},
{
  id: "REM_NETO_PESSOA",
  teamId: "REM",
  name: "Neto Pessoa",
  position: "ATA",
  overall: 74,
  age: 30,
  morale: 71,
  value: 9,
  face: "assets/faces/REM_neto_pessoa.png"
},
{
  id: "REM_LEONAN",
  teamId: "REM",
  name: "Leonan",
  position: "LE",
  overall: 74,
  age: 27,
  morale: 71,
  value: 10,
  face: "assets/faces/REM_leonan.png"
},
{
  id: "REM_KEVIN",
  teamId: "REM",
  name: "Kevin",
  position: "LD",
  overall: 73,
  age: 27,
  morale: 70,
  value: 9,
  face: "assets/faces/REM_kevin.png"
},
{
  id: "REM_JEAN_SILVA",
  teamId: "REM",
  name: "Jean Silva",
  position: "ATA",
  overall: 73,
  age: 27,
  morale: 70,
  value: 9,
  face: "assets/faces/REM_jean_silva.png"
},
{
  id: "REM_LUCAS_SIQUEIRA",
  teamId: "REM",
  name: "Lucas Siqueira",
  position: "VOL",
  overall: 75,
  age: 35,
  morale: 72,
  value: 8,
  face: "assets/faces/REM_lucas_siqueira.png"
},
{
  id: "REM_FELIPE_GEDOZ",
  teamId: "REM",
  name: "Felipe Gedoz",
  position: "MEI",
  overall: 76,
  age: 31,
  morale: 73,
  value: 11,
  face: "assets/faces/REM_felipe_gedoz.png"
},
{
  id: "REM_VINICIUS",
  teamId: "REM",
  name: "Vinícius",
  position: "GOL",
  overall: 75,
  age: 30,
  morale: 72,
  value: 10,
  face: "assets/faces/REM_vinicius.png"
},
{
  id: "REM_PAULINHO_CURUA",
  teamId: "REM",
  name: "Paulinho Curuá",
  position: "VOL",
  overall: 74,
  age: 23,
  morale: 71,
  value: 9,
  face: "assets/faces/REM_paulinho_curua.png"
},
{
  id: "REM_WARLEY",
  teamId: "REM",
  name: "Warley",
  position: "LD",
  overall: 73,
  age: 24,
  morale: 70,
  value: 9,
  face: "assets/faces/REM_warley.png"
},
{
  id: "REM_ANDERSON_UCHOA",
  teamId: "REM",
  name: "Anderson Uchôa",
  position: "VOL",
  overall: 74,
  age: 32,
  morale: 71,
  value: 8,
  face: "assets/faces/REM_anderson_uchoa.png"
},
{
  id: "REM_WELLINGTON_SILVA",
  teamId: "REM",
  name: "Wellington Silva",
  position: "ATA",
  overall: 75,
  age: 31,
  morale: 72,
  value: 10,
  face: "assets/faces/REM_wellington_silva.png"
},
{
  id: "REM_PEDRO_VITOR",
  teamId: "REM",
  name: "Pedro Vitor",
  position: "ATA",
  overall: 73,
  age: 24,
  morale: 70,
  value: 9,
  face: "assets/faces/REM_pedro_vitor.png"
},
{
  id: "REM_RAFAEL_JANSEN",
  teamId: "REM",
  name: "Rafael Jansen",
  position: "ZAG",
  overall: 74,
  age: 28,
  morale: 71,
  value: 10,
  face: "assets/faces/REM_rafael_jansen.png"
},
{
  id: "REM_IGOR_FERNANDES",
  teamId: "REM",
  name: "Igor Fernandes",
  position: "LE",
  overall: 74,
  age: 28,
  morale: 71,
  value: 10,
  face: "assets/faces/REM_igor_fernandes.png"
},
{
  id: "REM_DANIEL_FELIPE",
  teamId: "REM",
  name: "Daniel Felipe",
  position: "ZAG",
  overall: 73,
  age: 29,
  morale: 70,
  value: 9,
  face: "assets/faces/REM_daniel_felipe.png"
},
{
  id: "REM_ERICK_FLORES",
  teamId: "REM",
  name: "Erick Flores",
  position: "MEI",
  overall: 74,
  age: 34,
  morale: 71,
  value: 8,
  face: "assets/faces/REM_erick_flores.png"
},
{
  id: "REM_PINGO",
  teamId: "REM",
  name: "Pingo",
  position: "MEI",
  overall: 73,
  age: 26,
  morale: 70,
  value: 9,
  face: "assets/faces/REM_pingo.png"
},
{
  id: "REM_DIEGO_GUERRA",
  teamId: "REM",
  name: "Diego Guerra",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/REM_diego_guerra.png"
},
// ==== CUIABÁ ====
{
  id: "CUI_DEYVERSON",
  teamId: "CUI",
  name: "Deyverson",
  position: "ATA",
  overall: 80,
  age: 33,
  morale: 76,
  value: 15,
  face: "assets/faces/CUI_deyverson.png"
},
{
  id: "CUI_CLAYSON",
  teamId: "CUI",
  name: "Clayson",
  position: "ATA",
  overall: 77,
  age: 29,
  morale: 73,
  value: 12,
  face: "assets/faces/CUI_clayson.png"
},
{
  id: "CUI_JONATHAN_CAFU",
  teamId: "CUI",
  name: "Jonathan Cafú",
  position: "ATA",
  overall: 77,
  age: 32,
  morale: 73,
  value: 11,
  face: "assets/faces/CUI_jonathan_cafu.png"
},
{
  id: "CUI_RODRIGUINHO",
  teamId: "CUI",
  name: "Rodriguinho",
  position: "MEI",
  overall: 78,
  age: 36,
  morale: 74,
  value: 10,
  face: "assets/faces/CUI_rodriguinho.png"
},
{
  id: "CUI_PEPE",
  teamId: "CUI",
  name: "Pepê",
  position: "MEI",
  overall: 78,
  age: 26,
  morale: 75,
  value: 15,
  face: "assets/faces/CUI_pepe.png"
},
{
  id: "CUI_LUCAS_MINEIRO",
  teamId: "CUI",
  name: "Lucas Mineiro",
  position: "VOL",
  overall: 77,
  age: 27,
  morale: 73,
  value: 13,
  face: "assets/faces/CUI_lucas_mineiro.png"
},
{
  id: "CUI_ALAN_EMPEREUR",
  teamId: "CUI",
  name: "Alan Empereur",
  position: "ZAG",
  overall: 78,
  age: 30,
  morale: 74,
  value: 14,
  face: "assets/faces/CUI_alan_empereur.png"
},
{
  id: "CUI_JOAO_LUCAS",
  teamId: "CUI",
  name: "João Lucas",
  position: "LD",
  overall: 77,
  age: 26,
  morale: 73,
  value: 13,
  face: "assets/faces/CUI_joao_lucas.png"
},
{
  id: "CUI_WALTER",
  teamId: "CUI",
  name: "Walter",
  position: "GOL",
  overall: 78,
  age: 36,
  morale: 74,
  value: 10,
  face: "assets/faces/CUI_walter.png"
},
{
  id: "CUI_MARLLON",
  teamId: "CUI",
  name: "Marllon",
  position: "ZAG",
  overall: 77,
  age: 31,
  morale: 73,
  value: 12,
  face: "assets/faces/CUI_marllon.png"
},
{
  id: "CUI_ANDRE_LUIS",
  teamId: "CUI",
  name: "André Luís",
  position: "ATA",
  overall: 76,
  age: 27,
  morale: 72,
  value: 12,
  face: "assets/faces/CUI_andre_luis.png"
},
{
  id: "CUI_DENILSON",
  teamId: "CUI",
  name: "Denílson",
  position: "VOL",
  overall: 75,
  age: 26,
  morale: 72,
  value: 11,
  face: "assets/faces/CUI_denilson.png"
},
{
  id: "CUI_RAFAEL_GAVA",
  teamId: "CUI",
  name: "Rafael Gava",
  position: "MEI",
  overall: 77,
  age: 30,
  morale: 73,
  value: 12,
  face: "assets/faces/CUI_rafael_gava.png"
},
{
  id: "CUI_UENDEL",
  teamId: "CUI",
  name: "Uendel",
  position: "LE",
  overall: 76,
  age: 35,
  morale: 72,
  value: 9,
  face: "assets/faces/CUI_uendel.png"
},
{
  id: "CUI_PAULAO",
  teamId: "CUI",
  name: "Paulão",
  position: "ZAG",
  overall: 76,
  age: 37,
  morale: 72,
  value: 8,
  face: "assets/faces/CUI_paulao.png"
},
{
  id: "CUI_CAMILO",
  teamId: "CUI",
  name: "Camilo",
  position: "MEI",
  overall: 76,
  age: 28,
  morale: 73,
  value: 12,
  face: "assets/faces/CUI_camilo.png"
},
{
  id: "CUI_ELTON",
  teamId: "CUI",
  name: "Elton",
  position: "ATA",
  overall: 75,
  age: 37,
  morale: 71,
  value: 8,
  face: "assets/faces/CUI_elton.png"
},
{
  id: "CUI_YURI",
  teamId: "CUI",
  name: "Yuri",
  position: "VOL",
  overall: 74,
  age: 26,
  morale: 71,
  value: 10,
  face: "assets/faces/CUI_yuri.png"
},
{
  id: "CUI_FELIPE_MARQUES",
  teamId: "CUI",
  name: "Felipe Marques",
  position: "ATA",
  overall: 75,
  age: 33,
  morale: 72,
  value: 9,
  face: "assets/faces/CUI_felipe_marques.png"
},
{
  id: "CUI_AUREMIR",
  teamId: "CUI",
  name: "Auremir",
  position: "VOL",
  overall: 74,
  age: 30,
  morale: 71,
  value: 9,
  face: "assets/faces/CUI_auremir.png"
},
// ==== AMÉRICA-MG ====
{
  id: "AME_ALOISIO",
  teamId: "AME",
  name: "Aloísio Boi Bandido",
  position: "ATA",
  overall: 80,
  age: 36,
  morale: 76,
  value: 10,
  face: "assets/faces/AME_aloisio.png"
},
{
  id: "AME_BENITEZ",
  teamId: "AME",
  name: "Benítez",
  position: "MEI",
  overall: 78,
  age: 30,
  morale: 74,
  value: 15,
  face: "assets/faces/AME_benitez.png"
},
{
  id: "AME_JUNINHO",
  teamId: "AME",
  name: "Juninho",
  position: "VOL",
  overall: 79,
  age: 32,
  morale: 75,
  value: 14,
  face: "assets/faces/AME_juninho.png"
},
{
  id: "AME_MASTRIANI",
  teamId: "AME",
  name: "Mastriani",
  position: "ATA",
  overall: 80,
  age: 30,
  morale: 76,
  value: 16,
  face: "assets/faces/AME_mastriani.png"
},
{
  id: "AME_EVERALDO",
  teamId: "AME",
  name: "Everaldo",
  position: "ATA",
  overall: 78,
  age: 29,
  morale: 74,
  value: 14,
  face: "assets/faces/AME_everaldo.png"
},
{
  id: "AME_DANILO_AVELAR",
  teamId: "AME",
  name: "Danilo Avelar",
  position: "ZAG",
  overall: 76,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/AME_danilo_avelar.png"
},
{
  id: "AME_CAVICHIOLI",
  teamId: "AME",
  name: "Cavichioli",
  position: "GOL",
  overall: 77,
  age: 38,
  morale: 73,
  value: 7,
  face: "assets/faces/AME_cavichioli.png"
},
{
  id: "AME_MARLON",
  teamId: "AME",
  name: "Marlon",
  position: "LE",
  overall: 78,
  age: 27,
  morale: 75,
  value: 14,
  face: "assets/faces/AME_marlon.png"
},
{
  id: "AME_LUCAS_KAL",
  teamId: "AME",
  name: "Lucas Kal",
  position: "VOL",
  overall: 77,
  age: 26,
  morale: 73,
  value: 13,
  face: "assets/faces/AME_lucas_kal.png"
},
{
  id: "AME_FELIPE_AZEVEDO",
  teamId: "AME",
  name: "Felipe Azevedo",
  position: "ATA",
  overall: 77,
  age: 37,
  morale: 73,
  value: 8,
  face: "assets/faces/AME_felipe_azevedo.png"
},
{
  id: "AME_ALE",
  teamId: "AME",
  name: "Alê",
  position: "MEI",
  overall: 78,
  age: 32,
  morale: 74,
  value: 13,
  face: "assets/faces/AME_ale.png"
},
{
  id: "AME_BRENO",
  teamId: "AME",
  name: "Breno",
  position: "MEI",
  overall: 75,
  age: 23,
  morale: 72,
  value: 11,
  face: "assets/faces/AME_breno.png"
},
{
  id: "AME_PEDRINHO",
  teamId: "AME",
  name: "Pedrinho",
  position: "ATA",
  overall: 76,
  age: 24,
  morale: 73,
  value: 12,
  face: "assets/faces/AME_pedrinho.png"
},
{
  id: "AME_PAULINHO_BOIA",
  teamId: "AME",
  name: "Paulinho Boia",
  position: "ATA",
  overall: 75,
  age: 25,
  morale: 72,
  value: 11,
  face: "assets/faces/AME_paulinho_boia.png"
},
{
  id: "AME_GUSTAVINHO",
  teamId: "AME",
  name: "Gustavinho",
  position: "MEI",
  overall: 75,
  age: 22,
  morale: 72,
  value: 11,
  face: "assets/faces/AME_gustavinho.png"
},
{
  id: "AME_RICARDO_SILVA",
  teamId: "AME",
  name: "Ricardo Silva",
  position: "ZAG",
  overall: 76,
  age: 30,
  morale: 73,
  value: 11,
  face: "assets/faces/AME_ricardo_silva.png"
},
{
  id: "AME_MATEUS_GONCALVES",
  teamId: "AME",
  name: "Mateus Gonçalves",
  position: "ATA",
  overall: 75,
  age: 29,
  morale: 72,
  value: 11,
  face: "assets/faces/AME_mateus_goncalves.png"
},
{
  id: "AME_WELLINGTON_PAULISTA",
  teamId: "AME",
  name: "Wellington Paulista",
  position: "ATA",
  overall: 77,
  age: 40,
  morale: 73,
  value: 6,
  face: "assets/faces/AME_wellington_paulista.png"
},
{
  id: "AME_INDIO",
  teamId: "AME",
  name: "Índio",
  position: "MEI",
  overall: 74,
  age: 23,
  morale: 71,
  value: 10,
  face: "assets/faces/AME_indio.png"
},
{
  id: "AME_ADYSON",
  teamId: "AME",
  name: "Adyson",
  position: "ATA",
  overall: 74,
  age: 19,
  morale: 71,
  value: 10,
  face: "assets/faces/AME_adyson.png"
},
// ==== ATLÉTICO-GO ====
{
  id: "ACG_SHAYLON",
  teamId: "ACG",
  name: "Shaylon",
  position: "MEI",
  overall: 78,
  age: 27,
  morale: 75,
  value: 15,
  face: "assets/faces/ACG_shaylon.png"
},
{
  id: "ACG_LUIZ_FERNANDO",
  teamId: "ACG",
  name: "Luiz Fernando",
  position: "ATA",
  overall: 77,
  age: 27,
  morale: 74,
  value: 13,
  face: "assets/faces/ACG_luiz_fernando.png"
},
{
  id: "ACG_BARALHAS",
  teamId: "ACG",
  name: "Baralhas",
  position: "VOL",
  overall: 77,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/ACG_baralhas.png"
},
{
  id: "ACG_RONALDO",
  teamId: "ACG",
  name: "Ronaldo",
  position: "GOL",
  overall: 76,
  age: 27,
  morale: 73,
  value: 11,
  face: "assets/faces/ACG_ronaldo.png"
},
{
  id: "ACG_JEFFERSON",
  teamId: "ACG",
  name: "Jefferson",
  position: "LE",
  overall: 76,
  age: 26,
  morale: 73,
  value: 12,
  face: "assets/faces/ACG_jefferson.png"
},
{
  id: "ACG_DUDU",
  teamId: "ACG",
  name: "Dudu",
  position: "LD",
  overall: 76,
  age: 27,
  morale: 73,
  value: 12,
  face: "assets/faces/ACG_dudu.png"
},
{
  id: "ACG_AIRTON",
  teamId: "ACG",
  name: "Airton",
  position: "ATA",
  overall: 76,
  age: 24,
  morale: 73,
  value: 12,
  face: "assets/faces/ACG_airton.png"
},
{
  id: "ACG_MATHEUS_SALES",
  teamId: "ACG",
  name: "Matheus Sales",
  position: "VOL",
  overall: 76,
  age: 27,
  morale: 73,
  value: 12,
  face: "assets/faces/ACG_matheus_sales.png"
},
{
  id: "ACG_WELLINGTON_RATO",
  teamId: "ACG",
  name: "Wellington Rato",
  position: "MEI",
  overall: 78,
  age: 32,
  morale: 75,
  value: 14,
  face: "assets/faces/ACG_wellington_rato.png"
},
{
  id: "ACG_PEDRO_RAUL",
  teamId: "ACG",
  name: "Pedro Raul",
  position: "ATA",
  overall: 79,
  age: 28,
  morale: 75,
  value: 17,
  face: "assets/faces/ACG_pedro_raul.png"
},
{
  id: "ACG_GABRIEL_BARROS",
  teamId: "ACG",
  name: "Gabriel Barros",
  position: "ATA",
  overall: 75,
  age: 22,
  morale: 72,
  value: 12,
  face: "assets/faces/ACG_gabriel_barros.png"
},
{
  id: "ACG_EDSON",
  teamId: "ACG",
  name: "Edson",
  position: "VOL",
  overall: 75,
  age: 26,
  morale: 72,
  value: 11,
  face: "assets/faces/ACG_edson.png"
},
{
  id: "ACG_MARLON_FREITAS",
  teamId: "ACG",
  name: "Marlon Freitas",
  position: "VOL",
  overall: 78,
  age: 29,
  morale: 75,
  value: 15,
  face: "assets/faces/ACG_marlon_freitas.png"
},
{
  id: "ACG_ARTHUR_GOMES",
  teamId: "ACG",
  name: "Arthur Gomes",
  position: "ATA",
  overall: 77,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/ACG_arthur_gomes.png"
},
{
  id: "ACG_MICHEL",
  teamId: "ACG",
  name: "Michel",
  position: "ZAG",
  overall: 75,
  age: 25,
  morale: 72,
  value: 11,
  face: "assets/faces/ACG_michel.png"
},
{
  id: "ACG_NATHAN",
  teamId: "ACG",
  name: "Nathan",
  position: "ZAG",
  overall: 75,
  age: 24,
  morale: 72,
  value: 11,
  face: "assets/faces/ACG_nathan.png"
},
{
  id: "ACG_LUAN_POLLI",
  teamId: "ACG",
  name: "Luan Polli",
  position: "GOL",
  overall: 75,
  age: 31,
  morale: 72,
  value: 10,
  face: "assets/faces/ACG_luan_polli.png"
},
{
  id: "ACG_ANDRE_LUIS",
  teamId: "ACG",
  name: "André Luís",
  position: "ATA",
  overall: 75,
  age: 27,
  morale: 72,
  value: 12,
  face: "assets/faces/ACG_andre_luis.png"
},
{
  id: "ACG_RICKSON",
  teamId: "ACG",
  name: "Rickson",
  position: "VOL",
  overall: 74,
  age: 24,
  morale: 71,
  value: 10,
  face: "assets/faces/ACG_rickson.png"
},
{
  id: "ACG_MATHEUS",
  teamId: "ACG",
  name: "Matheus",
  position: "MEI",
  overall: 74,
  age: 23,
  morale: 71,
  value: 10,
  face: "assets/faces/ACG_matheus.png"
},
// ==== NOVORIZONTINO ====
{
  id: "NOV_DOUGLAS_BAGGIO",
  teamId: "NOV",
  name: "Douglas Baggio",
  position: "ATA",
  overall: 76,
  age: 29,
  morale: 73,
  value: 12,
  face: "assets/faces/NOV_douglas_baggio.png"
},
{
  id: "NOV_RONALDO_SILVA",
  teamId: "NOV",
  name: "Ronaldo Silva",
  position: "ATA",
  overall: 74,
  age: 30,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_ronaldo_silva.png"
},
{
  id: "NOV_AYLON",
  teamId: "NOV",
  name: "Aylon",
  position: "ATA",
  overall: 75,
  age: 32,
  morale: 72,
  value: 11,
  face: "assets/faces/NOV_aylon.png"
},
{
  id: "NOV_REVERSON",
  teamId: "NOV",
  name: "Reverson",
  position: "LE",
  overall: 74,
  age: 26,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_reverson.png"
},
{
  id: "NOV_BRUNO_AGUIAR",
  teamId: "NOV",
  name: "Bruno Aguiar",
  position: "ZAG",
  overall: 75,
  age: 36,
  morale: 72,
  value: 8,
  face: "assets/faces/NOV_bruno_aguiar.png"
},
{
  id: "NOV_ROMULO",
  teamId: "NOV",
  name: "Rômulo",
  position: "MEI",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/NOV_romulo.png"
},
{
  id: "NOV_FELIPE_RODRIGUES",
  teamId: "NOV",
  name: "Felipe Rodrigues",
  position: "LD",
  overall: 74,
  age: 29,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_felipe_rodrigues.png"
},
{
  id: "NOV_BOCHESHA",
  teamId: "NOV",
  name: "Gustavo Bochecha",
  position: "MEI",
  overall: 76,
  age: 27,
  morale: 73,
  value: 12,
  face: "assets/faces/NOV_gustavo_bochecha.png"
},
{
  id: "NOV_LEO_BAIANO",
  teamId: "NOV",
  name: "Léo Baiano",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_leo_baiano.png"
},
{
  id: "NOV_CLEO_SILVA",
  teamId: "NOV",
  name: "Cléo Silva",
  position: "ATA",
  overall: 74,
  age: 30,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_cleo_silva.png"
},
{
  id: "NOV_LUCAS_MENDES",
  teamId: "NOV",
  name: "Lucas Mendes",
  position: "ZAG",
  overall: 74,
  age: 27,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_lucas_mendes.png"
},
{
  id: "NOV_HELIO_BORGES",
  teamId: "NOV",
  name: "Hélio Borges",
  position: "ATA",
  overall: 74,
  age: 24,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_helio_borges.png"
},
{
  id: "NOV_RODOLFO_FILEMON",
  teamId: "NOV",
  name: "Rodolfo Filemon",
  position: "ZAG",
  overall: 74,
  age: 29,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_rodolfo_filemon.png"
},
{
  id: "NOV_RICARDINHO",
  teamId: "NOV",
  name: "Ricardinho",
  position: "MEI",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/NOV_ricardinho.png"
},
{
  id: "NOV_RONALD",
  teamId: "NOV",
  name: "Ronald",
  position: "MEI",
  overall: 74,
  age: 26,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_ronald.png"
},
{
  id: "NOV_QUIRINO",
  teamId: "NOV",
  name: "Quirino",
  position: "ATA",
  overall: 74,
  age: 27,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_quirino.png"
},
{
  id: "NOV_TONY",
  teamId: "NOV",
  name: "Tony",
  position: "MEI",
  overall: 74,
  age: 29,
  morale: 71,
  value: 10,
  face: "assets/faces/NOV_tony.png"
},
{
  id: "NOV_ANDERSON",
  teamId: "NOV",
  name: "Anderson",
  position: "ZAG",
  overall: 73,
  age: 26,
  morale: 70,
  value: 9,
  face: "assets/faces/NOV_anderson.png"
},
{
  id: "NOV_VINICIUS",
  teamId: "NOV",
  name: "Vinícius",
  position: "GOL",
  overall: 73,
  age: 25,
  morale: 70,
  value: 9,
  face: "assets/faces/NOV_vinicius.png"
},
{
  id: "NOV_JOAO_PAULO",
  teamId: "NOV",
  name: "João Paulo",
  position: "GOL",
  overall: 73,
  age: 26,
  morale: 70,
  value: 9,
  face: "assets/faces/NOV_joao_paulo.png"
},
// ==== GOIÁS ====
{
  id: "GOI_VINICIUS",
  teamId: "GOI",
  name: "Vinícius",
  position: "ATA",
  overall: 76,
  age: 30,
  morale: 73,
  value: 12,
  face: "assets/faces/GOI_vinicius.png"
},
{
  id: "GOI_APODI",
  teamId: "GOI",
  name: "Apodi",
  position: "LD",
  overall: 76,
  age: 37,
  morale: 72,
  value: 8,
  face: "assets/faces/GOI_apodi.png"
},
{
  id: "GOI_SIDIMAR",
  teamId: "GOI",
  name: "Sidimar",
  position: "ZAG",
  overall: 75,
  age: 30,
  morale: 72,
  value: 10,
  face: "assets/faces/GOI_sidimar.png"
},
{
  id: "GOI_DIEGO_GONCALVES",
  teamId: "GOI",
  name: "Diego Gonçalves",
  position: "ATA",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_diego_goncalves.png"
},
{
  id: "GOI_FELLIPE_BASTOS",
  teamId: "GOI",
  name: "Fellipe Bastos",
  position: "VOL",
  overall: 76,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/GOI_fellipe_bastos.png"
},
{
  id: "GOI_HUGO",
  teamId: "GOI",
  name: "Hugo",
  position: "LE",
  overall: 75,
  age: 25,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_hugo.png"
},
{
  id: "GOI_MAGUINHO",
  teamId: "GOI",
  name: "Maguinho",
  position: "LD",
  overall: 75,
  age: 31,
  morale: 72,
  value: 10,
  face: "assets/faces/GOI_maguinho.png"
},
{
  id: "GOI_CAIO_VINICIUS",
  teamId: "GOI",
  name: "Caio Vinícius",
  position: "VOL",
  overall: 75,
  age: 24,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_caio_vinicius.png"
},
{
  id: "GOI_NICOLAS",
  teamId: "GOI",
  name: "Nicolas",
  position: "ATA",
  overall: 76,
  age: 25,
  morale: 73,
  value: 13,
  face: "assets/faces/GOI_nicolas.png"
},
{
  id: "GOI_YAN_SOUTO",
  teamId: "GOI",
  name: "Yan Souto",
  position: "ZAG",
  overall: 74,
  age: 22,
  morale: 71,
  value: 10,
  face: "assets/faces/GOI_yan_souto.png"
},
{
  id: "GOI_MATHEUS_SALES",
  teamId: "GOI",
  name: "Matheus Sales",
  position: "VOL",
  overall: 75,
  age: 27,
  morale: 72,
  value: 11,
  face: "as
// ==== GOIÁS ====
{
  id: "GOI_VINICIUS",
  teamId: "GOI",
  name: "Vinícius",
  position: "ATA",
  overall: 76,
  age: 30,
  morale: 73,
  value: 12,
  face: "assets/faces/GOI_vinicius.png"
},
{
  id: "GOI_APODI",
  teamId: "GOI",
  name: "Apodi",
  position: "LD",
  overall: 76,
  age: 37,
  morale: 72,
  value: 8,
  face: "assets/faces/GOI_apodi.png"
},
{
  id: "GOI_SIDIMAR",
  teamId: "GOI",
  name: "Sidimar",
  position: "ZAG",
  overall: 75,
  age: 30,
  morale: 72,
  value: 10,
  face: "assets/faces/GOI_sidimar.png"
},
{
  id: "GOI_DIEGO_GONCALVES",
  teamId: "GOI",
  name: "Diego Gonçalves",
  position: "ATA",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_diego_goncalves.png"
},
{
  id: "GOI_FELLIPE_BASTOS",
  teamId: "GOI",
  name: "Fellipe Bastos",
  position: "VOL",
  overall: 76,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/GOI_fellipe_bastos.png"
},
{
  id: "GOI_HUGO",
  teamId: "GOI",
  name: "Hugo",
  position: "LE",
  overall: 75,
  age: 25,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_hugo.png"
},
{
  id: "GOI_MAGUINHO",
  teamId: "GOI",
  name: "Maguinho",
  position: "LD",
  overall: 75,
  age: 31,
  morale: 72,
  value: 10,
  face: "assets/faces/GOI_maguinho.png"
},
{
  id: "GOI_CAIO_VINICIUS",
  teamId: "GOI",
  name: "Caio Vinícius",
  position: "VOL",
  overall: 75,
  age: 24,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_caio_vinicius.png"
},
{
  id: "GOI_NICOLAS",
  teamId: "GOI",
  name: "Nicolas",
  position: "ATA",
  overall: 76,
  age: 25,
  morale: 73,
  value: 13,
  face: "assets/faces/GOI_nicolas.png"
},
{
  id: "GOI_YAN_SOUTO",
  teamId: "GOI",
  name: "Yan Souto",
  position: "ZAG",
  overall: 74,
  age: 22,
  morale: 71,
  value: 10,
  face: "assets/faces/GOI_yan_souto.png"
},
{
  id: "GOI_MATHEUS_SALES",
  teamId: "GOI",
  name: "Matheus Sales",
  position: "VOL",
  overall: 75,
  age: 27,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_matheus_sales.png"
},
{
  id: "GOI_DIEGO",
  teamId: "GOI",
  name: "Diego",
  position: "MEI",
  overall: 74,
  age: 25,
  morale: 71,
  value: 10,
  face: "assets/faces/GOI_diego.png"
},
{
  id: "GOI_MARCAO",
  teamId: "GOI",
  name: "Marcão",
  position: "ATA",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_marcao.png"
},
{
  id: "GOI_EVERTON_BRITO",
  teamId: "GOI",
  name: "Everton Brito",
  position: "ATA",
  overall: 74,
  age: 27,
  morale: 71,
  value: 10,
  face: "assets/faces/GOI_everton_brito.png"
},
{
  id: "GOI_LUAN_DIAS",
  teamId: "GOI",
  name: "Luan Dias",
  position: "MEI",
  overall: 75,
  age: 27,
  morale: 72,
  value: 11,
  face: "assets/faces/GOI_luan_dias.png"
},
{
  id: "GOI_ALLANO",
  teamId: "GOI",
  name: "Allano",
  position: "ATA",
  overall: 74,
  age: 29,
  morale: 71,
  value: 10,
  face: "assets/faces/GOI_allano.png"
},
{
  id: "GOI_DANILO_BARCELOS",
  teamId: "GOI",
  name: "Danilo Barcelos",
  position: "LE",
  overall: 75,
  age: 32,
  morale: 72,
  value: 9,
  face: "assets/faces/GOI_danilo_barcelos.png"
},
{
  id: "GOI_SANDER",
  teamId: "GOI",
  name: "Sander",
  position: "LE",
  overall: 75,
  age: 33,
  morale: 72,
  value: 9,
  face: "assets/faces/GOI_sander.png"
},
{
  id: "GOI_PEDRO_RAUL",
  teamId: "GOI",
  name: "Pedro Raul",
  position: "ATA",
  overall: 79,
  age: 28,
  morale: 75,
  value: 17,
  face: "assets/faces/GOI_pedro_raul.png"
},
{
  id: "GOI_TADEU",
  teamId: "GOI",
  name: "Tadeu",
  position: "GOL",
  overall: 80,
  age: 32,
  morale: 77,
  value: 16,
  face: "assets/faces/GOI_tadeu.png"
},
// ==== AVAÍ ====
{
  id: "AVA_BISSOLI",
  teamId: "AVA",
  name: "Bissoli",
  position: "ATA",
  overall: 77,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/AVA_bissoli.png"
},
{
  id: "AVA_WILLIAM_POTTKER",
  teamId: "AVA",
  name: "William Pottker",
  position: "ATA",
  overall: 77,
  age: 31,
  morale: 73,
  value: 12,
  face: "assets/faces/AVA_william_pottker.png"
},
{
  id: "AVA_RENATO",
  teamId: "AVA",
  name: "Renato",
  position: "MEI",
  overall: 76,
  age: 33,
  morale: 73,
  value: 11,
  face: "assets/faces/AVA_renato.png"
},
{
  id: "AVA_BRUNO_SILVA",
  teamId: "AVA",
  name: "Bruno Silva",
  position: "VOL",
  overall: 77,
  age: 37,
  morale: 73,
  value: 8,
  face: "assets/faces/AVA_bruno_silva.png"
},
{
  id: "AVA_RANIELE",
  teamId: "AVA",
  name: "Raniele",
  position: "VOL",
  overall: 76,
  age: 26,
  morale: 73,
  value: 12,
  face: "assets/faces/AVA_raniele.png"
},
{
  id: "AVA_GETULIO",
  teamId: "AVA",
  name: "Getúlio",
  position: "ATA",
  overall: 75,
  age: 26,
  morale: 72,
  value: 11,
  face: "assets/faces/AVA_getulio.png"
},
{
  id: "AVA_JEAN_CLEBER",
  teamId: "AVA",
  name: "Jean Cléber",
  position: "VOL",
  overall: 75,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/AVA_jean_cleber.png"
},
{
  id: "AVA_LOURENCO",
  teamId: "AVA",
  name: "Lourenço",
  position: "MEI",
  overall: 75,
  age: 27,
  morale: 72,
  value: 11,
  face: "assets/faces/AVA_lourenco.png"
},
{
  id: "AVA_ALEMAO",
  teamId: "AVA",
  name: "Alemão",
  position: "ZAG",
  overall: 75,
  age: 31,
  morale: 72,
  value: 10,
  face: "assets/faces/AVA_alemao.png"
},
{
  id: "AVA_BETAO",
  teamId: "AVA",
  name: "Betão",
  position: "ZAG",
  overall: 76,
  age: 40,
  morale: 73,
  value: 6,
  face: "assets/faces/AVA_betao.png"
},
{
  id: "AVA_GLEDSON",
  teamId: "AVA",
  name: "Gledson",
  position: "GOL",
  overall: 75,
  age: 40,
  morale: 72,
  value: 6,
  face: "assets/faces/AVA_gledson.png"
},
{
  id: "AVA_EDILSON",
  teamId: "AVA",
  name: "Edilson",
  position: "LD",
  overall: 75,
  age: 38,
  morale: 72,
  value: 7,
  face: "assets/faces/AVA_edilson.png"
},
{
  id: "AVA_VINICIUS_LEITE",
  teamId: "AVA",
  name: "Vinícius Leite",
  position: "ATA",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/AVA_vinicius_leite.png"
},
{
  id: "AVA_MARCOS_SERRATO",
  teamId: "AVA",
  name: "Marcos Serrato",
  position: "MEI",
  overall: 74,
  age: 30,
  morale: 71,
  value: 10,
  face: "assets/faces/AVA_marcos_serrato.png"
},
{
  id: "AVA_JUNIOR_DUTRA",
  teamId: "AVA",
  name: "Júnior Dutra",
  position: "ATA",
  overall: 74,
  age: 36,
  morale: 71,
  value: 7,
  face: "assets/faces/AVA_junior_dutra.png"
},
{
  id: "AVA_JONATHAN",
  teamId: "AVA",
  name: "Jonathan",
  position: "LE",
  overall: 74,
  age: 29,
  morale: 71,
  value: 10,
  face: "assets/faces/AVA_jonathan.png"
},
{
  id: "AVA_WESLEY_SOARES",
  teamId: "AVA",
  name: "Wesley Soares",
  position: "MEI",
  overall: 73,
  age: 24,
  morale: 70,
  value: 9,
  face: "assets/faces/AVA_wesley_soares.png"
},
{
  id: "AVA_RAFINHA_PEREIRA",
  teamId: "AVA",
  name: "Rafael Pereira",
  position: "ZAG",
  overall: 74,
  age: 36,
  morale: 71,
  value: 8,
  face: "assets/faces/AVA_rafael_pereira.png"
},
{
  id: "AVA_PEDRO_CASTRO",
  teamId: "AVA",
  name: "Pedro Castro",
  position: "MEI",
  overall: 75,
  age: 28,
  morale: 72,
  value: 11,
  face: "assets/faces/AVA_pedro_castro.png"
},
{
  id: "AVA_ROMULO",
  teamId: "AVA",
  name: "Rômulo",
  position: "ATA",
  overall: 75,
  age: 26,
  morale: 72,
  value: 11,
  face: "assets/faces/AVA_romulo.png"
},
// ==== CRICIÚMA ====
{
  id: "CRI_LEO_GAMALHO",
  teamId: "CRI",
  name: "Léo Gamalho",
  position: "ATA",
  overall: 77,
  age: 38,
  morale: 73,
  value: 7,
  face: "assets/faces/CRI_leo_gamalho.png"
},
{
  id: "CRI_MARQUINHOS_GABRIEL",
  teamId: "CRI",
  name: "Marquinhos Gabriel",
  position: "MEI",
  overall: 77,
  age: 34,
  morale: 73,
  value: 9,
  face: "assets/faces/CRI_marquinhos_gabriel.png"
},
{
  id: "CRI_FELLIPE_MATEUS",
  teamId: "CRI",
  name: "Fellipe Mateus",
  position: "MEI",
  overall: 76,
  age: 32,
  morale: 73,
  value: 11,
  face: "assets/faces/CRI_fellipe_mateus.png"
},
{
  id: "CRI_RODRIGO",
  teamId: "CRI",
  name: "Rodrigo",
  position: "ZAG",
  overall: 75,
  age: 33,
  morale: 72,
  value: 9,
  face: "assets/faces/CRI_rodrigo.png"
},
{
  id: "CRI_ARILSON",
  teamId: "CRI",
  name: "Arilson",
  position: "VOL",
  overall: 75,
  age: 28,
  morale: 72,
  value: 10,
  face: "assets/faces/CRI_arilson.png"
},
{
  id: "CRI_CLAUDINHO",
  teamId: "CRI",
  name: "Claudinho",
  position: "ATA",
  overall: 75,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/CRI_claudinho.png"
},
{
  id: "CRI_EDER",
  teamId: "CRI",
  name: "Éder",
  position: "ATA",
  overall: 76,
  age: 37,
  morale: 73,
  value: 8,
  face: "assets/faces/CRI_eder.png"
},
{
  id: "CRI_MARCELO_HERMES",
  teamId: "CRI",
  name: "Marcelo Hermes",
  position: "LE",
  overall: 75,
  age: 31,
  morale: 72,
  value: 10,
  face: "assets/faces/CRI_marcelo_hermes.png"
},
{
  id: "CRI_GUSTAVO",
  teamId: "CRI",
  name: "Gustavo",
  position: "ZAG",
  overall: 74,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_gustavo.png"
},
{
  id: "CRI_FABINHO",
  teamId: "CRI",
  name: "Fabinho",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_fabinho.png"
},
{
  id: "CRI_ZE_CARLOS",
  teamId: "CRI",
  name: "Zé Carlos",
  position: "GOL",
  overall: 75,
  age: 34,
  morale: 72,
  value: 9,
  face: "assets/faces/CRI_ze_carlos.png"
},
{
  id: "CRI_BARRETO",
  teamId: "CRI",
  name: "Barreto",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_barreto.png"
},
{
  id: "CRI_RAFAEL_BILU",
  teamId: "CRI",
  name: "Rafael Bilu",
  position: "ATA",
  overall: 74,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_rafael_bilu.png"
},
{
  id: "CRI_FOGUINHO",
  teamId: "CRI",
  name: "Foguinho",
  position: "MEI",
  overall: 74,
  age: 28,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_foguinho.png"
},
{
  id: "CRI_JEAN_MANGABEIRA",
  teamId: "CRI",
  name: "Jean Mangabeira",
  position: "MEI",
  overall: 74,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_jean_mangabeira.png"
},
{
  id: "CRI_ANDREW",
  teamId: "CRI",
  name: "Andrew",
  position: "ATA",
  overall: 73,
  age: 23,
  morale: 70,
  value: 8,
  face: "assets/faces/CRI_andrew.png"
},
{
  id: "CRI_CARLOS_EDUARDO",
  teamId: "CRI",
  name: "Carlos Eduardo",
  position: "MEI",
  overall: 74,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_carlos_eduardo.png"
},
{
  id: "CRI_THIAGO_HENRIQUE",
  teamId: "CRI",
  name: "Thiago Henrique",
  position: "VOL",
  overall: 73,
  age: 23,
  morale: 70,
  value: 8,
  face: "assets/faces/CRI_thiago_henrique.png"
},
{
  id: "CRI_LEO_SANTOS",
  teamId: "CRI",
  name: "Léo Santos",
  position: "ZAG",
  overall: 74,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/CRI_leo_santos.png"
},
{
  id: "CRI_VINICIUS",
  teamId: "CRI",
  name: "Vinícius",
  position: "ATA",
  overall: 73,
  age: 24,
  morale: 70,
  value: 8,
  face: "assets/faces/CRI_vinicius.png"
},
// ==== BOTAFOGO-SP ====
{
  id: "BSP_GUSTAVO_HENRIQUE",
  teamId: "BSP",
  name: "Gustavo Henrique",
  position: "ATA",
  overall: 74,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_gustavo_henrique.png"
},
{
  id: "BSP_OSMAN",
  teamId: "BSP",
  name: "Osman",
  position: "ATA",
  overall: 74,
  age: 30,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_osman.png"
},
{
  id: "BSP_ROBINHO",
  teamId: "BSP",
  name: "Robinho",
  position: "ATA",
  overall: 75,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/BSP_robinho.png"
},
{
  id: "BSP_MATHEUS_BARBOSA",
  teamId: "BSP",
  name: "Matheus Barbosa",
  position: "VOL",
  overall: 75,
  age: 29,
  morale: 72,
  value: 10,
  face: "assets/faces/BSP_matheus_barbosa.png"
},
{
  id: "BSP_LUCAS_DELGADO",
  teamId: "BSP",
  name: "Lucas Delgado",
  position: "ATA",
  overall: 74,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_lucas_delgado.png"
},
{
  id: "BSP_RAF_TAVARES",
  teamId: "BSP",
  name: "Rafael Tavares",
  position: "MEI",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_rafael_tavares.png"
},
{
  id: "BSP_LUIZ_HENRIQUE",
  teamId: "BSP",
  name: "Luiz Henrique",
  position: "MEI",
  overall: 74,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_luiz_henrique.png"
},
{
  id: "BSP_JOAO_DIOGO",
  teamId: "BSP",
  name: "João Diogo",
  position: "LD",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_joao_diogo.png"
},
{
  id: "BSP_DUDU_HATAMOTO",
  teamId: "BSP",
  name: "Dudu Hatamoto",
  position: "MEI",
  overall: 73,
  age: 24,
  morale: 70,
  value: 8,
  face: "assets/faces/BSP_dudu_hatamoto.png"
},
{
  id: "BSP_BRUNO_MICHEL",
  teamId: "BSP",
  name: "Bruno Michel",
  position: "ATA",
  overall: 74,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_bruno_michel.png"
},
{
  id: "BSP_FILLIPPE_SOUTTO",
  teamId: "BSP",
  name: "Fillipe Soutto",
  position: "VOL",
  overall: 74,
  age: 33,
  morale: 71,
  value: 8,
  face: "assets/faces/BSP_fillipe_soutto.png"
},
{
  id: "BSP_EDSON",
  teamId: "BSP",
  name: "Edson",
  position: "VOL",
  overall: 74,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_edson.png"
},
{
  id: "BSP_LUCAS_MENDES",
  teamId: "BSP",
  name: "Lucas Mendes",
  position: "ZAG",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_lucas_mendes.png"
},
{
  id: "BSP_DOU_GLAS_BAGGIO",
  teamId: "BSP",
  name: "Douglas Baggio",
  position: "ATA",
  overall: 76,
  age: 29,
  morale: 73,
  value: 12,
  face: "assets/faces/BSP_douglas_baggio.png"
},
{
  id: "BSP_GUILHERME_MADRUGA",
  teamId: "BSP",
  name: "Guilherme Madruga",
  position: "MEI",
  overall: 75,
  age: 23,
  morale: 72,
  value: 11,
  face: "assets/faces/BSP_guilherme_madruga.png"
},
{
  id: "BSP_MATHEUS_COSTA",
  teamId: "BSP",
  name: "Matheus Costa",
  position: "ZAG",
  overall: 74,
  age: 29,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_matheus_costa.png"
},
{
  id: "BSP_PATRICK_BREY",
  teamId: "BSP",
  name: "Patrick Brey",
  position: "LE",
  overall: 74,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/BSP_patrick_brey.png"
},
{
  id: "BSP_ROBSON",
  teamId: "BSP",
  name: "Robson",
  position: "ZAG",
  overall: 73,
  age: 30,
  morale: 70,
  value: 8,
  face: "assets/faces/BSP_robson.png"
},
{
  id: "BSP_JOAO_CARLOS",
  teamId: "BSP",
  name: "João Carlos",
  position: "GOL",
  overall: 74,
  age: 33,
  morale: 71,
  value: 8,
  face: "assets/faces/BSP_joao_carlos.png"
},
{
  id: "BSP_EMERSON",
  teamId: "BSP",
  name: "Emerson",
  position: "LD",
  overall: 73,
  age: 25,
  morale: 70,
  value: 8,
  face: "assets/faces/BSP_emerson.png"
},

// ==== INTERNACIONAL ====
{
  id: "INT_ENNER_VALENCIA",
  teamId: "INT",
  name: "Enner Valencia",
  position: "ATA",
  overall: 84,
  age: 35,
  morale: 80,
  value: 20,
  face: "assets/faces/INT_enner_valencia.png"
},
{
  id: "INT_ALAN_PATRICK",
  teamId: "INT",
  name: "Alan Patrick",
  position: "MEI",
  overall: 83,
  age: 33,
  morale: 80,
  value: 19,
  face: "assets/faces/INT_alan_patrick.png"
},
{
  id: "INT_WANDERSON",
  teamId: "INT",
  name: "Wanderson",
  position: "ATA",
  overall: 80,
  age: 29,
  morale: 77,
  value: 16,
  face: "assets/faces/INT_wanderson.png"
},
{
  id: "INT_MAURICIO",
  teamId: "INT",
  name: "Maurício",
  position: "MEI",
  overall: 80,
  age: 23,
  morale: 78,
  value: 18,
  face: "assets/faces/INT_mauricio.png"
},
{
  id: "INT_ARANGUIZ",
  teamId: "INT",
  name: "Aránguiz",
  position: "VOL",
  overall: 82,
  age: 35,
  morale: 79,
  value: 14,
  face: "assets/faces/INT_aranguiz.png"
},
{
  id: "INT_VITAO",
  teamId: "INT",
  name: "Vitão",
  position: "ZAG",
  overall: 80,
  age: 24,
  morale: 77,
  value: 17,
  face: "assets/faces/INT_vitao.png"
},
{
  id: "INT_HUGO_MALLO",
  teamId: "INT",
  name: "Hugo Mallo",
  position: "LD",
  overall: 79,
  age: 33,
  morale: 76,
  value: 11,
  face: "assets/faces/INT_hugo_mallo.png"
},
{
  id: "INT_ROCHET",
  teamId: "INT",
  name: "Rochet",
  position: "GOL",
  overall: 82,
  age: 31,
  morale: 79,
  value: 17,
  face: "assets/faces/INT_rochet.png"
},
{
  id: "INT_BUSTOS",
  teamId: "INT",
  name: "Bustos",
  position: "LD",
  overall: 80,
  age: 28,
  morale: 77,
  value: 16,
  face: "assets/faces/INT_bustos.png"
},
{
  id: "INT_MERCADO",
  teamId: "INT",
  name: "Mercado",
  position: "ZAG",
  overall: 79,
  age: 37,
  morale: 75,
  value: 8,
  face: "assets/faces/INT_mercado.png"
},
{
  id: "INT_MATHEUS_DIAS",
  teamId: "INT",
  name: "Matheus Dias",
  position: "MEI",
  overall: 74,
  age: 21,
  morale: 73,
  value: 10,
  face: "assets/faces/INT_matheus_dias.png"
},
{
  id: "INT_BRUNO_HENRIQUE",
  teamId: "INT",
  name: "Bruno Henrique",
  position: "VOL",
  overall: 78,
  age: 35,
  morale: 75,
  value: 9,
  face: "assets/faces/INT_bruno_henrique.png"
},
{
  id: "INT_WESLEY",
  teamId: "INT",
  name: "Wesley",
  position: "ATA",
  overall: 75,
  age: 22,
  morale: 73,
  value: 11,
  face: "ass
// ==== ATLÉTICO-MG ====
{
  id: "CAM_HULK",
  teamId: "CAM",
  name: "Hulk",
  position: "ATA",
  overall: 86,
  age: 38,
  morale: 82,
  value: 20,
  face: "assets/faces/CAM_hulk.png"
},
{
  id: "CAM_PAULINHO",
  teamId: "CAM",
  name: "Paulinho",
  position: "ATA",
  overall: 83,
  age: 24,
  morale: 80,
  value: 26,
  face: "assets/faces/CAM_paulinho.png"
},
{
  id: "CAM_GUILHERME_ARANA",
  teamId: "CAM",
  name: "Guilherme Arana",
  position: "LE",
  overall: 84,
  age: 27,
  morale: 81,
  value: 28,
  face: "assets/faces/CAM_guilherme_arana.png"
},
{
  id: "CAM_EVERSON",
  teamId: "CAM",
  name: "Everson",
  position: "GOL",
  overall: 83,
  age: 34,
  morale: 79,
  value: 18,
  face: "assets/faces/CAM_everson.png"
},
{
  id: "CAM_BATTAGLIA",
  teamId: "CAM",
  name: "Battaglia",
  position: "VOL",
  overall: 81,
  age: 33,
  morale: 77,
  value: 14,
  face: "assets/faces/CAM_battaglia.png"
},
{
  id: "CAM_ZARACHO",
  teamId: "CAM",
  name: "Zaracho",
  position: "MEI",
  overall: 82,
  age: 26,
  morale: 79,
  value: 22,
  face: "assets/faces/CAM_zaracho.png"
},
{
  id: "CAM_IGOR_GOMES",
  teamId: "CAM",
  name: "Igor Gomes",
  position: "MEI",
  overall: 80,
  age: 25,
  morale: 77,
  value: 18,
  face: "assets/faces/CAM_igor_gomes.png"
},
{
  id: "CAM_JEMERSON",
  teamId: "CAM",
  name: "Jemerson",
  position: "ZAG",
  overall: 80,
  age: 32,
  morale: 77,
  value: 15,
  face: "assets/faces/CAM_jemerson.png"
},
{
  id: "CAM_RUBENS",
  teamId: "CAM",
  name: "Rubens",
  position: "MEI",
  overall: 76,
  age: 22,
  morale: 74,
  value: 12,
  face: "assets/faces/CAM_rubens.png"
},
{
  id: "CAM_OTAVIO",
  teamId: "CAM",
  name: "Otávio",
  position: "VOL",
  overall: 81,
  age: 30,
  morale: 78,
  value: 18,
  face: "assets/faces/CAM_otavio.png"
},
{
  id: "CAM_VARGAS",
  teamId: "CAM",
  name: "Vargas",
  position: "ATA",
  overall: 79,
  age: 35,
  morale: 75,
  value: 12,
  face: "assets/faces/CAM_vargas.png"
},
{
  id: "CAM_ALAN_FRANCO",
  teamId: "CAM",
  name: "Alan Franco",
  position: "VOL",
  overall: 79,
  age: 25,
  morale: 76,
  value: 17,
  face: "assets/faces/CAM_alan_franco.png"
},
{
  id: "CAM_MARIANO",
  teamId: "CAM",
  name: "Mariano",
  position: "LD",
  overall: 78,
  age: 38,
  morale: 74,
  value: 7,
  face: "assets/faces/CAM_mariano.png"
},
{
  id: "CAM_PEDRINHO",
  teamId: "CAM",
  name: "Pedrinho",
  position: "MEI",
  overall: 78,
  age: 25,
  morale: 75,
  value: 15,
  face: "assets/faces/CAM_pedrinho.png"
},
{
  id: "CAM_EDENILSON",
  teamId: "CAM",
  name: "Edenilson",
  position: "MEI",
  overall: 79,
  age: 34,
  morale: 75,
  value: 11,
  face: "assets/faces/CAM_edenilson.png"
},
{
  id: "CAM_PALACIOS",
  teamId: "CAM",
  name: "Palacios",
  position: "MEI",
  overall: 76,
  age: 23,
  morale: 74,
  value: 13,
  face: "assets/faces/CAM_palacios.png"
},
{
  id: "CAM_CADU",
  teamId: "CAM",
  name: "Cadu",
  position: "ATA",
  overall: 74,
  age: 21,
  morale: 72,
  value: 10,
  face: "assets/faces/CAM_cadu.png"
},
{
  id: "CAM_ROMULO",
  teamId: "CAM",
  name: "Rômulo",
  position: "MEI",
  overall: 75,
  age: 22,
  morale: 73,
  value: 11,
  face: "assets/faces/CAM_romulo.png"
},
{
  id: "CAM_NATHAN_SILVA",
  teamId: "CAM",
  name: "Nathan Silva",
  position: "ZAG",
  overall: 79,
  age: 27,
  morale: 76,
  value: 16,
  face: "assets/faces/CAM_nathan_silva.png"
},
{
  id: "CAM_PAVON",
  teamId: "CAM",
  name: "Pavón",
  position: "ATA",
  overall: 80,
  age: 28,
  morale: 77,
  value: 19,
  face: "assets/faces/CAM_pavon.png"
},
// ==== CORINTHIANS ====
{
  id: "COR_YURI_ALBERTO",
  teamId: "COR",
  name: "Yuri Alberto",
  position: "ATA",
  overall: 81,
  age: 24,
  morale: 78,
  value: 22,
  face: "assets/faces/COR_yuri_alberto.png"
},
{
  id: "COR_RENATO_AUGUSTO",
  teamId: "COR",
  name: "Renato Augusto",
  position: "MEI",
  overall: 83,
  age: 36,
  morale: 79,
  value: 14,
  face: "assets/faces/COR_renato_augusto.png"
},
{
  id: "COR_FAUSTO_VERA",
  teamId: "COR",
  name: "Fausto Vera",
  position: "VOL",
  overall: 80,
  age: 24,
  morale: 77,
  value: 20,
  face: "assets/faces/COR_fausto_vera.png"
},
{
  id: "COR_MAYCON",
  teamId: "COR",
  name: "Maycon",
  position: "VOL",
  overall: 79,
  age: 27,
  morale: 76,
  value: 18,
  face: "assets/faces/COR_maycon.png"
},
{
  id: "COR_CASSIO",
  teamId: "COR",
  name: "Cássio",
  position: "GOL",
  overall: 82,
  age: 37,
  morale: 80,
  value: 12,
  face: "assets/faces/COR_cassio.png"
},
{
  id: "COR_FAGNER",
  teamId: "COR",
  name: "Fagner",
  position: "LD",
  overall: 80,
  age: 34,
  morale: 77,
  value: 14,
  face: "assets/faces/COR_fagner.png"
},
{
  id: "COR_GIL",
  teamId: "COR",
  name: "Gil",
  position: "ZAG",
  overall: 79,
  age: 37,
  morale: 75,
  value: 9,
  face: "assets/faces/COR_gil.png"
},
{
  id: "COR_WESLEY",
  teamId: "COR",
  name: "Wesley",
  position: "ATA",
  overall: 76,
  age: 19,
  morale: 75,
  value: 15,
  face: "assets/faces/COR_wesley.png"
},
{
  id: "COR_MATIAS_ROJAS",
  teamId: "COR",
  name: "Matías Rojas",
  position: "MEI",
  overall: 79,
  age: 28,
  morale: 76,
  value: 18,
  face: "assets/faces/COR_matias_rojas.png"
},
{
  id: "COR_ANGEL_ROMERO",
  teamId: "COR",
  name: "Ángel Romero",
  position: "ATA",
  overall: 79,
  age: 32,
  morale: 76,
  value: 15,
  face: "assets/faces/COR_angel_romero.png"
},
{
  id: "COR_GABRIEL_MOSCARDO",
  teamId: "COR",
  name: "Gabriel Moscardo",
  position: "VOL",
  overall: 77,
  age: 19,
  morale: 75,
  value: 17,
  face: "assets/faces/COR_gabriel_moscardo.png"
},
{
  id: "COR_PEDRO",
  teamId: "COR",
  name: "Pedro",
  position: "ATA",
  overall: 73,
  age: 20,
  morale: 72,
  value: 9,
  face: "assets/faces/COR_pedro.png"
},
{
  id: "COR_GIOVANE",
  teamId: "COR",
  name: "Giovane",
  position: "ATA",
  overall: 74,
  age: 21,
  morale: 73,
  value: 10,
  face: "assets/faces/COR_giovane.png"
},
{
  id: "COR_BRENO_BIDON",
  teamId: "COR",
  name: "Breno Bidon",
  position: "MEI",
  overall: 74,
  age: 19,
  morale: 73,
  value: 11,
  face: "assets/faces/COR_breno_bidon.png"
},
{
  id: "COR_MURILLO",
  teamId: "COR",
  name: "Murillo",
  position: "ZAG",
  overall: 77,
  age: 21,
  morale: 75,
  value: 16,
  face: "assets/faces/COR_murillo.png"
},
{
  id: "COR_RUAN_OLIVEIRA",
  teamId: "COR",
  name: "Ruan Oliveira",
  position: "MEI",
  overall: 73,
  age: 23,
  morale: 72,
  value: 9,
  face: "assets/faces/COR_ruan_oliveira.png"
},
{
  id: "COR_CARLOS_MIGUEL",
  teamId: "COR",
  name: "Carlos Miguel",
  position: "GOL",
  overall: 76,
  age: 25,
  morale: 75,
  value: 13,
  face: "assets/faces/COR_carlos_miguel.png"
},
{
  id: "COR_LEO_MANA",
  teamId: "COR",
  name: "Léo Mana",
  position: "LD",
  overall: 73,
  age: 19,
  morale: 72,
  value: 9,
  face: "assets/faces/COR_leo_mana.png"
},
{
  id: "COR_CAETANO",
  teamId: "COR",
  name: "Caetano",
  position: "ZAG",
  overall: 75,
  age: 24,
  morale: 73,
  value: 11,
  face: "assets/faces/COR_caetano.png"
},
// ==== SÃO PAULO ====
{
  id: "SAO_CALLERI",
  teamId: "SAO",
  name: "Calleri",
  position: "ATA",
  overall: 82,
  age: 30,
  morale: 79,
  value: 22,
  face: "assets/faces/SAO_calleri.png"
},
{
  id: "SAO_LUCIANO",
  teamId: "SAO",
  name: "Luciano",
  position: "ATA",
  overall: 80,
  age: 31,
  morale: 77,
  value: 18,
  face: "assets/faces/SAO_luciano.png"
},
{
  id: "SAO_LUCAS_MOURA",
  teamId: "SAO",
  name: "Lucas Moura",
  position: "ATA",
  overall: 82,
  age: 32,
  morale: 79,
  value: 21,
  face: "assets/faces/SAO_lucas_moura.png"
},
{
  id: "SAO_JAMES_RODRIGUEZ",
  teamId: "SAO",
  name: "James Rodríguez",
  position: "MEI",
  overall: 82,
  age: 33,
  morale: 78,
  value: 19,
  face: "assets/faces/SAO_james_rodriguez.png"
},
{
  id: "SAO_WELLINGTON_RATO",
  teamId: "SAO",
  name: "Wellington Rato",
  position: "MEI",
  overall: 78,
  age: 32,
  morale: 75,
  value: 14,
  fa
// ==== SÃO PAULO ====
{
  id: "SAO_CALLERI",
  teamId: "SAO",
  name: "Calleri",
  position: "ATA",
  overall: 82,
  age: 30,
  morale: 79,
  value: 22,
  face: "assets/faces/SAO_calleri.png"
},
{
  id: "SAO_LUCIANO",
  teamId: "SAO",
  name: "Luciano",
  position: "ATA",
  overall: 80,
  age: 31,
  morale: 77,
  value: 18,
  face: "assets/faces/SAO_luciano.png"
},
{
  id: "SAO_LUCAS_MOURA",
  teamId: "SAO",
  name: "Lucas Moura",
  position: "ATA",
  overall: 82,
  age: 32,
  morale: 79,
  value: 21,
  face: "assets/faces/SAO_lucas_moura.png"
},
{
  id: "SAO_JAMES_RODRIGUEZ",
  teamId: "SAO",
  name: "James Rodríguez",
  position: "MEI",
  overall: 82,
  age: 33,
  morale: 78,
  value: 19,
  face: "assets/faces/SAO_james_rodriguez.png"
},
{
  id: "SAO_WELLINGTON_RATO",
  teamId: "SAO",
  name: "Wellington Rato",
  position: "MEI",
  overall: 78,
  age: 32,
  morale: 75,
  value: 14,
  face: "assets/faces/SAO_wellington_rato.png"
},
{
  id: "SAO_PABLO_MAIA",
  teamId: "SAO",
  name: "Pablo Maia",
  position: "VOL",
  overall: 79,
  age: 22,
  morale: 76,
  value: 18,
  face: "assets/faces/SAO_pablo_maia.png"
},
{
  id: "SAO_ALISSON",
  teamId: "SAO",
  name: "Alisson",
  position: "MEI",
  overall: 76,
  age: 30,
  morale: 74,
  value: 11,
  face: "assets/faces/SAO_alisson.png"
},
{
  id: "SAO_RAFINHA",
  teamId: "SAO",
  name: "Rafinha",
  position: "LD",
  overall: 79,
  age: 38,
  morale: 75,
  value: 7,
  face: "assets/faces/SAO_rafinha.png"
},
{
  id: "SAO_ARBOLEDA",
  teamId: "SAO",
  name: "Arboleda",
  position: "ZAG",
  overall: 82,
  age: 32,
  morale: 79,
  value: 19,
  face: "assets/faces/SAO_arboleda.png"
},
{
  id: "SAO_DIEGO_COSTA",
  teamId: "SAO",
  name: "Diego Costa",
  position: "ZAG",
  overall: 79,
  age: 25,
  morale: 76,
  value: 17,
  face: "assets/faces/SAO_diego_costa.png"
},
{
  id: "SAO_BERALDO",
  teamId: "SAO",
  name: "Beraldo",
  position: "ZAG",
  overall: 78,
  age: 20,
  morale: 76,
  value: 18,
  face: "assets/faces/SAO_beraldo.png"
},
{
  id: "SAO_IGOR_VINICIUS",
  teamId: "SAO",
  name: "Igor Vinícius",
  position: "LD",
  overall: 78,
  age: 27,
  morale: 75,
  value: 15,
  face: "assets/faces/SAO_igor_vinicius.png"
},
{
  id: "SAO_MOREIRA",
  teamId: "SAO",
  name: "Moreira",
  position: "LE",
  overall: 74,
  age: 19,
  morale: 73,
  value: 11,
  face: "assets/faces/SAO_moreira.png"
},
{
  id: "SAO_RODRIGO_NESTOR",
  teamId: "SAO",
  name: "Rodrigo Nestor",
  position: "MEI",
  overall: 79,
  age: 23,
  morale: 76,
  value: 18,
  face: "assets/faces/SAO_rodrigo_nestor.png"
},
{
  id: "SAO_MICHEL_ARAUJO",
  teamId: "SAO",
  name: "Michel Araújo",
  position: "MEI",
  overall: 77,
  age: 27,
  morale: 74,
  value: 14,
  face: "assets/faces/SAO_michel_araujo.png"
},
{
  id: "SAO_JUAN",
  teamId: "SAO",
  name: "Juan",
  position: "ATA",
  overall: 74,
  age: 21,
  morale: 73,
  value: 11,
  face: "assets/faces/SAO_juan.png"
},
{
  id: "SAO_NATHAN",
  teamId: "SAO",
  name: "Nathan",
  position: "LE",
  overall: 73,
  age: 21,
  morale: 72,
  value: 9,
  face: "assets/faces/SAO_nathan.png"
},
{
  id: "SAO_LUIZ_GUSTAVO",
  teamId: "SAO",
  name: "Luiz Gustavo",
  position: "VOL",
  overall: 78,
  age: 36,
  morale: 75,
  value: 10,
  face: "assets/faces/SAO_luiz_gustavo.png"
},
{
  id: "SAO_FERRARESI",
  teamId: "SAO",
  name: "Ferraresi",
  position: "ZAG",
  overall: 78,
  age: 25,
  morale: 75,
  value: 16,
  face: "assets/faces/SAO_ferraresi.png"
},
{
  id: "SAO_JANDREI",
  teamId: "SAO",
  name: "Jandrei",
  position: "GOL",
  overall: 76,
  age: 31,
  morale: 74,
  value: 11,
  face: "assets/faces/SAO_jandrei.png"
},
{
  id: "SAO_YOUNG",
  teamId: "SAO",
  name: "Young",
  position: "GOL",
  overall: 71,
  age: 21,
  morale: 70,
  value: 7,
  face: "assets/faces/SAO_young.png"
},
// ==== FLUMINENSE ====
{
  id: "FLU_GERMAN_CANO",
  teamId: "FLU",
  name: "Germán Cano",
  position: "ATA",
  overall: 85,
  age: 36,
  morale: 82,
  value: 20,
  face: "assets/faces/FLU_german_cano.png"
},
{
  id: "FLU_GANSO",
  teamId: "FLU",
  name: "Ganso",
  position: "MEI",
  overall: 82,
  age: 35,
  morale: 79,
  value: 16,
  face: "assets/faces/FLU_ganso.png"
},
{
  id: "FLU_KENO",
  teamId: "FLU",
  name: "Keno",
  position: "ATA",
  overall: 80,
  age: 35,
  morale: 77,
  value: 13,
  face: "assets/faces/FLU_keno.png"
},
{
  id: "FLU_JHON_ARIAS",
  teamId: "FLU",
  name: "Jhon Arias",
  position: "ATA",
  overall: 82,
  age: 27,
  morale: 80,
  value: 24,
  face: "assets/faces/FLU_jhon_arias.png"
},
{
  id: "FLU_ANDRE",
  teamId: "FLU",
  name: "André",
  position: "VOL",
  overall: 83,
  age: 23,
  morale: 81,
  value: 30,
  face: "assets/faces/FLU_andre.png"
},
{
  id: "FLU_FELIPE_MELO",
  teamId: "FLU",
  name: "Felipe Melo",
  position: "VOL",
  overall: 79,
  age: 41,
  morale: 76,
  value: 6,
  face: "assets/faces/FLU_felipe_melo.png"
},
{
  id: "FLU_MARCELO",
  teamId: "FLU",
  name: "Marcelo",
  position: "LE",
  overall: 81,
  age: 36,
  morale: 78,
  value: 14,
  face: "assets/faces/FLU_marcelo.png"
},
{
  id: "FLU_SAMUEL_XAVIER",
  teamId: "FLU",
  name: "Samuel Xavier",
  position: "LD",
  overall: 79,
  age: 33,
  morale: 76,
  value: 11,
  face: "assets/faces/FLU_samuel_xavier.png"
},
{
  id: "FLU_NINO",
  teamId: "FLU",
  name: "Nino",
  position: "ZAG",
  overall: 82,
  age: 27,
  morale: 79,
  value: 24,
  face: "assets/faces/FLU_nino.png"
},
{
  id: "FLU_MANOEL",
  teamId: "FLU",
  name: "Manoel",
  position: "ZAG",
  overall: 78,
  age: 34,
  morale: 75,
  value: 10,
  face: "assets/faces/FLU_manoel.png"
},
{
  id: "FLU_LELE",
  teamId: "FLU",
  name: "Lelê",
  position: "ATA",
  overall: 76,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/FLU_lele.png"
},
{
  id: "FLU_LIMA",
  teamId: "FLU",
  name: "Lima",
  position: "MEI",
  overall: 79,
  age: 27,
  morale: 76,
  value: 17,
  face: "assets/faces/FLU_lima.png"
},
{
  id: "FLU_MARTINELLI",
  teamId: "FLU",
  name: "Martinelli",
  position: "VOL",
  overall: 78,
  age: 23,
  morale: 76,
  value: 16,
  face: "assets/faces/FLU_martinelli.png"
},
{
  id: "FLU_DIOGO_BARBOSA",
  teamId: "FLU",
  name: "Diogo Barbosa",
  position: "LE",
  overall: 76,
  age: 31,
  morale: 73,
  value: 11,
  face: "assets/faces/FLU_diogo_barbosa.png"
},
{
  id: "FLU_MARLON",
  teamId: "FLU",
  name: "Marlon",
  position: "LE",
  overall: 75,
  age: 27,
  morale: 73,
  value: 10,
  face: "assets/faces/FLU_marlon.png"
},
{
  id: "FLU_JOHN_KENNEDY",
  teamId: "FLU",
  name: "John Kennedy",
  position: "ATA",
  overall: 79,
  age: 21,
  morale: 77,
  value: 19,
  face: "assets/faces/FLU_john_kennedy.png"
},
{
  id: "FLU_ISAAC",
  teamId: "FLU",
  name: "Isaac",
  position: "MEI",
  overall: 73,
  age: 20,
  morale: 72,
  value: 9,
  face: "assets/faces/FLU_isaac.png"
},
{
  id: "FLU_KAUA_ELIAS",
  teamId: "FLU",
  name: "Kauã Elias",
  position: "ATA",
  overall: 74,
  age: 18,
  morale: 73,
  value: 12,
  face: "assets/faces/FLU_kaua_elias.png"
},
{
  id: "FLU_GABRIEL_PIRES",
  teamId: "FLU",
  name: "Gabriel Pires",
  position: "MEI",
  overall: 77,
  age: 30,
  morale: 74,
  value: 13,
  face: "assets/faces/FLU_gabriel_pires.png"
},
{
  id: "FLU_DANIEL",
  teamId: "FLU",
  name: "Daniel",
  position: "MEI",
  overall: 74,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/FLU_daniel.png"
},
{
  id: "FLU_FABIO",
  teamId: "FLU",
  name: "Fábio",
  position: "GOL",
  overall: 82,
  age: 43,
  morale: 80,
  value: 7,
  face: "assets/faces/FLU_fabio.png"
},
// ==== GRÊMIO ====
{
  id: "GRE_LUIS_SUAREZ",
  teamId: "GRE",
  name: "Luis Suárez",
  position: "ATA",
  overall: 86,
  age: 38,
  morale: 82,
  value: 18,
  face: "assets/faces/GRE_luis_suarez.png"
},
{
  id: "GRE_VILLASANTI",
  teamId: "GRE",
  name: "Villasanti",
  position: "VOL",
  overall: 82,
  age: 27,
  morale: 79,
  value: 22,
  face: "assets/faces/GRE_villasanti.png"
},
{
  id: "GRE_CRISTALDO",
  teamId: "GRE",
  name: "Cristaldo",
  position: "MEI",
  overall: 81,
  age: 28,
  morale: 78,
  value: 20,
  face: "assets/faces/GRE_cristaldo.png"
},
{
  id: "GRE_CARBALLO",
  teamId: "GRE",
  name: "Carballo",
  position: "VOL",
  overall: 79,
  age: 28,
  morale: 76,
  value: 17,
  face: "assets/faces/GRE_carballo.png"
},
{
  id: "GRE_KANNEMANN",
  teamId: "GRE",
  name: "Kannemann",
  position: "ZAG",
  overall: 82,
  age: 33,
  morale: 79,
  value: 18,
  face: "assets/faces/GRE_kannemann.png"
},
{
  id: "GRE_GEROMEL",
  teamId: "GRE",
  name: "Geromel",
  position: "ZAG",
  overall: 81,
  age: 38,
  morale: 78,
  value: 10,
  face: "assets/faces/GRE_geromel.png"
},
{
  id: "GRE_REINALDO",
  teamId: "GRE",
  name: "Reinaldo",
  position: "LE",
  overall: 79,
  age: 34,
  morale: 76,
  value: 12,
  face: "assets/faces/GRE_reinaldo.png"
},
{
  id: "GRE_JOAO_PEDRO",
  teamId: "GRE",
  name: "João Pedro",
  position: "LD",
  overall: 77,
  age: 27,
  morale: 74,
  value: 13,
  face: "assets/faces/GRE_joao_pedro.png"
},
{
  id: "GRE_FERREIRA",
  teamId: "GRE",
  name: "Ferreira",
  position: "ATA",
  overall: 80,
  age: 26,
  morale: 77,
  value: 20,
  face: "assets/faces/GRE_ferreira.png"
},
{
  id: "GRE_NATHAN_FERNANDES",
  teamId: "GRE",
  name: "Nathan Fernandes",
  position: "ATA",
  overall: 74,
  age: 18,
  morale: 73,
  value: 12,
  face: "assets/faces/GRE_nathan_fernandes.png"
},
{
  id: "GRE_GALDINO",
  teamId: "GRE",
  name: "Galdino",
  position: "ATA",
  overall: 75,
  age: 26,
  morale: 73,
  value: 11,
  face: "assets/faces/GRE_galdino.png"
},
{
  id: "GRE_PEPE",
  teamId: "GRE",
  name: "Pepê",
  position: "MEI",
  overall: 79,
  age: 27,
  morale: 76,
  value: 18,
  face: "assets/faces/GRE_pepe.png"
},
{
  id: "GRE_RODRIGO_ELY",
  teamId: "GRE",
  name: "Rodrigo Ely",
  position: "ZAG",
  overall: 77,
  age: 30,
  morale: 74,
  value: 13,
  face: "assets/faces/GRE_rodrigo_ely.png"
},
{
  id: "GRE_GUSTAVO_MARTINS",
  teamId: "GRE",
  name: "Gustavo Martins",
  position: "ZAG",
  overall: 74,
  age: 21,
  morale: 72,
  value: 11,
  face: "assets/faces/GRE_gustavo_martins.png"
},
{
  id: "GRE_GABRIEL_GRANDO",
  teamId: "GRE",
  name: "Gabriel Grando",
  position: "GOL",
  overall: 76,
  age: 24,
  morale: 74,
  value: 13,
  face: "assets/faces/GRE_gabriel_grando.png"
},
{
  id: "GRE_ANDRE_HENRIQUE",
  teamId: "GRE",
  name: "André Henrique",
  position: "ATA",
  overall: 73,
  age: 21,
  morale: 72,
  value: 9,
  face: "assets/faces/GRE_andre_henrique.png"
},
{
  id: "GRE_EDENILSON",
  teamId: "GRE",
  name: "Edenilson",
  position: "MEI",
  overall: 79,
  age: 34,
  morale: 75,
  value: 11,
  face: "assets/faces/GRE_edenilson.png"
},
{
  id: "GRE_GUSTAVO_NUNES",
  teamId: "GRE",
  name: "Gustavo Nunes",
  position: "ATA",
  overall: 74,
  age: 19,
  morale: 73,
  value: 11,
  face: "assets/faces/GRE_gustavo_nunes.png"
},
{
  id: "GRE_CUIABANO",
  teamId: "GRE",
  name: "Cuiabano",
  position: "LE",
  overall: 74,
  age: 21,
  morale: 73,
  value: 11,
  face: "assets/faces/GRE_cuiabano.png"
},
{
  id: "GRE_RONALD",
  teamId: "GRE",
  name: "Ronald",
  position: "MEI",
  overall: 73,
  age: 21,
  morale: 72,
  value: 9,
  face: "assets/faces/GRE_ronald.png"
},
// ==== SANTOS ====
{
  id: "SAN_MARCOS_LEONARDO",
  teamId: "SAN",
  name: "Marcos Leonardo",
  position: "ATA",
  overall: 82,
  age: 21,
  morale: 79,
  value: 26,
  face: "assets/faces/SAN_marcos_leonardo.png"
},
{
  id: "SAN_SOTELDO",
  teamId: "SAN",
  name: "Soteldo",
  position: "ATA",
  overall: 80,
  age: 27,
  morale: 77,
  value: 19,
  face: "assets/faces/SAN_soteldo.png"
},
{
  id: "SAN_JOAO_BASSO",
  teamId: "SAN",
  name: "João Basso",
  position: "ZAG",
  overall: 77,
  age: 27,
  morale: 74,
  value: 13,
  face: "assets/faces/SAN_joao_basso.png"
},
{
  id: "SAN_JOAQUIM",
  teamId: "SAN",
  name: "Joaquim",
  position: "ZAG",
  overall: 77,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/SAN_joaquim.png"
},
{
  id: "SAN_DODO",
  teamId: "SAN",
  name: "Dodô",
  position: "LE",
  overall: 78,
  age: 32,
  morale: 75,
  value: 14,
  face: "assets/faces/SAN_dodo.png"
},
{
  id: "SAN_JOAO_PAULO",
  teamId: "SAN",
  name: "João Paulo",
  position: "GOL",
  overall: 80,
  age: 29,
  morale: 77,
  value: 18,
  face: "assets/faces/SAN_joao_paulo.png"
},
{
  id: "SAN_LUCAS_LIMA",
  teamId: "SAN",
  name: "Lucas Lima",
  position: "MEI",
  overall: 79,
  age: 33,
  morale: 75,
  value: 14,
  face: "assets/faces/SAN_lucas_lima.png"
},
{
  id: "SAN_RODRIGO_FERNANDEZ",
  teamId: "SAN",
  name: "Rodrigo Fernández",
  position: "VOL",
  overall: 78,
  age: 28,
  morale: 75,
  value: 15,
  face: "assets/faces/SAN_rodrigo_fernandez.png"
},
{
  id: "SAN_KEVYSON",
  teamId: "SAN",
  name: "Kevyson",
  position: "LE",
  overall: 73,
  age: 20,
  morale: 72,
  value: 9,
  face: "assets/faces/SAN_kevyson.png"
},
{
  id: "SAN_MIGUELITO",
  teamId: "SAN",
  name: "Miguelito",
  position: "MEI",
  overall: 74,
  age: 19,
  morale: 73,
  value: 10,
  face: "assets/faces/SAN_miguelito.png"
},
{
  id: "SAN_IVONEI",
  teamId: "SAN",
  name: "Ivonei",
  position: "MEI",
  overall: 73,
  age: 21,
  morale: 72,
  value: 9,
  face: "assets/faces/SAN_ivonei.png"
},
{
  id: "SAN_SANDRY",
  teamId: "SAN",
  name: "Sandry",
  position: "VOL",
  overall: 74,
  age: 22,
  morale: 73,
  value: 10,
  face: "assets/faces/SAN_sandry.png"
},
{
  id: "SAN_FELIPE_JONATAN",
  teamId: "SAN",
  name: "Felipe Jonatan",
  position: "LE",
  overall: 77,
  age: 26,
  morale: 74,
  value: 14,
  face: "assets/faces/SAN_felipe_jonatan.png"
},
{
  id: "SAN_MESSIAS",
  teamId: "SAN",
  name: "Messias",
  position: "ZAG",
  overall: 77,
  age: 30,
  morale: 74,
  value: 13,
  face: "assets/faces/SAN_messias.png"
},
{
  id: "SAN_GABRIEL_INOCENCIO",
  teamId: "SAN",
  name: "Gabriel Inocêncio",
  position: "LD",
  overall: 75,
  age: 29,
  morale: 73,
  value: 11,
  face: "assets/faces/SAN_gabriel_inocencio.png"
},
{
  id: "SAN_MORELOS",
  teamId: "SAN",
  name: "Morelos",
  position: "ATA",
  overall: 79,
  age: 28,
  morale: 76,
  value: 17,
  face: "assets/faces/SAN_morelos.png"
},
{
  id: "SAN_NONATO",
  teamId: "SAN",
  name: "Nonato",
  position: "MEI",
  overall: 76,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/SAN_nonato.png"
},
{
  id: "SAN_FURMAN",
  teamId: "SAN",
  name: "Furman",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/SAN_furman.png"
},
{
  id: "SAN_WESLLEY_PATATI",
  teamId: "SAN",
  name: "Weslley Patati",
  position: "ATA",
  overall: 74,
  age: 20,
  morale: 73,
  value: 11,
  face: "assets/faces/SAN_weslley_patati.png"
},
{
  id: "SAN_RINCON",
  teamId: "SAN",
  name: "Rincón",
  position: "VOL",
  overall: 76,
  age: 32,
  morale: 74,
  value: 12,
  face: "assets/faces/SAN_rincon.png"
},
// ==== CRUZEIRO ====
{
  id: "CRU_MATHEUS_PEREIRA",
  teamId: "CRU",
  name: "Matheus Pereira",
  position: "MEI",
  overall: 81,
  age: 28,
  morale: 78,
  value: 22,
  face: "assets/faces/CRU_matheus_pereira.png"
},
{
  id: "CRU_WESLEY",
  teamId: "CRU",
  name: "Wesley",
  position: "ATA",
  overall: 77,
  age: 25,
  morale: 74,
  value: 14,
  face: "assets/faces/CRU_wesley.png"
},
{
  id: "CRU_RAFAEL_CABRAL",
  teamId: "CRU",
  name: "Rafael Cabral",
  position: "GOL",
  overall: 79,
  age: 34,
  morale: 76,
  value: 13,
  face: "assets/faces/CRU_rafael_cabral.png"
},
{
  id: "CRU_LUCAS_SILVA",
  teamId: "CRU",
  name: "Lucas Silva",
  position: "VOL",
  overall: 78,
  age: 31,
  morale: 75,
  value: 14,
  face: "assets/faces/CRU_lucas_silva.png"
},
{
  id: "CRU_FILIPE_MACHADO",
  teamId: "CRU",
  name: "Filipe Machado",
  position: "VOL",
  overall: 76,
  age: 28,
  morale: 74,
  value: 12,
  face: "assets/faces/CRU_filipe_machado.png"
},
{
  id: "CRU_WILLIAM",
  teamId: "CRU",
  name: "William",
  position: "LD",
  overall: 77,
  age: 29,
  morale: 74,
  value: 13,
  face: "assets/faces/CRU_william.png"
},
{
  id: "CRU_MARLON",
  teamId: "CRU",
  name: "Marlon",
  position: "LE",
  overall: 78,
  age: 27,
  morale: 75,
  value: 15,
  face: "assets/faces/CRU_marlon.png"
},
{
  id: "CRU_OLIVEIRA",
  teamId: "CRU",
  name: "Oliveira",
  position: "ZAG",
  overall: 77,
  age: 28,
  morale: 74,
  value: 13,
  face: "assets/faces/CRU_oliveira.png"
},
{
  id: "CRU_ZE_IVALDO",
  teamId: "CRU",
  name: "Zé Ivaldo",
  position: "ZAG",
  overall: 78,
  age: 26,
  morale: 75,
  value: 15,
  face: "assets/faces/CRU_ze_ivaldo.png"
},
{
  id: "CRU_VITAL",
  teamId: "CRU",
  name: "Vital",
  position: "MEI",
  overall: 77,
  age: 26,
  morale: 74,
  value: 14,
  face: "assets/faces/CRU_vital.png"
},
{
  id: "CRU_ARTHUR_GOMES",
  teamId: "CRU",
  name: "Arthur Gomes",
  position: "ATA",
  overall: 77,
  age: 25,
  morale: 74,
  value: 14,
  face: "assets/faces/CRU_arthur_gomes.png"
},
{
  id: "CRU_FERNANDO_HENRIQUE",
  teamId: "CRU",
  name: "Fernando Henrique",
  position: "VOL",
  overall: 74,
  age: 23,
  morale: 72,
  value: 10,
  face: "assets/faces/CRU_fernando_henrique.png"
},
{
  id: "CRU_PALACIOS",
  teamId: "CRU",
  name: "Palacios",
  position: "MEI",
  overall: 75,
  age: 22,
  morale: 73,
  value: 11,
  face: "assets/faces/CRU_palacios.png"
},
{
  id: "CRU_ROBERT",
  teamId: "CRU",
  name: "Robert",
  position: "MEI",
  overall: 73,
  age: 20,
  morale: 72,
  value: 9,
  face: "assets/faces/CRU_robert.png"
},
{
  id: "CRU_RAMIRO",
  teamId: "CRU",
  name: "Ramiro",
  position: "VOL",
  overall: 77,
  age: 31,
  morale: 74,
  value: 13,
  face: "assets/faces/CRU_ramiro.png"
},
{
  id: "CRU_KAIKI",
  teamId: "CRU",
  name: "Kaiki",
  position: "LE",
  overall: 73,
  age: 20,
  morale: 72,
  value: 9,
  face: "assets/faces/CRU_kaiki.png"
},
{
  id: "CRU_STENIO",
  teamId: "CRU",
  name: "Stênio",
  position: "ATA",
  overall: 73,
  age: 21,
  morale: 72,
  value: 9,
  face: "assets/faces/CRU_stenio.png"
},
{
  id: "CRU_JUSSA",
  teamId: "CRU",
  name: "Jussa",
  position: "VOL",
  overall: 74,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/CRU_jussa.png"
},
{
  id: "CRU_JOAO_MARCELO",
  teamId: "CRU",
  name: "João Marcelo",
  position: "ZAG",
  overall: 74,
  age: 23,
  morale: 72,
  value: 10,
  face: "assets/faces/CRU_joao_marcelo.png"
},
{
  id: "CRU_RAFAEL_ELIAS",
  teamId: "CRU",
  name: "Rafael Elias",
  position: "ATA",
  overall: 75,
  age: 24,
  morale: 73,
  value: 12,
  face: "assets/faces/CRU_rafael_elias.png"
},
// ==== VASCO DA GAMA ====
{
  id: "VAS_VEGETTI",
  teamId: "VAS",
  name: "Vegetti",
  position: "ATA",
  overall: 81,
  age: 35,
  morale: 78,
  value: 16,
  face: "assets/faces/VAS_vegetti.png"
},
{
  id: "VAS_PAYET",
  teamId: "VAS",
  name: "Payet",
  position: "MEI",
  overall: 82,
  age: 38,
  morale: 78,
  value: 14,
  face: "assets/faces/VAS_payet.png"
},
{
  id: "VAS_PRAXEDES",
  teamId: "VAS",
  name: "Praxedes",
  position: "MEI",
  overall: 77,
  age: 22,
  morale: 75,
  value: 14,
  face: "assets/faces/VAS_praxedes.png"
},
{
  id: "VAS_LEO_JARDIM",
  teamId: "VAS",
  name: "Léo Jardim",
  position: "GOL",
  overall: 79,
  age: 29,
  morale: 76,
  value: 15,
  face: "assets/faces/VAS_leo_jardim.png"
},
{
  id: "VAS_MEDEL",
  teamId: "VAS",
  name: "Medel",
  position: "ZAG",
  overall: 80,
  age: 37,
  morale: 77,
  value: 10,
  face: "assets/faces/VAS_medel.png"
},
{
  id: "VAS_PUMA_RODRIGUEZ",
  teamId: "VAS",
  name: "Puma Rodríguez",
  position: "LD",
  overall: 77,
  age: 24,
  morale: 74,
  value: 13,
  face: "assets/faces/VAS_puma_rodriguez.png"
},
{
  id: "VAS_LUCAS_PITON",
  teamId: "VAS",
  name: "Lucas Piton",
  position: "LE",
  overall: 79,
  age: 23,
  morale: 77,
  value: 18,
  face: "assets/faces/VAS_lucas_piton.png"
},
{
  id: "VAS_MAICON",
  teamId: "VAS",
  name: "Maicon",
  position: "ZAG",
  overall: 76,
  age: 35,
  morale: 73,
  value: 9,
  face: "assets/faces/VAS_maicon.png"
},
{
  id: "VAS_PAULINHO",
  teamId: "VAS",
  name: "Paulinho",
  position: "ATA",
  overall: 76,
  age: 23,
  morale: 74,
  value: 13,
  face: "assets/faces/VAS_paulinho.png"
},
{
  id: "VAS_GABRIEL_PEC",
  teamId: "VAS",
  name: "Gabriel Pec",
  position: "ATA",
  overall: 79,
  age: 23,
  morale: 77,
  value: 19,
  face: "assets/faces/VAS_gabriel_pec.png"
},
{
  id: "VAS_ERICK_MARCUS",
  teamId: "VAS",
  name: "Erick Marcus",
  position: "ATA",
  overall: 74,
  age: 20,
  morale: 73,
  value: 11,
  face: "assets/faces/VAS_erick_marcus.png"
},
{
  id: "VAS_HUGO_MOURA",
  teamId: "VAS",
  name: "Hugo Moura",
  position: "VOL",
  overall: 76,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/VAS_hugo_moura.png"
},
{
  id: "VAS_JAIR",
  teamId: "VAS",
  name: "Jair",
  position: "VOL",
  overall: 77,
  age: 29,
  morale: 75,
  value: 14,
  face: "assets/faces/VAS_jair.png"
},
{
  id: "VAS_ROSSI",
  teamId: "VAS",
  name: "Rossi",
  position: "ATA",
  overall: 76,
  age: 31,
  morale: 74,
  value: 12,
  face: "assets/faces/VAS_rossi.png"
},
{
  id: "VAS_ROBSON_BAMBU",
  teamId: "VAS",
  name: "Robson Bambu",
  position: "ZAG",
  overall: 75,
  age: 26,
  morale: 73,
  value: 11,
  face: "assets/faces/VAS_robson_bambu.png"
},
{
  id: "VAS_JOAO_VICTOR",
  teamId: "VAS",
  name: "João Victor",
  position: "ZAG",
  overall: 75,
  age: 23,
  morale: 73,
  value: 12,
  face: "assets/faces/VAS_joao_victor.png"
},
{
  id: "VAS_RAYAN",
  teamId: "VAS",
  name: "Rayan",
  position: "ATA",
  overall: 73,
  age: 18,
  morale: 72,
  value: 11,
  face: "assets/faces/VAS_rayan.png"
},
{
  id: "VAS_DAVID",
  teamId: "VAS",
  name: "David",
  position: "ATA",
  overall: 75,
  age: 28,
  morale: 73,
  value: 12,
  face: "assets/faces/VAS_david.png"
},
{
  id: "VAS_PAULO_HENRIQUE",
  teamId: "VAS",
  name: "Paulo Henrique",
  position: "LD",
  overall: 74,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/VAS_paulo_henrique.png"
},
{
  id: "VAS_GALDAMES",
  teamId: "VAS",
  name: "Galdames",
  position: "MEI",
  overall: 75,
  age: 27,
  morale: 73,
  value: 12,
  face: "assets/faces/VAS_galdames.png"
},
// ==== BAHIA ====
{
  id: "BAH_EVERALDO",
  teamId: "BAH",
  name: "Everaldo",
  position: "ATA",
  overall: 77,
  age: 29,
  morale: 75,
  value: 14,
  face: "assets/faces/BAH_everaldo.png"
},
{
  id: "BAH_BIEL",
  teamId: "BAH",
  name: "Biel",
  position: "ATA",
  overall: 76,
  age: 23,
  morale: 74,
  value: 13,
  face: "assets/faces/BAH_biel.png"
},
{
  id: "BAH_CAULY",
  teamId: "BAH",
  name: "Cauly",
  position: "MEI",
  overall: 80,
  age: 28,
  morale: 78,
  value: 18,
  face: "assets/faces/BAH_cauly.png"
},
{
  id: "BAH_ACEVEDO",
  teamId: "BAH",
  name: "Acevedo",
  position: "VOL",
  overall: 78,
  age: 27,
  morale: 76,
  value: 15,
  face: "assets/faces/BAH_acevedo.png"
},
{
  id: "BAH_REZENDE",
  teamId: "BAH",
  name: "Rezende",
  position: "VOL",
  overall: 77,
  age: 28,
  morale: 75,
  value: 13,
  face: "assets/faces/BAH_rezende.png"
},
{
  id: "BAH_YAGO_FELIPE",
  teamId: "BAH",
  name: "Yago Felipe",
  position: "MEI",
  overall: 77,
  age: 29,
  morale: 74,
  value: 13,
  face: "assets/faces/BAH_yago_felipe.png"
},
{
  id: "BAH_GILBERTO",
  teamId: "BAH",
  name: "Gilberto",
  position: "ATA",
  overall: 79,
  age: 34,
  morale: 76,
  value: 13,
  face: "assets/faces/BAH_gilberto.png"
},
{
  id: "BAH_LUCIANO_JUBA",
  teamId: "BAH",
  name: "Luciano Juba",
  position: "ATA",
  overall: 78,
  age: 24,
  morale: 76,
  value: 16,
  face: "assets/faces/BAH_luciano_juba.png"
},
{
  id: "BAH_VITOR_HUGO",
  teamId: "BAH",
  name: "Vitor Hugo",
  position: "MEI",
  overall: 74,
  age: 20,
  morale: 73,
  value: 10,
  face: "assets/faces/BAH_vitor_hugo.png"
},
{
  id: "BAH_GABRIEL_XAVIER",
  teamId: "BAH",
  name: "Gabriel Xavier",
  position: "ZAG",
  overall: 75,
  age: 22,
  morale: 73,
  value: 11,
  face: "assets/faces/BAH_gabriel_xavier.png"
},
{
  id: "BAH_MARCOS_FELIPE",
  teamId: "BAH",
  name: "Marcos Felipe",
  position: "GOL",
  overall: 77,
  age: 28,
  morale: 75,
  value: 13,
  face: "assets/faces/BAH_marcos_felipe.png"
},
{
  id: "BAH_CICINHO",
  teamId: "BAH",
  name: "Cicinho",
  position: "LD",
  overall: 75,
  age: 35,
  morale: 72,
  value: 9,
  face: "assets/faces/BAH_cicinho.png"
},
{
  id: "BAH_KANU",
  teamId: "BAH",
  name: "Kanu",
  position: "ZAG",
  overall: 77,
  age: 26,
  morale: 74,
  value: 14,
  face: "assets/faces/BAH_kanu.png"
},
{
  id: "BAH_RYAN",
  teamId: "BAH",
  name: "Ryan",
  position: "LE",
  overall: 73,
  age: 20,
  morale: 72,
  value: 9,
  face: "assets/faces/BAH_ryan.png"
},
{
  id: "BAH_ADEMIR",
  teamId: "BAH",
  name: "Ademir",
  position: "ATA",
  overall: 76,
  age: 29,
  morale: 74,
  value: 13,
  face: "assets/faces/BAH_ademir.png"
},
{
  id: "BAH_THACIANO",
  teamId: "BAH",
  name: "Thaciano",
  position: "MEI",
  overall: 78,
  age: 29,
  morale: 76,
  value: 15,
  face: "assets/faces/BAH_thaciano.png"
},
{
  id: "BAH_RAFEL_RATAO",
  teamId: "BAH",
  name: "Rafael Ratão",
  position: "ATA",
  overall: 76,
  age: 28,
  morale: 74,
  value: 13,
  face: "assets/faces/BAH_rafael_ratao.png"
},
{
  id: "BAH_LUAN",
  teamId: "BAH",
  name: "Luan",
  position: "MEI",
  overall: 74,
  age: 30,
  morale: 72,
  value: 10,
  face: "assets/faces/BAH_luan.png"
},
{
  id: "BAH_VINICIUS_MINGOTTI",
  teamId: "BAH",
  name: "Vinícius Mingotti",
  position: "ATA",
  overall: 74,
  age: 23,
  morale: 72,
  value: 11,
  face: "assets/faces/BAH_vinicius_mingotti.png"
},
{
  id: "BAH_JEAN_LUCAS",
  teamId: "BAH",
  name: "Jean Lucas",
  position: "MEI",
  overall: 78,
  age: 26,
  morale: 76,
  value: 16,
  face: "assets/faces/BAH_jean_lucas.png"
},
// ==== FORTALEZA ====
{
  id: "FOR_YAGO_PIKACHU",
  teamId: "FOR",
  name: "Yago Pikachu",
  position: "LD",
  overall: 79,
  age: 32,
  morale: 77,
  value: 14,
  face: "assets/faces/FOR_yago_pikachu.png"
},
{
  id: "FOR_LUCERO",
  teamId: "FOR",
  name: "Lucero",
  position: "ATA",
  overall: 80,
  age: 32,
  morale: 78,
  value: 17,
  face: "assets/faces/FOR_lucero.png"
},
{
  id: "FOR_MARINHO",
  teamId: "FOR",
  name: "Marinho",
  position: "ATA",
  overall: 79,
  age: 34,
  morale: 76,
  value: 14,
  face: "assets/faces/FOR_marinho.png"
},
{
  id: "FOR_TITI",
  teamId: "FOR",
  name: "Titi",
  position: "ZAG",
  overall: 79,
  age: 36,
  morale: 76,
  value: 11,
  face: "assets/faces/FOR_titi.png"
},
{
  id: "FOR_BENEVENUTO",
  teamId: "FOR",
  name: "Benevenuto",
  position: "ZAG",
  overall: 78,
  age: 28,
  morale: 75,
  value: 15,
  face: "assets/faces/FOR_benevenuto.png"
},
{
  id: "FOR_HERCULES",
  teamId: "FOR",
  name: "Hércules",
  position: "VOL",
  overall: 77,
  age: 22,
  morale: 75,
  value: 14,
  face: "assets/faces/FOR_hercules.png"
},
{
  id: "FOR_POCCHETINO",
  teamId: "FOR",
  name: "Pochettino",
  position: "MEI",
  overall: 79,
  age: 28,
  morale: 76,
  value: 17,
  face: "assets/faces/FOR_pochettino.png"
},
{
  id: "FOR_KERVIN_ANDRADE",
  teamId: "FOR",
  name: "Kervin Andrade",
  position: "MEI",
  overall: 74,
  age: 19,
  morale: 73,
  value: 11,
  face: "assets/faces/FOR_kervin_andrade.png"
},
{
  id: "FOR_JOAO_RICARDO",
  teamId: "FOR",
  name: "João Ricardo",
  position: "GOL",
  overall: 78,
  age: 35,
  morale: 75,
  value: 11,
  face: "assets/faces/FOR_joao_ricardo.png"
},
{
  id: "FOR_BRUNO_PACHECO",
  teamId: "FOR",
  name: "Bruno Pacheco",
  position: "LE",
  overall: 77,
  age: 32,
  morale: 74,
  value: 12,
  face: "assets/faces/FOR_bruno_pacheco.png"
},
{
  id: "FOR_ZE_WELISON",
  teamId: "FOR",
  name: "Zé Welison",
  position: "VOL",
  overall: 78,
  age: 29,
  morale: 75,
  value: 14,
  face: "assets/faces/FOR_ze_welison.png"
},
{
  id: "FOR_MOISES",
  teamId: "FOR",
  name: "Moisés",
  position: "ATA",
  overall: 79,
  age: 28,
  morale: 77,
  value: 17,
  face: "assets/faces/FOR_moises.png"
},
{
  id: "FOR_SASHA",
  teamId: "FOR",
  name: "Sasha",
  position: "ATA",
  overall: 77,
  age: 31,
  morale: 74,
  value: 13,
  face: "assets/faces/FOR_sasha.png"
},
{
  id: "FOR_CALEBE",
  teamId: "FOR",
  name: "Calebe",
  position: "MEI",
  overall: 75,
  age: 23,
  morale: 73,
  value: 12,
  face: "assets/faces/FOR_calebe.png"
},
{
  id: "FOR_DUDU",
  teamId: "FOR",
  name: "Dudu",
  position: "LD",
  overall: 74,
  age: 23,
  morale: 72,
  value: 11,
  face: "assets/faces/FOR_dudu.png"
},
{
  id: "FOR_PEDRO_ROCHA",
  teamId: "FOR",
  name: "Pedro Rocha",
  position: "ATA",
  overall: 76,
  age: 29,
  morale: 73,
  value: 13,
  face: "assets/faces/FOR_pedro_rocha.png"
},
{
  id: "FOR_KAYZER",
  teamId: "FOR",
  name: "Kayzer",
  position: "ATA",
  overall: 76,
  age: 28,
  morale: 73,
  value: 13,
  face: "assets/faces/FOR_kayzer.png"
},
{
  id: "FOR_ROMARINHO",
  teamId: "FOR",
  name: "Romarinho",
  position: "ATA",
  overall: 77,
  age: 29,
  morale: 75,
  value: 14,
  face: "assets/faces/FOR_romarinho.png"
},
{
  id: "FOR_CRISPIM",
  teamId: "FOR",
  name: "Crispim",
  position: "MEI",
  overall: 76,
  age: 29,
  morale: 74,
  value: 13,
  face: "assets/faces/FOR_crispim.png"
},
{
  id: "FOR_SAMUEL",
  teamId: "FOR",
  name: "Samuel",
  position: "MEI",
  overall: 73,
  age: 22,
  morale: 72,
  value: 9,
  face: "assets/faces/FOR_samuel.png"
},
// ==== RB BRAGANTINO ====
{
  id: "RBB_HELINHO",
  teamId: "RBB",
  name: "Helinho",
  position: "ATA",
  overall: 79,
  age: 24,
  morale: 77,
  value: 18,
  face: "assets/faces/RBB_helinho.png"
},
{
  id: "RBB_VITINHO",
  teamId: "RBB",
  name: "Vitinho",
  position: "ATA",
  overall: 77,
  age: 24,
  morale: 75,
  value: 15,
  face: "assets/faces/RBB_vitinho.png"
},
{
  id: "RBB_JUNINHO_CAPIXABA",
  teamId: "RBB",
  name: "Juninho Capixaba",
  position: "LE",
  overall: 79,
  age: 26,
  morale: 77,
  value: 18,
  face: "assets/faces/RBB_juninho_capixaba.png"
},
{
  id: "RBB_LEO_REALPE",
  teamId: "RBB",
  name: "Léo Realpe",
  position: "ZAG",
  overall: 76,
  age: 23,
  morale: 74,
  value: 13,
  face: "assets/faces/RBB_leo_realpe.png"
},
{
  id: "RBB_CLEITON",
  teamId: "RBB",
  name: "Cleiton",
  position: "GOL",
  overall: 78,
  age: 26,
  morale: 75,
  value: 15,
  face: "assets/faces/RBB_cleiton.png"
},
{
  id: "RBB_NATHAN_MENDES",
  teamId: "RBB",
  name: "Nathan Mendes",
  position: "LD",
  overall: 75,
  age: 21,
  morale: 73,
  value: 12,
  face: "assets/faces/RBB_nathan_mendes.png"
},
{
  id: "RBB_LUCAS_EVANGELISTA",
  teamId: "RBB",
  name: "Lucas Evangelista",
  position: "MEI",
  overall: 79,
  age: 28,
  morale: 76,
  value: 17,
  face: "assets/faces/RBB_lucas_evangelista.png"
},
{
  id: "RBB_ERIC_RAMIRES",
  teamId: "RBB",
  name: "Eric Ramires",
  position: "MEI",
  overall: 77,
  age: 23,
  morale: 75,
  value: 14,
  face: "assets/faces/RBB_eric_ramires.png"
},
{
  id: "RBB_THIAGO_BORBAS",
  teamId: "RBB",
  name: "Thiago Borbas",
  position: "ATA",
  overall: 78,
  age: 22,
  morale: 76,
  value: 17,
  face: "assets/faces/RBB_thiago_borbas.png"
},
{
  id: "RBB_EDUARDO_SASHA",
  teamId: "RBB",
  name: "Eduardo Sasha",
  position: "ATA",
  overall: 77,
  age: 32,
  morale: 74,
  value: 13,
  face: "assets/faces/RBB_eduardo_sasha.png"
},
{
  id: "RBB_BRUNINHO",
  teamId: "RBB",
  name: "Bruninho",
  position: "MEI",
  overall: 75,
  age: 23,
  morale: 73,
  value: 12,
  face: "assets/faces/RBB_bruninho.png"
},
{
  id: "RBB_HENRY_MOSQUERA",
  teamId: "RBB",
  name: "Henry Mosquera",
  position: "ATA",
  overall: 74,
  age: 21,
  morale: 73,
  value: 11,
  face: "assets/faces/RBB_henry_mosquera.png"
},
{
  id: "RBB_LINCOLN",
  teamId: "RBB",
  name: "Lincoln",
  position: "ATA",
  overall: 74,
  age: 23,
  morale: 72,
  value: 11,
  face: "assets/faces/RBB_lincoln.png"
},
{
  id: "RBB_ANDRES_HURTADO",
  teamId: "RBB",
  name: "Andrés Hurtado",
  position: "LD",
  overall: 74,
  age: 22,
  morale: 72,
  value: 11,
  face: "assets/faces/RBB_andres_hurtado.png"
},
{
  id: "RBB_GUSTAVINHO",
  teamId: "RBB",
  name: "Gustavinho",
  position: "MEI",
  overall: 74,
  age: 21,
  morale: 72,
  value: 10,
  face: "assets/faces/RBB_gustavinho.png"
},
{
  id: "RBB_MATHEUS_FERNANDES",
  teamId: "RBB",
  name: "Matheus Fernandes",
  position: "VOL",
  overall: 76,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/RBB_matheus_fernandes.png"
},
{
  id: "RBB_LUAN_CANDIDO",
  teamId: "RBB",
  name: "Luan Cândido",
  position: "LE",
  overall: 77,
  age: 23,
  morale: 75,
  value: 15,
  face: "assets/faces/RBB_luan_candido.png"
},
{
  id: "RBB_HURTADO",
  teamId: "RBB",
  name: "Hurtado",
  position: "ATA",
  overall: 74,
  age: 22,
  morale: 72,
  value: 11,
  face: "assets/faces/RBB_hurtado.png"
},
{
  id: "RBB_MIGUEL",
  teamId: "RBB",
  name: "Miguel",
  position: "MEI",
  overall: 73,
  age: 20,
  morale: 71,
  value: 9,
  face: "assets/faces/RBB_miguel.png"
},
{
  id: "RBB_DOUGLAS_MENDES",
  teamId: "RBB",
  name: "Douglas Mendes",
  position: "ZAG",
  overall: 73,
  age: 20,
  morale: 71,
  value: 9,
  face: "assets/faces/RBB_douglas_mendes.png"
},
// ==== CEARÁ ====
{
  id: "CEA_ERIC",
  teamId: "CEA",
  name: "Erick",
  position: "ATA",
  overall: 76,
  age: 25,
  morale: 74,
  value: 13,
  face: "assets/faces/CEA_eric.png"
},
{
  id: "CEA_SAULO_MINEIRO",
  teamId: "CEA",
  name: "Saulo Mineiro",
  position: "ATA",
  overall: 76,
  age: 26,
  morale: 74,
  value: 13,
  face: "assets/faces/CEA_saulo_mineiro.png"
},
{
  id: "CEA_GUILHERME_CASTILHO",
  teamId: "CEA",
  name: "Guilherme Castilho",
  position: "MEI",
  overall: 76,
  age: 24,
  morale: 74,
  value: 13,
  face: "assets/faces/CEA_guilherme_castilho.png"
},
{
  id: "CEA_RICHARD",
  teamId: "CEA",
  name: "Richard",
  position: "GOL",
  overall: 76,
  age: 32,
  morale: 74,
  value: 11,
  face: "assets/faces/CEA_richard.png"
},
{
  id: "CEA_LEO_SANTOS",
  teamId: "CEA",
  name: "Léo Santos",
  position: "ZAG",
  overall: 74,
  age: 24,
  morale: 72,
  value: 10,
  face: "assets/faces/CEA_leo_santos.png"
},
{
  id: "CEA_BUIU",
  teamId: "CEA",
  name: "Buiú",
  position: "LD",
  overall: 73,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/CEA_buiu.png"
},
{
  id: "CEA_RICHARDSON",
  teamId: "CEA",
  name: "Richardson",
  position: "VOL",
  overall: 76,
  age: 32,
  morale: 73,
  value: 11,
  face: "assets/faces/CEA_richardson.png"
},
{
  id: "CEA_VINA",
  teamId: "CEA",
  name: "Vina",
  position: "MEI",
  overall: 78,
  age: 33,
  morale: 75,
  value: 13,
  face: "assets/faces/CEA_vina.png"
},
{
  id: "CEA_JANDERSON",
  teamId: "CEA",
  name: "Janderson",
  position: "ATA",
  overall: 74,
  age: 24,
  morale: 72,
  value: 10,
  face: "assets/faces/CEA_janderson.png"
},
{
  id: "CEA_LUVANNOR",
  teamId: "CEA",
  name: "Luvannor",
  position: "ATA",
  overall: 74,
  age: 32,
  morale: 72,
  value: 9,
  face: "assets/faces/CEA_luvannor.png"
},
{
  id: "CEA_DAVID_RICARDO",
  teamId: "CEA",
  name: "David Ricardo",
  position: "ZAG",
  overall: 73,
  age: 21,
  morale: 71,
  value: 9,
  face: "assets/faces/CEA_david_ricardo.png"
},
{
  id: "CEA_BRUNO_FERREIRA",
  teamId: "CEA",
  name: "Bruno Ferreira",
  position: "ZAG",
  overall: 73,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/CEA_bruno_ferreira.png"
},
{
  id: "CEA_CHAY",
  teamId: "CEA",
  name: "Chay",
  position: "MEI",
  overall: 74,
  age: 32,
  morale: 72,
  value: 9,
  face: "assets/faces/CEA_chay.png"
},
{
  id: "CEA_JEAN_CARLOS",
  teamId: "CEA",
  name: "Jean Carlos",
  position: "MEI",
  overall: 76,
  age: 32,
  morale: 73,
  value: 11,
  face: "assets/faces/CEA_jean_carlos.png"
},
{
  id: "CEA_WARLEY",
  teamId: "CEA",
  name: "Warley",
  position: "LD",
  overall: 74,
  age: 24,
  morale: 72,
  value: 10,
  face: "assets/faces/CEA_warley.png"
},
{
  id: "CEA_GEOVANE",
  teamId: "CEA",
  name: "Geovane",
  position: "VOL",
  overall: 73,
  age: 23,
  morale: 71,
  value: 9,
  face: "assets/faces/CEA_geovane.png"
},
{
  id: "CEA_CLEBER",
  teamId: "CEA",
  name: "Cléber",
  position: "ATA",
  overall: 75,
  age: 27,
  morale: 73,
  value: 12,
  face: "assets/faces/CEA_cleber.png"
},
{
  id: "CEA_MICHEL_MACEDO",
  teamId: "CEA",
  name: "Michel Macedo",
  position: "LD",
  overall: 74,
  age: 33,
  morale: 72,
  value: 9,
  face: "assets/faces/CEA_michel_macedo.png"
},
{
  id: "CEA_TIAGO_PAGNUSSAT",
  teamId: "CEA",
  name: "Tiago Pagnussat",
  position: "ZAG",
  overall: 75,
  age: 33,
  morale: 72,
  value: 9,
  face: "assets/faces/CEA_tiago_pagnussat.png"
},
{
  id: "CEA_ANDRE_LUIZ",
  teamId: "CEA",
  name: "André Luiz",
  position: "ATA",
  overall: 73,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/CEA_andre_luiz.png"
},
// ==== SPORT ====
{
  id: "SPT_GUSTAVO_COUTINHO",
  teamId: "SPT",
  name: "Gustavo Coutinho",
  position: "ATA",
  overall: 76,
  age: 25,
  morale: 74,
  value: 13,
  face: "assets/faces/SPT_gustavo_coutinho.png"
},
{
  id: "SPT_JUBA",
  teamId: "SPT",
  name: "Juba",
  position: "ATA",
  overall: 77,
  age: 24,
  morale: 75,
  value: 15,
  face: "assets/faces/SPT_juba.png"
},
{
  id: "SPT_ALAN_RUIZ",
  teamId: "SPT",
  name: "Alan Ruiz",
  position: "MEI",
  overall: 76,
  age: 30,
  morale: 74,
  value: 12,
  face: "assets/faces/SPT_alan_ruiz.png"
},
{
  id: "SPT_RAFEL_THYERE",
  teamId: "SPT",
  name: "Rafael Thyere",
  position: "ZAG",
  overall: 76,
  age: 31,
  morale: 73,
  value: 11,
  face: "assets/faces/SPT_rafael_thyere.png"
},
{
  id: "SPT_SABINO",
  teamId: "SPT",
  name: "Sabino",
  position: "ZAG",
  overall: 76,
  age: 27,
  morale: 73,
  value: 12,
  face: "assets/faces/SPT_sabino.png"
},
{
  id: "SPT_RENZO",
  teamId: "SPT",
  name: "Renzo",
  position: "LD",
  overall: 73,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/SPT_renzo.png"
},
{
  id: "SPT_LUCAS_HERNANDES",
  teamId: "SPT",
  name: "Lucas Hernandes",
  position: "LE",
  overall: 74,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/SPT_lucas_hernandes.png"
},
{
  id: "SPT_PEDRO_LIMA",
  teamId: "SPT",
  name: "Pedro Lima",
  position: "LD",
  overall: 76,
  age: 18,
  morale: 75,
  value: 16,
  face: "assets/faces/SPT_pedro_lima.png"
},
{
  id: "SPT_GABRIEL_SANTOS",
  teamId: "SPT",
  name: "Gabriel Santos",
  position: "ATA",
  overall: 74,
  age: 24,
  morale: 72,
  value: 11,
  face: "assets/faces/SPT_gabriel_santos.png"
},
{
  id: "SPT_LUCIANO_JUBA",
  teamId: "SPT",
  name: "Luciano Juba",
  position: "ATA",
  overall: 78,
  age: 24,
  morale: 76,
  value: 16,
  face: "assets/faces/SPT_luciano_juba.png"
},
{
  id: "SPT_EDINHO",
  teamId: "SPT",
  name: "Edinho",
  position: "ATA",
  overall: 74,
  age: 29,
  morale: 72,
  value: 11,
  face: "assets/faces/SPT_edinho.png"
},
{
  id: "SPT_WANDERSON",
  teamId: "SPT",
  name: "Wanderson",
  position: "ZAG",
  overall: 74,
  age: 26,
  morale: 72,
  value: 10,
  face: "assets/faces/SPT_wanderson.png"
},
{
  id: "SPT_FABIO_MATHEUS",
  teamId: "SPT",
  name: "Fábio Matheus",
  position: "VOL",
  overall: 73,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/SPT_fabio_matheus.png"
},
{
  id: "SPT_FABRICIO_DANIEL",
  teamId: "SPT",
  name: "Fabrício Daniel",
  position: "ATA",
  overall: 75,
  age: 26,
  morale: 73,
  value: 11,
  face: "assets/faces/SPT_fabricio_daniel.png"
},
{
  id: "SPT_RONALDO",
  teamId: "SPT",
  name: "Ronaldo",
  position: "VOL",
  overall: 73,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/SPT_ronaldo.png"
},
{
  id: "SPT_DALBERT",
  teamId: "SPT",
  name: "Dalbert",
  position: "LE",
  overall: 74,
  age: 30,
  morale: 72,
  value: 10,
  face: "assets/faces/SPT_dalbert.png"
},
{
  id: "SPT_CHICO",
  teamId: "SPT",
  name: "Chico",
  position: "VOL",
  overall: 73,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/SPT_chico.png"
},
{
  id: "SPT_JORDAN",
  teamId: "SPT",
  name: "Jordan",
  position: "ZAG",
  overall: 73,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/SPT_jordan.png"
},
{
  id: "SPT_DENILSON",
  teamId: "SPT",
  name: "Denílson",
  position: "ATA",
  overall: 73,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/SPT_denilson.png"
},
{
  id: "SPT_ALISSON_FARIAS",
  teamId: "SPT",
  name: "Alisson Farias",
  position: "ATA",
  overall: 74,
  age: 27,
  morale: 72,
  value: 10,
  face: "assets/faces/SPT_alisson_farias.png"
},
// ==== JUVENTUDE ====
{
  id: "JUV_GILBERTO",
  teamId: "JUV",
  name: "Gilberto",
  position: "ATA",
  overall: 76,
  age: 34,
  morale: 73,
  value: 11,
  face: "assets/faces/JUV_gilberto.png"
},
{
  id: "JUV_NENE",
  teamId: "JUV",
  name: "Nenê",
  position: "MEI",
  overall: 77,
  age: 42,
  morale: 74,
  value: 6,
  face: "assets/faces/JUV_nene.png"
},
{
  id: "JUV_JADSON",
  teamId: "JUV",
  name: "Jadson",
  position: "MEI",
  overall: 74,
  age: 30,
  morale: 72,
  value: 9,
  face: "assets/faces/JUV_jadson.png"
},
{
  id: "JUV_RODRIGO_SAM",
  teamId: "JUV",
  name: "Rodrigo Sam",
  position: "ZAG",
  overall: 74,
  age: 28,
  morale: 72,
  value: 10,
  face: "assets/faces/JUV_rodrigo_sam.png"
},
{
  id: "JUV_LUCAS_BARBOSA",
  teamId: "JUV",
  name: "Lucas Barbosa",
  position: "ATA",
  overall: 73,
  age: 23,
  morale: 71,
  value: 9,
  face: "assets/faces/JUV_lucas_barbosa.png"
},
{
  id: "JUV_JEAN_IRMER",
  teamId: "JUV",
  name: "Jean Irmer",
  position: "VOL",
  overall: 75,
  age: 29,
  morale: 73,
  value: 11,
  face: "assets/faces/JUV_jean_irmer.png"
},
{
  id: "JUV_ALAN_RUSCHEL",
  teamId: "JUV",
  name: "Alan Ruschel",
  position: "LE",
  overall: 74,
  age: 34,
  morale: 72,
  value: 8,
  face: "assets/faces/JUV_alan_ruschel.png"
},
{
  id: "JUV_MATHEUS_VARGAS",
  teamId: "JUV",
  name: "Matheus Vargas",
  position: "MEI",
  overall: 74,
  age: 25,
  morale: 72,
  value: 10,
  face: "assets/faces/JUV_matheus_vargas.png"
},
{
  id: "JUV_GABRIEL_TOTA",
  teamId: "JUV",
  name: "Gabriel Tota",
  position: "MEI",
  overall: 72,
  age: 22,
  morale: 70,
  value: 8,
  face: "assets/faces/JUV_gabriel_tota.png"
},
{
  id: "JUV_VITOR_MENDES",
  teamId: "JUV",
  name: "Vitor Mendes",
  position: "ZAG",
  overall: 74,
  age: 24,
  morale: 72,
  value: 10,
  face: "assets/faces/JUV_vitor_mendes.png"
},
{
  id: "JUV_ELTON",
  teamId: "JUV",
  name: "Elton",
  position: "ATA",
  overall: 74,
  age: 34,
  morale: 72,
  value: 9,
  face: "assets/faces/JUV_elton.png"
},
{
  id: "JUV_PAULO_HENRIQUE",
  teamId: "JUV",
  name: "Paulo Henrique",
  position: "LD",
  overall: 73,
  age: 28,
  morale: 71,
  value: 9,
  face: "assets/faces/JUV_paulo_henrique.png"
},
{
  id: "JUV_DARLAN",
  teamId: "JUV",
  name: "Darlan",
  position: "VOL",
  overall: 73,
  age: 25,
  morale: 71,
  value: 9,
  face: "assets/faces/JUV_darlan.png"
},
{
  id: "JUV_KELVI",
  teamId: "JUV",
  name: "Kelvi",
  position: "ATA",
  overall: 72,
  age: 23,
  morale: 70,
  value: 8,
  face: "assets/faces/JUV_kelvi.png"
},
{
  id: "JUV_RUAN",
  teamId: "JUV",
  name: "Ruan",
  position: "ZAG",
  overall: 72,
  age: 23,
  morale: 70,
  value: 8,
  face: "assets/faces/JUV_ruan.png"
},
{
  id: "JUV_RICARDO_BUENO",
  teamId: "JUV",
  name: "Ricardo Bueno",
  position: "ATA",
  overall: 73,
  age: 36,
  morale: 71,
  value: 7,
  face: "assets/faces/JUV_ricardo_bueno.png"
},
{
  id: "JUV_CAPIXABA",
  teamId: "JUV",
  name: "Capixaba",
  position: "ATA",
  overall: 73,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/JUV_capixaba.png"
},
{
  id: "JUV_CHICO",
  teamId: "JUV",
  name: "Chico",
  position: "MEI",
  overall: 73,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/JUV_chico.png"
},
{
  id: "JUV_RAFEL_FORSTER",
  teamId: "JUV",
  name: "Rafael Forster",
  position: "ZAG",
  overall: 73,
  age: 33,
  morale: 71,
  value: 8,
  face: "assets/faces/JUV_rafael_forster.png"
},
{
  id: "JUV_CESAR",
  teamId: "JUV",
  name: "César",
  position: "GOL",
  overall: 74,
  age: 31,
  morale: 72,
  value: 9,
  face: "assets/faces/JUV_cesar.png"
},
// ==== VITÓRIA ====
{
  id: "VIT_WAGNER_LEONARDO",
  teamId: "VIT",
  name: "Wagner Leonardo",
  position: "ZAG",
  overall: 75,
  age: 25,
  morale: 73,
  value: 11,
  face: "assets/faces/VIT_wagner_leonardo.png"
},
{
  id: "VIT_ZE_HUGO",
  teamId: "VIT",
  name: "Zé Hugo",
  position: "ATA",
  overall: 73,
  age: 22,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_ze_hugo.png"
},
{
  id: "VIT_OSVALDO",
  teamId: "VIT",
  name: "Osvaldo",
  position: "ATA",
  overall: 74,
  age: 37,
  morale: 72,
  value: 7,
  face: "assets/faces/VIT_osvaldo.png"
},
{
  id: "VIT_RODRIGO_ANDRADE",
  teamId: "VIT",
  name: "Rodrigo Andrade",
  position: "VOL",
  overall: 75,
  age: 27,
  morale: 73,
  value: 11,
  face: "assets/faces/VIT_rodrigo_andrade.png"
},
{
  id: "VIT_LEO_GAMALHO",
  teamId: "VIT",
  name: "Léo Gamalho",
  position: "ATA",
  overall: 75,
  age: 38,
  morale: 72,
  value: 7,
  face: "assets/faces/VIT_leo_gamalho.png"
},
{
  id: "VIT_RAFINHA",
  teamId: "VIT",
  name: "Rafinha",
  position: "MEI",
  overall: 74,
  age: 30,
  morale: 72,
  value: 9,
  face: "assets/faces/VIT_rafinha.png"
},
{
  id: "VIT_DANIEL",
  teamId: "VIT",
  name: "Daniel",
  position: "MEI",
  overall: 75,
  age: 28,
  morale: 73,
  value: 11,
  face: "assets/faces/VIT_daniel.png"
},
{
  id: "VIT_LUCAS_ARCANJO",
  teamId: "VIT",
  name: "Lucas Arcanjo",
  position: "GOL",
  overall: 75,
  age: 26,
  morale: 73,
  value: 11,
  face: "assets/faces/VIT_lucas_arcanjo.png"
},
{
  id: "VIT_JOAO_LUCAS",
  teamId: "VIT",
  name: "João Lucas",
  position: "LD",
  overall: 74,
  age: 25,
  morale: 72,
  value: 10,
  face: "assets/faces/VIT_joao_lucas.png"
},
{
  id: "VIT_CAMUTANGA",
  teamId: "VIT",
  name: "Camutanga",
  position: "ZAG",
  overall: 74,
  age: 30,
  morale: 72,
  value: 9,
  face: "assets/faces/VIT_camutanga.png"
},
{
  id: "VIT_DUDU",
  teamId: "VIT",
  name: "Dudu",
  position: "LD",
  overall: 73,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_dudu.png"
},
{
  id: "VIT_GEGE",
  teamId: "VIT",
  name: "Gegê",
  position: "MEI",
  overall: 73,
  age: 28,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_gege.png"
},
{
  id: "VIT_BRUNO_OLIVEIRA",
  teamId: "VIT",
  name: "Bruno Oliveira",
  position: "MEI",
  overall: 74,
  age: 26,
  morale: 72,
  value: 10,
  face: "assets/faces/VIT_bruno_oliveira.png"
},
{
  id: "VIT_MATHEUSINHO",
  teamId: "VIT",
  name: "Matheusinho",
  position: "MEI",
  overall: 74,
  age: 25,
  morale: 72,
  value: 10,
  face: "assets/faces/VIT_matheusinho.png"
},
{
  id: "VIT_RAILAN",
  teamId: "VIT",
  name: "Railan",
  position: "LE",
  overall: 73,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_railan.png"
},
{
  id: "VIT_FELIPE_VIEIRA",
  teamId: "VIT",
  name: "Felipe Vieira",
  position: "LE",
  overall: 73,
  age: 23,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_felipe_vieira.png"
},
{
  id: "VIT_RODRIGO_CARIOCA",
  teamId: "VIT",
  name: "Rodrigo Carioca",
  position: "ATA",
  overall: 73,
  age: 24,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_rodrigo_carioca.png"
},
{
  id: "VIT_MARCO_ANTONIO",
  teamId: "VIT",
  name: "Marco Antônio",
  position: "MEI",
  overall: 73,
  age: 26,
  morale: 71,
  value: 9,
  face: "assets/faces/VIT_marco_antonio.png"
},
{
  id: "VIT_IURY_CASTILHO",
  teamId: "VIT",
  name: "Iury Castilho",
  position: "ATA",
  overall: 74,
  age: 29,
  morale: 72,
  value: 10,
  face: "assets/faces/VIT_iury_castilho.png"
},
{
  id: "VIT_WILLIAN_OLIVEIRA",
  teamId: "VIT",
  name: "Willian Oliveira",
  position: "VOL",
  overall: 74,
  age: 30,
  morale: 72,
  value: 10,
  face: "assets/faces/VIT_willian_oliveira.png"
},
// ==== MIRASSOL ====
{
  id: "MIR_ZE_ROBERTO",
  teamId: "MIR",
  name: "Zé Roberto",
  position: "ATA",
  overall: 76,
  age: 30,
  morale: 74,
  value: 12,
  face: "assets/faces/MIR_ze_roberto.png"
},
{
  id: "MIR_FABRICIO",
  teamId: "MIR",
  name: "Fabrício",
  position: "ATA",
  overall: 74,
  age: 27,
  morale: 73,
  value: 10,
  face: "assets/faces/MIR_fabricio.png"
},
{
  id: "MIR_CAMILO",
  teamId: "MIR",
  name: "Camilo",
  position: "MEI",
  overall: 77,
  age: 37,
  morale: 75,
  value: 9,
  face: "assets/faces/MIR_camilo.png"
},
{
  id: "MIR_NEGUEBA",
  teamId: "MIR",
  name: "Negueba",
  position: "ATA",
  overall: 73,
  age: 26,
  morale: 72,
  value: 9,
  face: "assets/faces/MIR_negueba.png"
},
{
  id: "MIR_RODRIGO_SAM",
  teamId: "MIR",
  name: "Rodrigo Sam",
  position: "ZAG",
  overall: 74,
  age: 28,
  morale: 73,
  value: 10,
  face: "assets/faces/MIR_rodrigo_sam.png"
},
{
  id: "MIR_DANIELZINHO",
  teamId: "MIR",
  name: "Danielzinho",
  position: "MEI",
  overall: 75,
  age: 28,
  morale: 73,
  value: 11,
  face: "assets/faces/MIR_danielzinho.png"
},
{
  id: "MIR_LUIZ_OTAVIO",
  teamId: "MIR",
  name: "Luiz Otávio",
  position: "ZAG",
  overall: 73,
  age: 25,
  morale: 72,
  value: 9,
  face: "assets/faces/MIR_luiz_otavio.png"
},
{
  id: "MIR_VINICIUS",
  teamId: "MIR",
  name: "Vinícius",
  position: "ATA",
  overall: 74,
  age: 24,
  morale: 73,
  value: 10,
  face: "assets/faces/MIR_vinicius.png"
},
{
  id: "MIR_GABRIEL",
  teamId: "MIR",
  name: "Gabriel",
  position: "MEI",
  overall: 72,
  age: 23,
  morale: 71,
  value: 8,
  face: "assets/faces/MIR_gabriel.png"
},
{
  id: "MIR_LUCAS_RAMON",
  teamId: "MIR",
  name: "Lucas Ramon",
  position: "LD",
  overall: 73,
  age: 28,
  morale: 72,
  value: 9,
  face: "assets/faces/MIR_lucas_ramon.png"
},
{
  id: "MIR_MORAES",
  teamId: "MIR",
  name: "Moraes",
  position: "LE",
  overall: 74,
  age: 26,
  morale: 72,
  value: 10,
  face: "assets/faces/MIR_moraes.png"
},
{
  id: "MIR_RAFAEL_SILVA",
  teamId: "MIR",
  name: "Rafael Silva",
  position: "ATA",
  overall: 73,
  age: 27,
  morale: 71,
  value: 9,
  face: "assets/faces/MIR_rafael_silva.png"
},
{
  id: "MIR_KAUAN",
  teamId: "MIR",
  name: "Kauan",
  position: "MEI",
  overall: 72,
  age: 21,
  morale: 71,
  value: 8,
  face: "assets/faces/MIR_kauan.png"
},
{
  id: "MIR_ROBSON",
  teamId: "MIR",
  name: "Robson",
  position: "VOL",
  overall: 72,
  age: 26,
  morale: 70,
  value: 8,
  face: "assets/faces/MIR_robson.png"
},
{
  id: "MIR_RODRIGO_FERREIRA",
  teamId: "MIR",
  name: "Rodrigo Ferreira",
  position: "LD",
  overall: 73,
  age: 29,
  morale: 72,
  value: 9,
  face: "assets/faces/MIR_rodrigo_ferreira.png"
},
{
  id: "MIR_CRISTIAN",
  teamId: "MIR",
  name: "Cristian",
  position: "MEI",
  overall: 72,
  age: 22,
  morale: 71,
  value: 8,
  face: "assets/faces/MIR_cristian.png"
},
{
  id: "MIR_PAULINHO",
  teamId: "MIR",
  name: "Paulinho",
  position: "ATA",
  overall: 72,
  age: 23,
  morale: 71,
  value: 8,
  face: "assets/faces/MIR_paulinho.png"
},
{
  id: "MIR_JOAO_PAULO",
  teamId: "MIR",
  name: "João Paulo",
  position: "GOL",
  overall: 74,
  age: 29,
  morale: 72,
  value: 9,
  face: "assets/faces/MIR_joao_paulo.png"
},
{
  id: "MIR_MATHEUS_OLIVEIRA",
  teamId: "MIR",
  name: "Matheus Oliveira",
  position: "MEI",
  overall: 73,
  age: 27,
  morale: 72,
  value: 9,
  face: "assets/faces/MIR_matheus_oliveira.png"
},
{
  id: "MIR_CHICO",
  teamId: "MIR",
  name: "Chico",
  position: "ATA",
  overall: 72,
  age: 25,
  morale: 71,
  value: 8,
  face: "assets/faces/MIR_chico.png"
},
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
  const competitions = [
  {
    id: "BRA-A",
    name: "Campeonato Brasileiro Série A",
    type: "league",
    // 20 clubes da Série A que você já cadastrou no array teams
    teams: [
      "AMG", // Atlético-MG
      "BAH", // Bahia
      "BOT", // Botafogo
      "CEA", // Ceará
      "COR", // Corinthians
      "CRU", // Cruzeiro
      "FLA", // Flamengo
      "FLU", // Fluminense
      "FOR", // Fortaleza
      "JUV", // Juventude
      "GRE", // Grêmio
      "INT", // Internacional
      "MIR", // Mirassol
      "PAL", // Palmeiras
      "RBB", // RB Bragantino
      "SAN", // Santos
      "SAO", // São Paulo
      "SPO", // Sport
      "VAS", // Vasco
      "VIT"  // Vitória
    ],
    pointsForWin: 3,
    pointsForDraw: 1,
    pointsForLoss: 0,
    doubleRoundRobin: true // turno e returno
  },
  {
    id: "COPA-BR",
    name: "Copa do Brasil (Protótipo)",
    type: "cup",
    // Pode usar os mesmos times, por enquanto
    teams: [
      "AMG", "BAH", "BOT", "CEA", "COR",
      "CRU", "FLA", "FLU", "FOR", "JUV",
      "GRE", "INT", "MIR", "PAL", "RBB",
      "SAN", "SAO", "SPO", "VAS", "VIT"
    ],
    twoLeggedTies: true
  }
];

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
