const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Se nota >=7 for verdadeiro ele retorna Aprovado, 
// caso contrario vai ser exibido o lado direito dos ":" que no caso é Reprovado. 

console.log(resultado(7.1))
console.log(resultado(6.9))