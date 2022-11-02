# Branches
1. [Main entrypoint](https://github.com/LarsGKodehode/react-course-4-weeks/tree/main)
2. [Basic structure of a React project](https://github.com/LarsGKodehode/react-course-4-weeks/tree/project-structure-convention)
3. [This branch](https://github.com/LarsGKodehode/react-course-4-weeks/tree/component-properties)

## This branch
Branch #2 gave a simple example of how to create a resuable component and where to store it inside your project.
The next step into React will enable us to create components with dynamic content.

In React the way we do this is by giving components, what is called, *props* (shorthand for properties).
The HTML equivalent is the elements attributes. Example:
The `<a>` element takes a *href* attribute to know where to link to
```
<a href="https://example.com">Example link</a>
```
The syntaxt when calling custom React components is identical.
- See [App.js](/src/App.js) for how to call a component with custom props
- See [CardsUsingProps](/src/components/CardUsingProps/CardUsingProps.jsx) for how to handle incomming props in a custom component
Further you do not need to just pass JavaScript strings, you can use all JavaScript Types, booleans, numbers, arrays, objects, etc.

## Files and Folders
### [src/components/CardsUsingProps/](/src/components/CardUsingProps/) ```NEW```
Simple example of how to handle props passed to a component

### [src/App.js](/src/App.js) ```NEW```
How to pass properties (props) to components inside your application