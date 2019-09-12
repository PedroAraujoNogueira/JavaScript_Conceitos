const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice){ // Essa assinatura de funcao pode ser passada para uma funcao forEach.
    console.log(`${indice+1}. ${nome} `)
}

// A ideia do callBack é voce passar uma funcao para outra funcao e quando determinado 
// evento acontecer essa funcao que vocce passou vai ser chamada de volta. A funcao callBack pode ser chamada varias 
// vezes ou apenas uma unica vez.
fabricantes.forEach(imprimir) // Dentro de qualquer array temos a funcao forEach. Para cada elemento do array
// o forEach vai chamar a funcao imprimir. O forEach passa como parametro para a funcao que ele esta percorrendo
// o nome em primeiro lugar e depois o indice daquele nome dentro do array.

fabricantes.forEach(function(fabricante) { // Será impresso Mercedes, Audi e BMW.
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // Será impresso Mercedes, Audi e BMW.




