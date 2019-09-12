// Em javaScript o array é heterogênio(ou seja, dentro de um espaco do array podemos colocar qualquer coisa
// podendo haver uma mistura de tipos dentro do array, porem isso nao é recomendado) e o array cresce e 
// diminui de maneira flexivel, ou seja, nao tem tamanho fixo, é dinâmico. 

const valores = [7.7, 8.9, 6.3, 9.2] // A inicializacao de uma variavel CONST deve ser feita na propria 
// declaracao da variavel.

// valores = [0, 3] // Essa atribuicao nao é permitida pois o array é CONST, logo ja foi iniciado. O que pode
// ainda ser feito é a atribuicao de espacos individuais dentro desse array.

console.log(valores[0], valores[3])
console.log(valores[4]) // O resultado sera undefined, pois essa posicao do array ainda nao tem nenhum valor. 

valores[4] = 10 // É permitida a atribuicao de espacos individuais no array apos sua criacao, 
// mesmo a variavel sendo CONST.
console.log(valores) // O resultado impresso será [ 7.7, 8.9, 6.3, 9.2, 10 ]

valores[10] = 17
console.log(valores) // O resultado impresso será [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 17 ]. Observe
// que no resultado mostra que tem 5 itens vazios dentro desse array.
console.log(valores.length) // Retorna o tamanho do array.

valores.push({id: 3}, false, null, 'teste') // funcao do array para adicionar novos elementos no array.
// Observe acima que no javaScript o array aceita varios tipos de valores, no caso temos um objeto, 
// um boolean, null e string respectivamente. A adicao é feita apos o ultimo elemento presente no array.
console.log(valores)

console.log(valores.pop()) // Retornar o ultimo elemento de um array e tira o ultimo valor do array. 
delete valores[0] // Usada para retirar do array o elemento presente no indice especificado.
console.log(valores)

console.log(typeof valores) // Array é do tipo object.






