// player start /
var player1X = 100;
var player1Y = 100;
// movement key codes /
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// circle starts /
var shapeX = 30;
var shapeY = 50;
var shapeD = 10;
var shape2X = 130;
var shape2Y = 50;
var shape3X = 230;
var shape3Y = 50;
var shape4X = 330;
var shape4Y = 50;
var shapeXSpeed;
var shapeYSpeed;

// mouse obstacle /
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 400);
    // start speeds /
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(50,100,120);
    stroke(0);
    fill(0);
    // top border /
    rect(0,0,width,5);
    // left border /
    rect(0,0,5,height);
    // bottom border /
    rect(0, height-5,width, 5);
    // right border short for exit /
    rect(width-5,0,5,height-50);

    // exit sign /
    textSize(16);
    text("EXIT", width-45,height-53)

    //player1 /
    fill(50,200,200);
    circle(player1X,player1Y,45);

    // player1 movement /
    if(keyIsDown(w))
    {
        player1Y -= 10;   
    }
    if(keyIsDown(s))
    {
        player1Y += 10;   
    }
    if(keyIsDown(a))
    {
        player1X -= 10;   
    }
    if(keyIsDown(d))
    {
        player1X += 10;   
    }
  
  //square "pillar" obstacles /
fill(150,50,100);
  square(80, 20, 55);
  
  square(180, 120, 55);
  
  square(280, 220, 55);
  
  square(380, 320, 55);
  

    // circle shot obstacles /
    fill(259,245,14);
    circle(shapeX, shapeY, shapeD);
      fill(250,255,0);
    circle(shape2X, shape2Y, 10);
      fill(213,245,14);
    circle(shape3X, shape3Y, 20);
      fill(213,245,14);
    circle(shape4X, shape4Y, 10);

     // all circles get random speeds /
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shape4XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape4YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // circles move /
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
  shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
  shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;
  shape4X += shape4XSpeed;
    shape4Y += shape4YSpeed;
  
    // if circles shoot off grid /
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
      if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
      if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }
      if(shape4X > width)
    {
        shape4X = 0;
    }
    if(shape4X < 0)
    {
        shape4X = width;
    }
    if(shape4Y > height)
    {
        shape4Y = 0;
    }
    if(shape4Y < 0)
    {
        shape4Y = height;
    }
  
  //one craxy circle shape /
        if(shapeD <= 10)
        {
            shapeD+=30;
        }
          
        else if(shapeD > 20 && shapeD <= 40)
        {
            shapeD +=2;
        }
        else if(shapeD > 40)
        {
            shapeD = 25;
        }
  
  
    // player exit /
    if(player1X > width && player1Y > width-1910)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("WINNER!", width/2-50, height/2-50);
    }
// mouse click obstacle /
   fill(120, 230, 140);
  circle(mouseShapeX, mouseShapeY, 25);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
