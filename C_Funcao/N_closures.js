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

/* Closures são um dos recursos mais poderosos de JavaScript. JavaScript permite o aninhamento de funções e garante acesso completo à função interna a todas as variáveis e funções definidas dentro da função externa (e todas as outras variáveis e funções que a função externa tem acesso). No entanto, a função externa não tem acesso às variáveis e funções definidas dentro da função interna. Isto proporciona uma espécie de segurança para as variáveis da função interna. */

// Exemplo da documentação. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es
// var pet = function(nome) {          // A função externa define uma variável "nome"
//       var getNome = function() {
//         return nome;                // A função interna tem acesso à variável "nome"  da função externa
//       }

//       return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
//     },
//     myPet = pet("Vivie");
    
// myPet();                            // Retorna "Vivie"