// O que foi exportado do arquivo moduloA esta dentro da const moduloA e oq foi exportado do 
// arquivo moduloB está dentro da const moduloB.
const moduloA = require('./B_moduloA') // Para importarmos algo no node usamos o require.
const moduloB = require('./B_moduloB') // Usamo o ./ no caminho pq o arquivo moduloB esta na mesma pasta.

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)