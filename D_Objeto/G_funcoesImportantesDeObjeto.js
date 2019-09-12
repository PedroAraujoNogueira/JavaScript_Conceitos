const pessoa = {
    nome: 'Rebeca', 
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // A funcao keys, vai pegar todas as "chaves" do objeto pessoa,
// ou seja, o nome dos atributos. Sera impresso [ 'nome', 'idade', 'peso' ], note que estao em um array.

console.log(Object.values(pessoa)) // A funcao values, vai pegar todos os valores do objeto pessoa,
// ou seja, o valor de cada atributo. Sera impresso [ 'Rebeca', 2, 13 ], note que estao em um array.
  
console.log(Object.entries(pessoa)) // A funcao entries, vai pegar todos as chaves e valores do objeto pessoa, ou seja, 
// o nome de cada atributo e o valor de cada atributo. Sera impresso 
// [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ], note que estao em um array onde cada posição do array é um
// outro array.

Object.entries(pessoa).forEach(element => { // A partir do forEach vou percorrer os elementos do array originado por 
    // Object.entries.
    console.log(`${element[0]}: ${element[1]}`)  
})

// Fazendo o exemplo acima usando o operador destructuring.

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)  
})


// Podemos usar quando queremos definir propriedades de um tributo do objeto logo na criacao desse atributo.
Object.defineProperty(pessoa, 'dataNascimento', { // Primeiro definimos o objeto que sera incluso o atributo/propriedade,
    // depois é colocado o nome do atributo entres aspas, e por ultimo dar valor as propriedades daquele atributo.
    enumerable: true, // Aqui definimos se o atributo podera ser listado em funcoes como a de Object.keys por exemplo.
    writable: false, // Aqui definimos se a variavel podera ou nao ser modificada.
    value: '02/02/1997' // Aqui definimos o valor do atributo.
})

pessoa.dataNascimento = '28/03/1996' // Note que embora seja possivel tentar atribuir um outro valor para o atributo, 
// nesse caso o atributo nao sera modificado por a propriedade writable esta como falso.
console.log(pessoa.dataNascimento) 
console.log(Object.keys(pessoa))

// Object.assign: funcao adicionada a partir do ECMASCRIPT 2015.
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // A funcao assign concatena/adiciona no primeiro objeto os atributos dos 
// outros 2 objetos. Note que o a vai ser sobreescrito ficando igua a 4.

Object.freeze(obj)
obj.c = 1234
console.log(obj)

