// Tanto numeros com casas decimais como numeros inteiros fazem parte do tipo NUMBER.
const peso1 = 1.0
console.log(typeof peso1)
const peso2 = Number('2.0') // Outra forma de criar um NUMBER
const n3 = 2.1

console.log(typeof peso2)
console.log(peso1, peso2)
console.log(Number.isInteger(peso2)) // metodo para saber se um numero é inteiro ou nao. Observe que embora
// dentro da variavel n2 tenha um numero de ponto flutuante, ele é considerado um inteiro pois 
// a casa decimal é 0(diferente do que seria em linguagens fortemente tipadas).
console.log(Number.isInteger(n3)) // Da false, pois n3 tem numeros decimais diferentes de 0.

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)
console.log(media.toFixed(2)) // A funcao toFixed() serve para dizer quantas casas decimais vou querer 
// imprimir. Esse metodo nao meche no valor de media(ate mesmo porque media é uma constante). Ele
// apenas mostra o numero com a quantidade de casas decimais desejada.
console.log(media.toString()) // A funcao toString() transforma  NUMBER em uma String. 
console.log(media.toString(2)) // Converte o valor ponto flutuante(media) em um valor BINARIO.
console.log(typeof media)
console.log(typeof Number)
// OBS: o TIPO number é uma coisa e a FUNCAO Number é outra. Ou seja, Number com N maiusculo é uma
// funcao e number com n minusculo é o tipo do dado.
// Os tipos dos dados tem funções associados a eles, conforme o tipo.