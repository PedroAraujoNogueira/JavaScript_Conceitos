let dobro = function(a){
    return 2 * a
}

dobro = (a) => { // A funcao arrow sempre é uma funcao anonima, ou seja, para chamarmos ela depois temos que armazenala 
    // em alguma variavel ou constante.
    return 2 * a
}

// Podemos escrever a funcao arrow de uma forma mais reduzida, onde se houver apenas um parametro podemos tirar 
// os parenteses e se tirar as chaves(o corpo da funcao) entao teremos um retorno implicito.
dobro = a => 2 * a 
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

// Refatorando a funcao acima no formato de um funcao arrow.
ola = () => 'Olá'

ola = _ => 'Olá' // É uma outra maneira de escrever a funcao arrow de maneira enxuta, porem nesse caso ela tem um 
// parametro. Seria o equivalente a escrever ola = a => 'Olá'. Note que temos um parametro porem nao estamos usando.

console.log(ola())