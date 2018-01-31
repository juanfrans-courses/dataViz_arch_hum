# Notes Week 3 (February 2, 2018) - Introduction to Programming and JavaScript
* Blog
* Assignment - Websites
* [The New York Times - The Follower Factory](https://www.nytimes.com/interactive/2018/01/27/technology/social-media-bots.html)
* [Student Developer Pack](https://education.github.com/pack), including a lot of goodies for programming.

## Discussion - Readings
* *What is Visualization?*:
  * [Martin Wattenberg - History Flow](https://www.research.ibm.com/visual/projects/history_flow/index.htm)
  * *"In contrast, the goal of information visualization is to discover the structure of a (typically large) data set. This structure is not known a priori; a visualization is successful if it reveals this structure."*
  * *"The first principle is reduction. Infovis uses graphical primitives such as points, strait lines, curves, and simple geometric shapes to stand in for objects and relations between them - regardless of whether these are people, their social relations, stock prices, income of nations, unemployment statistics, or anything else. By employing graphical primitives (or, to use the language of contemporary digital media, vector graphics), infovis is able to reveal patterns and structures in the data objects that these primitives represent. However, the price being paid for this power is extreme schematization. We throw away 99% of what is specific about each object to represent only 1%- in the hope of revealing patterns across this 1% of objects’ characteristics."*
  * *"They all use spatial variables (position, size, shape, and more recently curvature of lines and movement) to represent key differences in the data and reveal most important patterns and relations."*
  * *"This principle can be rephrased as follows: infovis privileges spatial dimensions over other visual dimensions. In other words, we map the properties of our data that we are most interested in into topology and geometry. Other less important properties of the objects are represented through different visual dimensions - tones, shading patterns, colors, or transparency of the graphical elements."*
  * [Ben Fry - Distellamap](http://benfry.com/distellamap/)
  * *"I believe that the majority of information visualization practice from the second part of the 18th century until today follow the same principle – reserving spatial arrangement (we can call it “layout”) for the most important dimensions of the data, and using other visual variables for remaining dimensions... Distances between elements and their positions, shape, size, lines curvature, and other spatial variables code quantitative differences between objects and/or their relations (for instance, who is connected to whom in a social network)."*
  * *"This practice assumed that the meaning and emotional impact of an image depends most of all on the spatial arrangements of its parts, as opposed to colors, textures and other visual parameters."*
  * *"This practice assumed that the meaning and emotional impact of an image depends most of all on the spatial arrangements of its parts, as opposed to colors, textures and other visual parameters... The creators of visualizations follow human visual perception that also privileges spatial arrangements of parts of a scene over its other visual properties in making sense of this scene. Why would the geometric arrangement of elements in a scene be more important to human perception than other visual dimensions? Perhaps this has to do with the fact that each object occupies a unique part of the space."*
  * *"An artist or a designer may pay more attention to other visual properties of a scene such as textures and rhythms of color (think of twentieth century art) – but in a everyday perception, spatial properties are what matters most."*
  * *"In view of our discussion of data reduction principle, we can also call this method direct visualization, or visualization without reduction. In direct visualization, the data is reorganized into a new visual representation that preserves its original form."*
  * [Brendan Dawes - Cinema Redux](http://brendandawes.com/projects/cinemaredux): 1fps, Processing
  * *"Previously infovis designers mapped data into new diagrammatic representation consisting from graphical primitives. This was the default practice. With computers, a designer can select any value on the “original data” / abstract representation dimension. In other words, a designer can now chose to use graphical primitives, or the original images exactly as they are, or any format in between."*
  * *"Before software, visualization usually involved the two-stage process of first counting, or quantifying data, and then representing the results graphically. Software allows for direct manipulation of the media artifacts without quantifying them."*
  * [Ben Fry - Preservation of Selected Traces](https://fathom.info/traces/)
  * [Listening Post - Mark Hansen and Ben Rubin](https://www.youtube.com/watch?v=dD36IajCz6A)
  * *"This does not mean that in order to qualify as a “direct visualization” an image has to show 100% of the original data – every word in a text, every frame in a movie, etc. Out of the three examples I just discussed, only Preservation of Selected Traces does so. Both Cinema Redux and Listening Post do not use all the available data – instead they sample it... However, what is crucial is that the elements of these visualizations are not the result of remapping of the data into some new representational format – they are the original data objects selected from the complete data set."*

## Introduction to JavaScript
* **Javascript** is a 'high-level, dynamic, weakly typed and interpreted programming language' [Wikipedia article](https://en.wikipedia.org/wiki/JavaScript):
  * High-level: strong abstraction, as opposed to low-level languages. Python is also a 'high-level' language.
  * Dynamic: do work (ie. check types) at runtime, not during compilation.
  * Weakly typed: allows operations to be performed on any type of data.
  * Interpreted: executes instructions directly, without previously compiling.
  * Object-oriented: objects may contain data (attributes) and instructions (functions or methods).
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
    * `var myList = ["Juan", 23, [4.5, "another string"], "thisIsCrazy"];`
  * Objects: {} they have multiple properties, which can include functions.
    * `var car = {brand: "volvo", year: 2010, color: "red", sedan: false};`
  * Operations between variables:
    * Math:
      * Regular [math operations](https://www.w3schools.com/jsref/jsref_operators.asp) and [more](https://www.w3schools.com/jsref/jsref_obj_math.asp):
      * `+ - * /`
      * `%` Modulus (division remainder)
      * `+=` (ie. `x += y`)
      * `var x = Math.PI;`
      * `var y = Math.sqrt(64);`
    * Strings:
      * `myString.charAt(2);`
      * concat or join:
        ```js
        var firstName = 'Juan';
        var completeName = firstName.concat(" Francisco", " Saldarriaga");
        alert(completeName);
        var myNames = ['Juan', 'Francisco', 'Saldarriaga'];
        var fullName = myNames.join(' ');
        console.log(fullName);
        ```
      * `myString.toLowerCase();`
      * `myString.toUpperCase();`
      * `var mySubString = myString.substring(0, 5);`
      * `myString = myVariable.toString();`
      * More [string methods](https://www.w3schools.com/jsref/jsref_obj_string.asp)
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
  * Javascript has many pre-built functions. For example:
    * console.log()
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

## Drawing with p5.js
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
