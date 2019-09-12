function Pessoa() {
    this.idade = 0
    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }, 1000) // Essa funcao dispara uma outra funcao de acordo com o intervalo estabelecido por vc, 
    // no caso de 1 em 1 segundo.
}

new Pessoa
// Observe que o this pode variar de acordo com quem esta chamando a funcao.
// O resultado é que é impresso NaN de 1 em 1 segundo, pq nessa caso o this.idade++ nao aponta para o objeto pessoa,
// pois quem esta disparando essa funcao é um temporizador(e nao um objeto pessoa) que provavelmente é outro objeto.

// ------------------------------- Outra forma ---------------------------------------

// Podemos resolver esse problema colocando no final da funcao(passada como parametro para setInterval) 
// a chamada para a funcao .bind() e a passar como parametro do bind o this para ele amarrar o this do objeto a chamada da 
// funcao.

function Pessoa1() {
    this.idade = 0
    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // Essa funcao dispara uma outra funcao de acordo com o intervalo estabelecido por vc, 
    // no caso de 1 em 1 segundo.
}

new Pessoa1

//------------------------------ Outra forma-------------------------------------------------

function Pessoa2() {
    this.idade = 0
    
    const self = this 
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }, 1000) // Essa funcao dispara uma outra funcao de acordo com o intervalo estabelecido por vc, 
    // no caso de 1 em 1 segundo.
}

new Pessoa2