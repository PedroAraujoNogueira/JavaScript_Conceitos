// Quando queremos atribuir um objeto no lugar do objeto vazio(que é o padrao), entao devemos fazer 
// isso usando o module.exports, se tentarmos usar o this ou somente exports nao funcionará para ser
// usado como moduloB.bomdia por exemplo.
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa Noite'
    }
}