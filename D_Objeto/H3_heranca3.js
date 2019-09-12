const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // Nessa linha é criado um objeto novo tendo como prototipo o objeto pai ao invez de
// apontar para Object.prototype.
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true} // Dessa vez tambem é criado um objeto novo tendo como 
    // prototipo o objeto pai, porem o segundo argumento passado na funcao create é um objeto contendo os atributos 
    // que a const filha2 terá.
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // So sao listados os atributos do proprio objeto.
console.log(Object.keys(filha2)) // So sao listados os atributos do proprio objeto.

for( let key in filha2){ // No for in por padrao serao listados todos os atributos, tanto os do objeto como o de seu 
    // pai/ ancesstral.
    console.log(key)
}

// Uma forma de filtrar so os atributos do objeto usando o for in é usando a funcao hasOwnProperty.
for (let key in filha2){ 
    filha2.hasOwnProperty(key) ? // Essa funcao permite saber se um determinado atributo realmente pertence aquele 
    // objeto. Se o atributo realmente for do Objeto filha2 entao a funcao retornara true, caso contrarrio 
    // retornara false.
        console.log(key) : console.log(`Por herança: ${key}`)
}

