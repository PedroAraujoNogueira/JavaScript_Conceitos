// Usamos o bloco try/catch quando queremos tratar algum tipo de erro.
function imprimirNomeGritado(obj){
    try{ // Quando ocorre uma exceção dentro do bloco try ele para a execuçao do bloco imediatamente e pula para o catch.
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(erro){ // O catch é quem pega as coisas lançadas pelo throw dentro do bloco try.
        try{
          tratarErrorELancar(erro)
          console.log('Saiu logo ein!!')
        }
        catch(erro2){
           console.log(erro2)
        }
    } finally {
        console.log('Final.')
    }
}

function tratarErrorELancar(erro){ // Você pode usar throw para relançar uma exceção após você pegá-la. Se
    // não puder tratar esta exceção então relança.
    if(erro >= 10){ // Erro é um obj, logo se colocarmos so ele dentro dos parenteses do if ele sera avaliado como true.
    /* CODIGO PARA TENTAR TRATAR A EXCEÇAO, CASO NAO CONSIGA A EXCEÇAO SERA RELANÇADA. */
    }
    else{
    // throw new Error('Ocorreu um erro')
    throw 10
    // throw true
    // throw 'mensage'
    // throw {
    //      nome: erro.name,
    //      msg: erro.message,
    //      date: new date
    // }
    }
}

const obj = { nome: 'Pedro' }
imprimirNomeGritado(obj)

// http://gabrielprates.com/2017/06/02/excecoes-e-erros-em-js.html