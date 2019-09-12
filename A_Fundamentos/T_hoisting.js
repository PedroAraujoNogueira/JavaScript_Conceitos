// Hoisting significa içamento, o proprio compilador da linguagem joga a declaracao da variavel que foi declarada com
// var para cima de onde a variavel é usada.
// Hoisting é o comportamento padrao do javaScript que move a declaraçao da variavel para o topo.

console.log('a =', a)
var a = 2
console.log('a =', a)
// O resultado sera:
// undefined
// 2

// --------------------------------------------------------------
// Na pratica é como se o compilador tivesse feito isso:
var a
console.log('a =', a)
a = 2
console.log('a =', a)

// Se colocarmos esse exemplo dentro de uma funcao o resultado seria o mesmo.

function teste(){     
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
    // Por baixo dos panos o javaScript trata da seguinte forma:
    // var a
    // console.log('a =', a)
    // a = 2
    // console.log('a =', a)
}
teste()
console.log('a =', a) // Se considerarmos so o codigo da funcao para baixo entao essa linha causaria erro, pois
// var a so esta visivel dentro da funcao, lembrando que 'a' fica limitada ao escopo da funcao.

// --------------------------------------------------------------------
// O efeito de hoisting(içamento) nao ocorre com a palavra reservada let.

// console.log('B = ', b) // teriamos um erro nessa lingua pois a variavel b ainda nao foi declarada ate esse momento.
let b = 2
console.log('B = ', b)

//-----------------------------------------------------------------------
var a = 2
console.log(a) // É impresso 2.
function qualquer (){
    console.log(a) // É impresso undefined.
    var a = 3
    console.log(a) // É impresso 3.
    // Por baixo dos panos o javaScript trata da seguinte forma:
    // // var a
    // // console.log(a) 
    // // a = 3
    // // console.log(a)
}
qualquer()

//----------------------------------------------------------------------------------------------
function getValor()
{
    function retornarValor() // Declaração de um funcao, logo devem ir para o topo do escopo.
    {
        return 1
    }
    return retornarValor();
    function retornarValor() // Declaração de um funcao, logo devem ir para o topo do escopo.
    {
            return 2
    }
}

 // Na pratica o javaScript interpretaria assim:
function getValor()
{
    function retornarValor() // Declaração de um funcao, logo devem ir para o topo do escopo.
    {
        return 1
    }

    function retornarValor() // Declaração de um funcao, logo devem ir para o topo do escopo.
    {
            return 2
    }
    return retornarValor();  
}

var resultado = getValor()
console.log(resultado) // O valor impresso será 2 pois a segunda funcao sobreescreve a primeira.

//-----------------------------------------------------------------------------------------------------
function getValor()
{
    var retornarValor = function()
    {
        return 1
    }
    return retornarValor()
    var retonarValor = getValor()
    {
        return 2
    }
}
// Na prática o javaScript interpretaria assim:
function getvalor(){
    var retornarValor
    var retornarValor
    retornarValor = function(){
        return 1
    }
    return retornarValor()
    retornarValor = function(){ //O codigo que retorna 2 é um 
                                //codigo que nunca vai ser atingido por causa do retorn.
        return 2
    }
}

var resultado = getvalor()
console.log(resultado)