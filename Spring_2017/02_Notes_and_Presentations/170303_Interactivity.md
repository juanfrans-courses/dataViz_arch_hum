## Notes 03/03/2017 - Interactivity

### Plan
* [Tumblr blog](https://dataviz2017spring.tumblr.com/)
* Readings
* Discussion on
* Feedback on final project proposals
* Creating a subset of the data
* Mouse x and y
* Creating buttons
* Mouse hover
* Debate around "scrollytelling":
  * [How to implement scrollytelling with six different libraries](https://pudding.cool/process/how-to-implement-scrollytelling/) by The Pudding
  * [Why choose? Scrollytelling & Steppers](https://medium.com/@zanarmstrong/why-choose-scrollytelling-steppers-155a59dd97fe#.3ctegtjf5)
  * [The Scrollytelling Scourge](https://eagereyes.org/blog/2016/the-scrollytelling-scourge) by Robert Kosara
  * [Scrollytelling in Data Visualization](http://vallandingham.me/scroll_talk/examples/)
  * [How To Scroll](https://bost.ocks.org/mike/scroll/) by Mike Bostock
* Bonus: [One Chart, Twelve Charting Libraries](https://lisacharlotterost.github.io/2016/05/17/one-chart-code/) by Lisa Charlotte Rost

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

* Last thing we were trying to do was to select the countries with more than 100,000 refugees. The way to do this would be to create a new table and add just the records that match the selection criteria. However, for sake of the next few exercises we will keep all the data associated with those selected countries, not just the total number of displaced people.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 45;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']

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
	createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
	for (var i = 0; i < headers.length; i++) {
		topRefugeesTable.addColumn(headers[i]);
	}
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var totalRefugees = refugeeTable.getNum(i, 'Total');
		if (totalRefugees >= 100000) {
			var newRow = topRefugeesTable.addRow()
			for (var j = 0; j < headers.length; j++) {
				newRow.setString(headers[j], refugeeTable.getString(i, headers[j]));
			}
		}
	}
	print('New top refugee table created...');
}

function drawCountries(category){
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		maxTotal = max(topRefugeesTable.getNum(i, category), maxTotal);
	}
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		var total = topRefugeesTable.getNum(i, category);
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		text(topRefugeesTable.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
	}
}

// ***** Draw function ***** //
function draw(){
	background(255);
	drawCountries('Total');
}
```
* Now we will create buttons and code the interactivity so you can choose what column to display based on the buttons:
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 45;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']
var startChartY = 100;
var selectedButton = 0;
var buttonLabels = ['Total', 'Refugees', 'IDPs'];

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
	createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
	for (var i = 0; i < headers.length; i++) {
		topRefugeesTable.addColumn(headers[i]);
	}
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var totalRefugees = refugeeTable.getNum(i, 'Total');
		if (totalRefugees >= 100000) {
			var newRow = topRefugeesTable.addRow()
			for (var j = 0; j < headers.length; j++) {
				newRow.setString(headers[j], refugeeTable.getString(i, headers[j]));
			}
		}
	}
	print('New top refugee table created...');
}

// ****** Draw chart function *************//
function drawCountries(category){
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		maxTotal = max(topRefugeesTable.getNum(i, category), maxTotal);
	}
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		var total = topRefugeesTable.getNum(i, category);
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, startChartY + 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, startChartY + 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		text(topRefugeesTable.getString(i, 'Country'), maxLabel * 5 - 5, startChartY + 14*i);
	}
}

function drawButtons(){
	textAlign(CENTER);
	for (var i = 0; i < 3; i++) {
		if (selectedButton == i){
			fill(255, 100, 100);
		}
		else {
			fill(0);
		}
		rect(50 + i * 60, 10, 50, 20);
		fill(0);
		text(buttonLabels[i], 75 + i * 60, 30);
	}
}

// ***** Draw function ***** //
function draw(){
	background(255);
	drawCountries(buttonLabels[selectedButton]);
	drawButtons();
	textAlign(RIGHT, BOTTOM);
	text(round(mouseX) + ', ' + round(mouseY), mouseX, mouseY);
	mousePosition();
}

// ***** MousePressed Function ******* //
function mousePressed(){
	if (mouseX > 50 && mouseX < 100 && mouseY > 10 && mouseY < 30){
		selectedButton = 0;
		maxTotal = 0;
	}
	if (mouseX > 110 && mouseX < 160 && mouseY > 10 && mouseY < 30){
		selectedButton = 1;
		maxTotal = 0;
	}
	if (mouseX > 170 && mouseX < 220 && mouseY > 10 && mouseY < 30){
		selectedButton = 2;
		maxTotal = 0;
	}
}

// ***** Mouse Position Function ********* //
function mousePosition(){
	if (mouseX > 50 && mouseX < 100 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else if (mouseX > 110 && mouseX < 160 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else if (mouseX > 170 && mouseX < 220 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else{
		cursor(ARROW);
	}
}
```
* Finally, we can code a panel that shows more country details as you hover over the individual countries:
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 45;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']
var startChartY = 100;
var selectedButton = 0;
var buttonLabels = ['Total', 'Refugees', 'IDPs'];

// ***** Preload function ***** //
function preload(){
	refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
	console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
	createCanvas(1000, 3000);
	textSize(12);
	console.log('Setup complete...');
	print(refugeeTable.getRowCount() + ' rows loaded...');
	print(refugeeTable.getColumnCount() + ' columns loaded...');
	createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
	for (var i = 0; i < headers.length; i++) {
		topRefugeesTable.addColumn(headers[i]);
	}
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var totalRefugees = refugeeTable.getNum(i, 'Total');
		if (totalRefugees >= 100000) {
			var newRow = topRefugeesTable.addRow()
			for (var j = 0; j < headers.length; j++) {
				newRow.setString(headers[j], refugeeTable.getString(i, headers[j]));
			}
		}
	}
	print('New top refugee table created...');
}

// ****** Draw chart function *************//
function drawCountries(category){
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	textSize(12);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		maxTotal = max(topRefugeesTable.getNum(i, category), maxTotal);
	}
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		var total = topRefugeesTable.getNum(i, category);
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, startChartY + 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, startChartY + 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		text(topRefugeesTable.getString(i, 'Country'), maxLabel * 5 - 5, startChartY + 14*i);
	}
}

// ****** Draw Buttons Function ********* //
function drawButtons(){
	textAlign(CENTER);
	textSize(12);
	for (var i = 0; i < 3; i++) {
		if (selectedButton == i){
			fill(255, 100, 100);
		}
		else {
			fill(0);
		}
		rect(50 + i * 60, 10, 50, 20);
		fill(0);
		text(buttonLabels[i], 75 + i * 60, 30);
	}
}

// ***** Draw Country Details Function ****** //
function drawCountryDetails(xPos, yPos){
	textAlign(LEFT, TOP);
	if (yPos > 105 && yPos < 885){
		var selectedCountry = floor((yPos - 105) / 14);
		textSize(24);
		text(topRefugeesTable.getString(selectedCountry, 'Country'), 800, 105);
		textSize(12);
		text('Refugees: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Refugees'), 0), 800, 135);
		text('IDPs: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'IDPs'), 0), 800, 150);
		text('Stateless: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Stateless'), 0), 800, 165);
		text('Total: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Total'), 0), 800, 180);
	}
}

// ***** Draw function ***** //
function draw(){
	background(255);
	drawCountries(buttonLabels[selectedButton]);
	drawButtons();
	textAlign(RIGHT, BOTTOM);
	text(round(mouseX) + ', ' + round(mouseY), mouseX, mouseY);
	drawCountryDetails(mouseX, mouseY);
	mousePosition();
}

// ***** MousePressed Function ******* //
function mousePressed(){
	if (mouseX > 50 && mouseX < 100 && mouseY > 10 && mouseY < 30){
		selectedButton = 0;
		maxTotal = 0;
	}
	if (mouseX > 110 && mouseX < 160 && mouseY > 10 && mouseY < 30){
		selectedButton = 1;
		maxTotal = 0;
	}
	if (mouseX > 170 && mouseX < 220 && mouseY > 10 && mouseY < 30){
		selectedButton = 2;
		maxTotal = 0;
	}
}

// ***** Mouse Position Function ********* //
function mousePosition(){
	if (mouseX > 50 && mouseX < 100 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else if (mouseX > 110 && mouseX < 160 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else if (mouseX > 170 && mouseX < 220 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else{
		cursor(ARROW);
	}
}
```
