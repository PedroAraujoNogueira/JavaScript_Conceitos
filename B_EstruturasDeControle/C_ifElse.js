const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //OBS: será impresso reprovado porque Epa nao é >= 7.
// OBS2: Em javaScript ele ate tenta comparar Epa com 7 sem dar erro, porem o resultado sera falso porque Epa nao é >= 7.