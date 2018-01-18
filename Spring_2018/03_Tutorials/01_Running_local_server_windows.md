## Tutorial for running a local server with windows

### 01. Installing GitBash

Firstly, you will need to install Git.

* What is Git, what is GitHub and what is GitBash:
  * **Git**: "Git is an open-source version control system. Think of it a series of snapshots of your code."
  * **GitHub**: "GitHub is a web-page on which you can publish and share your repositories."
  * Other differences: Git works locally, on your own computer. In contrast to other backup systems like Time Machine, Git allows you to see changes and track your process. Also, if you don't "push" (upload) your repository and the changes to GitHub, Git won't function as a backup.
  * **GitBash**: a program that lets you interact with Git and your computer in a similar way as the Terminal application on Apple computers

You can download it from the [Git SCM website.](https://git-scm.com/download)
Download the .exe file for windows and follow the installation instructions choosing the default options except for the following cases:
* When you get to the **Adjusting your PATH environment** screen choose the option for **Use Git Bash Only**
* When you get to configuring the terminal emulator to use Git Bash, choose **"Use Windows' default console window"**.

Now you should be able to open GitBash, it should be on your windows Start Menu, with your other programs.
As we will be using GitBash as the Mac terminal equivalent, it might be possible that other tutorials or class explanations refer to GitBash as 'Terminal'.  

### 02. Installing Python

Secondly, we will need to install Python.
For this class we will be using **Python 3.6**
* Go to the [Python](https://www.python.org/) homepage.
* Find **Download** and click on the version you want.
* Go to the bottom of the page and select **Windows x86 executable installer**
* Download the .exe file and run it.
* On the first page, select the box that says **'Add Python 3.6 to PATH'**, click **install now** and close when the installation has finished.

### 03. Get Familiarized with the Terminal

Open **GitBash**. You will find it with your windows programs (it might be inside a folder called Git)
You will see that GitBash is a program without buttons or icons. You will have to 'talk to the computer' to do what you want.
In order to do that, you will need to type commands and Git will respond to us.

The **promt** is the text that you see left of your cursor.

These are some of the commands you will be using in the Terminal:

* `cd <path/to/folder>` - Change directory. Used to move to another folder in your computer.
* `cd ~` - Change directory to home folder.
* `cd -` - Change directory to previous directory.
* `cd..`- Go back one folder in the directory
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

Try a first command to get familiarized and type `ls` and hit enter.
You should see everything inside the folder you are in.

If you want to move from one folder to another, use the command `cd`, meaning **change directory**.  
For instance, if you want to go to the Desktop, you can type `cd ~/Desktop`  and hit enter.
If you type `ls` afterwards, you will be able to see all folders and files that are in your Desktop.

You can now **check if Python is installed**.
* In order to do that, type `python -V`. You should get the version of your python as an answer.

### 03. Create a local server

* Navigate to the location you want to create the local server in your Terminal. Basically, go to where you are going to save your files for the course. You will save the html file of your website over there.
* The following instructions depend on the **Python** version you have. If you have installed it for the first time now (and followed the previous instructions) you should have a **Python 3.x** version. If you already had Python from before you might be having a **Python 2.x** version.
* Start up the server in that directory by using the following command:
  * If you have Python 2.x you should use: `python -m SimpleHTTPServer`.
  * If you have Python 3.x you should use: `python -m http.server`.
* Navigate to `http://localhost:8000/` on your web browser.
* 8000 is the default location, but if you want to run the server in a different port you can do `python -m SimpleHTTPServer 4000` which will run the local server in the 4000 port. In your browser you should then go to `http://localhost:4000/`.
* To stop the local server you should go to your terminal window and press 'ctrl+c' which stops the current command running.
