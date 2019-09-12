var numero = 1
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)
// Fuja do escopo global, note que mesmo tendo var numero em escopos diferentes uma interfere na outra, a var numero =2
// sobrescreve var numero = 1.
// O var ignora os blocos, ou seja, é sempre uma variavel global, a menos que esteja dentro do corpo de uma function.