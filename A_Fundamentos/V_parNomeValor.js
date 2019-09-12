// par Nome/Valor

const saudacoes  = 'Opa' // Contexto léxico 1. 

function exec(){
    const saudacoes = 'Falaaa'  // contexto léxico 2.
    return saudacoes
}

// Objetos sao pares aninhados de nome/valor(ou chave/valor).
const cliente = {
    nome: 'Pedro',
    idade: '22',
    peso: '90',
    endereco: { // Podemos ter objetos dentro de outros objetos, inclusive o objeto endereco pode ter atributos com 
        // os mesmo nomes do objeto cliente, pois estao em contextos diferentes.
        logradouro: 'Rua Manoel Firmino Sampaio',
        numero: 50
    }
}

console.log(saudacoes)
console.log(exec())
console.log(cliente)