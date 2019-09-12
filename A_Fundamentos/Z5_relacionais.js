console.log('01)', '1' == 1) // Da true pois sao iguais em valor.
console.log('02)', '1' === 1) // Da false pois compara tanto valor como tipo e um é string e outro é do tipo number.
console.log('03)', '3' != 3) // Da false pois compara somente o valor.
console.log('04)', '3' !== 3) // Da true pois compara tanto o valor como o tipo.

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const data1 = new Date(0) // Aqui criamos um data em JS, esse 0 representa a data de referencia do JS que é 01/01/1970.
const data2 = new Date(0)
console.log('09)', data1 === data2) // Da false, pois o tipo é o mesmo porem o valor é diferente, ja que sao variaveis de
// referencia o seu valor vai ser seu endereço de memoria.
console.log('10)', data1 == data2) // Da false, pois o valor é diferente, ja que sao variaveis de
// referencia o seu valor vai ser seu endereço de memoria.

console.log('11)', data1.getTime() == data2.getTime()) // Dara true pois o getTime() retorna um number da data e a 
// data escolhida foi a mesma.
console.log('12)', data1.getTime() === data2.getTime()) // // Dara true pois o getTime() retorna um number da data e a 
// data escolhida foi a mesma, e as variaveis sao do mesmo tipo.

console.log('13)', undefined == null) // Da verdadeiro.
console.log('14)', undefined === null) // Da false.

// OBS: é preferivel usar o estritamente igual(===) pois ele considera o tipo, ja o == nao considera o tipo podendo gerar
// efeitos colaterais em seu codigo ao se misturar tipos.
