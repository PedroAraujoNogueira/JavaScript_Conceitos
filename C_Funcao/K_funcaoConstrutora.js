function Carro(velocidadeMaxima = 200, delta = 5){ // A funcao em JavaScript funciona como uma classe.
    // Atributo Privado, ou seja, pertence apenas ao escopo dessa funcao.
    let velocidadeAtual = 0 // Para criarmos um atributo public basta tirarmos o let ou o const e colocarmos o this.
    // Metodo Publico
    this.acelerar = function() { // Se quisermos transformar algo em publico, ou seja, para que fique visivel fora da
        // classe construtora entao usamos o this.
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta     
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function(){ // Para criarmos um metodo privado basta tirarmos o this e colocarmos um let
        // ou um const.
        return velocidadeAtual
    }
}

const uno = new Carro // Objeto criado usando os parametros padroes.
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() 
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)