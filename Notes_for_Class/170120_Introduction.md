## Notes 01/20/2017 - Introduction

### Introductions
* Myself
* Buck
* Class:
  * Objectives
  * Data / tools (programming) / visualization
  * Interdisciplinary (data / methods / results)
  * Readings
  * Assignments
  * Final project
  * Grading
  * Blog
  * Resources

### Why data visualization
* Discussion:
  * Why data visualization in architecture and urbanism
  * Why data visualization in the humanities
  * What do they have in common
  * Why programming? Why online?
  * What is data for each discipline

### Basic infrastructure (stack)
* Client vs. server
* Difference between local and remote servers
* Using Github as a version control tool but also as a server
* Stack:
  * HTML
  * CSS
  * JavaScript
  * p5.js
* Folder organization (this is not obligatory, just suggestion):
  * index.html
  * css/
    * main.css
  * img/
    * image files
  * js/
    * JavaScript files
  * other folders
    * other .html files
* Developer tools:
  * Inspector

### What is HTML and CSS
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
