// O array em JS na verdade é um Objeto, um objeto com caracteristicas e jeito diferente, porem continua sendo um objeto.
// Dentro de um mesmo array é possivel colocar varios tipo de dados, porem nao é uma pratica aconselhavel.

console.log(typeof Array) // Imprime function.
console.log(typeof new Array) // imprime Objeto.
console.log(typeof []) // imprime OBJETO.

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Uma forma pouco usual de se criar um array. Nesse caso sera passado
// para a Aprovados um array com 3 posicoes contendo respectivamente os nome Bia, Carlos e Ana.

aprovados = ['Bia', 'Carlos', 'Ana'] // Notacao literal para se atribuir um array para uma 'Variavel.'