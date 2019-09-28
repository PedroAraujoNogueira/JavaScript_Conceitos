// Aqui estamos criando 3 atributos no mesmo objeto porem de formas diferentes.
// Visivel tambem fora do modulo.
this.ola = 'Fala Pessoal!'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até o próximo exemplo!'

// Visivel apenas dentro do modulo.
let a = 2