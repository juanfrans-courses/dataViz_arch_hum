// var nervousBall = []; // This is the object
//
// function Jitter(budget, popularity, movieName){ // This defines the class
//   // Properties
//   this.x = 400;
//   this.y = 400;
//   this.diameter = 50;
//   this.distanceToMouse = 0;
//   this.budget = map(budget, 0, 380000000, 0, 255);
//   this.popularity = map(popularity, 0, 900, 1, 5);
//   this.name = movieName;
//
//   // Behaviors
//   this.drawBall = function(){
//     // this.distanceToMouse = map(dist(mouseX, mouseY, this.x, this.y), 0, 400, 0, 255);
//     fill(this.budget);
//     ellipse(this.x, this.y, this.diameter, this.diamter);
//     text(this.name, this.x, this.y);
//   }
//   this.update = function(){
//     this.x = this.x + random(-this.popularity, this.popularity);
//     this.y = this.y + random(-this.popularity, this.popularity);
//   }
// }

// function setup(){
//   createCanvas(1200,800);
//   for (var i = 0; i < 500; i++){
//     var budget = moviesTable.getNum(i, 'budget');
//     var popularity = moviesTable.getNum(i, 'popularity');
//     var movieName = moviesTable.getString(i, 'original_title')
//     nervousBall.push(new Jitter(budget, popularity, movieName));
//   }
// }

// function draw(){
//   background(255);
//   stroke(0.5);
//   for (var i = 0; i < nervousBall.length; i++){
//     nervousBall[i].drawBall();
//     nervousBall[i].update();
//   }
// }


// ***** Global variables ***** //
var moviesTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 1100;
var textLeft = 30;
var nervousBall = []; // This is the object

// ***** Preload function ***** //
function preload(){
  moviesTable = loadTable('data/500TopBudgetMovies.csv', 'csv', 'header');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(1200, 800);
  textSize(12);
  textFont('Roboto');
  print(moviesTable.getRowCount() + ' rows loaded...');
  print(moviesTable.getColumnCount() + ' columns loaded...');
  console.log('Done loading table...');
  console.log('Setup complete...');
  noLoop();
}

// ***** Labels Function ********* //
function drawLabels() {
  fill(0);
  textAlign(LEFT, CENTER);
  text("AVERAGE RATING OF SELECTED MOVIES", textLeft - 15, topY - 25);
  textAlign(RIGHT, CENTER);
  for (var i = 0; i < 11; i++) {
    noStroke();
    text(i, textLeft, map(i, 0, 10, bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, 0, 10, bottomY, topY), rightX + 10, map(i, 0, 10, bottomY, topY));
  }
  textAlign(CENTER, CENTER);
  for (var i = 1900; i < 2021; i+=20) {
    noStroke();
    text(i, map(i, 1900, 2020, leftX, rightX), bottomY + 25);
    stroke(200);
    line(map(i, 1900, 2020, leftX, rightX), bottomY + 12, map(i, 1900, 2020, leftX, rightX), bottomY + 5);
  }
}

// ***** Draw movies function ***** //
function drawMovies(){
  fill(255, 100, 100);
  noStroke();
  for (var i = 0; i < moviesTable.getRowCount(); i++) {
    var date = moviesTable.getString(i, 'release_date').split('-')[0];
    var year = parseInt(date);
    var yearPosition = map(year, 1980, 2020, leftX, rightX);
    var scorePosition = map(moviesTable.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
    ellipse(yearPosition, scorePosition, 3, 3);
  }
}

// ***** Draw function ***** //
function draw(){
  background(255);
  drawLabels();
  drawMovies();
}

// ****** Mouse pressed function ******* //
// function mousePressed(){
//   if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
//     selectedButton = 0;
//     redraw();
//   }
//   else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
//     selectedButton = 1;
//     redraw();
//   }
//   else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
//     selectedButton = 2;
//     redraw();
//   }
// }
