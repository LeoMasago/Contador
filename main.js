const btnIncrementar = document.getElementById("btnIncrement");
const btnDecrementar = document.getElementById("btnDecrement");
const valor = document.getElementById("valor");
const btnReset = document.getElementById("reset");

let contador = 0;

/* função para adicionar/atualizar o span que é o nosso contador */
function atualizar(){
    valor.innerHTML = contador; /* pega o valor do span e substitui pelo valor do contador */
}

/* função que ao clicar no botão de Incrementar, pega o valor do contador e adiciona 1 */
btnIncrementar.addEventListener('click', () =>{
    contador += 1;
    atualizar(); /* chama a função para atualizar o contador */
})

/* função que ao clicar no botão de Decrementar, pega o valor do contador e subtrai 1 */
btnDecrementar.addEventListener('click', () =>{
    contador -= 1;
    atualizar();
})

/* função que ao clicar no botão de Resetar, pega o valor do contador e tranforma em 0*/
btnReset.addEventListener('click', () =>{
    contador = 0;
    atualizar(); 
})