// Closure é o escopo criado quando uma funcao é declarada.
// Esse escopo permite a funcao acessar e manipular variaveis externas à funcao.

// Contexto Léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Retornara Local, pois a funcao tem ciencia do escopo/contexto onde ela foi criada.
const minhaFuncao2 = fora
console.log(minhaFuncao2()()) // Retornara Local, pois a funcao tem ciencia do escopo/contexto onde ela foi criada.