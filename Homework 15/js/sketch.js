// player1 start /
var player1X = 100;
var player1Y = 100;
// movement key codes /
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// circle start /
var shapeX = 50;
var shapeY = 50;

//arrays circles
var shapeXs = [];
var shapeYs = [];
var shapeDs = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// mouse click /
var mouseShapeX;
var mouseShapeY;

//SCENE SETUP
    function setup(){
    createCanvas(500, 400);
      
      function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
  
    // arrays random speeds /
 for (var i = 0; i < 40; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(400);
        shapeDs[i] = getRandomNumber(30);
    }
}
//DRAWING
    function draw(){
    background(50,100,120);
    stroke(0);
    fill(0);
  
    //create borders function /
    createBorders(5);

    // exit sign /
    textSize(16);
    text("EXIT", width-45,height-53)
      
        //square "pillar" scenry /
    fill(150,50,100);
    square(200, 120, 55);
      fill(100,30,220)
    square(200, 300, 55);
            fill(100,200,20)
    square(130, 100, 55);
            fill(100,30,20)
    square(280, 220, 55);
            fill(10,30,200)
    square(380, 50, 55);

    //create player1(100,100); /
    drawPlayer1();
    player1Movement();
  
    // enemy circles shoosting /
    fill(259,245,14);
     // all circles get random speeds /
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], shapeDs[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // out of bounds comes back
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
      
  
    // player exit /
    if(player1X > width && player1Y > width-500)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("YOU WIN!", width/2-50, height/2-50);
    }
  
  // mouse click obstacle /
   fill(120, 230, 140);
  circle(mouseShapeX, mouseShapeY, 25);
}}

//PLAYER1 MOVEMENT CONTROLS
  function player1Movement()
  {
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
  }
  //PLAYER1 CREATION
  function createPlayer1(x,y)
  {
    player1X = x;
    player1Y = y;
    console.log(player1X);
    //player1 /
    // circle(player1X,player1Y,25);/
  }
 //PLAYER1 APPEARANCE
  function drawPlayer1()
  {
    fill(50,200,200);
    circle(player1X,player1Y,45);
  }
  //BORDERS
  function createBorders(thickness)
  {
    // top border /
    rect(0,0,width,5);
    // left border /
    rect(0,0,5,height);
    // bottom border /
    rect(0, height-5,width, 5);
    // right border short for exit /
    rect(width-5,0,5,height-50);
  }
//MOUSE SHAPE
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
