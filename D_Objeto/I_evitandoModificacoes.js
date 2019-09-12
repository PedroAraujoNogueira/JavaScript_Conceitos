// Object.preventExtensions(): nao vai permitir que seu objeto seja extendido, ou seja, nao sera possivel aumentar o 
// numero de atributos desse objeto. Voce podera ate excluir atributos, porem nao podera adicionar atributos.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Essa funcao testa se um objeto é extensivel, no nosso caso
// produto nao é extensivel, logo sera impresso false. 

produto.nome = 'Borracha' // Essa modificação sera feita, pois nao podemos acrescentar atributos porem podemos modificar
// os valores dos atributos ja existentes.
produto.descricao = 'Borracha escolar branca' // Nao tera efeito, pois nao podemos adicionar atributos.
delete produto.tag // Sera deletada o atributo tag do objeto, pois deletar é possivel.
produto.tag = 'pro' // Observe que nao conseguimos criar o mesmo atributo de novo.
console.log(produto) // Sera impresso { nome: 'Borracha', preco: 1.99 }.

// Object.seal(): Nao permite que sejam adicionados novos atributos, nao permite excluir atributos, porem permite 
// modificar os valores dos atributos ja existentes.
const pessoa = {nome: 'Juliana', idade: 35}
pessoa.profissao = 'Programador' // Antes de Object.seal ainda é possivel adicionar atributos.
Object.seal(pessoa) // Selando o objeto pessoa.
console.log('Selado:', Object.isSealed(pessoa)) // Object.isSealed() verificar se o objeto esta selado ou nao, no nosso 
// caso sera retornado true pois o objeto ja foi selado.

pessoa.sobrenome = 'Silva' // Nao tera efeito, pois nao podemos adicionar atributos ja que esta seal.
delete pessoa.nome // Nao tera efeito, pois nao podemos deletar atributos ja que esta seal.
pessoa.idade = 29 // Ira modificar o atributo idade para 29, pois quando selamos o objeto ainda é possivel modificar os
// valores dos atributos ja existentes.
console.log(pessoa)


// Object.freeze(): seal + valores constantes. Ou seja, é completamente constante, nao conseguimos adicionar atributos,
// nem deletar atributos nem modificar os valores dos atributos ja existentes.







