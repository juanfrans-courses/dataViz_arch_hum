## Tutorial 01 - Running a Local Server (and Installing Python and GitBash)

### Create Your `.html` and `.css` Files
* The first thing you need to do is to create a folder for your website. Inside this folder you will place all the files associated with your site.
* Once you have that folder, use Atom or Sublime Text (or the text editor of your choice) to create two files and another folder:
  * `index.html` (file)
  * `css` (folder)
    * `style.css` (file)
* Just for clarification, your `style.css` folder should be inside the `css` folder, which is inside your main website folder.
* Now, you should add the basic template to your `index.html` file. Copy and paste the following code:
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
* This should be enough for the local server. However, since you also created a `.css` file we will link it to the `index.html` file and add some basic styling.
* Add the following line inside the `<head>` of your `index.html`: `<link rel="stylesheet" type="text/css" href="css/style.css">`
* This tells your `index.html` that there's a stylesheet named `style.css` located inside the `css` folder.
* Your `index.html` file should look like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```
* Now add some basic styling to your `style.css` file:
```css
body {
  background-color: #CCCCCC;
}
p {
  color: blue;
  text-align: center;
}
```
* This is just some random styles so you have something there.
* With these two files you should be ready to run your local server and see something on your browser.

### Installing Python (and GitBash)
If you are working on a Mac computer you already have Python, so you can skip ahead to the [next section](#running-a-local-server). If you are on a Windows computer we recommend you install GitBash and then Python.
#### Installing GitBash
* *GitBash* is a program that emulates a Terminal window and let's you interact with your computer in a similar way. In addition, it also contains *Git*, the main library that will allow us to upload code to *Github* and work collaboratively.
* First, [download GitBash](https://git-scm.com/download) and once it has finished downloading open the `.exe` file and follow the installation instructions.
* When you get to the `Adjusting your PATH environment` screen choose the option for `Use Git Bash Only`
* And when you get to configuring the terminal emulator to use Git Bash, choose `"Use Windows' default console window"`.
* Now you should be able to open GitBash: it should be on your windows Start Menu with your other programs.

#### Installing Python
The next step for those on Windows computers is to install Python.
* First, go to the Python [download](https://www.python.org/downloads/windows/) page for Windows and click on the `Latest Python 3 Release - Python 3.6.4`.
* Next, select the `Windows x86 executable installer` at the bottom of the page (under `Files`).
* Once the file finishes downloading go ahead and run it.
* On the first page select the box that says `Add Python 3.6 to PATH` and click `install now`.
* Your computer should now have Python.

### Running a Local Server
Now both Windows and Mac computers can use Python to run a local server.
* First, open a Terminal window or GitBash (in Windows).
* On Macs you can find your Terminal through your `Spotlight Search` (by pressing `command + space bar`) or in your `Utilities` folder inside your `Applications` folder.
* Once you have either your Terminal or your GitBash open, test to see if Python is working and what version it is:
  * To do this type the `python -V` command. You should see a response with your Python version, most likely Python 2.7.x or Python 3.6.x (the x can be any number).
  * Remember what version you have.
* Now navigate to the folder where you created your `index.html` file:
  * You can use `pwd` to show your current location.
  * You can use `ls` to display the contents of the current folder.
  * You can use `cd <path/to/folder>` to change folders (replacing `<path/to/folder>` with the path and the name of the folder you want to go to).
    * *Note that if your folder name or your file name contains a space you might get an error. For example, in most cases you would need to navigate to a folder called `data visualization course` like this: `cd data\ visualization\ course`. The crucial thing to note here is the backslash which is necessary for the Terminal to understand the space as a character and not as a separation in the commands. Once you've encountered this problem a few times you will probably start naming your files and folders using a "camelCase" notation (`dataVisualizationCourse`) or underscores (`data_visualization_course`).*
  * And you can use `cd ..` to move up one level.
  * You can also use the `Tab` key to autocomplete commands or names of files or folders. Start typing one of these and press `Tab` to complete the rest.
  * For other Terminal or GitBash commands, see the [final section](#terminal-or-gitbash-commands) of this tutorial.
* Once you are in your website folder, type the following command to start your local server:
  * For Python 2.7.x: `python -m SimpleHTTPServer`
  * For Python 3.6.x: `python3 -m http.server` or `python -m http.server`
* Once your local server start open a new tab on your internet browser and go to: `http://localhost:8000`
* 8000 is the default location, but if you want to run the server in a different port you can do `python -m SimpleHTTPServer 4000` which will run the local server in the 4000 port. In your browser you should then go to `http://localhost:4000/`.
* In your browser you should be able to see the result of your `index.html` file, styled by your `style.css` file.
* Change a few things in those files, save them and reload your browser window to see the changes.
* To stop the local server you should go to your terminal or GitBash window and press 'ctrl+c' which stops the current command running.
* Now please check out the following documentation for `.html`, `.css` and Terminal or GitBash, and make sure you familiarize yourselves with it.

