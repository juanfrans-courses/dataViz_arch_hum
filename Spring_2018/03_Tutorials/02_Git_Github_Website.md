## Tutorial 02 - Git and Github Basics and Your Own Website
The idea with this tutorial is that you familiarize yourselves with Git and Github and that at the end of it you have your website for this class up and running. You will certainly have to design it and customize it on your own, but at least you will have the corresponding repository set up and running.

### Git Tutorial
First, to familiarize yourselves with Git some more, do [this tutorial](https://try.github.io/levels/1/challenges/1).

### GitHub Workflow
Next, here is a review of what we did in class with some additional comments and links. Please read through it and make sure you understand what's going on.
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
* **Branches**:
  * A branch is a copy of the main repository where you can experiment without breaking your "master" copy. They are very useful when you have a stable copy of a project (usually on the "master" branch) but you still want to work on other features or improvements without breaking this working copy. In this case you create a branch, change it and test it and once it is ready, merge it with the "master":
    * To create a branch do `git branch <branchName>`.
    * To switch to that new branch do `git checkout <branchName>`.
    * To list the branches in your repository do `git branch`. The branch with a * next to it will be the one you are currently working on.
    * When you are done with your branch and merge it back to the "master", switch to the master and do `git merge <branchName>`.
    * Finally, to delete a branch do `git branch -d <branchName>`.
  * A **"gh-pages"** branch is a specific branch that GitHub will use to create a website. Github recognizes the name of this branch and will render it as a website when you go to a specific URL on your browser. This is the branch you will use to create your websites for this class.
* **Git cheat sheet**: This [Git Cheat Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf) is a great resource.
* **Troubleshooting Git**:
  * `git reset HEAD fileName`: undoes a file added to the local repository.
  * `git reset --soft HEAD~1`: undoes a commit to the local repository.
* **Other**:
  * [Git Large File Storage](https://git-lfs.github.com/): necessary for working with files that are more than 100MB. Usually, when working with large video, audio or database files you will hit that limit. Use this system to track those files and use them in your repositories.
  * GitHub actually supports (understands) 3D files like .stl and .obj and can visualize those files on its website and show changes.
  * GitHub also supports .geoJson files and will visualize them on an interactive map on their website.
  * If you want git to ignore one or multiple files in your folder, you need to create a file called .gitignore and write in it the names of the files you want to ignore. For example: "temp.txt" or "\*.csv".

### GitHub terms
Here's a short glossary of terms for your reference.
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

### Creating Your Own Website Through Github
Now here comes the fun part.
* First, navigate to your class folder. In there, create a new folder for your website. The command for creating folders in Terminal is `mkdir <folderName>` (replace the `<folderName>` with the name of your folder).
* Then, initiate git with `git init`.
* Now copy (`cp`), move (`mv`) or create the files for your website in that folder:
  * Remember, you will need at least an `index.html` file, a `css` folder, a `style.css` file in the `css` folder, and an `assignmentTemplate.html` file, either in the main folder or in another folder probably called `assignments`.
  * You will also need an `img` folder (for your images) with an image file for your landing page.
* Once you have these files there, go ahead and do your first commit:
  * `git add -A`
  * `git commit -m 'Initial commit'`
* Now let's go ahead and link this repository to a new repository on Github:
  * Go to [Github](https://github.com/) and create a new repository with the little plus sign on the top-right corner.
  * Add the repo name (something like `dataVizClassSite`) and create the repository.
  * Now in your Terminal (in your website folder) copy and paste the two lines from your Github page where it says "...or push an existing repository from the command line":
    * `git remote add origin <yourURLhere>` (replace `<yourURLhere>` with the URL listed on the Github page)
    * `git push -u origin master`
  * Once you do this, you should be able to refresh your Github page and see your files there.
* Now because we know that this is going to be a website and that we will use the `gh-pages` branch, go ahead and create that branch and switch to it:
  * `git branch gh-pages`
  * `git checkout gh-pages`
* Finally, we need to connect this `gh-pages` branch on your computer to a branch on the Github site.
  * To do this do `git push --set-upstream origin gh-pages`. This basically tells Github to create a new branch called `gh-pages` on the origin repository (the one on Github) and to link your local branch with that one.
  * On your Github page, you should be able to see your new `gh-pages` branch in the dropdown menu that says `Branch: master`.
* Now go ahead and do the basic coding and design for your site and test it using your local server.
* At any point (probably at multiple points) you can `add`, `commit` and `push` your changes to Github.
* Make sure you check that you are working on the `gh-pages` branch either by doing `git status` or by doing `git branch`.
* And once you've uploaded your files to the Github repo you can actually check the URL for your website to see how things are working on the remote server (the actual server that's open to all). The URL for your site is going to be https://githubUserName.github.io/repositoryName/ where `githubUserName` is your user name and `repositoryName` is the name of your repository on Github.
