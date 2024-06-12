let listaDeNumerosSoretesdos = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'*/

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e '+numeroLimite);
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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSoretesdos.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSoretesdos = [];
    }

    if(listaDeNumerosSoretesdos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSoretesdos.push(numeroEscolhido);
        return numeroEscolhido;
    }
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
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
