var tophatX = 200;
var tophatY = 50;
var tophatDirection = 2;

var hatrimX = 100;
var hatrimY = 75;
var hatrimDirection = 2;

var torsoX = 150;
var torsoY = 170;

var rightlegX = 150;
var rightlegY = 240;
var rightlegDirection = 2;

var leftlegX = 210;
var leftlegY = 240;
var leftlegDirection = 2;

var size = 22;
var count = 2;
var sizeDirection = 2;

var headX = 200;
var headY = 120;
var headSize = 10;


function setup() {
  createCanvas(400, 400);
  movement = floor(random() * 10) + 1;
}

function draw() {
  background(120,0,110);

  // head /
fill (128, 128, 255)
  ellipse(headX, headY, 100, 100);
        headSize+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  


   // mouth straight line /
  fill (100, 0, 50);
  line(190, 140, 210, 140);
  line(215, 137, 210, 140);

  // eyes/
point(190, 110);
point(210, 110);
strokeWeight(2);

  //top hat/
  fill (255,200, 0)
  triangle(120, 75, tophatX, tophatY, 270, 75);
          tophatX+=tophatDirection;
    if(tophatX >= 400 || tophatX <= 0)
    {
        tophatDirection *= -1;
    }
  
  
    // hat rim/
  fill (255, 200, 0);
  rect(hatrimX, hatrimY, 200, 10);
        hatrimX+=hatrimDirection;
    if(hatrimX >= 200 || hatrimX <= 0)
    {
        hatrimDirection *= -1;
       movement *= -1;

}
      // shoulder /
  fill (128, 128, 255);
rect(130, 180, 140, 30, 30);

     // right arm / 
  fill (128, 128, 255);
  rect(250, 180, 30, 140, 30);

      // left arm / 
  fill (128, 128, 255);
  rect(120, 180, 30, 140, 30);

      // right leg /
  fill (128, 128, 255);
  rect(rightlegX, rightlegY, 40, 130);
      rightlegY += rightlegDirection;
    if(rightlegY <= 0 || rightlegY >= 300 )
    {
        rightlegDirection *= -1 
       movement *= -1;

    }
  

      // left leg /
  fill (128, 128, 255);
  rect(leftlegX, leftlegY, 40, 130);
    leftlegY += leftlegDirection;
    if(leftlegY <= 0 || leftlegY >= 300 )
    {
        leftlegDirection *= -1;
    }
      // torso / 
  fill (128, 128, 255);
 rect(torsoX, torsoY, 100, 100, 40);

  fill(50);
textSize(32);
text('The human is me.', 20, 45);
fill(50);
textSize(size)
      size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
text('Tegan K.', 270, 375);
  
}
