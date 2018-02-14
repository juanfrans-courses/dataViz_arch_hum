# Notes Week 5 (February 16, 2018) - Drawing with Data
* Blog
* Assignment - One graph

## Discussion - Readings
* *Humanities Approaches at Graphical Display*:
  * But, I will argue, such graphical tools are a kind of intellectual Trojan horse, a vehicle through which assumptions about what constitutes information swarm with potent force. These assumptions are cloaked in a rhetoric taken wholesale from the techniques of the empirical sciences that conceals their epistemological biases under a guise of familiarity. So naturalized are the google maps and bar charts generated from spread sheets that they pass as unquestioned representations of “what is.” This is the hallmark of realist models of knowledge and needs to be subjected to a radical critique to return the humanistic tenets of constructed- ness and interpretation to the fore. Realist approaches depend above all upon an idea that phenomena are observer-independent and can be characterized as data. Data pass themselves off as mere descriptions of a priori conditions. Rendering observation (the act of creating a statistical, empirical, or subjective account or image) as if it were the same as the phenomena observed collapses the critical distance between the phenomenal world and its interpretation, undoing the basis of interpretation on which humanistic knowledge production is based. We know this. But we seem ready and eager to suspend critical judgment in a rush to visualization. At the very least, humanists beginning to play at the intersection of statistics and graphics ought to take a detour through the substantial discussions of the sociology of knowledge and its developed critique of realist models of data gathering. 1 At best, we need to take on the challenge of developing graphical expressions rooted in and appropriate to interpretative activity.
  * Because realist approaches to visualization assume transparency and equivalence, as if the phenomenal world were self-evident and the apprehension of it a mere mechanical task, they are fundamentally at odds with approaches to humanities scholarship premised on constructivist principles.
  * This is the difference between putting many kinds of points on a map to show degrees of certainty by shades of color, degrees of crispness, transparency etc., and creating a map whose basic coordinate grid is constructed as an effect of these ambiguities. In the first instance, we have a standard map with a nuanced symbol set. In the second, we create a non-standard map that expresses the constructed-ness of space. Both rely on rethinking our approach to visualization and the assumptions that underpin it.
  * putting techniques of graphical display on a foundation that is humanistic at its base. *This requires first and foremost that we reconceive all data as capta.*
  * Capta is “taken” actively while data is assumed to be a “given” able to be recorded and observed. From this distinction, a world of differences arises. Humanistic inquiry acknowledges the situated, partial, and constitutive character of knowledge production, the recognition that knowledge is constructed, taken, not simply given as a natural representation of pre-existing fact.
  * The history of knowledge is the history of forms of expression of knowledge, and those forms change.
  * Thus the *representation* of knowledge is as crucial to its cultural force as any other facet of its production.
  * what is needed *is not a set of applications to display humanities “data,” but a new approach that uses humanities principles to constitute capta and its display.*
  * I take these principles to be, first, that the humanities are committed to the concept of knowledge as interpretation, and, second, that the apprehension of the phenomena of the physical, social, cultural world is through constructed and constitutive acts, not mechanistic or naturalistic realist representations of pre-existing or self-evident information.
  * But the more profound challenge we face is to accept the ambiguity of knowledge, the fundamentally interpreted condition on which data is constructed, in other words, the realization of my refrain–that all data is capta.
  * By definition, a humanistic approach is centered in the experiential, subjective conditions of interpretation. Phenomena and their observers are co-dependent, not necessarily in equal measure.
  * Perhaps the most striking feature distinguishing humanistic, interpretative, and constructivist graphical expressions from realist statistical graphics is that the curves, bars, columns, percentage values would not always be represented as discrete bounded entities, but as conditional expressions of interpretative parameters–a kind of visual fuzzy logic or graphical complexity. Thus their edges might be permeable, lines dotted and broken, dots and points vary in size and scale or degree of ambiguity of placement, and so on.
  * Since antiquity, human conceptions of time have divided between those that consider time a given, an a priori existing container within which events occur, and those who consider time an effect of occurrences in temporal relation to each other.
  * Conceptions of temporality in humanities documents do not conform to those used in the social and empirical sciences. In empirical sciences, time is understood as continuous, uni-directional, and homogenous. Its metrics are standardized, its direction is irreversible, and it has no breaks, folds, holes, wrinkles, or reworkings. But in the humanities time is frequently understood and represented as discontinuous, multi- directional, and variable. Temporal dimensions of humanities artifacts are often expressed in relational terms – before such and such happened, or after a significant event. Retrospection and anticipation factor heavily in humanistic works, and the models of temporality that arise from historical and literary documents include multiple viewpoints.
  * The discussion of space corresponds exactly to that of time, and the distinctions between the conception of space as an a priori given and that of space as relationally constituted marks the same philosophical division of approaches as those that are used in charting or understanding time and temporality.
* *Graphical Integrity*:
  * Tables usually outperform graphics in reporting on small data sets of 20 numbers or less. The special power of graphics somes in the display of large data sets.
  * *The representation of numbers, as physically measured on the surface of the graphic itself, should be directly proportional to the numerical quantities represented.*
  * *Clear, detailed, and thorough labeling should be used to defeat graphical distortion and ambiguity. Write out explanations of the data on the graphic itself. Label important events in the data.*
  * *Show data variation, not design variation.*
  * *The number of information-carrying (variable) dimensions depicted should not exceed the number of dimensions in the data.*
  * *Graphics must not quote data out of context.*

## Drawing with Data

### Setup
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Intro to p5.js</title>
    <!-- Google fonts code -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet">
    <!-- Link to the p5.js library -->
    <script language="javascript" type="text/javascript" src="js/p5.js"></script>
    <!-- Link to p5 sketch file -->
    <script language="javascript" type="text/javascript" src="js/sketch.js"></script>
  </head>
  <body>
    <div class="title">
      <h1>DRAWING WITH DATA</h1>
    </div>
  </body>
</html>
```

### Basic example
First we are going to create two dummy arrays with some data (one for values and another one for labels), and we will create a bar chart with this data.
```js
// ***** Global variables ***** //
var score = [7.9, 8.3, 8, 8.7, 9.2];
var movie = ['Do the Right Thing', 'Taxi Driver', 'Manhattan', 'Goodfellas', 'The Godfather'];

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(14);
  textFont('Roboto');
  console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(80);
  noStroke();
  // Drawing the bar chart
  for (var i = 0; i < score.length; i++) {
    rect(135, 5 + 20*i, score[i] * 50, 12);
  }
  // Drawing the labels
  fill(20);
  for (var i = 0; i < movie.length; i++) {
    textAlign(RIGHT);
    text(movie[i], 125, 20*i);
    textAlign(LEFT);
    text(score[i], 135 + score[i] * 50 + 10, 20 * i);
  }
}
```

### Loading data
Now we are going to load real data:
* First, create a folder in you project called 'data' (I'll put mine in the top level, next to the other folders).
* Download the 'tmdb_5000_movies.csv' file from Courseworks and place it in that folder.
* Finally, let's load the data and create a scatterplot chart with it.
```js
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
```

### New tables and functions
* Now, let's say that you only want to select only the moview that made 100 million or more in revenue. The way to do this would be to create a new table and add just the records that match the selection criteria.
```js
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
```
