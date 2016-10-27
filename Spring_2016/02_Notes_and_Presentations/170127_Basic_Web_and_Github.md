## Notes 01/27/2017 - Basic Web Concepts and Github

### Discussion
* What is data in your field?
* How does it look?
* Is the data different?
* Is the process of working with the data different?
* What about distribution? Web? Print? Sculpture? Other?
* Interactivity?

### Version control
* [What is version control?](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
* What is it good for?
* Why should we use it? In architecture, urbanism, humanities, other?
* It's about version control but it's also about collaborative work?

### Git & Github
* What is Git and what is Github:
  * **Git**: "Git is an open-source version control system. Think of it a series of snapshots of your code."
  * **Github**: "Github is a web-page on which you can publish and share your repositories."
  * Other differences: Git works locally, on your own computer. In contrast to other backup systems like Time Machine, Git allows you to see changes and track your process. Also, if you don't "push" (upload) your repository and the changes to Github, Git won't function as a backup.
* Further explanation in [stackoverflow](http://stackoverflow.com/questions/11816424/understanding-the-basics-of-git-and-github).
* Other version control systems (*note: I haven't tested any of these so I can't vouch for them*):
  * [Perforce Helix](https://www.perforce.com/helix)
  * [Plastic SCM](https://www.plasticscm.com/)
  * [Pixelapse](https://www.pixelapse.com/): Version control and collaboration for designers.
  * [Subversion](https://subversion.apache.org/)

### Examples
* Humanities:
  * [mini lazarillo - edición mínima del Lazarillo de Tormes](https://minilazarillo.github.io/) and the [Github repository](https://github.com/minilazarillo/minilazarillo.github.io)
* Architecture:
  * [Unity version control integration](https://docs.unity3d.com/Manual/Versioncontrolintegration.html)
* [Financial data and administration](https://github.com/SFPC/finance-and-administration)

### Github terms
* **Repository**: The location where all the files of a particular project are located. It can be local (on your own computer), remote (on the web, usually on github.io), or both, if you are synchronizing your local repository with a remote copy. On Github, each repository will have its own URL.
* **Commit**: Once you've made some changes to your files, and you are satisfied with those changes you can `add` and `commit` your files, which means that Git will make a snapshot of your files at that moment and you will be able to return to that snapshot at any point in time.
* **Push**: If you are working with a remote repository (this is usually the case), once you `commit` your files you will want to `push` them, which means synchronizing your changes with the repository located on the Github servers. That way, your collaborators will be able to see your changes and synchronize their files with yours.
* **Fetch**: The `fetch` command will take a look at the remote repository and see if any of it's files have changed. This command will not update the files on your local copy of the repository, it will only notify you that the files have changed.
* **Pull**: The `pull` command will actually update your files based on the changes to the remote repository. If they are any conflicts - for example, if you have made changes to some files that have also been changed by someone else - you will be notified of this when you do a pull command and you will be prompted to resolve the changes.
* **Branches**: Branches are copies of the main repository. Each branch has a name and you can experiment with them, change them, independent of the main repository. They work the same way as a repository and once you are satisfied with your changes you can merge your branch into the 'Master' branch of your repository. Projects often have 3 branches: the 'Master', which is the stable, tested, working branch; the testing branch, which has been developed, has new features but it's still under testing; and the experimental branch, which is under active development.
* **Fork a repository**:

### Github workflow:

### Other
* [Git Large File Storage](https://git-lfs.github.com/): necessary for working with files that are more than 100MB. Usually, when working with large video, audio or database files you will hit that limit. Use this system to track those files and use them in your repositories.
* Github actually supports (understands) 3D files like .stl and .obj and can visualize those files on its website and show changes.
* Github also supports .geoJson files and will visualize them on an interactive map on their website.