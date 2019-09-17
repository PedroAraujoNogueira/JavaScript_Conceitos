// Podemos passar tambem outro argumento na funcao filter que sera o valor a ser usado como this
// durante a execução do callBack.
Array.prototype.filter2 = function(callBack){0
    const novoArray = []
    for(let i = 0; i < this.length; i ++){
        if(callBack(this[i], i, this)){
            novoArray.push(this[i])
        }
        // callBack(this[i], i, this) ? novoArray.push(this[i]) : false
    }
    return novoArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]

const produtosFrageis = produtos => produtos.fragil
const produtosCaros = produtos => produtos.preco >= 500

const resultado = produtos.filter2(produtosFrageis).filter2(produtosCaros) 
console.log(resultado) // É impresso um array com os produtos frageis e caros.
