const imprimirResultado = function(nota){
    switch(Math.floor(nota)){ // O switch foi feito para casos de multipla escolha. O switch, diferentemente do if,
        // não recebe verdadeiro ou falso, ele recebe alguns tipos de valores e tenta achar nos CASE o valor que 
        // lhe foi passado.
        case 10: // Para cada case podemos colocar um conjunto de senteças de código, se nao houver um break ao final
        // do case entao o switch vai executar os cases abaixo ate encontrar um que tenha o break.
        case 9:
            console.log('Quadro de honra!')
            break // O break causa uma saida do bloco associado ao switch.
        case 7: case 8:
            console.log('Aprovado.')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao.')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida.')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-2)
imprimirResultado(11)

// OBS: No switch não é possivel colocar intervalos e nem um conjunto de valores no case, como por exemplo case 7,8,9:
// pois isso nao é permitido.