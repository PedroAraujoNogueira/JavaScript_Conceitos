const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.value(this)},
    enumerable: false
})

console.log(quaseArray[0]) // No JS temos a opcao de acessarmos os atributos entre colchetes, e nesse caso
// isso simula como se estivessemos chamando um indice de um array porem estamos chamando um atributo
// de um objeto. 

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)


