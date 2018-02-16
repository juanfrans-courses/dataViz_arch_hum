// ***** Global variables ***** //
var moviesTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;

// ***** Preload function ***** //
function preload(){
  moviesTable = loadTable('../data/tmdb_5000_movies.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(RIGHT, CENTER);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(moviesTable.getRowCount() + ' rows loaded...');
  print(moviesTable.getColumnCount() + ' columns loaded...');
  noLoop();
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(0);
  for (var i = 0; i < 11; i++) {
    noStroke();
    text(i, textLeft, map(i, 0, 10, bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, 0, 10, bottomY, topY), rightX + 10, map(i, 0, 10, bottomY, topY));
  }
  noStroke();
  for (var i = 0; i < moviesTable.getRowCount(); i++) {
    var date = moviesTable.getString(i, 'release_date').split('-')[0];
    var year = parseInt(date);
    var yearPosition = map(year, 1916, 2017, leftX, rightX);
    var scorePosition = map(moviesTable.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
    ellipse(yearPosition, scorePosition, 3, 3);
  }
}
