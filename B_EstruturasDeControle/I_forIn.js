// O FOR IN percorre os indices de um array ou os atributos de um objeto. 

const percorrendo = [6.7, 7.4, 9.8, 8.1, 7.7]

// Percorrendo os indices de um array.
for(let i in percorrendo){
    console.log(i, percorrendo[i])
}

// Percorrendo os atributos de um objeto.
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Araujo',
    idade: 22,
    peso: 75
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// OBS: se nao definirmos o tipo de acesso da variavel atributo ela por padrao será VAR, porem é interessante que 
// coloquemos como LET para que nao tenhamos mais acesso à variavel apos sairmos do FOR IN.
// OBS2: se a variavel atributo do for acima tiver tipo de acesso var, apos o FOR IN ela estara armazenando o atributo 
// peso.