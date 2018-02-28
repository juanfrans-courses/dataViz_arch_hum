## Notes 02/24/2017 - Drawing with Data

### Plan
* [Tumblr blog](https://dataviz2017spring.tumblr.com/)
* Readings
* [Assiognment 3](https://github.com/juanfrans-courses/dataViz_arch_hum/blob/master/Spring_2017/03_Assignments_and_Tutorials/03_Assignment_3.md) - Visualization of one dataset
* Collect final project proposals
* Drawing with data
* Loading datasets in p5.js

### Drawing with data
* Reminder, this is our .html (which links to our ../js/sketch.js file which is where we have our p5.js code):
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

    <!-- Link to p5 sketch file -->
    <script language="javascript" type="text/javascript" src="../js/sketch.js"></script>
  </head>
  <body>
    <div class="title">
      <h1>INTRO TO JAVASCRIPT - P5.JS</h1>
    </div>
  </body>
</html>
```
* First we are going to create two dummy arrays with some data (one for values and another one for country names), and we will create a bar chart with this data.
```js
// ***** Global variables ***** //
var myData = [12, 43, 15, 25, 34];
var labels = ['Colombia', 'Peru', 'Venezuela', 'Chile', 'Argentina'];

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(18);
  console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(0);
  noStroke();
  // Drawing the bar chart
  for (var i = 0; i < myData.length; i++) {
    rect(100, 5 + 20*i, myData[i] * 10, 15);
  }
  // Drawing the labels
  for (var i = 0; i < labels.length; i++) {
    text(labels[i], 10, 20*i);
  }
}
```
* Now we are going to load real data:
  * First, create a folder in you project called 'data' (I'll put mine in the top level, next to the other folders).
  * Download the 'RefugeesUNHCR.csv' file from the repository and place it in that folder.
  * Finally, let's load the data and create a bar chart with it.
```js
// ***** Global variables ***** //
var refugeeTable;

// ***** Preload function ***** //
function preload(){
  refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(12);
  console.log('Setup complete...');
  print(refugeeTable.getRowCount() + ' rows loaded...');
  print(refugeeTable.getColumnCount() + ' columns loaded...');
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(0);
  noStroke();
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    rect(100, 2 + 14*i, refugeeTable.getNum(i, 'Total'), 12);
  }
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    text(refugeeTable.getString(i, 'Country'), 10, 14*i);
  }
}
```
* As you can see, some of the bars are too long, so let's make sure that we set a maximum length and scale everything based on that length:
```js
// ***** Global variables ***** //
var refugeeTable;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(12);
  console.log('Setup complete...');
  print(refugeeTable.getRowCount() + ' rows loaded...');
  print(refugeeTable.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
    maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
  }
  print('Maximum total is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);
}

// ***** Draw function ***** //
function draw(){
	background(255);
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var total = refugeeTable.getNum(i, 'Total');
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		text(refugeeTable.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
	}
}
```
* Now, let's say that you only want to select the countries with more than 100,000 refugees. The way to do this would be to create a new table and add just the records that match the selection criteria.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
	refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
	console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
	createCanvas(800, 3000);
	textSize(12);
	console.log('Setup complete...');
	print(refugeeTable.getRowCount() + ' rows loaded...');
	print(refugeeTable.getColumnCount() + ' columns loaded...');
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
		maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
	}
	print('Maximum total is ' + maxTotal);
	print('Maximum label length is ' + maxLabel);
	createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
	topRefugeesTable.addColumn('Country');
	topRefugeesTable.addColumn('Total');
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var totalRefugees = refugeeTable.getNum(i, 'Total');
		if (totalRefugees >= 100000) {
			var newRow = topRefugeesTable.addRow()
			newRow.setString('Country', refugeeTable.getString(i, 'Country'));
			newRow.setNum('Total', refugeeTable.getNum(i, 'Total'));
		}
	}
	print('New top refugee table created...');
}

function drawCountries(tableName){
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	for (var i = 0; i < tableName.getRowCount(); i++) {
		var total = tableName.getNum(i, 'Total');
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < tableName.getRowCount(); i++) {
		text(tableName.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
	}
}

// ***** Draw function ***** //
function draw(){
	background(255);
	// drawCountries(refugeeTable);
	drawCountries(topRefugeesTable);
}
```
