// ATRIBUICAO POR REFERENCIA:
// Quando estamos trabalhando com objeto ou funcoes.
const a = { name: 'Teste'} // A variavel 'a' na verdade tem o endereço no qual o objeto esta localizado.
// ou seja, a variavel está apontado para o local do objeto. 
const b = a // logo, nesse caso, 'b' esta recebendo o mesmo local onde o objeto 'a esta. Logo 'a' e 'b'
// estao apontando para o mesmo local na memória.
b.name = 'OPA'// Ao alteramos o valor da variavel name em 'b' estamos alterando automaticamente em 'a' tambem.

// ATRIBUICAO POR VALOR
// Quando estamos trabalhando com tipos primitivos é passada uma copia do valor, logo oq fizer em C 
// nao altera em D e vice-versa.
let c = 3
let d = c
d++


//-----------------------------------------------------------------------------------------
let valor // Variavel nao inicializada.
console.log(valor) // É impresso undefined pois essa variavel nao foi inicializada em momento algum.
// console.log(valor2) // Aqui teriamos um erro pois a variavel valor2 sequer foi declarada.


valor = null // Null significa que sua variavel nao tem nenhum valor dentro dela e nao esta apontando 
// para nenhum endereço de memoria, ou seja, deixa a variavel vazia.
// Diferença entre NULL e UNDEFINED: o Null voce atribui a uma variavel, ja o Undefined é usado pelo proprio
// compilador do javaScript para uma variavel que nunca foi inicializada. A ideia de o usuario atribuir 
// undefined para uma variavel nao é recomendada.
console.log(valor)
// console.log(valor.toString()) // Nessa linha teremos um erro, pois nao podemos acessar metodos de variaveis
// que estao vazias(ou atributos), ou seja, nao possuem endereço de memoria. O erro seria: 
// TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // Nesse caso nao teremos um erro, será escrito apenas Undefined, pois a variavel
// produto foi definida e tem endereço, mas aponta para 'preco' que ainda nao foi definida.
// console.log(produto.preco.a) // Nesse caso teremos o mesmo erro de valor.toString(), estamos tentando
// acessa 'a' atraves de algo que ainda nao foi definido ou é null, que é o caso de preco.
console.log(produto) // Imprime um objeto vazio.
produto.preco = 3.50 // Lembre-se que podemos fazer isso dinamicamente, ou seja, sem precisar ter criado o
// atributo preco inicialmente dentro do objeto.
console.log(produto) // Imprime { preco: 3.5 }

produto.preco = undefined // Evite fazer esse tipo de atribuiçao. Deixe essa atribuiçao para a linguagem.
console.log(!!produto.preco) // O resultado dara falso.
delete produto.preco // Com esse comando tiramos o atributo preco do objeto produto.
console.log(produto) // Ira imprimir um objeto vazio, pois na linha acima demos delete no seu unico atributo.

produto.preco = null // Util em algumas situaçoes, por exemplo, se quisermos dizer que o produto esta sem preco
// porem nao é que seja 0, entao nesse caso o Null é bem vindo como atribuiçao para o atributo.
console.log(!!produto.preco) // Sera impresso false.
console.log(produto) // Imprime { preco: null }
