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

    async iniciar(){
        if(estadoJogo === 0){
            jogador = new Jogador();
            var contagemJogadoresRef = await bancoDados.ref('playerCount').once('value');
            if(contagemJogadoresRef.exists()){
                contagemJogadores = contagemJogadoresRef.val();
                jogador.obterContagem();
            }
            formulario = new Formulario();
            formulario.mostrar();
        }
    }

    jogar(){
        formulario.esconder();

        textSize(30);
        text("Jogo Iniciado", 120, 100);
        Jogador.obterInfoJogadores();

        if(todosJogadores !== undefined){
            var posYtexto = 130;
            for(var cadaJogador in todosJogadores){
                if(cadaJogador === "player" + jogador.indice){
                    fill("red");
                }else{
                    fill("black");
                }

                posYtexto += 20;
                textSize(15);
                text(todosJogadores[cadaJogador].nome + ": "+todosJogadores[cadaJogador].distancia, 120, posYtexto);
            }
        }

        if(keyIsDown(UP_ARROW) && jogador.indice !== null){
            jogador.distancia += 50;
            jogador.atualizarDados();
        }

    }
}