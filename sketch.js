var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redB,greenB,pinkB,blueB,arrowG
var score=0;

function preload(){
	@@ -29,7 +29,13 @@ function setup() {
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redB=new Group();
  greenB=new Group();
  pinkB=new Group();
  blueB=new Group();
  arrowG=new Group();  

   score = 0    
}

	@@ -50,7 +56,26 @@ function draw() {
    createArrow();

  }
  if(arrowG.isTouching(redB)){
    redB.destoryEach();
    arrowG.destoryEach();
    score=score+1;
  }
  if(arrowG.isTouching(greenB)){
   greenB.destoryEach();
   arrowG.destoryEach();
   score=score+1;
 }
 if(arrowG.isTouching(blueB)){
   blueB.destoryEach();
   arrowG.destoryEach();
   score=score+1;
 }
 if(arrowG.isTouching(pinkB)){
   pinkB.destoryEach();
   arrowG.destoryEach();
   score=score+1;
 }
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));

	@@ -80,6 +105,9 @@ function draw() {
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.lifetime=80;

  arrowG.add(arrow);
}

function redBalloon() {
	@@ -88,6 +116,8 @@ function redBalloon() {
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  redB.add(red);
}

function blueBalloon() {
	@@ -96,6 +126,8 @@ function blueBalloon() {
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

  blueB.add(blue);
}

function greenBalloon() {
	@@ -104,12 +136,16 @@ function greenBalloon() {
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;

  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;

 pinkB.add(pink);
}
