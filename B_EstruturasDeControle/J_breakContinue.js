// O break age dentro do swicth e dentro de laços de repetiçao.
// O continue age apenas dentro de laços de repetição.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if (x == 5){
        break // Esse break saira do laço for acima.
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if (y == 5){
        continue // Esse continue causara a proxima iteraçao do for acima.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b ==3) { 
            break externo 
        } 
            console.log(`Par = ${a}, ${b}`)
    }
} // OBS: esse tipo de estrutura nao deve ser usada pois dificulta a leitura e a manutenibilidade do codigo.