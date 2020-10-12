var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() 
{
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 30);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw()
{
  background("white");

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    damage = 0.5*speed*weight*speed/(thickness*thickness*thickness);
    
  
    if(damage < 10)
    {
      wall.shapeColor = "green";
    }
  
    if(damage > 10)
    {
      wall.shapeColor = "red";
    }
  }
      
  drawSprites();
}
