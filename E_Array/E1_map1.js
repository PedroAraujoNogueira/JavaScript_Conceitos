/* 
 *Associado ao map existe dentro dele um laço(iteração) que vai ter o tamanho do array. O map serve para
 *para fazer uma transformacao no array, a ideia é mapear o array para um outro array que tera o mesmo 
 *tamanho do array original porem com os dados transformados de acordo com oq especificarmos na funcao
 *callBack. OBS: o array original nao é modificado e o array resultante deve ter o mesmo tamanho do 
 *array original.
*/

const nums = [1, 2, 3, 4, 5]

/* 
 *OBS: enquanto o ForEach nao gera um novo array nem modifica o array original, o map tem o proposito
 *de gerar um novo array com o mesmo tamanho do array original porem sem modificar o array original.
*/


let resultado = nums.map(function(e){ // A variavel let vai receber um array modificado a partir do 
    // array nums.
    return e * 2
})
console.log(resultado, nums) // Aqui podemos observar que o array nums nao foi alterado.

// OBS: dentro da funcao que vamos passar para o map essa funcao deve retorna algo(deve ter return),
// pois caso ela nao retorne nada o novo array gerado tera undefined em todas suas posicoes.
let resultado1 = nums.map(function(e){ // A variavel let vai receber um array modificado a partir do 
    // array nums.
    e * 2
})
console.log(resultado1, nums)

const soma10 = e => e + 10 // Lembrando que a funcao arrow ja tem um retorno implicito.
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
// A funcao parseFloat transforma o numero em ponto flutuante.
// A funcao toFixed diz quantas casas decimas a funcao deve ter.
// A funcao replace troca o caractere informado primeiro por o caractere informado depois.

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Podemos chamar o map varias vezes pois o 
// resultado de cada map é outro array, entao pode ser usado de novo na funcao map.
console.log(resultado) 

