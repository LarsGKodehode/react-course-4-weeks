# Lesson 1.0 React
This is the repository for the Kodehode 4 week React module.

# Content
1. [The branch you are on now](https://github.com/LarsGKodehode/react-course-4-weeks/tree/main)
2. [Basic structure of a React project](https://github.com/LarsGKodehode/react-course-4-weeks/tree/project-structure-convention)

## Using this repository
There is no reason for you to actually download this repository, but please have a look around.
The way I have structured this repository to keep new information to a minimum is by dividing it up in branches.

If you have more questions, you can create an issue here on GitHub. Or even better if you think you have a better wording for some of the description, create a pull request containing those changes.


### How to get this repository today
If you have installed [git](https://gitforwindows.org/) you can use that to clone (download) this repository by using:
```sh
git clone https://github.com/LarsGKodehode/react-course-4-weeks.git
```
Once downloaded, open that folder in VS Code and run this to install all the dependencies.
```sh
npm install
```

## Files and Folders
### node_modules
This will only be available on a local copy once *npm install* has been run.
This folder contains all the dependecies (and their dependencies aswell) for your application.
It can become quite big, so it is set to be excluded in our .gitignore file by default.

### public/
Noteworthy for containing index.html and our apps favicon. Edit the title of your app and swap out favicon.ico with something more appropriate for your application.
Every file inside here will be made available when we build our application. You *can* put files (like images) you want to use in you application here.

### [src/](src/)
This is the folder where we will do the majority of our development. Look inside for a further breakdown.

### .gitignore
Inside this file you can put the name of files and folder you want to exclude from being uploaded when pushing to a remote repository, like this repository here which is hosted on GitHub.com.

### package-lock.json
DO NOT write in this file. This applies to all files ending with *-lock.json. These are generated and maintened by npm, and nothing we should concern us with.

### package.json
This is the important file. *npm* looks for this exact file when it is run to be aware of what this project actually is.
Until I get around to describing all the fields, you can open this up in VS Code and hover over the various fields there, and it will give you a short description of what it means. For full documentation see [npmjs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

### README.md
This file. When published to GitHub.com if there are any file named README.md that file is displayed as sort of documentation for the folder where it is located. The file that is originally created when create-react-app is run contains some instructions for how to use create-react-app. Once you have read them, I suggest you replace the content with a description of your application.
For markdown formatting and more documentation see [GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)