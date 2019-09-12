// É possivel passar funcoes como parametros, retornar funcoes dentro de uma funcao, armazenar funcoes dentro de uma 
// variavel e criar funcoes de forma literal que é a forma padrao.


// Funcao em JavaScript é First-Class Object (Citizens) ou High-order function(funcao de alta ordem). Isso significa
// que podemos tratar a funcao como sendo um dado.

// Criar de forma literal.
// Tota funcao JS retorna alguma coisa, se nao for pedido pra retornar nada ela retorna undefined.
function f1(){ }

// Armazenar funcao em uma variavel.
const f2 = function (){ }

// Armazenar funcao em um array.
const arrayDeFuncao = [function f3(a,b){return a + b}, f1, f2] // Podemos colocar uma funcao em um array de forma direta,
// colocando o nome de uma funcao ja criada, ou passando uma const que recebe uma funcao.
console.log(arrayDeFuncao[0](2, 3))

// Armazenar funcao em um atributo de um objeto.
const obj = {}
obj.falar = function (){ return 'Opa.'}
console.log(obj.falar())

// Passar uma funcao como parametro de outra funcao.
function run(fun){
    fun() // Se o parametro fun passado nao for uma funcao entao dara erro, pois para chamarmos fun() é necessario que
    // fun seja uma funcao.
}

run (function (){ console.log('Executando....')}) // Podemos passar no parametro de run uma funcao que ja existe
// ou criar uma funcao diretamente na passagem. 

// Uma funcao pode retornar/conter uma funcao.
function somar(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

somar(10, 10)(5) // Podemos chamar a funcao acima dessa forma,

const vinteMais = somar (10, 10) // ou dessa forma.
vinteMais(5)





