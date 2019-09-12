// Novo recurso do JavaScript2015
// Desestruturacao é tirar algo de dentro de um objeto ou array.

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa  // Com essa notacao substituimos as sentenças: const nome = pessoa.nome e 
// const idade = pessoa.idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Com essa notacao substituimos as sentenças: const n = pessoa.nome e 
// const i = pessoa.idade
console.log(n, i)

const { sobreNome, bemHumorada = true} = pessoa // Se tentarmos "tirar" do objeto um atributo que nao existe no
// objeto, entao o resultado retornado sera undefined, ou, podemos colocar um valor padrao para caso nao tenha
// aquele atributo no objeto.
console.log(sobreNome, bemHumorada)

const { endereco } = pessoa // Cria uma const que recebe o objeto endereco.
const { endereco: { logradouro: l, numero: a, cep: c } } = pessoa // Cria const l que recebe 
// pessoa.endereco.logradouro, const a que recebe pessoa.endereco.numero e const c sera undefined pois nao existe
// atributo cep no objeto endereco.
console.log(l, a, c)
console.log(pessoa.endereco.logradouro)

// const { conta: {agencia, numero } } = pessoa // Gera erro pois pessoa nao tem conta, logo nao podemos tentar 
// atributos de um objeto que nao existe.

console.log(pessoa)

