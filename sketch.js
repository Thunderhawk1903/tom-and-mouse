var bg, bgImg;
var cat, mouse;
var cat2Img, mouse2Img; 
var cat1Img, mouse1Img;
var canvas;
 
function preload() {
   bgImg=loadImage("images/garden.png");
   cat1Img=loadAnimation("images/cat1.png");
   mouse1Img=loadAnimation("images/mouse1.png")
cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")

}

function setup(){
    canvas=createCanvas(1000, 800);
 
    cat=createSprite(800,600);
  cat.addAnimation("cat1",cat1Img);
  cat.scale=0.1;
 
  mouse=createSprite(200,600) 
 mouse.addAnimation("mouse1",mouse1Img);
mouse.scale=0.1;
}

function draw() {
    background(bgImg);
    
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX=0;
cat.destroy();
mouse.destroy();
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  cat.velocityX=-5;

mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseteasing");
mouse.frameDelay = 25;


}

}
