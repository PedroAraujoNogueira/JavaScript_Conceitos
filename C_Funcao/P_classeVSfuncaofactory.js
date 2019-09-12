// Classe é uma forma diferente de se escrever funcao em javaScript.

class Pessoa{
    constructor(nome){
        this.nome = nome // Colocando this.nome fazemos a variavel nome passar a ser publica, ou seja, terei acesso a essa
        // variavel sempre que eu quiser a partir das instancias dessa classe, nesse caso a instancia pessoa1.
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`) // Se eu tentasse acessar sem o this geraria um erro, pois diria que nome 
        // nao esta definido dentro do escopo falar.
    }
}

const pessoa1 = new Pessoa('Pedro')
pessoa1.falar()

// Usando uma funcao factory.
// A vantagem é que nao é preciso usar o this, logo nome sempre sera reconhecido quando a funcao for chamada.
const p2 = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = p2('Rafael')
pessoa2.falar()


// DESAFIO FUNCAO CONSTRUTORA.

function Pessoa3(nome){
    this.nome = nome 
    this.getFalar = function() {
        return console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa3 = new Pessoa3('Priscila')
pessoa3.getFalar()
console.log(pessoa3.nome)