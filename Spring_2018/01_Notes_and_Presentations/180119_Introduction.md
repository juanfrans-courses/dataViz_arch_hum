## Notes Week 1 (1/19/18) - Introduction

#### Introduction to the class
* What this class is:
  * Data visualization
  * Beginners:
    * No coding experience required
    * We will start from the beginning (ie. what is a variable)
  * Interdisciplinary
  * Urban & New York City:
    * his doesn't mean to be limiting, only to make the projects and the class cohesive.
    * This includes traditional datasets from urban planning and architecture, as well as humanities datasets (text, art, movies, sound).
    * Even datasets from politics, economics or sociology are welcomed.
  * For the web:
    * This means **interactive**
  * Software agnostic:
    * I will teach HTML, CSS, JavaScript and p5.js, but if you know other tools and you feel more comfortable with them you can use them in this class.
    * That includes other libraries or softwares (d3.js, Tableau, Excel) or other techniques (static images done in Illustrator, hand drawings).
    * There are many many ways of doing the same things and I don't pretend mine are the only ones.
  * Readings / blog / discussion / tutorials / assignments / final group project
  * 10 hours of work per week

#### Components
* **Your computers**:
  * Testing ground
  * localhost
* **Github**:
  * Central repository for the syllabus, the tutorials and the assignments
  * Each one of you will have a repository to host your website
  * You will collaborate through **Git**
* **Websites**:
  * Individual, where you will post your assignments
  * Group, where you will develop your final project
  * In both cases the full website is part of your deliverables. In both cases you need to think about it and **design** your site.
* **Readings**:
  * Every class will begin with a discussion of the week's readings.
* **Data visualization critique**:
  * This is a written assignment analyzing a data visualization piece.
* **Blog**:
  * A Tumblr blog where you will post once a week images and links to data visualization pieces that you find interesting or worthy of discussion.
  * This will be part of your grade and our in-class discussions.
* **Documentation**:
  * An important part of your final project will be to carefully document how you design and built your visualization, including the ideas and data behind it.
* **Text editor**:
  * The recommended text editor is [Atom](https://atom.io/), although [Sublime Text](https://www.sublimetext.com/) is also a good option.

#### Syllabus

#### What this class is not
* Mapping:
  * I will not talk about maps
  * I will not teach how to make maps
  * And maps will not be part of your projects or assignments
  * There are other mapping classes (Points Unknown, Mapping for Architecture, Urbanism and the Humanities, Intro to GIS, etc)
* Advanced:
  * If you have coding experience it might be too basic. If it is not too basic, you can still take it and go further.
* Mobile
* Stats (although we do expect you to treat data carefully and thoughtfully).

#### Applications
* Name
* Program
* Year (semester)
* Why you would like to take this class (one paragraph)

#### Basic infrastructure (the stack)
* Server:
  * Local: you own computer, for your own browser
  * Remote: Github, for the whole web
* Local server:
  * Terminal / Gitbash / Command Line: A way of navigating your computer and running local scripts (ie. Python or Git)
  * Python: runs the localhost
* Website content:
  * index.html
  * css/
    * style.css
  * js/ (JavaScript libraries and files)
    * p5.js
    * sketch.js
  * img/
    * image1.png
    * image2.jpg
* Developer tools:
  * Instpector

#### HTML (Hyper Text Markup Language)
* Basic HTML structure:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Page Title</title>
    </head>
    <body>
      <h1>My First Heading</h1>
      <p>My first paragraph.</p>
    </body>
  </html>
  ```
* Elements:
  * `<!DOCTYPE html>`: this defines the document as HTML
  * `<html>`: marks the start or end (`</html>`) of the HTML document
  * `<head></head>`: contains the "meta" information about the document. Some of the information that can go here is:
    * `<title>`: Title of the page, also what you see in the tab in your browser.
    * Meta elements: Don't really do much to the content but are used by search engines to catalogue information about the page.
      * `<meta charset="utf-8">`: specifies the character encoding for the page, in this case "utf-8".
      * `<meta name="description" content="description of the site">`: contains a description of the site.
      * `<meta name="keywords" content="keywords for the site">`: contains the keywords for the site.
      * `<meta name="author" content="author name">`: contains the name(s) of the author(s) of the site.
    * Link elements: Here you will specify the location of the files that you will be referencing, for example, the .css files that contain the styling for the site.
      * `<link rel="stylesheet" type="text/css" href="css/style.css">`: contains a link to the `style.css` file.
    * Style elements: contains style information for the document or for a part of the document.
    * Script elements: here you specify other files, sites or actual code that contain scripts that you will be using in this page. For example, if you are using Google fonts or Adobe Typekit fonts, you will specify this here. Or if you are using Google Analytics you will also add the script here.
  * `<body></body>`: In between these two elements you will find all the content of the page. In the `<body>` you will find some or all of the following elements:
    * `<div></div>`: a generic container. It is useful for styling purposes (using the `class` or `id` attributes).
    * `<nav></nav>`: contains the navigation information for the page. This can be a "nav-bar" at the top of the page that links the different pages of the website.
    * `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, etc: Headings, sub-headings and sub-sub-headings.
    * `<p></p>`: paragraph elements.
    * `<hr>`: represents a break, between sections or topics. Can be styled as a horizontal line.
    * `<ul></ul>`: represents an unordered list.
    * `<li></li>`: represents an element in a list. Usually found inside `<ul>` elements.
    * `<a href="linkLocation.html"></a>`: defines a hyperlink. This can be a link on the same page or on another page or website. It can be applied to a word, a heading or an image or to other elements on the page.
    * `<b></b>`: represents bold text.
      * `<br>`: represents a break, for example, between paragraphs in the same `<p></p>` element.
    * `<i></i>`: represent an italic text.
    * `<u></u>`: represents underlined text.
    * `<img src="locationOfImageFile.extension">`: contains an image element.
    * `<footer></footer>`: contains the footer information for the page.
* There are many more elements. For a full list of elements see the [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) guide by the Mozilla Developer Network.

#### What is CSS (Cascading Style Sheets)
* Usually you link the .css file in the `<head></head>` of the html document through `<link rel="stylesheet" type="text/css" href="style.css">`. However, you can also use css in the main .html file.
* The basic idea behind CSS is that you style specific elements of the html document (ie. `<p></p>`, `<h1></h1>`, etc, etc). By style we mean, color, font, font size, background color, letter spacing, etc, etc.
* In CSS you can also differentiate between elements using the `class` and `id` tags.
* For example, if we want to style all `<p></p>` elements we would add the following to our .css file:
```css
p{
    color: #000000;
    font-family: "futura-pt", helvetica, sans-serif;
    font-size: 1.35em;
    font-weight: 300;
    max-width: 900px;
}
```
* But if we want to style just one type of `<p></p>` element, first we would add a `class` or an `id` tag to the element and then style it like this:
  * HTML:
  ```html
<p>This is the generic text element with the default styling.</p>
<p class="boldText">This is one element we will style with BOLD text.</p>
<p id="italicsText">This is the other element we will style with ITALICS text.</p>
```
  * CSS:
```css
p{
  color: #000000;
  font-family: "futura-pt", helvetica, sans-serif;
  font-size: 1.35em;
  font-weight: 300;
  max-width: 900px;
}
p.boldText {
  font-weight: bold;
}
p#italicsText {
  font-style: italic;
}
```
