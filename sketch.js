var ball;
var background;

function preload()
{
	ballImg=loadImage("ball.png");
	backgroundImg=loadImage("background.png");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	background=createSprite(200,200);
	background.addImage(backgroundImg);
	

	ball=createSprite(200,470);
	ball.addImage(ballImg);
	ball.scale=0.2;
	
	
}


function draw() {
  
  
  
  drawSprites();
  if(background.x<0){
	background.x=background.width/2
}
  if(touches.length> 0){
	  
	  background.x=background.x-10
	  ball.rotation=ball.rotation+10
	  ball.rotateToDirection=true
	  touches={}
	  
  }
 
}



