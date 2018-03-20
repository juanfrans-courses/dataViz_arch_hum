// *** Global variables *** //
var nervousBall = []; // Declaring an empty variable to hold the object

// *** Definition of the Jitter class *** //
function Jitter(){
  // *** Properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20, 50);
  this.speed = 2;
  this.distance = 20;
  stroke(0);
  // *** Functions
  this.drawBall = function(){
    fill(190, this.distance, 90);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.update = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
    this.distance = map(dist(this.x, this.y, mouseX, mouseY), 0, width, 0, 100);
  }
}

// *** Setup function *** //
function setup(){
  createCanvas(800, 500);
  colorMode(HSB, 360, 100, 100);
  for (var i = 0; i < 20; i++) {
    nervousBall.push(new Jitter()); // Create multiple objects
  }
}

// *** Draw function *** //
function draw(){
  background(0, 0, 100);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].drawBall();
    nervousBall[i].update();
  }
}
