function soNoticiaBoa() {
    if(valor >= 7){
        console.log('Aprovado com ' + valor)
    }
}

soNoticiaBoa(8.1)
soNoticiaBoa(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){ // Independente do tipo do valor que sera passado, o javaScript tentara converter para verdadeiro ou 
        // falso.
        console.log('É verdade.... ' + valor)
    }
}

seForVerdadeEuFalo() // Converterá para false.
seForVerdadeEuFalo(null) // Converterá para false.
seForVerdadeEuFalo(undefined) // Converterá para false. 
seForVerdadeEuFalo(NaN) // Converterá para false.
seForVerdadeEuFalo('') // Converterá para false.
seForVerdadeEuFalo(0) // Converterá para false.
seForVerdadeEuFalo(-1) // Converterá para true.
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
