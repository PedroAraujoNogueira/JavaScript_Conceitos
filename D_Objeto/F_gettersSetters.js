// Infelizmente no JS não temos esse recurso de atributos privados dentro do objeto, então utilizamos a convenção
// de _ antes de um propriedade para simbolizar uma propriedade privada. Então cabe ao desenvolvedor 
// respeitar essas convenções que devem ser respeitadas.

const sequencia = {
    _valor: 1, // Convenção. O fato de colocar _ na frente do atributo nao significa que ele é privado, mas é uma
    // convenção que deve ser respeitada, ou seja, acessada apenas internamente por esse objeto.
    get valor() { return this._valor++}, // Get retorna o valor de um atributo do objeto.
    set valor(valor) {  // Set recebe o valor de um atributo de um objeto.
        if(valor > this._valor){  // Pode ser feita uma validaçao caso seja necessario.  
            this._valor = valor
        }
    }
}
// O JS nao aceita sobrecarga de metodos, ou seja, nao aceita varios metodos com o mesmo nome so que com parametros 
// diferentes. Exceto no caso em que estamos utilizando os get e set.

console.log(sequencia.valor, sequencia.valor) // Internamente o JS vai entender que se voce esta tentando ler o valor
// entao o JS vai chamar o metodo get.
sequencia.valor = 1000 // Internamente o JS vai entender que se voce esta tentando atribuir um valor
// entao o JS vai chamar o metodo set.
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Ele ignororu essa atribuição, pois nao passou na validação do metodo set.
console.log(sequencia.valor, sequencia.valor)