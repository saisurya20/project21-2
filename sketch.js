var wall,thickness;
var bullect,speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
thickness=random(22,83)
weight=random(30,52)
bullect=createSprite(50,200,50,5)
wall=createSprite(1400,200,60,height/2)
wall.shapeColor=color("black")
bullect.velocityX=2                                       
bullect.weight=32
bullect.speed=223
bullect.damage=3.68,12.43;
}


function draw() {
  background(255,255,255);  
hasCollided();
if(hasCollided(bullect,wall)){

  bullect.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness *thickness *thickness)
  if (damage>10)
  {
    wall.shapeColor=color("255,0,0")
  }
 
if(damage<10)
{
  wall.shapeColor=color("0,255,0")
}
}



  drawSprites();
}


function hasCollided(1bullect,1wall){
  bullectRightEdge=1bullect.x+1bullect.width
  wallLeftEdge=1wall.x
if (bullectRightEdge>=1wallLeftEdge) {
  return true;
  } else {
  return false
}
}