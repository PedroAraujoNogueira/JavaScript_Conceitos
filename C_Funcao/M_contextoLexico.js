const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() // será impresso Global, pois quando uma funcao foi declarada dentro do JS 
    // ela tem consciencia do local onde foi criada/definida, entao a funcao carrega consigo o contexto no qual ela foi 
    // declarada.
}

exec()