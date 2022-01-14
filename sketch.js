var b, enemyImage, ballImage, scene, ball , score=0, opscore=0, speed=5, Yoda

function preload(){
  
  b = loadImage("b.png");
  enemyImage = loadImage("Yoda.jfif");
  ballImage = loadImage("ball.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(200,200);
  scene.addImage(b)
  ball = createSprite(200,345,200,345)
  ball.addImage(ballImage)
  ball.scale=0.1

  Yoda1 = createSprite(200,280,10,10)
  Yoda2 = createSprite(200,170,10,10)
  Yoda3 = createSprite(200,50,10,10)
  Yoda1.addImage(enemyImage)
  Yoda2.addImage(enemyImage)
  Yoda3.addImage(enemyImage)

  Yoda1.scale=0.2
  Yoda2.scale=0.2
  Yoda3.scale=0.2


  
   score = 0    
}

function draw() {
 background(0);
 createEdgeSprites()

 Yoda1.x=Yoda1.x+speed
 Yoda2.x=Yoda2.x-speed
 Yoda3.x=Yoda3.x+speed

 if(Yoda1.x<0 || Yoda1.x>width)
 {
   speed=speed*-1
 }



if(keyDown(UP_ARROW)){
  ball.y=ball.y-3
}

if(keyDown(DOWN_ARROW)){
  ball.y=ball.y+3
}

if(keyDown(LEFT_ARROW)){
  ball.x=ball.x-3
}

if(keyDown(RIGHT_ARROW)){
  ball.x=ball.x+3
}

if(ball.isTouching(Yoda1)|| ball.isTouching(Yoda2)|| ball.isTouching(Yoda3)){
    ball.x=200
  ball.y=350
  opscore = opscore+1
}
if(ball.y<0){
  ball.x=200
  ball.y=345
  score=score+1
}


drawSprites();
textSize(15)
  fill("blue")
  text("Humans:"+score,328,30);
  

textSize(15)
  fill("red")
  text("Yoda:"+opscore,5,30);
  

    

}



