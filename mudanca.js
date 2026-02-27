function jogar(){
    const opcoes = ["pedra.png","papel.png","tesoura.png"];
    const imagensPC = ["pcpedra.png", "pcpapel.png", "pctesoura.png"];

    let escolhaJogador = -1;

    for(let i =0;i<opcoes.length; i++){
        if (document.getElementById(opcoes[1]).checked){
            escolhaJogador = i;
        }

    }

    if(escolhaJogador === -1){
        alert("Selecione uma opção abaixo!!");
        return;
    }
    let sorteio = Math.floor(Math.random()*3);

    document.getElementById('pc').src= imagensPC(sorteio);
    let resultado = (escolhaJogador - sorteio +3)%3;

    const mensagens = ["Empate", "Você Venceu!", "Computador Venceu!"];
    document.getElementById('placar').innerHTML = mensagens [resultado];
}

function resetar (){
    document.getElementById('pc').src="pc.png"
    document.getElementById('placar').innerHTML=" ";
}