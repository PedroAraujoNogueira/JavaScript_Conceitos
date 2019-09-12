const [a] = [10] // Cria uma variavel const a que recebe 10, ou seja, substitui a sintaxe const a = 10.
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Inicializa varias variavel ao mesmo tempo, a const n1 = 10
// const n3 = 7, const n5 = undefined(pois so tem 4 valores no array de atribuicao) e const n6 = 0, pois recebe
// um valor padrao 0 caso nao lhe seja atribuido nenhum valor.
console.log(n1, n3, n5, n6)

const [,[, nota]] = [ [, 8, 18], [9, 6, 8] ] // Temos um array de fora que é composto por 2 arrays, o valor atribuido
// para const nota é 6, pois é o segundo elemento do segundo array. 
console.log(nota)


// OBS: o destructuring quando esta desestruturando de um array usa [ ] e quanto esta desestruturando de um objeto
// usa { }