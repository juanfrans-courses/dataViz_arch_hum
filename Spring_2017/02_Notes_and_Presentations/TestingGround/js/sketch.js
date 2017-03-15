// ***** Global variables ***** //
var numberCircles = 20;
var startY = 50;
var startX = 50;
var circleDiameter = 20;
var distanceBetween = 40;
var minD = 5;
var maxD = 50;

// ***** Setup function ***** //
function setup(){
    createCanvas(1000, 3000);
    colorMode(HSB);
    textSize(12);
    console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
    background(255);
    stroke(0, 0, 25);
    strokeWeight(1);
    for (var i = 0; i < numberCircles; i++) {
      for (var j = 0; j < numberCircles; j++) {
        var distnaceToCircle = map(dist(startX + distanceBetween * i, startY + distanceBetween * j, mouseX, mouseY), 0, 1000, minD, maxD);
        fill(0, 0, map(distnaceToCircle, minD, maxD, 0, 100));
        ellipse(startX + distanceBetween * i, startY + distanceBetween * j, distnaceToCircle, distnaceToCircle);
      }
    }
}
