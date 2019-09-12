// A diferença entre .call e .aplly esta na forma como passamos os parametros na chamada da funcao.

function getPreco(imposto = 0, moeda = 'RS'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // Irá ser associado a essa variavel a funaco getPreco definida acima.
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // Nesse contexto o this se refere a variavel global.
console.log(produto.getPreco()) // O this nesse caso sera o objeto produto.

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // Passa o contexto que quer ser usado como primeiro argumento na chamada 
// da funcao.
console.log(getPreco.apply(carro)) // Passa o contexto que quer ser usado como primeiro argumento na chamada 
// da funcao.

// A diferença entre .call e .aplly esta na forma como passamos os parametros na chamada da funcao.

console.log(getPreco.call(carro, 0.17, '$')) // No call os parametros sao passados individualmente.
console.log(getPreco.apply(carro, [0.17, '$'])) // No aplly os parametros sao passados em um array.

