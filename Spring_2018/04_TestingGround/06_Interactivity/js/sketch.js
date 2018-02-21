// ***** Global variables ***** //
var moviesTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;
var buttonLabels = ['All Movies', '10M+ Budget', '< 10M Budget'];
var buttonStartX = 320;
var buttonStartY = 15;
var buttonLength = 120;
var buttonHeight = 20;
var buttonSpacing = 10;
var selectedButton = 0;
var topBudget = new p5.Table;
var bottomBudget = new p5.Table;

// ***** Preload function ***** //
function preload(){
  moviesTable = loadTable('../data/tmdb_5000_movies.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(moviesTable.getRowCount() + ' rows loaded...');
  print(moviesTable.getColumnCount() + ' columns loaded...');
  createNewTable();
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

// ***** Create new table function ******* //
function createNewTable(){
  topBudget.addColumn('release_date');
  topBudget.addColumn('vote_average');
  bottomBudget.addColumn('release_date');
  bottomBudget.addColumn('vote_average');
  for (var i = 0; i < moviesTable.getRowCount(); i++) {
    var budget = moviesTable.getNum(i, 'budget');
    if (budget >= 10000000) {
      var newRow = topBudget.addRow();
      newRow.setString('release_date', moviesTable.getString(i, 'release_date'));
      newRow.setNum('vote_average', moviesTable.getNum(i, 'vote_average'));
    }
    else {
      var newRow = bottomBudget.addRow();
      newRow.setString('release_date', moviesTable.getString(i, 'release_date'));
      newRow.setNum('vote_average', moviesTable.getNum(i, 'vote_average'));
    }
  }
  print('New tables created...');
}

// ***** Draw movies function ***** //
function drawMovies(){
  if (selectedButton == 0) {
    fill(0);
    noStroke();
    for (var i = 0; i < moviesTable.getRowCount(); i++) {
      var date = moviesTable.getString(i, 'release_date').split('-')[0];
      var year = parseInt(date);
      var yearPosition = map(year, 1900, 2020, leftX, rightX);
      var scorePosition = map(moviesTable.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
  }
  else if (selectedButton == 1){
    fill(220);
    noStroke();
    for (var i = 0; i < bottomBudget.getRowCount(); i++) {
      var date = bottomBudget.getString(i, 'release_date').split('-')[0];
      var year = parseInt(date);
      var yearPosition = map(year, 1900, 2020, leftX, rightX);
      var scorePosition = map(bottomBudget.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < topBudget.getRowCount(); i++) {
      var date = topBudget.getString(i, 'release_date').split('-')[0];
      var year = parseInt(date);
      var yearPosition = map(year, 1900, 2020, leftX, rightX);
      var scorePosition = map(topBudget.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
  }
  else {
    fill(220);
    noStroke();
    for (var i = 0; i < topBudget.getRowCount(); i++) {
      var date = topBudget.getString(i, 'release_date').split('-')[0];
      var year = parseInt(date);
      var yearPosition = map(year, 1900, 2020, leftX, rightX);
      var scorePosition = map(topBudget.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < bottomBudget.getRowCount(); i++) {
      var date = bottomBudget.getString(i, 'release_date').split('-')[0];
      var year = parseInt(date);
      var yearPosition = map(year, 1900, 2020, leftX, rightX);
      var scorePosition = map(bottomBudget.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
  }
}

// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(CENTER, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(200);
    }
    else {
      fill(240);
    }
    stroke(100);
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
  }
}

// ***** Draw function ***** //
function draw(){
  background(255);
  drawLabels();
  drawMovies();
  drawButtons();
}

// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 2;
    redraw();
  }
}
