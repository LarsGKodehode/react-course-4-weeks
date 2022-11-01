# Content
1. [Main entrypoint](https://github.com/LarsGKodehode/react-course-4-weeks/tree/main)
2. [The branch you are on now](https://github.com/LarsGKodehode/react-course-4-weeks/tree/project-structure-convention)

## This branch
This branch is for giving some best practices (conventions) for how to structure your React project.

## Files and Folders
### jsconfig.json ```NEW```
We have added this to enable us to configure how create-react-app is reading *import* statements.
This allows us to write import statements like this:
```sh
import MyButton from 'components/MyButton';
```
Otherwise, when our project contains alot of components, we might have needed to chain '../../../' to import the right one, ie:
```sh
import MyButton from '../../../MyButton';
```
If you want to read more see [here](https://create-react-app.dev/docs/importing-a-component/#absolute-imports).

### [src/assets](/src/assets/) ```NEW```
This usually only contains media files like images, videos, logos, audio. Check out for more info.

### [src/components](/src/components/) ```NEW```
One of the most important folders in our project, all the components you will be creating goes in here. Check it out for information about how to structure it to be best prepeared for the future.

### node_modules
This will only be available on a local copy once *npm install* has been run.
This folder contains all the dependecies (and their dependencies aswell) for your application.
It can become quite big, so it is set to be excluded in our .gitignore file by default.

### [public/](public/)
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