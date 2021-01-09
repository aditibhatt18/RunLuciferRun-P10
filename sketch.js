var jake, jakeImg, road, roadImg; 
var leftInvisible,rightInvisible;

function preload(){
  jakeImg = loadAnimation("Jake1.png", "Jake2.png","jake3.png", "jake4.PNG","jake5.png"); 
  roadImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  road = createSprite(200,300);
  road.addImage(roadImg);
  road.velocityY = -2;
  
  jake = createSprite(200,200,10,10); 
  jake.addAnimation("boy",jakeImg);
  
  leftInvisible = createSprite(50,200,10,400); 
  leftInvisible.visible = false;
  
  rightInvisible = createSprite(350,200,10,400); 
  rightInvisible.visible = false;
  
}

function draw() {
  background(0);

  if(road.y<0){
    road.y = road.height/2;  
  }
  
  jake.x = mouseX;
  jake.bounceOff(leftInvisible); 
  jake.bounceOff(rightInvisible); 
  
  drawSprites(); 
}
