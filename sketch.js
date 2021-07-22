var pathImg, path, runner, left_boundary, right_boundary, subway, subwayImg, coin, coinImg, coinscore,song,slider;
function preload(){
 
  jakeImg=loadAnimation("Runner-1.png,Runner-2.png");
  pathImg=loadImage("path.png");
  subwayImg=loadImage("subway.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",runnerImg );
 runner =createSprite(200,80,100,100);
 runner .addImage(runnerImg);
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
  runner.collide(left_boundary);
  runner.collide(right_boundary);
  edges=createEdgeSprites();
  runner.collide(edges[3]);
drawSprites();
}


