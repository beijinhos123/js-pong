// variaveis da bolinha
let xBolinhạ;
let yBolinhạ̣̣;
let diametrpọ̣̣;

xBolinha = width/2;
yBolinha = height/2;
diametro = 20;

let velocidadeX;
let velocidadeY;

velocidadeX = 6;
velocidadeY = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 
  
  desenhaBolinha();
}
function desenhaBolinha(){
 xBolinha = width/2;
  yBolinha = height/2;
 diametro = 20;
 
 
 circle(xBolinha, yBolinha, diametro);
} 

function movimentaBolinha(){
  velocidadeX = 6;
  velocidade = 4;
  
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}
