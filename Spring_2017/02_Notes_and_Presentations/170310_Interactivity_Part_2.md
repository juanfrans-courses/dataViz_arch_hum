## Notes 03/03/2017 - Interactivity

### Plan
* Changes to syllabus (**midterm date**)
* [Tumblr blog](https://dataviz2017spring.tumblr.com/)
* Readings
* Demo:
  * Recalculate maximum
  * Mouse x and y
  * Creating buttons
  * Mouse hover

### Drawing with data
#### Previous class code
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

* Last thing we were trying to do was to create charts with different columns from the dataset. This is the code we ended up with. Note the `drawCountries` function that gets called inside the `draw` function with one argument. This argument will determine what column gets used to draw the data.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
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
		print(topRefugeesTable);
}

function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
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
    // drawCountries(refugeeTable);
    drawCountries('Asylum-seekers');
}
```

#### Recalculating the maximum value
* First, we need to recalculate the maximum length of the largest bar based on the new column. This is something we were doing in the setup function based on the total number of refugees, but now that we are drawing a different column we need to recalculate that maximum. This will happen inside the `drawCountries` function to take into account the selected column.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
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
		print(topRefugeesTable);
}

function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    // Calculating maximum value
    maxTotal = 0; //*** Important, you should reset your maximum, otherwise it might keep the previous one.
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
      maxTotal = max(maxTotal, topRefugeesTable.getNum(i, category));
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
    // drawCountries(refugeeTable);
    drawCountries('Returned refugees');
}
```

#### Drawing the buttons
* Now we are going to create the buttons that will allow the user to interact with the graph. First, we will bring everything down to make space for the buttons and then we will draw them along with their labels. One very useful tool we will use is to print on the screen the position of the mouse.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']
var startChartY = 100;

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
		print(topRefugeesTable);
}

function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(12);
    // Calculating maximum value
    maxTotal = 0; //*** Important, you should reset your maximum, otherwise it might keep the previous one.
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
      maxTotal = max(maxTotal, topRefugeesTable.getNum(i, category));
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
  noFill();
  stroke(0);
  strokeWeight(1);
  for (var i = 1; i < headers.length; i++) { //*** Note that we are starting this loop from '1' in order to skip the first column that contains the country names.
    rect(50 + i * 80, 50, 75, 20);
  }
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(8);
  for (var i = 1; i < headers.length; i++) { //*** Note that we are starting this loop from '1' in order to skip the first column that contains the country names.
    text(headers[i], 90 + i * 80, 60);
  }
}

// ***** Draw function ***** //
function draw(){
    background(255);
    // drawCountries(refugeeTable);
    drawCountries('Returned refugees');
    drawButtons();
    noStroke();
    fill(0);
    text(str(mouseX) + ', ' + str(round(mouseY)), mouseX, mouseY);
}
```

#### Using the buttons for interactivity
* Now we will code some basic color interactivity to the buttons to make sure they are working and then we will apply this to the selected column. Finally, we will add a custom `mousePosition` function to change the cursor into a hand indicating interactivity.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']
var startChartY = 100;
var selectedButton = 8;

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
		print(topRefugeesTable);
}

function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(12);
    // Calculating maximum value
    maxTotal = 0; //*** Important, you should reset your maximum, otherwise it might keep the previous one.
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
      maxTotal = max(maxTotal, topRefugeesTable.getNum(i, category));
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
  noFill();
  stroke(0);
  strokeWeight(1);
  for (var i = 1; i < headers.length; i++) { //*** Note that we are starting this loop from '1' in order to skip the first column that contains the country names.
    if (i == selectedButton) {
      fill(178, 178, 178);
    }
    else {
      fill(229, 229, 229);
    }
    rect(50 + i * 80, 50, 75, 20);
  }
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(8);
  for (var i = 1; i < headers.length; i++) { //*** Note that we are starting this loop from '1' in order to skip the first column that contains the country names.
    text(headers[i], 90 + i * 80, 60);
  }
}

// ***** Draw function ***** //
function draw(){
    background(255);
    // drawCountries(refugeeTable);
    drawCountries(headers[selectedButton]);
    drawButtons();
    mousePosition();
    noStroke();
    fill(0);
    text(str(mouseX) + ', ' + str(round(mouseY)), mouseX, mouseY);
}

// ***** MousePressed Function ******* //
function mousePressed(){
  if (mouseX > 130 && mouseX < 205 && mouseY > 50 && mouseY < 70){
    selectedButton = 1;
  }
  if (mouseX > 210 && mouseX < 285 && mouseY > 50 && mouseY < 70){
    selectedButton = 2;
  }
  if (mouseX > 290 && mouseX < 365 && mouseY > 50 && mouseY < 70){
    selectedButton = 3;
  }
  if (mouseX > 370 && mouseX < 445 && mouseY > 50 && mouseY < 70){
    selectedButton = 4;
  }
  if (mouseX > 450 && mouseX < 525 && mouseY > 50 && mouseY < 70){
    selectedButton = 5;
  }
  if (mouseX > 530 && mouseX < 605 && mouseY > 50 && mouseY < 70){
    selectedButton = 6;
  }
  if (mouseX > 610 && mouseX < 685 && mouseY > 50 && mouseY < 70){
    selectedButton = 7;
  }
  if (mouseX > 690 && mouseX < 765 && mouseY > 50 && mouseY < 70){
    selectedButton = 8;
  }
}

// ******** Mouse Position Function ************ //
function mousePosition(){
  if (mouseX > 130 && mouseX < 205 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 210 && mouseX < 285 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 290 && mouseX < 365 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 370 && mouseX < 445 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 450 && mouseX < 525 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 530 && mouseX < 605 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 610 && mouseX < 685 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 690 && mouseX < 765 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else{
    cursor(ARROW);
  }
}
```

