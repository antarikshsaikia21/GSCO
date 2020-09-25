var car,wall;
var speed,weight,thickness;




function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);

speed=random(55,90);
weight=(400,1500);

car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(1500,200,60,thickness,height/2);
wall.shapeColor=color(80,80,80);



}

function draw() {
  background(0,0,0);

  if(hasCollided(car,wall)){

    car.velocityX=0;
   var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
   
   if(deformation>180){
    car.shapeColor=color(255,0,0); 
   }
    if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0);
    }
 
 if(deformation<100){
 car.shapeColor=color(0,225,0);
 
  }
    
  }

drawSprites();

  }
  

  function hasCollided(lcar,lwall){
    carRightEdge=lcar.x+lcar.width;
    wallLeftEdge=lwall.x;
    if(carRightEdge>=wallLeftEdge){
      return true
    }
    return false;
  }