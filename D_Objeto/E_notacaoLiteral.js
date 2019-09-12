const a = 1
const b = 2
const c = 3

// Antes do EcmaScript2015
const obj1 = { a: a, b: b, c: c}
// Apos o EcmaScript2015
const obj2 = { a, b, c} // Automaticamente ele vai assumir que o nome do atributo criado no 
// objeto tera o mesmo valor da constante que tem seu mesmo nome.
// Se quisermos mudar o nome das variaveis entao temos que fazer da forma antiga.

console.log(obj1, obj2) // Note que ao imprimir, obj1 e obj2 sao exatamente iguais.


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // Usado para criar dinamicamente um atributo que ainda nao se sabe o nome.
console.log(obj3)


const obj4 = {[nomeAttr]: valorAttr} // Criando atributos atraves de uma variavel.
console.log(obj4)

const obj5 = {
    funcao1: function() { // Forma antiga de definir uma funcao.
        // ..........
    },
    funcao2() { // Forma nova, mais curta que a forma antiga.
        // ..........
    }  
}

console.log(obj5)



