// OBS: O forEach nao gera um novo array como podemos ver simulando um metodo forEach a seguir.

Array.prototype.forEach2 = function(callBack){
    for(let i = 0; i < this.length; i++){ // Acessamos a instancia de um array atraves da variavel this.
        callBack(this[i] /* = '1'*/, i, this) 
    }
}

const aprovados = ['Agatha', 'aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ // O forEach percorre cada elemento do array e executara a 
    // funcao(callBack) para cada indice. Por padrao a funcao callBack em um array recebe como argumentos
    // o nome, o indice e o proprio array.
    console.log(`${indice + 1} ${nome /* = '1'*/}`) // Observe que o array original nao seria mudado mesmo 
    // descomentando essa atribuição. 
})
console.log(aprovados)