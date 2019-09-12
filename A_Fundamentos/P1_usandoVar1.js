// Os principios principais aplicados ao let tambem sao aplicados as constantes.
{
    {
        {
            {
                { 
                    var sera = 'sera??'
                    console.log(sera)
                }
            }
        }
    }
}

console.log(sera) // Em muitas linguagens a variavel sera so estaria visivel dentro do proprio escopo, porem no
// JavaScript a variavel var continua visivel fora do bloco em que foi declarada, exceto se a variavel var for 
// declarada dentro de uma funcao, entao ela so sera visivel dentro da propria funcao.

function teste() {
    var local = 123
    console.log(local)
}  

teste()
// console.log(local) // Quando definimos uma variavel dentro de uma funcao, aquela variavel so esta visivel dentro do
// corpo da funcao, logo essa linda dara erro.

// -------------------------------------------------------
// Window é o objeto global dentro do browser que contem tudo que for declarado fora de uma funcao.
// Quando criamos uma variavel fora de uma funcao, essa variavel é global, ou seja, ela estara disponivel em qualquer
// escopo do seu codigo.
// Se tratando de var, so temos dois escopos possiveis, ou ela é nivel global e estara disponivel na sua aplicacao
// inteira(No browser) ou ela é no escopo da funcao e estara disponivel somente para a funcao. 
// Devemos evitar variaveis globais.