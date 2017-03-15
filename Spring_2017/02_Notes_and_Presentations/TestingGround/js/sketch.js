// ***** Global variables ***** //
var numberSquares = 40;
var startY = 50;
var startX = 50;
var squareLength = 20;

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
    noStroke();
    for (var i = 0; i < numberSquares; i++) {
      for (var j = 0; j < numberSquares; j++) {
        fill(map(i, 0, numberSquares, 0, 360), map(j, 0, numberSquares, 0, 100), 100);
        rect(startX + squareLength * i, startY + squareLength * j, squareLength, squareLength);
      }
    }
}
