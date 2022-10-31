## This folder
This folder will contain all (almost all) of our own code.

## Files and folders
### App.css
Created by create-react-app, you might want to delete this and just have every global applicable css style inside index.css.
> Looking into why create-react-app creates the files this way. Looks like it is for easier compatability with some convention for structuring an application.

### App.js
Our applications top level component.

### App.test.js & setupTest.js
For testing. There is not currently time in this course to go through testing in software development.
I **HIGHLY** recomend researching this topic.

### index.css
Use this css files for global applicable styling. Examples include, importing of fonts.

### index.js
This is the entry point of our application. It is the files that will be linked in our index.html.
In some more words. When you run *npm run build* react-scripts goes to this file and starts parsing it, when it encounters an *import* statement it will replace that statement with the content of the refrenced file. If that file contains any import statements those too will be replaced. This will continue until it reaches the end of index.js.

### logo.svg
This is imported into App.js. We will not place our image files directly in the src/ folder, but put the into a subfolder named assets/. If you have multiple images yout might want to group them into seperate subfolders as well. We will talk more about how React Applications are ususally structured.

### README.md
The file containing this text

### reportWebVitals.js
Another tool for web development we do not have in our course. See the [GitHub repository](https://github.com/GoogleChrome/web-vitals) for details.