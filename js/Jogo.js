class Jogo{
    constructor(){}

    obterEstado(){
        var estadoJogoRef = bancoDados.ref('gameState');
        estadoJogoRef.on("value", function(data){
            estadoJogo = data.val();
        })
    }

    atualizarEstado(estado){
        bancoDados.ref('/').update({
            gameState: estado
        })
    }

    iniciar(){
        if(estadoJogo === 0){
            jogador = new Jogador();
            jogador.obterContagem();
            formulario = new Formulario();
            formulario.display();
        }
    }
}