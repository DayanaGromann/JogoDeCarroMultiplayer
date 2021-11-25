var canvas;

var estadoJogo = 0;
var contagemJogadores;
var todosJogadores;
var bancoDados;
var carro1, carro2, carro3, carro4, carros;
var formulario, jogador, jogo;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-95);
  bancoDados = firebase.database();

  jogo = new Jogo();
  jogo.obterEstado();
  jogo.iniciar();
}

function draw(){
  if(contagemJogadores === 4){
    jogo.atualizarEstado(1);
  }
 
  if(estadoJogo === 1){
    clear();
    jogo.jogar();
   
  }
 
}


