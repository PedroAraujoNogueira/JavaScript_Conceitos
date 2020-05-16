let name = 'Pedro'

function nome(){
    console.log(name)
}
nome()

// let nome = 'Rafael'
// const pessoa = {
//     nome: 'Pedro',
//     falar(){
//         console.log(nome)
//     }
// }

// pessoa.falar()


const saudacao = 'Boa'
const pessoa = {
    saudacao: 'Bom dia',
    falar() { // Recurso novo do EcmaScript2015 que permite criar funcao no objeto sem declarar o function e etc.
        const saudacao = 'Pedro'
        console.log(this.saudacao) // OBS: se tirarmos o this de this.saudacao teremos como resultado um undefined, pois saudacao nao foi definido dentro da 
        console.log(saudacao)
    },
    falar1: console.log(saudacao)
}

// global.saudacao = "Alguma coisa"

pessoa.falar()
const falar1 = pessoa.falar
falar1()
console.log()
const falarDePessoa = pessoa.falar.bind(pessoa) // No bind voce passa o objeto no qual voce quer que seja resolvido o this.
falarDePessoa()

// ------------------------------------------ Outros exemplos -------------------------------------------------------------------------------------

// const pessoaTeste = { 
//      saudacao: 'Boa tarde'
// }

// const teste = pessoa.falar.bind(pessoaTeste) // No bind oq faz sentido é passar um objeto entre parenteses.
// teste()


// const name = 'diego'

// function myName(){
//     const name = 'Priscila'
//     console.log(this.name)
// }

// myName()