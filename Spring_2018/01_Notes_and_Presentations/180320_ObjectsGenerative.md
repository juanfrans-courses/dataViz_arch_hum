# Notes Week 8 (March 20, 2018) - Objects and Generative Design

## Generative Design
* **Generative art**: Generative art refers to art that in whole or in part has been created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist (Wikipedia).
* **Generative systems**:
  * Cellular Automata:
    * [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life))
    * [Live Google Version](https://www.google.com/search?q=conway%27s+game+of+life&rlz=1C5CHFA_enUS727US727&oq=conway&aqs=chrome.2.69i57j69i60j0l4.2905j0j1&sourceid=chrome&ie=UTF-8)
  * [Boids](https://en.wikipedia.org/wiki/Boids) (Craig Raynolds flocking algorithms):
    * p5.js examples:
      * [Flocking example in p5.js](https://p5js.org/examples/hello-p5-flocking.html)
      * [Another flocking example in p5.js](https://p5js.org/examples/simulate-flocking.html)
    * Three.js examples:
      * [Flocking example in three.js](https://threejs.org/examples/webgl_gpgpu_birds.html)
      * [Another flocking example in three.js](https://threejs.org/examples/canvas_geometry_birds.html)
    * D3.js examples:
      * [Flocking example in d3.js](https://bl.ocks.org/veltman/995d3a677418100ac43877f3ed1cc728)
* Some examples of generative design in art:
  * Manfred Mohr: [P-112a (Lady Quark)](http://www.bitforms.com/mohr/p-112a-lady-quark)
  * [Casey Reas](http://reas.com/)
  * [Robert Hodgin](http://roberthodgin.com/portfolio/)
  * [Poetry on the Road](http://www.esono.com/boris/projects/poetry12/)
  * [Onformative Studio](http://onformative.com/work):
    * [Generative Design](http://onformative.com/work/book-generative-gestaltung)
    * [Generative Design 2 (p5.js)](http://www.generative-gestaltung.de/2/):
      * [M_1_5_01](http://alpha.editor.p5js.org/generative-design/sketches/M_1_5_01)
      * [M_1_2_01](http://alpha.editor.p5js.org/generative-design/sketches/M_1_2_01)
      * [P_2_2_1_01](http://alpha.editor.p5js.org/generative-design/sketches/P_2_2_1_01)
      * [P_2_2_1_02](http://alpha.editor.p5js.org/generative-design/sketches/P_2_2_1_02)
      * [P_2_2_4_01](http://alpha.editor.p5js.org/generative-design/sketches/P_2_2_4_01)
      * [P_2_2_4_02](http://alpha.editor.p5js.org/generative-design/sketches/P_2_2_4_02)
      * [P_2_2_5_01](http://alpha.editor.p5js.org/generative-design/sketches/P_2_2_5_01)
      * [P_2_2_6_02](http://alpha.editor.p5js.org/generative-design/sketches/P_2_2_6_02)
      * [P_2_3_4_01](http://alpha.editor.p5js.org/generative-design/sketches/P_2_3_4_01)
      * [P_3_1_3_02](http://alpha.editor.p5js.org/generative-design/sketches/P_3_1_3_02)
      * [P_3_1_3_03](http://alpha.editor.p5js.org/generative-design/sketches/P_3_1_3_03)
      * [M_1_5_02](http://alpha.editor.p5js.org/generative-design/sketches/M_1_5_02)
      * [M_1_5_03](http://alpha.editor.p5js.org/generative-design/sketches/M_1_5_03)
* The idea for our class is to use these systems but give them a data sub-structure.
  * [Examples](http://tulpinteractive.com/)
  * [Terre Natale - Exits](http://www.spatialinformationdesignlab.org/projects/terre-natale-exits-part-2)

## Demo with objects
### Starting template
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Generative Design</title>
    <!-- Google fonts code -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet">
    <!-- Link to the p5.js library -->
    <script language="javascript" type="text/javascript" src="js/p5.js"></script>
    <!-- Link to p5 sketch file -->
    <script language="javascript" type="text/javascript" src="js/sketch.js"></script>
  </head>
  <body>
    <div class="title">
      <h1>Generative Design</h1>
    </div>
  </body>
</html>
```
### Nervous ball
Here's the first example of an object, a nervous ball.
```js
// *** Global variables *** //
var nervousBall; // Declaring an empty variable to hold the object

// *** Definition of the Jitter class *** //
function Jitter(){
  // *** Properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20, 50);
  this.speed = 2;
  stroke(0);
  fill(245);
  // *** Functions
  this.drawBall = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.update = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }
}

// *** Setup function *** //
function setup(){
  createCanvas(800, 500);
  nervousBall = new Jitter(); // Creates the object, member of the class "Jitter"
}

// *** Draw function *** //
function draw(){
  background(255);
  nervousBall.drawBall();
  nervousBall.update();
}
```

### Multiple nervous balls
```js
// *** Global variables *** //
var nervousBall = []; // Declaring an empty variable to hold the object

// *** Definition of the Jitter class *** //
function Jitter(){
  // *** Properties
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20, 50);
  this.speed = 2;
  stroke(0);
  fill(245);
  // *** Functions
  this.drawBall = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.update = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }
}

// *** Setup function *** //
function setup(){
  createCanvas(800, 500);
  for (var i = 0; i < 20; i++) {
    nervousBall.push(new Jitter()); // Create multiple objects
  }
}

// *** Draw function *** //
function draw(){
  background(255);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].drawBall();
    nervousBall[i].update();
  }
}
```

### Interacting with the mouse
```js
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
```
