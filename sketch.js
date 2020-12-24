var fixedRect, movingRect,abc,xyz;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  abc=createSprite(200,200,50,50);
  abc.shapeColor="blue";
  xyz=createSprite(500,500,60,60);
  xyz.shapeColor="brown";
 // movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(eff(xyz,movingRect)) {
    movingRect.shapeColor="red";
    xyz.shapeColor="red";
  }
  else if(eff(abc,movingRect)){
    movingRect.shapeColor="red";
    abc.shapeColor="green";
  }

  else {
    movingRect.shapeColor="green";
    xyz.shapeColor="brown";
    abc.shapeColor="blue";
  }
  drawSprites();
}

