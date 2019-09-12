let num1 = 1
let num2 = 2


console.log(num1++) // Funciona igual ao Java, o pos incremento/decremento primeiro usa a variavel depois faz a operacao
// de soma/subtracao.
console.log(--num1) // Funciona igual ao Java, o pre incremento/decremento primeiro faz a operacao
// de soma/subtracao e depois usa a variavel.

console.log(++num1 === num2--) // O resultado é true, pq num1 foi incrementado em 1 antes de ser usado, logo ficou 2. E o
// num2 foi usado com seu valor que é 2 e so depois foi feita a subtracao.

console.log(num1 === num2) // Agora da falso, pois num2 ja esta com seu valor decrementado, valendo portanto igual a 1.