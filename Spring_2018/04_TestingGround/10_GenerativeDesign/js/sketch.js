var myFirstObject = [];

function Jitter(size, directionX, directionY){
  //Properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = size;
  this.myFill = 255;
  this.directionX = directionX;
  this.directionY = directionY;

  //Functions
  this.drawBall = function(){
    fill(this.myFill);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.update = function (){
    if (this.x > width || this.x < 0){
      this.directionX = -this.directionX;
    }
    else {
      this.directionX = this.directionX;
    }
    if (this.y > height || this.y < 0){
      this.directionY = -this.directionY;
    }
    else {
      this.directionY = this.directionY;
    }
    this.x = this.x + this.directionX;
    this.y = this.y + this.directionY;
  }
}

function setup(){
  createCanvas(800, 800);
  for (var i = 0; i < 100; i++){
    var mySize = random(10, 50);
    var myDirectionX = random(-5, 5);
    var myDirectionY = random(-5, 5);
    myFirstObject.push(new Jitter(mySize, myDirectionX, myDirectionY));
  }
}

function draw(){
  background(240);
  for (var i = 0; i < myFirstObject.length; i++){
    myFirstObject[i].drawBall();
    myFirstObject[i].update();
  }
}
