var canvas;

var estadoJogo = 0;
var contagemJogadores;
var todosJogadores;
var distacia = 0;
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
  if(contagemJogadores === 4){
    jogo.atualizarEstado(1);
  }
 
  if(estadoJogo === 1){
    clear();
    jogo.jogar();
  }
  
  console.log(contagemJogadores)
}


