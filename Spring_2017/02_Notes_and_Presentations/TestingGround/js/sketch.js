// ***** Global variables ***** //
var nervousBall = []; // Declaring the Array of objects
var blackWhole;

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  for (var i = 0; i < 50; i++) {
    nervousBall.push(new Jitter()); // Create the objects
  }
}

// ***** Draw function ***** //
function draw(){
  background(255);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].update();
    nervousBall[i].display();
  }
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.position = createVector(random(100, width - 100), random(100, height - 100));
  this.diameter = random(10, 50);
  this.maxVelocity = 10;
  this.velocity = createVector(random(-this.maxVelocity, this.maxVelocity),random(-this.maxVelocity, this.maxVelocity));
  this.fill = random(0, 360);

  // Function
  this.display = function(){
    stroke(1);
    fill(this.fill, 100, 100, 75);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
  this.update = function(){
    if ((this.position.x + this.diameter/2) > width || (this.position.x - this.diameter/2) < 0){
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y + this.diameter/2) > height || (this.position.y - this.diameter/2) < 0){
      this.velocity.y = this.velocity.y * -1;
    }
    this.position.add(this.velocity);
  }
}
