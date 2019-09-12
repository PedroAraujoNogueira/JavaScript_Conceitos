// O javaScript nao tem um operador de exponenciacao, para fazermos exponenciacao precisamos usar a classe
// Math.
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) // PI é uma constante de Math. A funcao pow calcula a potencia,
// ela recebe 2 parametros o primeiro indica o valor da base e o segundo o valor do expoente.
console.log(area)
console.log(typeof Math) // Math é um object.