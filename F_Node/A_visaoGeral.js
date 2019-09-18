// Linguagens como Java, PHP e Python que sao possiveis de se trabalhar no front nao sao executadas
// diretamente no front, elas sao enviadas para um servidor e a partir do codigo Python(por exemplo)
// o servidor gera um codigo HTML que é enviado ao browser e so entao executado. Ja o JS é executado
// diretamente no front. 

// O Node é uma soma do V8(um interpretador) e do LIBUV(faz toda a parte de assincronismo do Node, 
// responsavel por toda a parte de IO(ler algo de um arquivo ou banco de dados, fazer alguma conexao com
// a rede) do Node).
// O JS nasceu para trabalhar com ambientes assicronos.
// A LIBUV pode ter mais de um event loop caso sua maquina tenha mais de um processador.

console.log(module.exports)