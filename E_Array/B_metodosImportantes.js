const jogadores = ['Jordan', 'Wade', 'Iverson', 'Derick']
delete jogadores[3] // A posicao 4 do array ainda existe porem esta vazia.
console.log(jogadores)
jogadores.pop() // Esse metodo remove o ultimo elemento do array.
console.log(jogadores) // Observe que ele remove o vazio da lista.

jogadores.push('Russel') // Adiciona um novo elemento na ultima posicao do array.
console.log(jogadores)

delete jogadores[0] // A posicao 0 do array ainda existe porem esta vazia.
console.log(jogadores)
jogadores.shift() // Esse metodo remove o primeiro elemento do array.
console.log(jogadores) // Observe que ele remove o vazio da lista.

jogadores.unshift('Paul') // Adiciona um elemento na primeira posicao do array.
console.log(jogadores)

// splice pode tanto adicionar como remoer elementos de um array.

// Adicionar 
jogadores.splice(2, 0, 'Shaquille', 'Kobe') // A partir do indice 2 nao remove nenhum elemento e
// adiciona dois elementos a partir do indice 2
console.log() 

// Remover
jogadores.splice(3, 1) // A partir do indice 3 remove um elemento e nao adiciona nenhum elemento.
console.log(jogadores)

// OBS: o metodo slice que veremos a seguir retorna um novo array, ou seja, nao modifica o array original.

const algunsJogadores1 = jogadores.slice(2) // A variavel algunsJogadores1 ira receber uma fatia(slice)
// do array jogadores, comecando a partir do indice 2(incluindo o 2) ate o final do array.
console.log(algunsJogadores1)

const algunsJogadores2 = jogadores.slice(1, 4) // A variavel algunsJogadores2 ira receber uma 
// fatia(slice) do array jogadores, comecando a partir do indice 1(incluindo o 1) ate o indice 4 do array
// porem sem incluir o indice 4.
console.log(algunsJogadores2)