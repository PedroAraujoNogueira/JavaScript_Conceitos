// O reduce é uma funcao que serve para voce transformar um array em um unico elemento(numero, string, etc..) ou outro array, onde essa transformacao se dara por 
// meio de um parametro que sera acumulado de chamada em chamada(o resultado de uma funcao reduce é passado para a proxima iteraçao). O reduce recebe os dois primeiros
// indices do array, faz a açao, depois pega o resultado e o proximo indice e faz a açao novamente, assim sucessivamente.
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota)) // Esta transformando aluno em uma nota(Nada de novo do que ja vimos por enquanto)
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { // Sempre o primeiro parametro da funcao é o elemento acumulado ate o momento e o segundo é o 
    // indice atual.
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // Esse segundo parametro da funcao reduce vai ser o primeiro elemento usado na iteracao da funcao passada como primeiro parametro.

console.log(resultado)

// const resultado = alunos.map(a => a.nota).reduce((acumulador, atual)  => { // Outra forma de chamar a funca reduce.
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 0)

// console.log(resultado)