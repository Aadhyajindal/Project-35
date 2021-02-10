var ball,ballImage;
var position;
var bg = "BG.png";

function preload(){
 backgroundImg = loadImage(bg);
  ballImage= loadImage("Balloon.png")
}
  
  function setup() {
  createCanvas(500,500);
  ball= createSprite(400, 200, 50, 50);
  ball.addImage(ballImage);
}

function draw() {
  //background(backgroundImg);
  if(position !== undefined){
      if(keyDown(LEFT_ARROW)){
          writePosition(-1,0);
      }
      else if(keyDown(RIGHT_ARROW)){
          writePosition(1,0);
      }
      else if(keyDown(UP_ARROW)){
          writePosition(0,-1);
      }
      else if(keyDown(DOWN_ARROW)){
          writePosition(0,+1);
      }
       
      
      drawSprites();
  }
  
}

function changePosition(x,y){
  ball.x = balloon.x + x;
  ball.y = balloon.y + y;
}

function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function writePosition(x,y){
  database.ref('ball/position').set({
      'x': position.x + x,
      'y': position.y + y
  })
}