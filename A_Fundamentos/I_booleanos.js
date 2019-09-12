let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1 // No javaScript podemos usar o valor 1 para representar um valor booleano.
console.log(!!isAtivo) // Se colocarmos apenas isAtivo para imprimir, entao sera empresso o valor 1, porem para
// transformamos um valor numerico em um booleano podemos usar o ponto de exclamação. Quando colocamos um 
// ponto de exclamaçao o numero 1 passa a ser tratado como um booleano e tipos inteiros quando "convertidos"
// para booleanos se tornam verdadeiros(exceto o 0). Porem o ponto de exclamaçao significa negaçao e a 
// negaçao de verdadeiro é falso. Se colocarmos dois pontos de exclamaçao ai voltamos a ter um verdadeiro.

console.log("Os verdadeiros...") 
// Todos os numeros(inteiros ou nao), com exceçao do 0, sao verdadeiros em situacoes em que 
// exijam que aquele numero seja representado como um booleano.
console.log(!!3.1)
console.log(!! -1)
console.log(!!' ') // Uma string com um espaço dentro é tratada como verdadeiro.
console.log(!! 'texto') // Uma string preenchida é tratada como verdadeiro.
console.log(!! []) // Um array mesmo que vazio é tratado como verdadeiro.
console.log(!! {}) // um objeto literal é tratado como verdadeiro.
console.log(!!Infinity) // Infinity tambem se comporta como verdadeiro.
console.log(!!(isAtivo = 33)) // Se o valor atribuido for verdadeiro entao é empresso true.

console.log('Os falsos...')
console.log(!! 0) // O 0 é o unico numero que é convertido para falso.
console.log(!! '') // Uma string varia é tratada como falso.
console.log(!!null) // O null é tratado como falso.
console.log(!!NaN) // Not a Number(NaN) é tratado como falso.
console.log(!! undefined) // É tratado como falso.
console.log(!!(isAtivo = null)) // Se o valor atribuido for falso entao é empresso false.

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // O resultado dessa operaçao é true, pois basta apenas um deles
// ser convertido para verdadeiro que toda a expressao fica verdadeira.
console.log(('' || null || 0 || 'EPA' || 123)) // Sem os pontos de exclamaçao essa expressao retorna 
// o primeiro valor verdadeiro.

// Exemplo prático do uso do ||. Dar um valor padrao para uma variavel em uma dada situaçao.
let nome = ''
console.log(nome || 'Nome não informado!') // Caso a variavel nome seja convertida para falso entao 
// o valor impresso sera 'Nome não informado!' pq é o primeiro convertido para verdadeiro. Porem se 
// a variavel nome for convertido para verdadeiro entao sera impresso oq estiver contido dentro de nome.
// Ou seja, nesse caso, caso seja colocado uma string sem nada na variavel nome o resultado empresso será
// 'Nome não informado!' e caso seja colocado outra string entao empresso a string colocada em nome.

let exemplo = 0
console.log(exemplo ? exemplo : 'Nome não informado!!')
// Observe que nome || 'Nome não informado!' é equivalente a exemplo ? exemplo : 'Nome não informado!!'.

let exemplo2 = 0
console.log(exemplo && 'Nome não informado!!')
console.log(!exemplo2 ? exemplo2 : 'Nome não informado!!')
// Observe que exemplo && 'Nome não informado!!' é equivalente a !exemplo2 ? exemplo2 : 'Nome não informado!!'.






