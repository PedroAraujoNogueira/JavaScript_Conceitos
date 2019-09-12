const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// Por incrivel que pareça essas duas linhas imprimirao 10, que sera o valor de i ao final do loop, pois i é var entao
// ele nao guarda o valor de i no momento da atribuicao.
funcs[2]()
funcs[8]()