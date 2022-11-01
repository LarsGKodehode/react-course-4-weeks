# Components folder
This is the folder where you should store all your components.
There is [one example component](/src/components/InfoCard/) inside the InfoCard folder. Note we are following a naming convention where all component names start with capital letters, this is applies to the folder aswell as the .jsx

React and create-react-app are unopinionated (ie. They do not have any official documentation) for how to structure your application.
There are however some best-practices that have evolved, but above all keep it consistent throughout your codebase.

## 1. ```DO NOT USE```
#### Stick everything in here, no need for more structure
This is the simplest and maybe event the best for tiny throwaway projects. This means you will not be using this for the task you will be delivering.
For small personal projects, well.. we will not spend time going through your dirty laundry.
### Pros
- Extremly simple
- Not relly bad before you know how the design of the project
### Cons
- Quickly deteriorating oversight
- Not good for styling components

## 2.
####  These two components look alike, stick them in the same folder
A ok option for small to medium sized projects. Keeps things organized and you might want to combine this with number 3.
### Pros
- Similar components are grouped together
### Cons
- Still not good for styling components

## 3. ```This are the instruction you are looking for```
#### To each components, their own folder
To achieve the utmost of modularity and preparedness for the future, create a seperate subfolder for each individual component.
If your project has many components you could also combine this with number 2 and create subfolders for similiar components ie. 'input/' for all buttons and inputs.