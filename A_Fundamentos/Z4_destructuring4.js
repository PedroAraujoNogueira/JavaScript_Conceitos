function rand([min = 0, max = 1000]){
    if(min > max){
        [min, max] = [max, min] // Nessa linha temos do lado esquerdo o uso do destructuring e do lado direito um array
        // criado pelas variaveis min e max.
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // A funcao floor arredonda o numero para baixo deixando ele sem casas decimais.
}

console.log(rand([50, 40])) // Nesse caso o valor 50 é atribuido a variavel min e o valor 40 a variavel max, ou seja,
// entra no caso do if da funcao, e o if inverte, colocando o maior valor em max e o menor em min.
// Isto ocorre pq diferentemente de um objeto no array nao temos nomes para identificar as posicoes dos arrays, sendo
// assim a variavel min vai receber a primeira posiçao do array que foi passado e max recebera a segunda 
// posiçao do array que foi passado.
console.log(rand([992])) // Sera atribuido para a variavel min o valor de 992 e para a variavel max seu valor padrao.
console.log(rand([, 10])) // Nessa declaracao estamos passado o valor 10 para max e o min recebera seu valor padrao.
console.log(rand([])) // Podemos passar tambem um array vazio oq significa que min e max receberao seus valores padroes.
// console.log(rand()) // Se nao passarmos nada teremos problema, pois estaremos tentando desestruturar elementos de algo
// que é undefined.



