function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50, 200, 20, 20);
 wall= createSprite(1500, 200, 60, 30);
  var car,wall;
  var speed,weight;
speed=random(55,90)
weight=random(400,1500)
var Deformation
}

function draw() {
  background(0,0,0);  
  drawSprites();
if(keyDown(UP_ARROW)){
  car.velocityX=speed;}
if(car.sprite isTouching wall.sprite){
deformation=(0.5*speed**speed/2250)
}
if(deformation=>100){
car.shapeColor=(0,255,0)
}
}