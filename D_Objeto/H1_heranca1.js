// Herança é um principio da OO que faz com que voce receba do seu pai atributos e comportamentos e reutilize esses 
// codigos.

// OBS: entre herança e composiçao prefira a composicao.

// Todo objeto tem por padrao o atributo prototype que aponta para Object.prototype.

// Ao tentanmos acessar um atributo de ferrari, se esse atributo nao for encontrado em ferrari entao vai ser procurado
// no pai de ferrari, se nao for achado no pai vai ser procurado no avo(se tiver), e assim por diante.

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// OBS: Todo Objeto tem o atributo __proto__ por padrao e toda funcao tem o atributo prototype por padrao.

console.log(ferrari.__proto__) // Note que o objeto para o qual __proto__ aponta por padrao está vazio.
console.log(ferrari.__proto__ === Object.prototype) // Por padrao o atributo __proto__ aponta para Object.prototype, porem pode ser mudado.
console.log(volvo.__proto__ === Object.prototype) // Object é uma funcao, porem Object.prototype é um objeto.
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__ === null) // Note que Object.prototype.__proto__ é null, pois Object.prototype nao
// tem pai por padrao.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Toda funcao tem prototype.
console.log(Object.prototype, MeuObjeto.prototype) // Note que o prototype de MeuObjeto é um objeto criado a partir do
// momento que eu defino minha funcao.

