// Criando objetos usando a notaçao literal.

const obj1 = {}
console.log(obj1)

// Criando objetos a partir de uma funcao.

console.log(typeof Object, typeof new Object) //
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome, preco, desc){
	this.nome = nome // O this torna essa variavel publica.
	this.getPrecoComDesconto = () => {
		return preco * (1 - desc)
	}
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
// Podemos acessar o atributo nome de p1 e p2 atraves de p1.nome e p2.nome, porem nao podemos acessar os atributos preco e desc pois sao privados.
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Os niveis(escopo) de visibilidade no browser: nivel Global, nivel da funcao e nivel de bloco quando sao usadas as palavras reservadas let e const.
// Os niveis(escopo) de visibilidade no Node: nivel Global, nivel do arquivo(modulo), nivel da funcao e nivel de bloco quando sao usadas as palavras reservadas let e const. 
// NIVEIS DE VISIBILIDADE: PUBLICO E PRIVADO.

// Criando Objetos atraves de uma funcao factory.
// Uma funcao factory é um padrao de projeto.
// Sua finalidade sera retornar objetos.

function criarFuncionario(nome, salarioBase, faltas){
	return {
		nome, // Seria igual a escrever nome: nome
		salarioBase, // Seria igual a escrever salarioBase: salarioBase 
		faltas, // Seria igual a escrever faltas: faltas
		getSalario(){
			return (salarioBase / 30) * (30 - faltas)
		}
	}
}

// Para criar um objeto a partir de uma funcao factory.
const f1 = criarFuncionario('João', 7980, 4) // Lembre-se de colocar os paranteses, caso voce esqueca estara atribuindo a funcao a uma variavel em vez do retorno dela.
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Criando objetos atraves do Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Criando objetos atraves da funcao Json.parse().
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // Converte um JSON em um objeto e o armazena na variavel criada.
console.log(fromJSON.info) // Imprimindo o atributo do Objeto fromJSON.
// OBS: JSON e objetos sao coisas diferentes. Na verdade JSON é um texto.