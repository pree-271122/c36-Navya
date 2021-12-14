var bg;
var form;
var player;
var game;

function preload(){
bg=loadImage("assets/background.png")

}
function setup(){
createCanvas(windowWidth,windowHeight);
database=firebase.database();

game= new Game()
game.start();
}
function draw(){
background(bg);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}