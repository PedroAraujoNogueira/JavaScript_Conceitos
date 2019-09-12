function compras (trab1, trab2){
    const comprarSorvete = trab1 || trab2 // No || se trab1 for verdadeiro o processador nem verifica o trab2, pois independente
    // do valor de trab2 o resultado final continuara verdadeiro.
    const comprarTV50 = trab1 && trab2 // No && se trab1 for falso o processador nem verifica o trab2, pois independente
    // do valor de trab2 o resultado final continuara falso.
    const comprarTV32 = trab1 != trab2 // Usado para simular o nao exclusivo, que é verdadeiro se somente um dos dois
    // forem verdadeiros.
    const manterSaudavel = !comprarSorvete 

    return { comprarSorvete, comprarTV32, comprarTV50, manterSaudavel }
    // { 
    //     sorvete: comprarSorvete,
    //     tv32: comprarTV32, 
    //     tv50: comprarTV50, 
    //     saudavel: manterSaudavel 
    // } // Essa seria a forma padrao, porem o return acima mostra como pode ser feito a partir da versao 2015 do 
         // ecmaScript, o proprio JS cria os atributos do objeto com o nome da const(ou var ou let) que é passado no return.
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

