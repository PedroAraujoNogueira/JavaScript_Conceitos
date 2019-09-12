// OBS: lembre-se que a função é como se fosse a classe em Java, ou seja, funcoes podem ter atributos e 
// comportamentos e podem ser instanciadas.
// Em JavaScript quem exerce o papel da classe é a funcao.

console.log(typeof Object) // Será impresso function.
console.log(typeof new Object) // Será impresso object. Poderiamos ter colocado "new Object()", com parenteses. O 
// efeito é o mesmo.

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente) // Poderiamos ter colocado "new Cliente()", com parenteses. O 
// efeito é o mesmo.

class Produto {} // A partir do JavaScript 2015 foi criada o termo class, que nada mais é do que uma forma enxuta de
// declarar uma funcao.
console.log(typeof Produto)
console.log(typeof new Produto) // Poderiamos ter colocado "new Produto()", com parenteses. O 
// efeito é o mesmo.

// OBS: quando criamos um objeto de forma literal, ali ja estamos instanciando o objeto, o que é diferente de 
// criarmos uma funcao e a partir da funcao irmos instanciando quando objetos quisermos.
// OBS2: observe a partir dos exemplos que podemos criar instancias a partir da propria funcao que pertence a API
// javaScript(o Object), atraves de funcoes que nos criamos, ou a partir de uma class(que acaba sendo uma funcao tmb).