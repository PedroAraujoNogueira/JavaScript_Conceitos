console.log(7/0) // O resultado da Infinity, pois o javaScript tem um tipo chamado Infinity.
// O resultado será 5 e 5.1 respectivamente. Pois o javaScript vai pegar o conteudo interno da string e vai verificar se 
// pode converter para um valor numerico. 
console.log( "10" / 2)  
console.log("10.2" / 2) 
// Da NAN pois EPA e SHOW nao sao possiveis serem transformadas em numeros.
console.log("EPA" / 2)  
console.log("SHOW" * 2) // Em algumas linguagens seria impresso SHOW 2 vezes, porem em javaScript o resultado 
// é NAN.
console.log('3' + 2) // O simbolo de +, nesse caso, nao vai efetuar a operacao de soma, ele vai concatenar
// pois a string tem prioridade.
console.log('3' - 2) // Nesse caso como nao faz sentido usar o operador - com uma string entao o javascript
// converte a string 3 para numero e efetua a subtracao.

console.log(0.1 + 0.7) // O resultado nao da exatamente 0.8 por causa da especificacao da linguagem, se ele
// usasse uma especificacao de ponto flutuante que desse exatamente 0.8 a linguagem seria muito mais lenta.

// console.log(10.toString()) Nao é possivel esse tipo de operacao, para conseguirmos isso temos que colocar
// o numero entre parenteses.
console.log((10.7).toString()) 
console.log((10.736).toFixed(2)) 