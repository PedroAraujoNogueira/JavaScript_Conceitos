// Estrategia 1 para gerar valor padrao.
function soma1(a, b, c){
    a = (a || 1)
    b = (b || 1)
    c = (c || 1)
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3)) // Da tudo certo nesses caso.
console.log(soma1(0, 0, 0)) // Da erro, pois o resultado esperado de 0 + 0 + 0 é 0 porem o 0 é interpretado como false, logo
// é atribuido 1 para as variaveis na funcao soma1.

// Estrategia 2, 3 e 4 para gerar valor padrao.
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments? b : 1 // Verifica se dentro de argumentos a variavel b(indice 1) existe.
    c = isNaN(c) ? 1 : c // Era a mais segura pra se usar antes do ES2015.
    return a+ b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3 ), soma2(0, 0, 0))

function soma3(a = 1,b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3 ), soma3(0, 0, 0))