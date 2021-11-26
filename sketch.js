var canvas;

var estadoJogo = 0;
var contagemJogadores;
var todosJogadores;
var bancoDados;
var carro1, carro2, carro3, carro4, carros;
var formulario, jogador, jogo;

var img_carro1, img_carro2, img_carro3, img_carro4, img_track, img_ground;

function preload(){
  img_carro1 = loadImage("images/car1.png");
  img_carro2 = loadImage("images/car2.png");
  img_carro3 = loadImage("images/car3.png");
  img_carro4 = loadImage("images/car4.png");

  img_ground = loadImage("images/ground.png");
  img_track = loadImage("images/track.jpg");
}

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

  if(estadoJogo === 2){
    jogo.finalizar();
  }
 
}


