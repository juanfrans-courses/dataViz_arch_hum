## Notes 01/20/2017 - Introduction

### Introductions
* Myself
* Buck
* Class:
  * Objectives:
    * Data / tools (programming) / visualization
    * Interdisciplinary (data / methods / results)
  * Readings
  * Assignments & homework
  * Final project (groups of 4 people)
  * Grading
  * Blog
  * Resources

### Questions about the course
* No mapping
* Online, interactive website as final product (with room for experimentation and other forms of data visualization)
* Interdisciplinary groups
* Collaborative work
* Why programming?
* Why p5.js (why not D3.js or Shiny in R)?
* Why Github?
* Why SublimeText ([download it here](https://www.sublimetext.com/3))

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

### What is HTML (Hyper Text Markup Language)
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

### What is CSS (Cascading Style Sheets)
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

### Terminal (Command Line)
The 'Terminal' or 'Command Line' is an interface where you will be able to navigate to specific parts of your computer and execute commands (see a more detailed explanation in [What is the difference between Terminal, Console, Shell, and Command Line?](https://askubuntu.com/questions/506510/what-is-the-difference-between-terminal-console-shell-and-command-line)). For our purposes, the 'Terminal' is where we will run a local server from and where we will submit our Github pull and push requests from. In other words, it will be the main interface to help us set up everything.

Here are some of the main commands in the Terminal:
* `cd <path/to/folder>` - Change directory. Used to move to another folder in your computer.
* `cd ~` - Change directory to home folder.
* `cd -` - Change directory to previous directory.
* `pwd` - Path working directory. Prints the current directory
* `ls` - List directory contents.
* `ls -lha` - List directory contents with the following flags (variations):
  * `l` - List in long format.
  * `h` - Lists file size in human readable form.
  * `a` - Includes hidden files (files whose name begins with a dot (.)).
* `man <command>` - Prints the manual for the specified command. Very useful to understand the command and its flags (variations).
* `mv <file> <path/to/new/location>` - Move. Moves the specified file to the specified new location.
* `cp <file> <path/to/copy/destination>` - Copy file to new location. **Careful, this command overwrites**. If what you are copying is a folder and its contents you should do `cp -r <folder> <path/to/copy/destination>` so that the copy is 'recursive' (`-r`) and the contents of the folder are copied as well.
* `cat <file>` - Prints content of file. It is useful for reading a file very quickly but if the file is long you might want to do `head <file>` or `tail <file>` which displays the first or last lines of the file.
* `mkdir <folderName>` - Creates a new folder.
* `touch <fileName.extension>` - Creates a new file.
* `rm <fileName>`: Remove file. **Careful, this command permanently deletes the specified file**. If you want to remove a directory and its contents do `rm -ri <folderName>`. This will remove recursively and ask for a confirmation for every file (`-i`).
* `.` - the dot means here (in this location). Commonly used when you want to move or copy a file from another directory to your current one.

Here are some navigation shortcuts in the Terminal:
* 'ctrl+A' - moves to start of line.
* 'ctrl+E' - moves to end of line.
* 'ctrl+B' - moves back one character.
* 'ctrl+F' - moves forward one character.
* 'ctrl+U' - deletes from cursor to start of line.
* 'ctrl+K' - deletes from cursor to end of line.
* 'ctrl+W' - deletes from cursor to beginning of current word.

### Create a local server
* To create a local server navigate to the desired location (where you have your main .html file) in your terminal and do the following command: `python -m SimpleHTTPServer`. Then open your browser and got to `http://localhost:8000/`.
* 8000 is the default location, but if you want to run the server in a different port you can do `python -m SimpleHTTPServer 4000` which will run the local server in the 4000 port. In your browser you should then go to `http://localhost:4000/`.
* To stop the local server you should go to your terminal window and press 'ctrl+c' which stops the current command running.

#### Windows instructions for running a server
* If you are running Windows, you can use the same method as above, but you first need to install python on your system (it comes pre-installed on Mac)
* Go to [python.org](https://www.python.org/downloads/windows/) to download the latest version of python for your machine. (Note: there are two versions of python, "2.7" and "3.6". For this class, we recommend installing version 2.7)
* After downloading the installer, double-click to open it and follow the installation prompts, selecting the defaul settings until you get to the page that reads "Customize Python 2.7.XX"
    - Scroll to the bottom of options, and click the drop-down selection that reads "Add python.exe to Path" (it should have a red "X" by default)
    - Select the option that reads "Entire feature will be installed on local hard drive"
* Follow the prompts on the rest of the setup, allow the installation to finish. When it's done, it will tell you, and python is now installed on your computer and available to use.
* To test that python was installed, open the Command Prompt application, and enter `python --version`. It should read "Python 2.12.XX". Then you can follow the above directions on "Create a local server".
* You should also install a terminal emulator. Git Bash is a terminal emulator that will make following the prompts in class function largely the same on Windows as they do on Mac. Since it also installs Git on your computer (which you will also need), this is the recommended emulator for this class. You can follow this [tutorial](https://www.atlassian.com/git/tutorials/install-git#windows) for further details, but the essentials are as follows:
  - Download the [Git for Windows Installer](https://git-for-windows.github.io/). The download link will direct you to a Github page, and at the bottom of the page will be a "Downloads" section. If you have a 64bit-version of Windows, you should download "Git-2.10.2-64-bit.exe", otherwise, download "Git-2.10.2-32-bit.exe".
    - If you are unsure, refer the following guide to determine if you have [32bit or 64bit Windows](http://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).
  - Open the installer, and follow the prompts. On the third window, choose "Use Git from the Windows Command Prompt". On the fourth, choose "Checkout Windows-style, commit Unix-style line endings". On the fifth, choose "Use Windows' default console window". Otherwise leave the default options as-is. 
  - Open "Git Bash". You can use this as your default terminal when using Git and the other command-line tools we will use in this course. 
