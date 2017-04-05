## Notes 04/07/2017 - Objects and Generative Art

### Plan
* [Tumblr blog](https://dataviz2017spring.tumblr.com/)
* Go over examples of generative art
* Demo (objects + data):
  * Difference between class and object

### Definition and examples
* **Generative art**: Generative art refers to art that in whole or in part has been created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist (Wikipedia).
* **Generative systems**:
  * Cellular Automata (ie. [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)) + [Live Google Version](https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enUS727US727&ion=1&espv=2&ie=UTF-8#q=conway's+game+of+life&*)
  * [Boids](https://en.wikipedia.org/wiki/Boids) (Craig Raynolds flocking algorithms)
* Very frequently done with [Processing](www.processing.org).
* Keith Tyson: [Wonders of the World: Nature (Window on an Infinite Cellular Blanket) Version II](http://keithtyson.com/work/wonders-world-nature-window-infinite-cellular-blanket-version-ii/) and [A Window on an Infinite Cellular Blanket-V2](http://keithtyson.com/work/aug-1999-window-infinite-cellular-blanket-v2/)
* Manfred Mohr: [P-112a (Lady Quark)](http://www.bitforms.com/mohr/p-112a-lady-quark)
* [Casey Reas](http://reas.com/)
* [Robert Hodgin](http://roberthodgin.com/portfolio/)
* [Onformative Studio](http://onformative.com/work) + [Generative Design](http://onformative.com/work/book-generative-gestaltung)
* [Poetry on the Road](http://www.esono.com/boris/projects/poetry12/)
* The idea for our class is to use these systems but give them a data sub-structure.

### Demo
* Start with a blank html and a blank sketch.js.

#### Starting HTLM
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Assignment 01</title>

    <!-- Stylesheet link -->
    <link rel="stylesheet" type="text/css" href="../css/site-specific.css">

    <!-- Google fonts code -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet">

    <!-- Loading p5.js library -->
    <script language="javascript" type="text/javascript" src="../libraries/p5.js"></script>
    <script language="javascript" type="text/javascript" src="../libraries/addons/p5.dom.js"></script>

    <!-- Link to p5 sketch file -->
    <script language="javascript" type="text/javascript" src="../js/sketch.js"></script>
  </head>
  <body>
  </body>
</html>
```

#### Creating a simple object
```js
// ***** Global variables ***** //
var nervousBall; // Declaring the object

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  nervousBall = new Jitter(); // Create the object
}

// ***** Draw function ***** //
function draw(){
  background(255);
  nervousBall.display();
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 50);
  stroke(1);
  fill(255, 255, 100);
  // Function
  this.display = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
```

#### Adding behavior (that updates) to that object
```js
// ***** Global variables ***** //
var nervousBall; // Declaring the object

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  nervousBall = new Jitter(); // Create the object
}

// ***** Draw function ***** //
function draw(){
  background(255);
  nervousBall.display();
  nervousBall.update();
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 50);
  this.speed = 2;
  stroke(1);
  fill(255, 255, 100);
  // Function
  this.display = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.update = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
}
```

#### Adding multiple objects with behavior
```js
// ***** Global variables ***** //
var nervousBall = []; // Declaring the Array of objects

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  for (var i = 0; i < 50; i++) {
    nervousBall.push(new Jitter()); // Create the objects
  }
}

// ***** Draw function ***** //
function draw(){
  background(255);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].display();
    nervousBall[i].update();
  }
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 50);
  this.speed = 2;
  stroke(1);
  fill(255, 255, 100, 75);
  // Function
  this.display = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.update = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
}
```

#### Another type of behavior
```js
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
  blackWhole = createVector(400, 400);
}

// ***** Draw function ***** //
function draw(){
  background(255);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].display();
    nervousBall[i].calculateDistance();
    nervousBall[i].update();
  }
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(blackWhole.x, blackWhole.y, 200, 200);
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.position = createVector(random(width), random(height));
  this.diameter = random(10, 50);
  this.maxVelocity = 1;
  this.velocity = createVector(random(-this.maxVelocity, this.maxVelocity),random(-this.maxVelocity, this.maxVelocity));
  this.fill = 200;
  this.maxForce = 5;
  var gravity = 0.12;
  var distBlackWhole;
  var influenceArea = 100;

  // Function
  this.display = function(){
    stroke(1);
    fill(this.fill, 100, 100, 75);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
  this.calculateDistance = function(){
    distBlackWhole = this.position.dist(blackWhole);
  }
  this.update = function(){
    if (distBlackWhole < influenceArea){
      var steerVector = p5.Vector.sub(blackWhole, this.position);
      steerVector.limit(gravity);
      this.velocity.add(steerVector);
      this.velocity.limit(this.maxForce);
      this.position.add(this.velocity);
      this.fill = 255;
    }
    else{
      this.position.add(this.velocity);
      this.fill = 100;
    }
    if (this.position.x > width){
      this.position.x = 0;
    }
    if (this.position.y > height){
      this.position.y = 0;
    }
    if (this.position.x < 0){
      this.position.x = width;
    }
    if (this.position.y < 0){
      this.position.y = height;
    }
  }
}
```

#### Final script
```js
// ***** Global variables ***** //
var nervousBall = []; // Declaring the Array of objects
var blackWholes = [];

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  for (var i = 0; i < 200; i++) {
    nervousBall.push(new Jitter()); // Create the objects
  }
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      blackWholes[j + i * 5] = createVector(20 + width / 5 * j, 20 + height / 5 * i);
    }
  }
}

// ***** Draw function ***** //
function draw(){
  // background(255);
  fill(0, 0, 100, 5);
  noStroke();
  // rect(0, 0, width, height);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].display();
    nervousBall[i].calculateDistance();
    nervousBall[i].update();
  }
  stroke(0);
  strokeWeight(1);
  noFill();
  // for (var i = 0; i < blackWholes.length; i++) {
  //   ellipse(blackWholes[i].x, blackWholes[i].y, 100, 100);
  // }
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.position = createVector(random(width), random(height));
  this.diameter = random(1, 2);
  this.maxVelocity = 1;
  this.velocity = createVector(random(-this.maxVelocity, this.maxVelocity),random(-this.maxVelocity, this.maxVelocity));
  this.fill = 200;
  this.maxForce = 5;
  var gravity = 0.12;
  var distBlackWhole;
  var influenceArea = 50;
  var targetBlackWhole;
  var inRange = false;

  // Function
  this.display = function(){
    noStroke();
    fill(this.fill, 100, 100, 100);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
  this.calculateDistance = function(){
    inRange = false;
    for (var i = 0; i < blackWholes.length; i++) {
      distBlackWhole = this.position.dist(blackWholes[i]);
      if (distBlackWhole < influenceArea){
        inRange = true;
        targetBlackWhole = i;
      }
    }
  }
  this.update = function(){
    if (inRange){
      var steerVector = p5.Vector.sub(blackWholes[targetBlackWhole], this.position);
      steerVector.limit(gravity);
      this.velocity.sub(steerVector);
      this.velocity.limit(this.maxForce);
      this.position.add(this.velocity);
    }
    else{
      this.position.add(this.velocity);
    }
    if (this.position.x > width){
      this.position.x = 0;
    }
    if (this.position.y > height){
      this.position.y = 0;
    }
    if (this.position.x < 0){
      this.position.x = width;
    }
    if (this.position.y < 0){
      this.position.y = height;
    }
  }
}
```
