function soma(){
    let soma = 0
    for(i in arguments){ // Pega o indice de cada elemento do array.
        soma += arguments[i] // Arguments é um array que armazena todos os parametros passados para a funcao. Toda
        // funcao tem esse operador disponivel.
    }
    return soma
}

console.log(soma()) // Resulta em 0, pois é o valor inicial da variavel soma
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a','b','c'))