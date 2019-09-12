// Cadeia de prototipos(prototype chain)

Object.prototype.attr0 = '0' // Muito cuidado ao fazer isso, pois estara impactando todos os objetos ja que 
// Object.prototype é o ultimo pai da cadeia.
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // Para referenciarmos o avo como sendo o pai de pai, passamos avo
// para o atributo __proto__.
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0) // Sera buscada o atributo attr0 em filho, como nao tem vai ser buscado em pai, em avo e por
// ultimo em Object.prototype que é onde vai ser encontrada essa variavel e impresso o 0.
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

const carro =  {
    velAtual: 0, 
    velMax: 200, 
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}Km/h `
    }
}


const ferrari = {
    modelo: 'F40',
    velMax: 324 // Note que ferrari tem sua propria velMax. Isso é chamado de sobreEscrita. 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // O super serve para chamar o Objeto pai, ou seja sera chamada a funcao
        // status do pai. Caso no lugar do super fosse um this entao a funcao iria se auto chamar virando uma funcao 
        // recursiva. Aqui tambem podemos observar outra sobreEscrita.
    }
}

Object.setPrototypeOf(ferrari, carro) // Note que em primeiro lugar ficara o Objeto e em seguida 
// sera indicado seu __proto__, ou seja, seu pai.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // É possivel acessar os atributos e funcoes tanto do objeto ferrari como do seu pai/ancestrais. 
// Porem quando pedimos para imprimir so é exibido os atributos e metodos contidos no proprio objeto. Nesse caso
// { modelo: 'F40', velMax: 324 }
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status()) // Observe que o this da funcao status sera ferrari, portanto sera impresso
// 300km/h de 324Km/h 


