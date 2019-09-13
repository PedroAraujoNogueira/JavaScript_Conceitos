// O array em JS na verdade é um Objeto, um objeto com caracteristicas e jeito diferente, porem continua sendo um objeto.
// Dentro de um mesmo array é possivel colocar varios tipo de dados, porem nao é uma pratica aconselhavel.
// Um array constante pode ter seus indices alterados, pode excluir e adicionar indices, so nao pode atribuir à constante
// um outro array.

console.log(typeof Array) // Imprime function.
console.log(typeof new Array) // imprime Objeto.
console.log(typeof []) // imprime OBJETO.

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Uma forma pouco usual de se criar um array. Nesse caso sera passado
// para a Aprovados um array com 3 posicoes contendo respectivamente os nome Bia, Carlos e Ana.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Notacao literal para se atribuir um array para uma 'Variavel.' Essa é a forma 
// mais usual.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Embora nao tenha nenhum elemento nessa posicao o JS nao da erro de execucao como em
// outras linguagens, ele somente imprimira undefined.

aprovados[3] = 'Pedro' // Embora estejamos adicionando outro elemento no array essa forma é mais usada para substituir
// um dado em uma posicao ja existente.
aprovados.push('Rafael') // Essa forma é a mais usual para se adicionar um novo elemento em um array.
console.log(aprovados.length) // length pega o tamanho do array.

aprovados[9] = 'Priscila' // Embora a proxima posicao do array fosse a de indice 5 podemos pular indices vazios e 
// adicionar um dado em uma posicao mais na frente.
console.log(aprovados.length) // Sera impresso 10, note que os indices 5, 6, 7 e 8 estao undefined, porem entram na 
// contagem do tamanho do array.
console.log(aprovados[8] == undefined) // Imprimira true

console.log(aprovados) // Sera impresso [ 'Bia', 'Carlos', 'Ana', 'Pedro', 'Rafael', <4 empty items>, 'Priscila' ]
aprovados.sort() // Essa funcao ordena o array. OBS: existem funcoes que ordenam o array e retornam outro array sem
// modificar o array original, porem nao é o caso da funcao sorte, ela realmente modifica o array. Note que o 4
// indices vazios ficam na ultima posicao.
console.log(aprovados) // É impresso o array em ordem alfabetica.
console.log(aprovados.length) // Note que o tamanho continua sendo 10 mesmo os indices com undefined estando no final.

delete aprovados[1] // Uma forma de excluir um dado de uma posição. OBS: o array nao é reordenado, a posicao de indice
// um ficara undefined.
console.log(aprovados[1]) // É impresso undefined.

aprovados = ['Bia', 'Pedro', 'Raquel'] 
// A funcao splice serve para adicionar elemento em um determinado indice, remover elemento de um
// array e ate remover e adicionar elementos ao mesmo tempo.
aprovados.splice(1, 1) // O primeiro 1 se refere ao indice do array, o segundo 1 significa que a partir do primeiro
// indice iremos excluir um elemento apenas, ou seja, o proprio indice 1. Se quisessemos excluir dois elementos 
// trocaria o segundo 1 por 2. 
console.log(aprovados) // Note que 'Pedro' foi excluido do array e que Raquel Preencheu o espaco vazio.
console.log(aprovados.length) // Note que o tamanho do array passou a ser 2.

aprovados.splice(1, 1, 'Elemento1','Elemento2') // Nesse caso estamos excluindo um indice a partir do indice 1 e apos a 
// exclusao estamos adicionando dois elementos.
console.log(aprovados) // É impresso [ 'Bia', 'Elemento1', 'Elemento2' ]

// Se eu quisesse adicionar elementos se deletar nenhum elementos antes bastava colocar 0 no segundo campo, ou seja,
// a partir do primeiro elemento ele nao excluiria nenhum elemento porem adicionaria 2 elementos comecando pelo indice 1.
aprovados = ['Pedro', 'Maria', 'Joao'] 
aprovados.splice(1, 0, 'Elementos3', 'elemento4')
console.log(aprovados) // É impresso [ 'Pedro', 'Elementos3', 'elemento4', 'Maria', 'Joao' ].
