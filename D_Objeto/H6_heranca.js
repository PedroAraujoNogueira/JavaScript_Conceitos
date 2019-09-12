function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new atraves de uma funcao.
function novo(f,...params){ // O primeiro parametro devera receber uma funcao e o segundo é um operador que recebe varios
    // parametros e joga tudo em um so array chamado params.
    const obj = {} // Criei um objeto.
    obj.__proto__ = f.prototype // Associei a referencia de pai desse objeto para o prototype da funcao que foi passada
    // como parametro, que é oq acontece quando se chama uma funcao construtora usando new.
    f.apply(obj, params) // Nessa linha sera executada a funcao f passando como contexto do this o obj criado e passando
    // os parametros que foram recebidos no metodo.
    return obj // Retorna um objeto criado, que é a funcao do operador new.
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)