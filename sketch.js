var fixedrectangle;
var movingrectangle;

function setup() {
  createCanvas(800,400);
  movingrectangle = createSprite(400, 200, 50, 20);
  movingrectangle.shapeColor = "orange";
  fixedrectangle = createSprite(200,200,50,10);
  fixedrectangle.shapeColor = "blue";
}

function draw() {
  background("green");  

  movingrectangle.x = mouseX;
  movingrectangle.y = mouseY;

  if(movingrectangle.x - fixedrectangle.x < ((movingrectangle.width + fixedrectangle.width)/2) && fixedrectangle.x - movingrectangle.x < (movingrectangle.width + fixedrectangle.width)/2 
   && movingrectangle.y - fixedrectangle.y < ((movingrectangle.height + fixedrectangle.height)/2) && fixedrectangle.y - movingrectangle.y < (movingrectangle.height + fixedrectangle.height)/2 ){
    fixedrectangle.shapeColor = "black";
    movingrectangle.shapeColor = "yellow";
  }else{
    fixedrectangle.shapeColor = "blue";
    movingrectangle.shapeColor = "orange";
  }



  drawSprites();
}