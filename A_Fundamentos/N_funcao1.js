// funcao sem retorno.
// Obs: uma funcao em javaScript em nenhum momento deixa explicito que a funcao retorna algo.

function imprimirSoma(a, b)
{
    console.log(a + b)
} // Note que os parametros da funcao nao tem palavras reservadas como var, let ou const. Basta colocarmos 
// os nomes dos parametros.

imprimirSoma(2, 3)
imprimirSoma(2) // Em javaScript nao precisamos passar todos os argumentos, porem os argumentos que nao forem
// passados ficarao como Undefined, logo nesse caso o resultado da soma sera 2 + undefined = NaN.
imprimirSoma(2, 3, 4, 5, 6, 7) // Esse caso tambem funciona, a funcao pega apenas os dois primeiros numeros e
// descarta o restante deles.

// Funcao com retorno.
function soma(a, b = 1){ // Quando colocamos b = 1 estamos atribuindo um valor padrao para a variavel b caso
    // ela nao seja inicializada. É uma novidade do ECMAscript 2015.
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // O resultado sera NaN pois ele tentara somar undefined + 1 = NaN.