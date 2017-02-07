## Notes 02/10/2017 - Intro to Javascript and p5.js

### Plan
* [Tumblr blog](https://dataviz2017spring.tumblr.com/)
* Go over some of the assignments (data visualization chart).
* Introduction to Javascript and p5.js
* Assignment (groups). [Sign up list](https://docs.google.com/spreadsheets/d/1yHbPXGRSpNXuUEi2XHSJoHXvb7hhPEbjaIeSmFVvCIc/edit?usp=sharing).
* Demonstrate collaboration in Github (Buck can upload some changes and I will `fetch` and `pull` them).
* Data visualization as an exploratory tool (for midterm presentation: exploration of a dataset and given that exploration -> thesis and prototype...)

### Download and setup p5.js
* Download and installation:
  - Download [p5.js library (complete)](https://p5js.org/download/).
  - Unzip it and add it to the `libraries/` folder. Make sure that your `p5.js` and `p5.min.js` files are directly in the `libraries/` folder, not inside other folders.
* Overview of [p5.js](https://p5js.org/) website:
  - Reference
  - Tutorials
  - Examples
  - Editor?
    * Desktop --> deprecated
    * Web --> coming soon
* To add the p5.js library to your `.html` file, make sure you add the following lines inside the `<head></head>` tags:
  * `<script language="javascript" type="text/javascript" src="../libraries/p5.js"></script>`
  * `<script language="javascript" type="text/javascript" src="../js/sketch.js"></script>`
  * Sample of introP5.html file:
```HTML
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
* Sketch file:
  * Create a new file in your `js/` folder called `sketch.js`. This is where your actual javascript code will go. You could add it into your `.html` file but it's cleaner this way.
  * The two basic function in the sketch file will be the `setup` and the `draw`. As it's name implies, the `setup` function will hold your script's setup, like the size of the canvas and the color mode. The `draw` function will hold the functions that make the actual drawing on the screen.

### Javascript and Programming basics
* **Javascript** is a 'high-level, dynamic, untyped and interpreted programming language' [Wikipedia article](https://en.wikipedia.org/wiki/JavaScript):
  * High-level: strong abstraction, as opposed to low-level languages. Python is also a 'high-level' language.
  * Dynamic: do work at runtime, not during compilation.
  * Untyped: allows operations to be performed on any type of data.
  * Interpreted: executes instructions directly, without previously compiling.
* Variables `var`:
  * Strings: text, they can be numbers, but treated as if they were text
    * `var name = "Juan";`
    * `var lastName = 'Saldarriaga';` (you can use single or double quotes)
    * `var statement = "His name is 'Juan'";` (you can use single quotes inside double quotes or vice versa).
  * Numbers: with or without decimals
    * `var x = 1;`
    * `var y = 1.63;`
  * Booleans: true or false
    * `var juan = false;`
    * `var saldarriaga = true;`
  * Arrays: [] contain lists of elements, ordered by their position in the array. The first element is the item [0], the second is the item [1], etc.
    * `var names = ["juan", "francisco", "jose"];`
    * `var temperatures = [12, 53, 23];`
  * Objects: {} they have multiple properties, which can include functions.
    * `var car = {brand: "volvo", year: 2010, color: "red", sedan: false};`
  * Some interesting operations:
    * `var x = 25 + "Juan";`
    * `var x = 25 + 5 + "Juan";` vs. `var x = "Juan" + 25 + 5;`
    * The function typeof() will print the variable type:
      * `var x = "Juan";`
      * `typeof(x)`
      * Note, the `typeof()` function will return 'object' for a variable of type array because in Javascript, arrays are actually objects...
    * Because variables are dynamic in Javascript you can re-assign a variable with a value of another type:
      * `var x = "Juan";` (here, it's of type string)
      * `var x = 34;` (we've used the same variable and now it's of type number)
* Comments: `//` or
```js
/*This is a comment
that spans multiple lines*/
```
* Functions:
```js
function myFunction(x1, x2, x3){
  var x4 = x1 * x2 * x3;
  return x4;
}
```
  * Javascript and p5.js have many pre-built functions. For example:
    * console.log()
    * ellipse()
    * draw()
    * setup()
    * preload()
    * typeof()
* Conditionals and comparisons:
  * If this is true, then do that
  * Examples:
```js
if (x > 10) {
  console.log('Yes, x is greater than 10...');
  // you can also run another function here or do other stuff...
}
else if (x == 10) {
  console.log('X is actually equal to 10...');
  // you can also run other functions or do other stuff here...
  // the 'else if' statement is not always necessary...
}
else {
  console.log('No, x is not greater or equal to 10...');
  // you can also run another function here or do other stuff...
  // the 'else' statement is not always necessary...
}
```
  * Comparison operators:
    * `==` equal to (this is a question, "is this equal to this?")
    * `===` equal in value and equal in type
    * `!=` not equal
    * `>` greater than, `<` less than, `>=` greater or equal than, `<=` less or equal than.
  * Logical operators:
    * `&&` and (if this **AND** this is true, then do that...)
    * `||` or (if this **OR** this is true, then do that...)
* Loops (for and while):
```js
// This is the classic loop:
for (var i = 0; i < 100; i++){
  console.log(i);
}

// You can also have nested loops:
for (var i = 0; i < 100; i++){
  for (var j = 0; j < 100; j++){
    console.log(str(i) + ' - ' + str(j));
  }
}

// You can also have 'while' loops:
while (i < 10){
  console.log(i);
  i++;
}
```
* Global vs. Local
* [Semicolon](http://inimino.org/~inimino/blog/javascript_semicolons)
* Suggestion **clear cache with developer tools (network)**.

### Drawing with p5.js
* First example:
```js
function setup(){
  createCanvas(800, 800);
  console.log('Setup complete...')
}

function draw(){
  if (mouseIsPressed){
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 50, 50);
}
```
* Drawing with data (creating a bar chart):
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
* Loading data:
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
* Adjusting for maximum values:
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
    text(total.toLocaleString('en-US', {minimumFractionDigits: 0}), maxLabel * 5 + length + 5, 14*i);
  }
  textAlign(RIGHT, TOP);
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    text(refugeeTable.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
  }
}
```

### Talk about assignment

### Demo of collaboration on Github

### Examples
* Humanities:
  * [mini lazarillo - edición mínima del Lazarillo de Tormes](https://minilazarillo.github.io/) and the [GitHub repository](https://github.com/minilazarillo/minilazarillo.github.io)
* Architecture:
  * [Unity version control integration](https://docs.unity3d.com/Manual/Versioncontrolintegration.html)
* Other:
  * [Financial data and administration](https://github.com/SFPC/finance-and-administration)

### Git cheat sheet
* This [Git Cheat Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf) is a great resource.

### Troubleshooting Git
* `git reset HEAD fileName`: undoes a file added to the local repository.
* `git reset --soft HEAD~1`: undoes a commit to the local repository.

### Other
* [Git Large File Storage](https://git-lfs.github.com/): necessary for working with files that are more than 100MB. Usually, when working with large video, audio or database files you will hit that limit. Use this system to track those files and use them in your repositories.
* GitHub actually supports (understands) 3D files like .stl and .obj and can visualize those files on its website and show changes.
* GitHub also supports .geoJson files and will visualize them on an interactive map on their website.
* If you want git to ignore one or multiple files in your folder, you need to create a file called .gitignore and write in it the names of the files you want to ignore. For example: "temp.txt" or "*.csv".