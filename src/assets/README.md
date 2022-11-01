# Assets folder
This folder is where we put our assets. Mostly used for multimedia files like images, videos and audio files that do not belong to (is used by) any one component or page.

You can either create a subfolder for each type or you can decide your application benefits more from grouping them by usage.

## CSS
### [example](/src/assets/css/themeColorVariantA.css)
We have created a folder for css here. I strongly advise only putting global applicable styles inside them.
Along the lines of the example provided, ie variables for theme colors.

The aim is to be able to just copy/pasting the components you create inside a project into any new project you start (maybe even publishing them to [npmjs](https://www.npmjs.com/)). This becomes, painfully, difficult if each component is dependant on files spread throughout your project.