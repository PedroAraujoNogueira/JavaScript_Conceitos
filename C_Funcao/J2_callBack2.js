const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Criar um novo array com as notas menores que 7 sem usar callBack.
const notasBaixas1  = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Criar um novo array com as notas menores que 7 usando callBack.
/* É um metodo que vai percorrer os elementos de um array e filtrar esses elementos baseado em determinado
* criterio, que vai ser uma funcao callBack que vai retornar true ou false, essa funcao sera chamada para cada 
* elemento do array. Se a funcao retornar true quer dizer que aquele elemento deve ser adicionado no array que esta
* sendo gerado, porem se a funcao retornar false entao aquele elemento nao sera adicionado no array.
* OBS: A funcao filter nao altera o array original, ou seja, nao altera o array notas. */

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
}) 
console.log(notasBaixas2)

const notasBaixas3 = notas.filtrer(nota => nota < 7)
console.log(notasBaixas3)

// const notasMenorQue7 = nota => nota < 7
// const notasBaixas4 = notas.filtrer(notasMenorQue7) // Outra forma de chamar usando a arrow function.
// console.log(notasBaixas3)


