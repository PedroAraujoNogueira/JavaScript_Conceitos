// Um padrao de projeto muito comum em JS é a funcao factory.
// Funcao factory é uma funcao que retorna um objeto.

// Sem uso da funcao factory.
const prod1 = {
    nome: 'Pedro',
    idade: 22
}

const prod2 = {
    nome: 'Priscila',
    idade: 24
}
// OBS: note que estamos repetindo codigo. A funcao factory resolve esse problema.

// Usando a funcao factory.
// Funcao factory é uma funcao que retorna um objeto.
// Embora nao usemos o operador new, o fato de estarmos criando um objeto a partir da notacao literal de objeto
// indica que estamos sempre criando uma nova instancia de pessoa.
function criarPessoa(nome, idade){
    return {
        nome: nome,
        // nome, Poderiamos ter feito apenas assim, pois ja criamos o parametro com o mesmo nome do atributo.
        idade: idade
    }
} // O objeto que vai ser retornado pode ter valores fixos ou podem ser preenchidos por parametros passados para a funcao.
// OBS: Podemos retornar um objeto que tenha um conjunto de funcoes dentro dele.

const pessoa1 = criarPessoa('Pedro', 22) // Estamos criando um objeto.
console.log(pessoa1)