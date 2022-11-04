# Component Example
The files inside here showcases how to structure your component folder, from this folder we are only exporting **one** component. To emphasis, each component has its own folder containing all the files belonging to that component.

## InfoCard.jsx
This is where our component is defined. This is a very simple component written using the arrow function notation, also known as a React functional component.


## index.js
This file is optional, but it simplifies our import statements further. It has no impact on the web page we publish to the web (as long as you have not imported the component anywhere before deleting). Just bee consistent when you are creating your own components.

## Asides
### Old school React
If you are working on older version of React you might encounter the React class components.
These work a bit differently than functional components and are not somthing we will be using in our course. They are merly shown here for completeness:
```sh
class InfoCard extends React.Component {
  render() {
    return (
      <article>
        <h3>A card containing some info</h3>
        <p>Just some sample text inside here</p>
      </article>
    );
  }
}
```
### Why index.js?
Keeping the same convention between homebrewn components and the ones we are installing via npmjs.
It also makes it easier to read our import statements.
With index.js and content:
```sh
import Infocard from 'components/InfoCard';
```
Without we have to specify which file inside the folder we want:
```sh
import InfoCard from 'components/InfoCard/InfoCard';
```

The way this works is that the build process (compilation) that is run when starting
either:
```sh
npm run start
```
or
```sh
npm run build
```
looks, unless specified, for a file called index.js. So inside our index.js we are simply saying the stuff you want is not in this folder look in the other one instead.