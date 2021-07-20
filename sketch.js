var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("spacebg.jpg");//Load images
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);//Create sprites
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.85;
}
function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){//Shaking of spacecraft
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){//Keys to move spacecraft
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}
  if(spacecraft.y <= (iss.y+60) && spacecraft.x <= (iss.x-50) && spacecraft.x >=(iss.x-70)){//Check docking of spacecraft
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}