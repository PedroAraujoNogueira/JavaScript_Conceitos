const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro' // É possivel mudarmos os atributos de um objeto criado como const.
console.log(pessoa)

// pessoa = {nome: 'Ana'} // Essa linha gera erro, pois estamos tentando atribuir um novo objeto para a variavel const.

Object.freeze(pessoa) // Esse metodo congela o objeto pessoa, ou seja, nem mesmo os atributos dentro do 
// objeto podem sem modificados.
// Obs: Se o medodo Object.freese() foi declarado na linha 7 entao somente depois da linha 7 que o objeto será congelado.
// Ou seja, apos Object.freese() nao é possivel adicionar, modificar nem deletar qualquer coisa do objeto.
pessoa.nome = 'Maria' // Nao sera modificado, pessoa.nome continuara sendo Pedro.
console.log(pessoa.nome) // Note que pessoa.nome continua como Pedro.
delete pessoa.nome // Nao faz efeito pois o objeto esta congelado.
pessoa.end = 'Rua ABC' // Nao faz efeito pois o objeto esta congelado.
console.log(pessoa.nome) 
console.log(pessoa)


const pessoaConstante = Object.freeze({ nome: 'Joao'}) // Aqui nos ja criamos o objeto sendo constante.
console.log(pessoaConstante)
