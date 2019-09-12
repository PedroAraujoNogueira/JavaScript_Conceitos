// O template string faz coisas que a string nao pode fazer, como por exemplo quebrar a string em varias 
// linhas, espaços em brancos, tabs, quebras de linha e etc.
const nome = "Pedro"
const concatenacao = 'ola ' + nome + '!'

// Exemplo de uso de string template(string com uso de crases).
const template = `
    ola
    ${nome}!`
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)