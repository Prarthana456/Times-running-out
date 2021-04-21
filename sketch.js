var hr, min, sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(199, 153, 232);  
  drawSprites();
  stroke("purple");
  strokeWeight(3);
  textSize(20);
  text("What time is it? lets go analog in the 21st C" , 13,20);
  push();
  translate(200,200)
  rotate(-90)

  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  //Seconds Hand
  push();
  rotate(secAngle);
  stroke(127, 8, 212);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  //Minutes Hand
  push();
  rotate(minAngle);
  stroke(101, 63, 166);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  //Hour Hand
  push();
  rotate(hrAngle);
  stroke(56, 37, 153);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  //Centre Point
  stroke(0,0,0);
  point(0,0)

  //Arcs
  strokeWeight(10);
  noFill();

  stroke(127, 8, 212);
  arc(0,0,300,300,0,secAngle);

  stroke(101, 63, 166);
  arc(0,0,280,280,0,minAngle);

  stroke(56, 37, 153);
  arc(0,0,260,260,0,hrAngle);
  pop();
}
