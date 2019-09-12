// Essa funcao em determinada situacao retorna um valor e em outra situacao nao retorna nada(no caso retorna undefined).
function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }
    else{
        return area
    }
}
// OBS: repare que diferente de outras linguagens aqui nos podemos ter retorno somente em alguns cantos. Muito
// cuidado ao utilizar esse tipo de flexibilidade.

console.log(area(2, 2))
console.log(area(2)) // Aqui a funcao tentara multiplicara 2*undefined e area vai receber como resultado um NaN, como NaN 
// nao é maior que 20, entao será retornado area. 
console.log(area())  // Aqui a funcao tentara multiplicar undefined*undefined e area vai receber NaN, como NaN 
// nao é maior que 20, entao será retornado area. 
console.log(area(2, 3, 17, 22, 44)) // Podemos passar mais parametros do que uma funcao suporta, porem nesse caso
// ela ira considerar apenas os dois primeiros e ira descartar os outros. 
console.log(area(5, 5)) // Embora 25 seja maior que 20, ele imprimira na tela o que esta escrito no console da funcao,
// porem como resultado da funcao sera retornado undefined pois nao tem renhum return.
