const aprovados = ['Agatha', 'aldo', 'Daniel', 'Raquel']

// OBS: A FUNCAO CALLBACK QUE NOS PASSAMOS PARA UM FOREACH RECEBE 3 PARAMETROS: O NOME, O INDICE
// E O ARRAY.

aprovados.forEach(function(nome, indice){ // O forEach percorre cada elemento do array e executara a 
    // funcao(callBack) para cada indice. Por padrao a funcao callBack em um array recebe como argumentos
    // o nome, o indice e o proprio array.
    console.log(`${indice + 1} ${nome}`) 
})

aprovados.forEach(nome => console.log(nome)) // Nesse caso usamos a mesma funca da de cima, porem
// estamos interessados apenas nos nomes. OBS: Se quisermos ter acesso apenas ao indice temos que mesmo 
// assim colocar o parametro do nome, pois primeiro é passado o parametro nome, depois o do indice
// e por fim o proprio array.

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // Os mesmos exemplos dos que foram mostrados acima porem aqui a funcao
// é passada para uma variavel antes de ser usada como callBack. O resultado sera o mesmo.

aprovados.forEach(function(nome, indice, array){ // O forEach percorre cada elemento do array e executara a 
    // funcao(callBack) para cada indice. Por padrao a funcao callBack em um array recebe como argumentos
    // o nome, o indice e o proprio array.
    console.log(`${indice + 1} ${nome}`)
    console.log(array) // Note que o proprio array pode ser usado a cada interaçao.
})


aprovados.forEach(function(nome, indice, array, x){ // O forEach percorre cada elemento do array e executara a 
    // funcao(callBack) para cada indice. Por padrao a funcao callBack em um array recebe como argumentos
    // o nome, o indice e o proprio array.
    console.log(`${indice + 1} ${nome}`)
    console.log(array) // Note que o proprio array pode ser usado a cada interaçao.
    console.log(x) // Observer que é impresso undefined, pois sao passado somente 3 valores na chamada
    // do forEach para uma funcao callBack.
})