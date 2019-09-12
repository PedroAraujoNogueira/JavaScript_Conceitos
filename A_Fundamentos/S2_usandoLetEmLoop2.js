const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// Nesse caso é impresso o valor 2 e 8. Pois como i é um let ele lembra do valor de i no momento da atribuicao.
funcs[2]()
funcs[8]()