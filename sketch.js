var ball;


function setup() {

  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
  ball.velocityX = 10;
}

function draw() 
{
  background(30);

  drawSprites();
}




