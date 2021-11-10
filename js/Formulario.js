class Formulario{
    constructor(){}

    display(){
        
        var titulo = createElement("h2");
        titulo.html("Car Racing Game");
        titulo.position(130,0);

        var entrada = createInput("Nome");
        entrada.position(130,160);

        var botao = createButton('Play');
        botao.position(250,200);

        var saudacao = createElement('h3');

        
        

        botao.mousePressed(function(){
            entrada.hide();
            botao.hide();

            var nome = entrada.value();

            contagemJogadores+=1;
            jogador.atualizar(nome);
            jogador.atualizarContagem(contagemJogadores);

            saudacao.html("Olá "+ nome);
            saudacao.position(130,160);
        });

    }
}