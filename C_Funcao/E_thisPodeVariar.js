// O this em JS depende do contexto ou do escopo(scope) que voce esta.

/* 
* O comportamento do this depende entao do:
* 1. Escopo e contexto.
* 2. Modo estrito.

* Escopo vs Contexto
- Escopo (scope)
O escopo ele te acesso as variaveis, funcoes e objetos numa parte do codigo, durante o tempo de execuçao.
Determina a visibilidade desses recursos em alguma parte do codigo.
Sempre que invocamos uma funcao estamos criando um novo 'scope'.

- Contexto (context)
Enquanto o 'scope' se refere as diversas variaveis, o 'context' se refere ao valor do this no mesmo 'scope'.
Pode ser mudado com funcoes especiais como: .apply(), .call() e .bind().
No contexto de execuçao 'execution context' o contexto ja nao é mais esse contexto que estamos discutindo. Ele sera o 
escope.

* Temos 2 'scope':
1. Global:
- No momento que comecamos a escrever codigo estamos nesse contexto.
- Existe enquanto existir a aplicacao.
2. Local:
- Dentro de uma funcao, variaveis estao no escopo(contexto) local.
- Existe enquanto existir a funcao ou objeto.

*** Modo Estrito(strict mode):
- É opcional.
- *use strict* para habilitar no contexto.
- Elimina alguns erros silenciosos.
- Evita  algumas confusoes.
- proibe algumas sintaxes.
*/
//----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------- PRATICA ------------------------------------------------------------

/*
GLOBAL SCOPE No NODE
*/

//var nome  = 'Pedro'
this.name = 'Diego'
console.log(this)
function sayMyName(){
    // local scope
    //console.log(nome)
    console.log(this.name) // Da undefined, pois ele procura o atributo name no contexto da funcao, porem nao acha.
}
sayMyName()


/*
GLOBAL SCOPE No BROWSER
- No browser o mesmo exemplo mostrado no Node reagiria de forma diferente, ah nnao ser que usemos o 'use strict'.
- No browser o this é sem o objeto que esta sendo referenciado naquele momento.

this.name = 'Valeska'
console.log(this)
function sayMyName(){
    // local scope
    //console.log(nome)
    console.log(this.name) // Da undefined, pois ele procura o atributo name no contexto da funcao, porem nao acha.
}
sayMyName()
*/



