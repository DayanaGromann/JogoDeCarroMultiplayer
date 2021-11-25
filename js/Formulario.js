class Formulario{
    constructor(){
        this.entrada = createInput("Nome");
        this.botao = createButton('Jogar');
        this.saudacao = createElement('h3');
        this.titulo = createElement("h1");
    }

    esconder(){
        this.entrada.hide()
        this.botao.hide()
        this.saudacao.hide()
        this.titulo.hide()
    }
    
    mostrar(){
        
        this.titulo.html("Car Racing Game");
        this.titulo.position(displayWidth/2 - 80, displayHeight/4);
       
        this.entrada.position(displayWidth/2 - 50 , displayHeight/2 - 80);
        this.botao.position(displayWidth/2 + 20, displayHeight/2-50);

        this.botao.mousePressed(()=>{
            this.entrada.hide();
            this.botao.hide();

            jogador.nome = this.entrada.value();
        
            contagemJogadores += 1;
            jogador.indice = contagemJogadores;
            jogador.atualizarDados();
            jogador.atualizarContagem(contagemJogadores);

            this.saudacao.html("Olá "+ jogador.nome);
            this.saudacao.position(displayWidth/2 - 70, displayHeight/2 - 80);
        });

    }
} 