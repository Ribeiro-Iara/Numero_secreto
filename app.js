let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'*/

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentaviva = tentativas > 1 ? 'tentavivas' : 'tentativa';
        exibirTextoNaTela("p", "Você descobriu o número secreto com " + tentativas + " " +palavraTentaviva+"!");
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que ' +chute);
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' +chute);
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}



function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}
