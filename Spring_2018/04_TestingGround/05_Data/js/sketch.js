// ***** Global variables ***** //
var moviesTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;
var topRevenue = new p5.Table;

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
  noLoop();
  createNewTable();
}

// ***** Create new table function ******* //
function createNewTable(){
  topRevenue.addColumn('release_date');
  topRevenue.addColumn('vote_average');
  for (var i = 0; i < moviesTable.getRowCount(); i++) {
    var totalRevenue = moviesTable.getNum(i, 'revenue');
    if (totalRevenue >= 100000000) {
      var newRow = topRevenue.addRow();
      newRow.setString('release_date', moviesTable.getString(i, 'release_date'));
      newRow.setNum('vote_average', moviesTable.getNum(i, 'vote_average'));
    }
  }
  print('New top revenue table created...');
}

function drawMovies(table){
  background(255);
  fill(0);
  for (var i = 0; i < 11; i++) {
    noStroke();
    textAlign(RIGHT, CENTER);
    text(i, textLeft, map(i, 0, 10, bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, 0, 10, bottomY, topY), rightX + 10, map(i, 0, 10, bottomY, topY));
  }
  noStroke();
  for (var i = 0; i < 10; i++) {
    textAlign(CENTER, TOP);
    text(round(map(i, 0, 9, 1916, 2017)), map(i, 0, 9, leftX, rightX), bottomY + 5);
  }
  for (var i = 0; i < table.getRowCount(); i++) {
    var date = table.getString(i, 'release_date').split('-')[0];
    var year = parseInt(date);
    var yearPosition = map(year, 1916, 2017, leftX, rightX);
    var scorePosition = map(table.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
    ellipse(yearPosition, scorePosition, 3, 3);
  }
}

// ***** Draw function ***** //
function draw(){
  drawMovies(topRevenue);
}
