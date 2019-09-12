// Exemplo de callBack no browser.

document.getElementsByTagName('body')[0].onclick = function(e) { // O evento nesse caso sera o click no browser.
    console.log('O evento ocorreu!!!')
}