## Notes 01/27/2017 - Basic Web Concepts and GitHub

### Intro
* Attendance, Program
* Workshop: "Version Control for Textual Criticism", Friday 2-4pm at Studio@Butler (Dennis Tenen).

### Discussion
* What is data in your field?
* How does it look?
* Is the data different?
* Is the process of working with the data different?
* What about distribution? Web? Print? Sculpture? Other?
* Interactivity?
* Types of data:
  * **Nominal**: Qualitative data; categorical data; different groups with no order and no "distance" between them. It is not necessarily textual, it can also be numerical, so you need to treat it with caution and not perform any mathematical operations on it (ie. student ID numbers). Examples:
    * Gender
    * Country
    * Zip code
    * Language
    * True or False (this type of variable is called a 'boolean' and in programming it is treated differently than text data).
  * **Ordinal**: Still qualitative and categorical but has an order. However, there is no way of measuring exactly how far away one category is from another. Rankings. Some of these are ascending/descending and some of them are diverging, which should come into consideration when choosing color schemes. Examples:
    * Olympic medals
    * Survey questions (strongly agree, somewhat agree, somewhat disagree, strongly disagree).
  * **Interval**: Quantitative data. Has an arbitrary scale, in which the difference between values is meaningful but operations such as multiplications are not. The zero value doesn't mean there is no amount. Example:
    * Temperature in C or in F (not in Kelvin).
  * **Ratio**: Quantitative. This is the most common type of data. The differences in values have properties of difference and scale. Most of them are on a linear scale, but some of them, like decibels or Righter are on a logarithmic scale (an earthquake of 4.0 on the Righter scale is 1000 times stronger than an earthquake of 2.0 at the righter scale).
  * **Text**
  * **Temporal**: Sometimes it's a good idea to transform time/date values to single units of time, like days or minutes or seconds.
* Statistical methods:
  * **Frequency counts**
  * **Frequency distribution**
  * **Central tendency**:
    * Mean
    * Median
    * Mode
  * **Spread**:
    * Maximum, minimum, range
    * Percentiles (the value below which x% of the values fall).
    * Standard deviation
* Completeness: the amount of data doesn't necessarily guarantee completeness or representativeness.

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

For much more information and super useful tutorials, check out Dennis Tenen's Digital Humanities tutorials on [command-line](https://github.com/dh-notes/dhnotes/blob/master/tutorials/command-line/000-cli.md).

### Trouble shoot local server

