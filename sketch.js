var car, wall; 
var safe_carImg,lethal_carImg,average_carImg,white_carImg;
var speed, weight; 

function preload(){

 white_carImg = loadImage("White Car.jpg");
 safe_carImg = loadImage("Safe(Green).jpg");
 average_carImg = loadImage("Average(Yellow).jpg");
 lethal_carImg = loadImage("Lethal(Red).jpg");
 wall_Img = loadImage("Wall.jpg");
}

function setup() {

  createCanvas(1400,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50,50);
  car.shapeColor="white";
  car.addImage(white_carImg);
  car.scale=0.5;
  car.addAnimation("safe",safe_carImg);
  car.addAnimation("average",average_carImg);
  car.addAnimation("lethal",lethal_carImg);
  car.velocityX=speed;

  wall=createSprite(1200, 200, 40, 200);
  wall.shapeColor="grey";
  wall.addImage(wall_Img);

}

function draw() {
  background("black");

  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
    
      car.velocityX=0;

    if(((0.5*weight*speed*speed)/22500)>180){
      car.changeAnimation("lethal",lethal_carImg);
    
    }else if(((0.5*weight*speed*speed)/22500)<80){
      car.changeAnimation("safe",safe_carImg);
    
    }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80){
      car.changeAnimation("average",average_carImg);
    }
 }
 
 drawSprites();
} 