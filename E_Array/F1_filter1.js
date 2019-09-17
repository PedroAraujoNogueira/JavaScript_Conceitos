// A funcao filter serve para filtrar um array baseando esse filtro em uma determinada condicao.
// A funcao filter cria um novo array baseado em uma condicao. O array original nao é alterado.

// Na funcao filter podemos passar uma funcao que aplique algum tipo de logica, se a logica retornada
// for true entao o novo array recebera o elemento daquela posicao e se der false o novo array nao 
// recebera o elemento.

// Normalmente o filter gera um array menor que o array original, podendo ser ate do mesmo tamanho porem 
// nunca sera maior.

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
        return false // Nesse caso sera impresso um array vazio.
}))

console.log(produtos.filter(function(p){
    return true // Nesse caso sera impresso um array com todos os produtos do array original.
}))

console.log(produtos.filter(function(p){
    return p.preco >= 2500 // Nesse caso sera impresso um array com todos os produtos que tenham valor
    // maior que 2500.
}))

// Desafio: filtrar o array por produtos frageis e caros(maior ou igual que 500).

// 1º passo: fazer uma funcao que retorne true caso os produtos sejam frageis ou false caso nao sejam.
const produtosFrageis = produtos => produtos.fragil

// 2ª passo: fazer uma funcao que retorne true caso os produtos sejam caros ou false caso nao sejam.
const produtosCaros = produtos => produtos.preco >= 500

const resultado = produtos.filter(produtosFrageis).filter(produtosCaros) 
console.log(resultado) // É impresso um array com os produtos frageis e caros.
console.log(produtos) // Observe que o array inicial nao foi alterado