#### Country panel based on hover
* The last thing we will do will be to create an information panel that will display data about a country when the mouse hovers over that line.
```js
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']
var startChartY = 100;
var selectedButton = 8;

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
		print(topRefugeesTable);
}

function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(12);
    // Calculating maximum value
    maxTotal = 0; //*** Important, you should reset your maximum, otherwise it might keep the previous one.
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
      maxTotal = max(maxTotal, topRefugeesTable.getNum(i, category));
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
  noFill();
  stroke(0);
  strokeWeight(1);
  for (var i = 1; i < headers.length; i++) { //*** Note that we are starting this loop from '1' in order to skip the first column that contains the country names.
    if (i == selectedButton) {
      fill(178, 178, 178);
    }
    else {
      fill(229, 229, 229);
    }
    rect(50 + i * 80, 50, 75, 20);
  }
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(8);
  for (var i = 1; i < headers.length; i++) { //*** Note that we are starting this loop from '1' in order to skip the first column that contains the country names.
    text(headers[i], 90 + i * 80, 60);
  }
}

// ***** Draw Country Details Function ****** //
function drawCountryDetails(xPos, yPos){
	textAlign(LEFT, TOP);
  fill(0);
	if (yPos > 105 && yPos < 885){
		var selectedCountry = floor((yPos - 105) / 14);
		textSize(24);
		text(topRefugeesTable.getString(selectedCountry, 'Country'), 750, 105);
		textSize(12);
		text('Refugees: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Refugees'), 0), 750, 135);
		text('IDPs: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'IDPs'), 0), 750, 150);
		text('Stateless: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Stateless'), 0), 750, 165);
		text('Total: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Total'), 0), 750, 180);
	}
}

// ***** Draw function ***** //
function draw(){
    background(255);
    // drawCountries(refugeeTable);
    drawCountries(headers[selectedButton]);
    drawButtons();
    mousePosition();
    drawCountryDetails(mouseX, mouseY);
    noStroke();
    fill(0);
    text(str(mouseX) + ', ' + str(round(mouseY)), mouseX, mouseY);
}

// ***** MousePressed Function ******* //
function mousePressed(){
  if (mouseX > 130 && mouseX < 205 && mouseY > 50 && mouseY < 70){
    selectedButton = 1;
  }
  if (mouseX > 210 && mouseX < 285 && mouseY > 50 && mouseY < 70){
    selectedButton = 2;
  }
  if (mouseX > 290 && mouseX < 365 && mouseY > 50 && mouseY < 70){
    selectedButton = 3;
  }
  if (mouseX > 370 && mouseX < 445 && mouseY > 50 && mouseY < 70){
    selectedButton = 4;
  }
  if (mouseX > 450 && mouseX < 525 && mouseY > 50 && mouseY < 70){
    selectedButton = 5;
  }
  if (mouseX > 530 && mouseX < 605 && mouseY > 50 && mouseY < 70){
    selectedButton = 6;
  }
  if (mouseX > 610 && mouseX < 685 && mouseY > 50 && mouseY < 70){
    selectedButton = 7;
  }
  if (mouseX > 690 && mouseX < 765 && mouseY > 50 && mouseY < 70){
    selectedButton = 8;
  }
}

// ******** Mouse Position Function ************ //
function mousePosition(){
  if (mouseX > 130 && mouseX < 205 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 210 && mouseX < 285 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 290 && mouseX < 365 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 370 && mouseX < 445 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 450 && mouseX < 525 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 530 && mouseX < 605 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 610 && mouseX < 685 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else if (mouseX > 690 && mouseX < 765 && mouseY > 50 && mouseY < 70){
    cursor(HAND);
  }
  else{
    cursor(ARROW);
  }
}
```
