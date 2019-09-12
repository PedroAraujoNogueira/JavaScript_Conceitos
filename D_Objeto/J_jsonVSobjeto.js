// JSON é um formato textual.
// O JSON serve para comunicar sistemas feitos em tecnologias/linguagens diferentes ou para o mesmo sistema, 
// pois é um formato simples e facil de ser interpretado, ate mesmo linguagens um pouco mais antigas conseguem 
// ler e interpretar o JSON. Tambem é usado para sistemas que utilizam a mesma linguagem dada a sua simplicidade 
// de leitura. 
// O JSON nao carrega consigo funcoes.

const obj = { a: 1, b: 2, c: 3, soma(){return a + b + c} }
console.log(JSON.stringify(obj)) // Essa funcao é utilizada para se converter um objeto para o formato JSON. Note que a
// funcao foi excluida do JSON e foi originado apenas  {"a":1,"b":2,"c":3}. JSON é um formato de dados.


// Converter um JSON para OBJETO:

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) // Formato invalido, Atributos devem ser escritos entre aspas duplas.

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) // Formato invalido, Atributos devem ser escritos 
// entre aspas duplas.

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // Formato valido. Sera impresso o objeto { a: 1, b: 2, c: 3 }.

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": []}')) // Observe que valores numericos, 
// booleanos, outros objetos e arrays nao precisam estar entre aspas duplas, porem para string é necessario.

// OBS: Existem ferramentas na internet para voce testar se seu formato JSON é valido. Basta colocar JSON validator
// no google por exemplo.
