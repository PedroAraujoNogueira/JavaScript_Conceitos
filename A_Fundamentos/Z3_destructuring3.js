function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40})) // Poderiamos passar diretamente o objeto e o destructuring se
// encarregaria do resto.

const obj = {max: 50, min: 40} 
console.log(rand(obj)) // Poderia ser passado tambem a variavel que armazena o objeto.

console.log(rand({min: 955})) // Se passarmos so um dos argumentos no objeto o outro sera atribuido com o valor padrao.

console.log(rand({})) // Se um objeto vazio entao serao atribuido os valores padroes.

console.log(rand()) // Da um erro, pq o JS tentara acessar o min e o max de um objeto que nao existe.