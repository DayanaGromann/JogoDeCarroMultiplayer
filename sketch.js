var canvas;

var estadoJogo = 0;
var contagemJogadores;
var bancoDados;
var formulario, jogador, jogo;


function setup(){
  canvas = createCanvas(400,400);
  bancoDados = firebase.database();

  jogo = new Jogo();
  jogo.obterEstado();
  jogo.iniciar();
}

function draw(){
  background("white");
 
  
}


