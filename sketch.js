var shipImg;
var sea12;

var sea;
var ship;

function preload(){
sea12 = loadImage("./sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
ship = createSprite(200,180,400,20);
ship.addAnimation("ship1",shipImg);

  sea = createSprite(200,180,400,20);
  sea.addImage("sea1",sea12);
  

  //code to reset the background
if(sea.x < 0){
sea.x = sea.width/2;


}

}

function draw() {
  background("blue");
 drawSprites()
}