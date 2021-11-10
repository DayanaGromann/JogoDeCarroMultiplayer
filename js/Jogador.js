class Jogador{

    constructor(){};

    obterContagem(){
        var contagemJogadoresRef = bancoDados.ref('playerCount');
        contagemJogadoresRef.on("value", function(data){
            contagemJogadores = data.val();
        })
    }

    atualizarContagem(contagem){
        bancoDados.ref('/').update({
            playerCount: contagem
        })
    }

    atualizar(nome){
        var indiceJogador = "player" + contagemJogadores;
        bancoDados.ref(indiceJogador).set({
            name:nome
        })
    }
}