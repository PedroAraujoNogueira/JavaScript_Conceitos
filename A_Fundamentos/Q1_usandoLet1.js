var numero = 1
{
    let numero = 2 // let tem escopo de bloco, ou seja, a variavel definida usando let so é visivel dentro daquele 
    // bloco e de blocos dentro dele. Note que var numero e let numero tem o mesmo nome, porem a variavel local tem
    // preferencia sobre a variavel global.
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

//----------------------------------------------------------------------

let numero = 1
{
    let numero = 2 // Observe que podemos criar outro let numero pois estao em escopos diferentes.
    console.log('Dentro = ', numero) // Note que é impresso 2, pois a variavel menos abrangente tem prioridade. Caso
    // nao houvesse nenhuma variavel let numero dentro do escopo entao ele usaria a let numero mais externa.
}
console.log('Fora = ', numero)

// Variaveis definidas com a palavra reservada var tem apenas escopo Global e escolo de Funcao.
// Variaveis definidas com a palavra reservada let tem escopo Global, escopo de funcao e escopo Local(De Bloco).