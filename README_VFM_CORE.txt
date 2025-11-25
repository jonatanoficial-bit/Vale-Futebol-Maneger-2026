VALE FUTEBOL MANAGER 2026 - CORE FILES

Arquivos incluídos:
- database.js  -> times, jogadores, competições
- game.js      -> motor/engine do jogo (lógica, simulação, tabela)
- ui.js        -> interface e eventos, liga o HTML ao motor

Como usar no index.html:
1) Remova o antigo <script src="game.js"></script>
2) No final do <body>, use:

    <script src="database.js"></script>
    <script src="game.js"></script>
    <script src="ui.js"></script>

3) Suba esses três arquivos para o mesmo nível do index.html no GitHub.
4) Abra o jogo publicado, clique em "Novo Jogo", escolha um time e inicie a carreira.

Depois é só ir completando o database.js com todos os elencos reais.
