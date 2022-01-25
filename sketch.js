var bgImg, catImg, mouseImg;
var cat, mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg0 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg0 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg1 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("cat", catImg);
    cat.scale = 0.2;

    mouse = createSprite(130, 600);
    mouse.addAnimation("mouse", mouseImg);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX=0;
        cat.addAnimation("catlImg", catImg1);
        cat.changeAnimation("catlImg");
        cat.x=300;
        cat.scale = 0.2;
        mouse.addAnimation("mouselImg", mouseImg1);
        mouse.changeAnimation("mouselImg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode = LEFT_ARROW) {
      mouse.addAnimation("mousetease", mouseImg0);
      mouse.changeAnimation("mousetease");
      mouse.framedelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("catmove", catImg0);
      cat.changeAnimation("catmove");
      cat.framedelay = 25;
  }


}
