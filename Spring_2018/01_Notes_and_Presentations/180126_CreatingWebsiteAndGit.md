# Notes Week 2 (January 26, 2018) - Creating a Website and Git Basics
* Collect assignment

## Discussion - What and Why Data Visualization
* Blog
* What is data visualization in each of your fields:
  * Examples from your field
    * What is the data?
    * Why do you do it? What is the purpose?
      * Explore data
      * Communicate
      * Create a tool?
      * What else?
* Classic examples:
  * [Anscombe's quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet):

| I	| I | II	| II | III	| III | IV | IV |
| --- | --- | --- | --- | --- | --- | --- | --- |
| x	| y	| x	| y	| x	| y	| x	| y |
| 10.0 | 8.04 | 10.0 | 9.14 | 10.0 | 7.46 | 8.0 | 6.58 |
| 8.0 | 6.95 | 8.0 | 8.14 | 8.0 | 6.77 | 8.0 | 5.76 |
| 13.0 | 7.58 | 13.0 | 8.74 | 13.0 | 12.74 | 8.0 | 7.71 |
| 9.0 | 8.81 | 9.0	| 8.77 | 9.0 | 7.11 | 8.0 | 8.84 |
| 11.0 | 8.33 | 11.0 | 9.26 | 11.0 | 7.81 | 8.0 | 8.47 |
| 14.0 | 9.96 | 14.0 | 8.10 | 14.0 | 8.84 | 8.0 | 7.04 |
| 6.0 | 7.24 | 6.0 | 6.13 | 6.0 | 6.08 | 8.0 | 5.25 |
| 4.0 | 4.26 | 4.0 | 3.10 | 4.0 | 5.39 | 19.0 | 12.50 |
| 12.0 | 10.84 | 12.0 | 9.13 | 12.0 | 8.15 | 8.0 | 5.56 |
| 7.0 | 4.82 | 7.0 | 7.26 | 7.0 | 6.42 | 8.0 | 7.91 |
| 5.0 | 5.68 | 5.0 | 4.74 | 5.0 | 5.73 | 8.0 | 6.89 |

  * Get mean of x, mean of y, sample variance of x, sample variance of y, correlation between x and y, linear regression line, and coefficient of determination of the linear regression.
  * [Datasaurus](https://www.autodeskresearch.com/publications/samestats)
* Readings:
  * *Defining data visualization*
  * *Working with Data*
  * *What is Code*:
    * What is code?
    * Code as a structure
    * Multiple interpretations
    * Procedural
    * Set of conditions that limit and challenge
    * Sometimes it is more about creating the conditions than about executing them

## Website Basics
* Questions about `.html` and `.css`, or about local servers.
* [Bootstrap](https://v4-alpha.getbootstrap.com/)

## Git, Github and Versioning Control
* What is Git?:
  * Versioning control system
  * Free and open-source
  * Allows you to work collaborative
  * Helps you resolve conflicts
  * Runs local on your computer
* What is Github
  * Website on which you can publish, host and share repositories.
  * You can track issues and get feedback.
* Further explanation in [stackoverflow](http://stackoverflow.com/questions/11816424/understanding-the-basics-of-git-and-github).
* Other version control systems (*note: I haven't tested any of these so I can't vouch for them*):
  * [Perforce Helix](https://www.perforce.com/helix)
  * [Plastic SCM](https://www.plasticscm.com/)
  * [Pixelapse](https://www.pixelapse.com/): Version control and collaboration for designers.
  * [Subversion](https://subversion.apache.org/)

### Git Installation and Syncing With Github
#### On Mac Computers
* There are many ways to install Git on your Mac. And, chances are, you might already have Git installed. So firs, double check: go to your Terminal and type `git version` or `git --version`. If you do have it you should get something like this: `git version 2.11.0`.
* If it's not installed you can follow one of the following paths:
  * You can download the [Git for Mac Installer](https://sourceforge.net/projects/git-osx-installer/files/). Follow the prompts and test the version at the end to verify Git was installed.
  * Homebrew (or other package manager tools): [Homebrew](http://brew.sh/) is a package manager tool. It helps you install software on your computer and keep it up to date. If you plan to keep on using your Terminal, Homebrew is one of the best tools to install software and keep it updated. Here we will use it to install Git:
    * To install Homebrew go to your terminal and type `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
    * Once you finish the installation process type `brew install git` to install Git (the command `brew install <package>` will install the package on your computer using Homebrew. While you are here, you should also install Wget with `brew install wget`. This tool will help you download information from URLs.)
    * Once you've installed Git through Homebrew, test it by typing `git version`.
  * There are other ways of installing Git. If you are interested check out this [tutorial](https://www.atlassian.com/git/tutorials/install-git#mac-os-x).

### On Windows Computers
* If you installed GitBash then you already have Git. Test it by opening GitBash and typing `git --version` or `git version`. You should get something like this: `git version 2.11.0`.
* If you don't have it, here are the steps on how to install GitBash:
  * First, [download GitBash](https://git-scm.com/download) and once it has finished downloading open the `.exe` file and follow the installation instructions.
  * When you get to the `Adjusting your PATH environment` screen choose the option for `Use Git Bash Only`
  * And when you get to configuring the terminal emulator to use Git Bash, choose `"Use Windows' default console window"`.
  * Now you should be able to open GitBash: it should be on your windows Start Menu with your other programs.

### Adding Your Github Credentials to Git
* Finally you need to configure Git with your username, email address, and password. Do the following:
  * `git config --global user.name "UserName"` (this is your Github username)
    * Test by doing `git config --global user.name`
  * `git config --global user.email "email@email.com"`
    * Test by doing `git config --global user.email`
* Finally, you should allow Git to remember your username and password so you don't have to type them in every time you want to use it.
  * On a **Mac**:
    * First, check to see if the `credential-osxkeychain` is installed:
      * `git credential-osxkeychain`
      * You should get the following message: `usage: git credential-osxkeychain <get|store|erase>`. If you do, it means that it is installed (skip the installation). If you don't, your computer should prompt you to download it as part of the XCode Command Line Tools: `xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools.`
    * Once you've got it, tell Git to use the `oskeychain helper` by typing: `git config --global credential.helper osxkeychain`. Now, the next time you use Git, requiring the your username and password, you will grant access to the OSX keychain and your credentials will be stored.
  * And on **Windows** (GitBash):
    * `git config --global credential.helper wincred`. Now, the next time you use Git, requiring the your username and password, you will grant access to the OSX keychain and your credentials will be stored.
* For more info take a look at this [brief tutorial](https://help.github.com/articles/caching-your-github-password-in-git/) and if you ever need to change your credentials, [here](https://help.github.com/articles/updating-credentials-from-the-osx-keychain/) is how to do it.

### [Git tutorial](https://try.github.io/levels/1/challenges/1)

### GitHub workflow:
* **Creating a new repository**:
  * There are multiple ways of doing this. Usually, you create a new folder on your computer where your project will live, then you create the corresponding repository on GitHub and finally you link both.
  * Here is the GitHub page on how to [create a new repository](https://help.github.com/articles/creating-a-new-repository/). You usually do this after you've created a folder in your computer.
  * Next, [here's the tutorial on how to link the two](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
  * The basic commands for this one are:
    * `cd path/to/project/folder`: in your Terminal window navigate to your project folder.
    * `git init`: type this in your project folder start git.
    * `git add -A`: add all the changes to your local repository. This will add the new files, the modifications to existing files and note the files that have been deleted. You are basically saying , "add all that has changed to git". To undo an `add` use the following command: `git reset HEAD fileName`. A good explanation of the difference between `git add -A` and `git add .` can be found [here](https://stackoverflow.com/questions/572549/difference-between-git-add-a-and-git-add/37621823).
    * `git commit -m "First commit"`: this command commits the files that you just added and makes them ready to be synchronized with your remote repository. To undo a `commit` use the following command: `git reset --soft HEAD~1`.
    * Now navigate to the Quick Setup page of your repository on GitHub (the one you created just before this) and copy the repository URL.
    * `git remote add origin repositoryURL`: this links your local repository with your remote one on GitHub. This step only needs to be done the first time you setup a new repository.
    * `git remote -v`: this verifies your repository's remote URL. This step only needs to be done the first time you setup a new repository.
    * `git push -u origin master`: this final step pushes (uploads) your files and their changes to your remote repository. The flag `-u` tells git to remember that the branch `master` (on your computer) is linked to the branch `origin` on Github.
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
* If you want git to ignore one or multiple files in your folder, you need to create a file called .gitignore and write in it the names of the files you want to ignore. For example: "temp.txt" or "\*.csv".

### GitHub terms
* **Repository**: The location where all the files of a particular project are located. It can be local (on your own computer), remote (on the web, usually on github.io), or both, if you are synchronizing your local repository with a remote copy. On GitHub, each repository will have its own URL.
* **Commit**: Once you've made some changes to your files, and you are satisfied with those changes you can `add` and `commit` your files, which means that Git will make a snapshot of your files at that moment and you will be able to return to that snapshot at any point in time.
* **Push**: If you are working with a remote repository (this is usually the case), once you `commit` your files you will want to `push` them, which means synchronizing your changes with the repository located on the Github servers. That way, your collaborators will be able to see your changes and synchronize their files with yours.
* **Fetch**: The `fetch` command will take a look at the remote repository and see if any of it's files have changed. This command will not update the files on your local copy of the repository, it will only notify you that the files have changed.
* **Pull**: The `pull` command will actually update your files based on the changes to the remote repository. If they are any conflicts - for example, if you have made changes to some files that have also been changed by someone else - you will be notified of this when you do a pull command and you will be prompted to resolve the changes.
* **Branches**: Branches are copies of the main repository. Each branch has a name and you can experiment with them, change them, independent of the main repository. They work the same way as a repository and once you are satisfied with your changes you can merge your branch into the 'Master' branch of your repository. Projects often have 3 branches: the 'Master', which is the stable, tested, working branch; the testing branch, which has been developed, has new features but it's still under testing; and the experimental branch, which is under active development.
* **Clone a repository**: Cloning a repository means making a copy of it **on your own computer**. It doesn't mean you can change the files in the original repository but it gives you a copy of those files you can use or play with.
* **Fork a repository**: Forking a repository means making a copy of that repository **on your Github** account.
* To contribute to a Github project you need to first **fork** the repository and then **clone** it to your own computer. Once you've made changes on your own computer, you can push them to **your fork** and then submit a **pull request** from your Github repo. For more details see [this Stackoverflow](https://stackoverflow.com/questions/6286571/are-git-forks-actually-git-clones) post.
* **Pull request**: When you've forked a repository and you've made changes to your files that you want merged with the original repository you can submit a `pull request`. This will notify the owner of the original repository and will allow them to accept or reject your changes. Many of the large projects on GitHub evolve with people forking a repository, improving something on their end and submitting `pull requests` to the main repository. It is a great way to open up collaboration to the rest of the world without loosing control.

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
* Javascript have many pre-built functions. For example:
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
* Global vs. local variables
* [Semicolon](http://inimino.org/~inimino/blog/javascript_semicolons)