### Version control
* [What is version control?](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
* What is it good for?
* Why should we use it? In architecture, urbanism, humanities, other?
* It's about version control but it's also about collaborative work?

### Git & GitHub
* What is Git and what is GitHub:
  * **Git**: "Git is an open-source version control system. Think of it a series of snapshots of your code."
  * **GitHub**: "GitHub is a web-page on which you can publish and share your repositories."
  * Other differences: Git works locally, on your own computer. In contrast to other backup systems like Time Machine, Git allows you to see changes and track your process. Also, if you don't "push" (upload) your repository and the changes to GitHub, Git won't function as a backup.
* Further explanation in [stackoverflow](http://stackoverflow.com/questions/11816424/understanding-the-basics-of-git-and-github).
* Other version control systems (*note: I haven't tested any of these so I can't vouch for them*):
  * [Perforce Helix](https://www.perforce.com/helix)
  * [Plastic SCM](https://www.plasticscm.com/)
  * [Pixelapse](https://www.pixelapse.com/): Version control and collaboration for designers.
  * [Subversion](https://subversion.apache.org/)

### Examples
* Humanities:
  * [mini lazarillo - edición mínima del Lazarillo de Tormes](https://minilazarillo.github.io/) and the [GitHub repository](https://github.com/minilazarillo/minilazarillo.github.io)
* Architecture:
  * [Unity version control integration](https://docs.unity3d.com/Manual/Versioncontrolintegration.html)
* Other:
  * [Financial data and administration](https://github.com/SFPC/finance-and-administration)

### GitHub terms
* **Repository**: The location where all the files of a particular project are located. It can be local (on your own computer), remote (on the web, usually on github.io), or both, if you are synchronizing your local repository with a remote copy. On GitHub, each repository will have its own URL.
* **Commit**: Once you've made some changes to your files, and you are satisfied with those changes you can `add` and `commit` your files, which means that Git will make a snapshot of your files at that moment and you will be able to return to that snapshot at any point in time.
* **Push**: If you are working with a remote repository (this is usually the case), once you `commit` your files you will want to `push` them, which means synchronizing your changes with the repository located on the Github servers. That way, your collaborators will be able to see your changes and synchronize their files with yours.
* **Fetch**: The `fetch` command will take a look at the remote repository and see if any of it's files have changed. This command will not update the files on your local copy of the repository, it will only notify you that the files have changed.
* **Pull**: The `pull` command will actually update your files based on the changes to the remote repository. If they are any conflicts - for example, if you have made changes to some files that have also been changed by someone else - you will be notified of this when you do a pull command and you will be prompted to resolve the changes.
* **Branches**: Branches are copies of the main repository. Each branch has a name and you can experiment with them, change them, independent of the main repository. They work the same way as a repository and once you are satisfied with your changes you can merge your branch into the 'Master' branch of your repository. Projects often have 3 branches: the 'Master', which is the stable, tested, working branch; the testing branch, which has been developed, has new features but it's still under testing; and the experimental branch, which is under active development.
* **Fork a repository**: Forking a repository means making a copy of it on your own computer. It doesn't mean you can change the files in the original repository but it gives you a copy of those files you can use or play with. However, if you do make changes to the files and you want to synchronize your changes with the original repository you can submit a `pull request`.
* **Pull request**: When you've forked a repository and you've made changes to your files that you want merged with the original repository you can submit a `pull request`. This will notify the owner of the original repository and will allow them to accept or reject your changes. Many of the large projects on GitHub evolve with people forking a repository, improving something on their end and submitting `pull requests` to the main repository. It is a great way to open up collaboration to the rest of the world without loosing control.

### Installing Git on your computer
* Mac:
  * There are many ways to install Git on your Mac. And, chances are, you might already have Git installed. So firs, double check: go to your Terminal and type `git version`. If you do have it you should get something like this: `git version 2.8.4 (Apple Git-73)`.
  * If it's not installed you can follow one of the following paths:
    * You can download the [Git for Mac Installer](https://sourceforge.net/projects/git-osx-installer/files/). Follow the prompts and test the version at the end to verify Git was installed.
    * Homebrew (or other package manager tools): [Homebrew](http://brew.sh/) is a package manager tool. It helps you install software on your computer and keep it up to date. If you plan to keep on using your Terminal, Homebrew is one of the best tools to install software and keep it updated. Here we will use it to install Git:
      * To install Homebrew go to your terminal and type `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
      * Once you finish the installation process type `brew install git` to install Git (the command `brew install <package>` will install the package on your computer using Homebrew. While you are here, you should also install Wget with `brew install wget`. This tool will help you download information from URLs.)
      * Once you've installed Git through Homebrew, test it by typing `git version`.
    * There are other ways of installing Git. If you are interested check out this [tutorial](https://www.atlassian.com/git/tutorials/install-git#mac-os-x).
  * Next you need to configure Git with your username and email address. Do the following:
    * `git config --global user.name "UserName"` (this is your Github username)
    * `git config --global user.email "email@email.com"`
  * Finally, you should allow Git to remember your username and password so you don't have to type them in every time you want to use it:
    * First, check to see if the `credential-osxkeychain` is installed:
      * `git credential-osxkeychain`
      * You should get the following message: `usage: git credential-osxkeychain <get|store|erase>`. If you do, it means that it is installed (skip the installation). If you don't, your computer should prompt you to download it as part of the XCode Command Line Tools: `xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools.`
    * Once you've got it, tell Git to use the `oskeychain helper` by typing: `git config --global credential.helper osxkeychain`. Now, the next time you use Git, requiring the your username and password, you will grant access to the OSX keychain and your credentials will be stored.
    * For more info take a look at this [brief tutorial](https://help.github.com/articles/caching-your-github-password-in-git/) and if you ever need to change your credentials, [here](https://help.github.com/articles/updating-credentials-from-the-osx-keychain/) is how to do it.
* Windows:
  * Most of the steps described above for Mac will operate the same in Windows. The following is one straightforward option that will install Git and give you a slightly-easier-to-use terminal interface. (You can follow this [tutorial](https://www.atlassian.com/git/tutorials/install-git#windows) for further details.)
    - Download the [Git for Windows Installer](https://git-for-windows.github.io/). The download link will direct you to a Github page, and at the bottom of the page will be a "Downloads" section. If you have a 64bit-version of Windows, you should download "Git-2.10.2-64-bit.exe", otherwise, download "Git-2.10.2-32-bit.exe".
      - If you are unsure, refer the following guide to determine if you have [32bit or 64bit Windows](http://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).
    - Open the installer, and follow the prompts. On the third window, choose "Use Git from the Windows Command Prompt". On the fourth, choose "Checkout Windows-style, commit Unix-style line endings". On the fifth, choose "Use Windows' default console window". Otherwise leave the default options as-is. 
    - Open "Git BASH". You can use this as your default terminal when using Git and the other command-line tools we will use in this course. 

### GitHub workflow:
* **Creating a new repository**:
  * There are multiple ways of doing this. Usually, you create a new folder on your computer where your project will live, then you create the corresponding repository on GitHub and finally you link both.
  * Here is the GitHub page on how to [create a new repository](https://help.github.com/articles/creating-a-new-repository/). You usually do this after you've created a folder in your computer.
  * Next, [here's the tutorial on how to link the two](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
  * The basic commands for this one are:
    * `cd path/to/project/folder`: in your Terminal window navigate to your project folder.
    * `git init`: type this in your project folder start git.
    * `git add .`: add the existing files to your local git (the dot(.) at the end of the command means "this", so you are basically saying, "add all that is here to git"). To undo an `add` use the following command: `git reset HEAD fileName`.
    * `git commit -m "First commit"`: this command commits the files that you just added and makes them ready to be synchronized with your remote repository. To undo a `commit` use the following command: `git reset --soft HEAD~1`.
    * Now navigate to the Quick Setup page of your repository on GitHub (the one you created just before this) and copy the repository URL.
    * `git remote add origin repositoryURL`: this links your local repository with your remote one on GitHub. This step only needs to be done the first time you setup a new repository.
    * `git remote -v`: this verifies your repository's remote URL. This step only needs to be done the first time you setup a new repository.
    * `git push -u origin master`: this final step pushes (uploads) your files and their changes to your remote repository.
* **Commit and push changes**:
  * Once you've setup your repository, every time you make changes to your files and you want to synchronize them with your remote repository you should use the following commands:
    * `git add -A`: this will add all your changes (files changed, new files and deleted files). For a useful explanation of the differences between `git add .`, `git add -u` and `git add -A` see this post on [Stackoverflow](http://stackoverflow.com/questions/572549/difference-between-git-add-a-and-git-add/572660#572660)
    * `git commit -m "Commit message"`: this commits your changes and adds a message explaining your changes.
    * `git push`: this is the final command, which pushes your changes to your remote repository.
* **Pull changes from remote repository**:
  * When you are collaborating with other people on the same repository you should usually check to see if others have pushed any changes before you start working. That way you will be working on an updated repository and avoid some conflicts.
  * `git fetch`: this command checks to see if there are any changes to your remote repository that you don't have on your local one. Note, this command only checks and notifies you, it doesn't apply the changes.
  * `git pull`: this is the command that actually downloads and applies the changes to your local repository. You could skip the `fetch` and just do a `pull`.
* **Overall workflow**:
  * The overall workflow would be something like this:
    * Navigate to your folder in Terminal.
    * `git fetch` to see if there are any changes.
    * If there are changes, `git pull`.
    * Work on your files.
    * Once your files are ready, do `git add -A`.
    * `git commit -m "commit message"`.
    * `git push`.

### Git branches and "gh-pages"
* A branch is a copy of the main repository where you can experiment without breaking your "master" copy. They are very useful when you have a stable copy of a project (usually on the "master" branch) but you still want to work on other features or improvements without breaking this working copy. In this case you create a branch, change it and test it and once it is ready, merge it with the "master":
  * To create a branch do `git branch <branchName>`.
  * To switch to that new branch do `git checkout <branchName>`.
  * To list the branches in your repository do `git branch`. The branch with a * next to it will be the one you are currently working on.
  * When you are done with your branch and merge it back to the "master", switch to the master and do `git merge <branchName>`.
  * Finally, to delete a branch do `git branch -d <branchName>`.
* A **"gh-pages"** is a specific branch that GitHub will use to create a website. For your projects we will be using the "gh-pages":
  * Once you start your project repository you should create a "gh-pages" branch and switch to it so that you are working on that branch. This way, whatever you change on your repository will be displayed as a website on GitHub.
  * The URL for that page will be: https://githubUserName.github.io/repositoryName/

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