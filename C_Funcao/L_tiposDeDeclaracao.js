console.log(soma(3, 4)) // Nao gera erro pois o interpretador ja tem carregado a funcao soma previamente.
// console.log(sub(3, 4)) // Gera um erro, pois uma function expression so pode ser chamada apos a linha onde foi definida.
// console.log(mult(3, 4)) // Gera erro, mesmo motivo da function expression.

// function declaration
function soma(x, y){
    return x + y
} // Vantagem de uma function declarion: podemos chamar a funcao antes mesmo dela ser declarada no codigo, pois o 
// interpretador do JavaScript primeiro carrega todas as funcoes e deixa elas preparadas para uso e somente depois começa
// a executar o codigo linha a linha.

// function expression 
const sub = function(x, y){
    return x - y
} // Desvantagem: so posso chamar essa funcao depois que ela foi declarada, pois ela esta sendo armazenada atraves de uma
// variavel.
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y){
    return x * y
}// Desvantagem: so posso chamar essa funcao depois que ela foi declarada, pois ela esta sendo armazenada atraves de uma
// variavel.
console.log(mult(3, 4))


// OBS:
// É uma function expression so que com nome.
// A unica vantagem dessa forma de declaracao a na hora de debugar ou em uma pilha de erros ira aparecer o
// nome da funcao ficando mais facil a identificacao do erro, porem essa forma de declarar uma funcao é mto pouco usada.