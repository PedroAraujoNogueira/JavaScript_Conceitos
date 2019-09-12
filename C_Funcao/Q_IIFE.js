// IIFE = Immediately Invoked Function Expression.
// Uma funcao auto-invocada é uma funcao que voce declara ela(pode ser sem nome) e que na hora da declaracao voce ja 
// chama ela, ou seja, ja invoca ela.
// Uma das funcoes de uma funcao auto-invocada é, principalmente quando estamos usando o browser, fugir do escopo global.
// Quando criamos uma funcao auto-invocada aquele trecho de codigo que é lido dentro da funcao auto-invocada ja é 
// chamado/executado, so que tudo que criarmos dentro da funcao sera escopo local daquela funcao.

(function() {
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
// É um padrao mto usado para que possamos fugir do escopo global, pois tudo que for declarado dentro da funcao 
// auto-invocada sera de escopo local.