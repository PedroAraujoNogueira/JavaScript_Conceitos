// Podemos delimitar uma string por 3 simbolos: aspas duplas, aspas simples ou crases(a partir de 2015). A 
// crase é usada para quando precisamos de template string.
 
const escola = "cod3r" 

// Funcoes que pertencem ao tipo string.

console.log(escola.charAt(4)) // Vai me dar a letra que esta dentro do indice 4 da string.

console.log(escola.charAt(5)) // OBS: se passarmos um indice que esta fora do limite da string ela retornara
// um vazio.

console.log(escola.charCodeAt(2)) // retorna o valor de d na tabela ASC ou tabela Code, pois d é a letra que
// esta no indice 2 da string escola.

console.log(escola.indexOf('o')) // Usamos essa funcao para sabermos o indice que uma letra se encontra dentro 
// da string.

console.log(escola.substring(1)) // Essa funcao retorna uma substring comecando do indice 1 ate o final
// da string.

console.log(escola.substring(1,3)) // Essa funcao retorna uma substring que comeca do indice 1 e vai ate o 
// indice 3, porem nao incluindo o indice 3.

console.log('escola '.concat(escola).concat("!")) // A funcao concat serve para concatenar strings e pode ser
// usada diretamente com um literal sem precisar estar entre parenteses ou em uma variavel.
console.log('escola ' + escola + '!') // Podemos usar o operador + para concatenar strings.

console.log(escola.replace('3', 'e')) // A funcao replace substitui o numero 3 da string cod3r pela letra e.
console.log(escola.replace(/\d/, 'e')) // O /\d/ é uma expressao regular que diz para substituir todos os 
// digitos dentro da string pela letra e.
// letras e digitos dentro da string pela letra e.

console.log('Pedro, Raquel, Priscila'.split(',')) // Para convertermos uma string em um array chamamos a 
// funcao split() e dentro da funcao passamos o que queremos usar como separador.