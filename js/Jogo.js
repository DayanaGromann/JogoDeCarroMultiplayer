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

        carro1 = createSprite(100,200);
        carro1.addImage(img_carro1);

        carro2 = createSprite(300,200);
        carro2.addImage(img_carro2);

        carro3 = createSprite(500,200);
        carro3.addImage(img_carro3);

        carro4 = createSprite(700,200);
        carro4.addImage(img_carro4);

        carros = [carro1, carro2, carro3, carro4];
    }

    jogar(){
        formulario.esconder();
        background(0)

        Jogador.obterInfoJogadores();
        jogador.obterRanking();

        if(todosJogadores !== undefined){

            image(img_track, 0, -displayHeight*3.9, displayWidth, displayHeight*5);

            var indice = 0;
            var x = 175;
            var y = 0;
                
            for(var cadaJogador in todosJogadores){

                indice = indice+1;
                x = x + 200;
                y = displayHeight - todosJogadores[cadaJogador].distancia;
                carros[indice-1].x = x;
                carros[indice-1].y = y;

               if(indice === jogador.indice){
                   fill("red");
                   ellipse(x,y,60);
                   carros[indice-1].shapeColor = "red";
                   camera.position.x = displayWidth/2;
                   camera.position.y = carros[indice-1].y - 300
               }

            }
        }

        if(keyIsDown(UP_ARROW) && jogador.indice !== null){
            jogador.distancia += 10;
            jogador.atualizarDados();
        }

        if(jogador.distancia > 3660){
            estadoJogo = 2;
            jogador.ranking += 1; //cada jogador que cruzar a linha de chegada receberá 1 a mais no ranking, que o jogador anterior
            Jogador.atualizarRanking(jogador.ranking);//O ranking do último jogador é adicionado ao BD, para sabermos qual deverá ser o ranking do próximo a cruzar a linha. Observe que este método é estático, portando o chamamos para a classe(j maiúsculo) e não para o objeto criado com ela.
        }

        drawSprites();
    }

    finalizar(){
        console.log("Fim do jogo");
        console.log(jogador.ranking);
    }
}