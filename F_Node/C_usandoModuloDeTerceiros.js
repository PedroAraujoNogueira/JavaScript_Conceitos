// npm é o gerenciador de pacotes do node(npm = node package manager)
// A bibliotecac lodash é uma biblioteca mto conhecida. Podemos adicionar ela ao projeto com o comando
// npm i lodash
// É uma convensao que ao usar bibliotecas a variavel receba o nome _

const _ = require('lodash') // Pelo fato de colocarmos lodash ele por padrao vai procurar o arquivo
// index.js dentro da pasta node_modules.

setInterval(() => console.log(_.random(1, 1000)), 2000)

// nodemon é uma biblioteca que permite que possamos alterar o codigo em tempo de execucao e ela se 
// toda o novo codigo automaticamente apos salvarmos. npm i -g nodemon
// Apos baixarmos ele, para executarmos ele devemos entrar na pasta do arquivo js
// (no nosso caso a pasta node) e colocar o comando nodemon nomeDoArquivo, no nosso caso
// nodemon C_usandoModuloDeTerceiros.js
// Para finalizarmos a execuçao usamos o comando ctrl c