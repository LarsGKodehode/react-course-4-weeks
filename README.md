# Lesson 1.0 React
This is the first lecture for React in Kodehode 4 week course

## Using this repository
If you have installed [git](https://gitforwindows.org/) you can use that to clone this repository.
>```git clone https://github.com/LarsGKodehode/react-course-4-weeks.git```
Once downloaded inside that folder run to install all the dependencies
>```npm install```

## Files and Folders
### node_modules
This will only be available on a local copy once *npm install* has been run.
This folder contains all the dependecies (and their dependencies aswell) for your application.

### public/
Noteworthy for containing index.html and our apps favicon. Edit the title and swap out the favicon.ico with.
Every file inside here will be made available when we build our application. You *can* put files (like images) you want to use in you application here.

### src/
This is the folder where we will do the majority of our development. Look inside for a further breakdown.

### .gitignore
Inside this file you can put the name of files and folder you want to exclude from being uploaded when pushing.

### package-lock.json
DO NOT write in this file. This applies to all files ending with *-lock.json. These are generated and maintened by npm, and nothing we should concern us with.

### package.json
This is the important file. *npm* looks for this exact file when it is run to be aware of what this project actually is.

### README.md
This file. When published to GitHub.com if there are any file named README.md that file is displayed as sort of documentation for the folder where it is located.