### HTML (Hyper Text Markup Language)
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

### CSS (Cascading Style Sheets)
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

### Terminal or GitBash Commands
* `cd <path/to/folder>` - Change directory. Used to move to another folder in your computer.
  * *Note that if your folder name or your file name contains a space you might get an error. For example, in most cases you would need to navigate to a folder called `data visualization course` like this: `cd data\ visualization\ course`. The crucial thing to note here is the backslash which is necessary for the Terminal to understand the space as a character and not as a separation in the commands. Once you've encountered this problem a few times you will probably start naming your files and folders using a "camelCase" notation (`dataVisualizationCourse`) or underscores (`data_visualization_course`).*
* `cd ~` - Change directory to home folder.
* `cd -` - Change directory to previous directory.
* `cd ..`- Go back one folder in the directory
* `pwd` - Path working directory. Prints the current directory
* `ls` - List directory contents.
* `ls -lha` - List directory contents with the following flags (variations):
  * `l` - List in long format.
  * `h` - Lists file size in human readable form.
  * `a` - Includes hidden files (files whose name begins with a dot (.)).
* `man <command>` - Prints the manual for the specified command. Very useful to understand the command and its flags (variations).
* `mv <file> <path/to/new/location>` - Move. Moves the specified file to the specified new location. **Careful, this command overwrites**.
* `cp <file> <path/to/copy/destination>` - Copy file to new location. **Careful, this command overwrites**. If what you are copying is a folder and its contents you should do `cp -r <folder> <path/to/copy/destination>` so that the copy is 'recursive' (`-r`) and the contents of the folder are copied as well.
* `cat <file>` - Prints content of file. It is useful for reading a file very quickly but if the file is long you might want to do `head <file>` or `tail <file>` which displays the first or last lines of the file.
* `mkdir <folderName>` - Creates a new folder.
* `touch <fileName.extension>` - Creates a new file.
* `rm <fileName>`: Remove file. **Careful, this command permanently deletes the specified file**. If you want to remove a directory and its contents do `rm -ri <folderName>`. This will remove recursively and ask for a confirmation for every file (`-i`).
* `.` - the dot means here (in this location). Commonly used when you want to move or copy a file from another directory to your current one.
* You can also use the `Tab` key to autocomplete commands or names of files or folders. Start typing one of these and press `Tab` to complete the rest.
* Here are some navigation shortcuts in the Terminal:
  * 'ctrl+A' - moves to start of line.
  * 'ctrl+E' - moves to end of line.
  * 'ctrl+B' - moves back one character.
  * 'ctrl+F' - moves forward one character.
  * 'ctrl+U' - deletes from cursor to start of line.
  * 'ctrl+K' - deletes from cursor to end of line.
  * 'ctrl+W' - deletes from cursor to beginning of current word.
* Try a first command to get familiarized and type `ls` and hit enter. You should see everything inside the folder you are in.
* If you want to move from one folder to another, use the command `cd`, meaning **change directory**. For instance, if you want to go to the Desktop, you can type `cd ~/Desktop`  and hit enter. If you type `ls` afterwards, you will be able to see all folders and files that are in your Desktop.
