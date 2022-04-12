function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120,0,110);
  / head /
fill (100, 0, 50)
     ellipse(200, 120, 100, 100);
   / mouth straight line /
  fill (100, 0, 50);
  line(190, 140, 210, 140);
  line(215, 137, 210, 140);
  / eyes/
point(190, 110);
point(210, 110);
strokeWeight(2);
  
  
    / if i remove this one, it breaks the code and i don't know why so i just made it a hat?/
  fill (100, 15, 50);
  rect(100, 70, 200, 10);
      / shoulder /
  fill (100, 15, 50);
rect(130, 180, 140, 30, 30);
     / right arm / 
  fill (100, 15, 50);
  rect(250, 180, 30, 140, 30);
      / left arm / 
  fill (100, 0, 50);
  rect(120, 180, 30, 140, 30);
      / right leg /
  fill (100, 0, 50);
  rect(150, 240, 40, 130);
      / left leg /
  fill (100, 15, 50);
  rect(210, 240, 40, 130);
      / torso / 
  fill (100, 0, 50);
 rect(150, 170, 100, 100, 40);

  
textSize(32);
  fill(0, 102, 153);
text('The human is me.', 20, 45);
fill(0, 100, 150, 50);
text('Tegan K.', 270, 375);
  
}
