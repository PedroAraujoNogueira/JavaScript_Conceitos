let a = 8

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
console.log(global.a)
console.log(Buffer.a)
console.log(module.exports.a)

console.log(global.b)
console.log(this.b) // No Node o global e o this nao apontam para o mesmo canto global, diferentemente do browser.

console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // Observe que module.exports é exatamente igual a this no Node.
console.log(module.exports)
// No Node cada arquivo representa um modulo.



// Criando uma variavel maluca: sem var e let!
abc = 3 // Criamos uma variavel global no Node, isso é mto perigoso, nao fazer isso!!!
console.log(global.abc)
// OBS: FUJA DO ESCOPO GLOBAL.

console.log(this)
console.log(global)
