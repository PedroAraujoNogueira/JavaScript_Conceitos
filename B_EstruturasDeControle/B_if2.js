function teste1(num){
    if(num > 7) // Se nao colocarmos as chaves no if, entao ele so executara uma unica instrucao de codigo.
    // O javaScript nao é baseado em identaçao, esta serve somente para organizazcao do codigo.
        console.log(num)
        console.log('Final') // Sempre sera impresso, pois esta fora do if. 
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // Como colocamos um ; apos o if entao esse if nao faz nada(sentença de codigo vazia) 
        // e o console.log(num) esta fora do if. Logo sempre sera impresso.
        console.log(num)
    }
}
teste2(6)
teste2(8)