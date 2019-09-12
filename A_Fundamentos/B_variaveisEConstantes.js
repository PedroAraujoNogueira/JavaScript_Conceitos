var a = 3
let b = 4
// uma grande diferença entre VAR e LET é que a mesma variavel do tipo VAR pode ser declarada
// várias vezes dentro de um mesmo escopo, enquanto a let nao pode.
// let é a forma mais moderna no javaScript de se criar variaveis.

var a = 30 
// let b = 40, dar erro pois a variavel let b ja foi declarada.
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a,b)

const c = 5 // A palavra reservada const declara uma constante.
// c = 50 // Daria erro pois a variavel c é constante, logo nao pode ser atribuido um outro valor para ela.

console.log(1000)
// DICA: SEMPRE PREFIRA USAR CONST, caso nao tenha motivo para voce está alterando uma variavel, defina ela como
// const, isso vai ajudar na manutençao do seu codigo e na legibilidade. No paradigma funcional normalmente tenta-se
// usar ao maximo as constantes.