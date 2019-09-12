// Armazenando uma funcao em uma variavel ou constante.

const imprimirSoma = function(a, b){
    console.log(a + b)   
} // Aqui temos uma funcao anonima. Uma funcao anonima tem a mesma estrutura de uma funcao normal, 
// porem nao possui nome.

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel.
// É um conceito novo que apareceu na versao 2015 do ECMAscript.
// Uma das vantagens da funcao arrow é ter uma forma reduzida de escrever uma funcao.

const soma = (a, b) => { // Antes da seta tempos os parametros da funcao.
    return (a + b)
} // Perceba que nao foi preciso colocar a palavra function.

console.log(soma(2,3))

// Funcao arrow com retorno implícito.

const subtracao = (a, b) => a - b // Antes da seta tempos os parametros da funcao.
// Automaticamente quando nao temos as chaves({}) em uma funcao significa que aquela funcao tem apenas uma 
// linha de codigo.
// Quando temos apenas uma sentença de codigo, entao o resultado dessa sentença sera retornado.
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')