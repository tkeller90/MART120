function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120,0,110);

  // head /
fill (128, 128, 255)
  ellipse(200, 120, 100, 100);


   // mouth straight line /
  fill (100, 0, 50);
  line(190, 140, 210, 140);
  line(215, 137, 210, 140);

  // eyes/
point(190, 110);
point(210, 110);
strokeWeight(2);

  //top of hat/
  fill (255,200, 0)
  triangle(120, 75, 200, 50, 270, 75);
    // bottom of hat/
  fill (255, 200, 0);
  rect(100, 75, 200, 10);

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
  rect(150, 240, 40, 130);

      // left leg /
  fill (128, 128, 255);
  rect(210, 240, 40, 130);
  
      // torso / 
  fill (128, 128, 255);
 rect(150, 170, 100, 100, 40);

  
textSize(32);
  fill (50);
text('The human is me.', 20, 45);
fill(50);
text('Tegan K.', 270, 375);
  
}
