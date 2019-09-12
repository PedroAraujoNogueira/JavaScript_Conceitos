// Um objeto é uma coleçao dinamica de pares chave/valor.

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' // Essa forma de criaçao permitinos criar atributos com espaços, porem
// para acessa-los temos que usar essa mesma sintaxe.
produto.preco = 220

console.log(produto)
delete produto.preco // Comando para excluir um atributo de um objeto.
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: { // Podemos ter objetos dentro de outros objetos.
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // Podemos criar arrays de objetos dentro de um outro objeto.
        nome: 'Junior',
        idade:19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //.......
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // Util para acessarmos atributos que porventura ainda
// nao sabemos o nome. Nesse caso seria passado a variavel com a string que contem o nome.
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco // Ao executarmos esse comando, entao tudo que esta dentro de 
// endereço sera apagado tambem.
delete carro.calcularValorSeguro // Tambem podemos deletar funcoes.
console.log(carro)
console.log(carro.condutores) // Nao gera erro, pois carro existe, porem como condutores nao existe entao será 
// impresso undefined.
// console.log(carro.condutores.length) // Gera erro, pois estamos tentando acessar algo de um atributo que nao existe
// (algo undefined ou null).


