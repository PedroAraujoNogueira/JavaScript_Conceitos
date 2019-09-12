// Um objeto em javaScript é diferente de um JSON, embora um lembre o outro eles nao sao a mesma coisa.
// Json(JavaScript objetc notation) é um formato textual, para comunicaçao entre sistemas.

const prod1 = {} // Um par de chaves representa um objeto. Aqui temos um objeto vazio.
// No javaScript podemos criar os atributos e metodos de um objeto dinamicamente.
prod1.nome = 'Celular Ultra Mega' // nome criado dinamicamente.
prod1.preco = 4998.90  // preco criado dinamicamente.
// Um objeto no javaScript é uma coleçao de chave e valor. Dentro de um objeto 
// pode ter inclusive outro objeto.
prod1['Desconto Legal'] = 0.40 // Essa é outra forma de criar um atributo. Porem deve-se evitar usar nomes de
// atributos com espaços como em 'Desconto Legal'.

console.log(prod1) // Imprime o objeto com seus atributos.

// O nome de um identificador(atributo ou metodo) é unico para um mesmo objeto.
// Podemos criar tambem um objeto ja com os pares de chave e valor dentro da propria declaracao do objeto.
// Observe que dentro desse objeto temos um atributo que é outro objeto e dentro
// desse outro objeto ainda há outro objeto.
// Observe tambem que temos objetos com nome iguais, essa nao é uma boa pratica, mas
// pode ser feita, pois sao propriedades de objetos diferentes.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blablabla: 1,
        obj:{
            blablabla: 2
        }
    }
}

console.log(prod2)

// Para efeito de curiosidade um JSON do objeto prod2 seria: '{ "nome": "Camisa Polo", "preco": 79.90 }'
// Podemos a partir de um objeto gerar um JSON, porem sao objeto e JSON sao coisas diferentes.
