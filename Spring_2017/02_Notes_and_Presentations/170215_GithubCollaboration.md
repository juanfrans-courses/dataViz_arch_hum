## Notes 02/15/2017 - Collaboration Workflow in Github

This is a short document about how to collaborate in Github.

### Setup
1. One of you should create a new repository on their own computer on Github.com and link the two (just like we did in class).
2. To make sure this works, that same person should add a couple of files to their local repository and `push` them to the remote repository. You should make sure those files appear on the Github.com repository.
3. Once you've done this, you should create a `gh-pages` branch on your local repository and push it to your remote repository. Use the following commands:
  * `git branch gh-pages` (this creates a new branch called `gh-pages`)
  * `git checkout gh-pages` (this switches you to the new branch)
  * `git push origin gh-pages` (this will push your new branch to the remote repository on Github.com)
4. Now you are ready for collaboration.
5. In Github.com, the person who first created the repository should go to their repository site and click on `Settings` (upper right-hand corner) and then `Collaborators & teams` on the left-hand panel. There, add your other team members as collaborators.
6. Now the other team members should accept the invitation that they should have received in the email to collaborate on this repository.
7. Once they have accepted the invitation they should `clone` the repository. To do this follow these steps:
  * Go to the Github.com page of the repository. Under the repository name click `Clone or download` and copy the full `https://...` address that appears there.
  * Now, in your terminal, go to the location where you want to put the repository. Once there do `git clone` and add the URL that you just copied. It should be something like this: `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`. This will download the repository on to your computer.
  * Make sure you have the files there.
8. Now, for those of you who cloned the repository, you need to switch also to the gh-pages branch, to make sure you will all be working on the same branch. To do this follow these steps:
  * If you do `git branch` your should only be able to see the `master` branch.
  * However, if you do `git branch -a` you will see the other `gh-pages` branch.
  * So, to actually checkout that branch for the first time do `git checkout -b gh-pages origin/gh-pages`. This will checkout the gh-pages branch and allow you to work on it.
  * To test this, do `git branch` and you should see botht the `master` and the `gh-pages` branches and the `gh-pages` one should have a * next to it. For a more thorough explanation of these last few steps, checkout [this stackoverflow question](http://stackoverflow.com/questions/67699/how-to-clone-all-remote-branches-in-git).
9. Finally, all of you should do `git branch --set-upstream-to=origin/gh-pages gh-pages`. This will make sure that when you `pull` changes into your gh-pages branch, it's pulling them from the actual gh-pages branch on the remote repository.
9. Now you should all be able to work on the gh-pages branch.

### Collaboration Workflow
The collaboration workflow is pretty simple:
1. Before starting to work you should always do `git fetch` to see if there have been any changes to the remote repository.
2. After `git-fetch` do `git status`. If it says that your branch is 'behind' you need to do `git pull` to get the changes. Otherwise you can skip the `git pull`.
3. Work... do awesome stuff...
4. Once you're done working you should do `git add -A` to add all your files.
5. Then do `git commit -m 'message about what you are commiting'`.
6. And finally, `git push` to push your changes to the remote repository.
7. It is always recommended and good practice to email your team members after you've pushed some changes to the repository, so that they know that they need to do a `git pull` before they start working.

Have fun...
