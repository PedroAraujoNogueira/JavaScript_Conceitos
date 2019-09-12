function MeuObjeto(){}
console.log(MeuObjeto.prototype) // note que MeuObjeto é uma funcao, porem MeuObjeto.prototype É UM OBJETO. 

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // Todos os objetos criados a partir da mesma funcao apontam para o mesmo
// prototipo.
console.log(MeuObjeto.prototype === obj1.__proto__) // Quando criamos um objeto a partir de uma funcao construtora usando
// new, o prototipo desse objeto automaticamente aponta para a funcao que voce criou .prototype, 
// nesse caso, MeuObjeto.prototype. 

// O Object.prototype é referenciado automaticamente(por padrao) quando fazemos new Object ou quando criamos 
// um objeto literal.

MeuObjeto.prototype.nome = 'Anônimo' // Isso significa que qualquer objeto criado a partir da funcao MeuObjeto vai ter 
// no pai dele o atributo Anônimo.

MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // Será impresso Bom dia! Meu nome é Anônimo, pois obj1 nao possui nome entao ele busca do pai dele.

obj2.nome = 'Rafael'
obj2.falar() // Será impresso Bom dia! Meu nome é Rafael, pois o obj2 sobreEscreveu o nome.

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Nessa linha estamos mudando a referencia de __proto__ do obj3 para sair de 
// Object.prototype para MeuObjeto.prototype.
obj3.nome = 'Obj3' // Observe que apos mudar a referencia do objeto pai agora temos acesso aos atributos e funcoes
// de MeuObjeto.
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // O __proto__ de todo objeto criado a partir de uma
// funcao aponta para o nome da funcao .prototype. que é um Objeto.

// CURIOSIDADES AVANCADAS.
console.log(MeuObjeto.__proto__ === Function.prototype) // Toda funcao tambem tem o atributo __proto__ e esse atributo
// vai apontar para Function.prototype.
console.log(Function.prototype.__proto__ === Object.prototype)  // Note que apesar de tudo o Object.prototype é o pai
// de todos os objetos.
console.log(Object.prototype.__proto__ === null) // Por padrao nao existe nenhum objeto referenciado por 
// Object.prototype.__proto__.


