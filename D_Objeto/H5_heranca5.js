// Note que é impresso function 3 vezes na tela.
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Toda funcao tem um atributo chamado prototype.
String.prototype.reverse = function() {
    return this.split('').reverse().join('') // this.split('') gera um Array com cada letra da frase em uma posicao, usar a 
    // funcao reverse(), que existe no array porem nao existe na string, e por ultimo usa a funcao join('') 
    // para juntar todas as posiçoes do array.
}

console.log('Escola Cod3r'.reverse()) // Como 'Ecola Cod3r' é uma string entao é possivel acessar as funcoes colocadas 
// dentro de String.prototype.

Array.prototype.first = function(){
    return this[0] // Note que o this[0] sera a primeira posicao de um array que chamou a funcao first.
}

console.log([1, 2, 3, 4, 5].first()) // this[0] = 1
console.log(['a', 'b', 'c'].first()) // this[0] = a

String.prototype.toString = function() {
    return 'Lascou tudo' // Tambem é possivel sobreEscrever uma funcao que ja existe. Porem isso nao é nem um pouco 
    // recomentadado.
}

console.log('Escola Cod3r'.reverse()) // Vai imprimir 'odut uocsaL' que é 'Lascou tudo' ao contrario.