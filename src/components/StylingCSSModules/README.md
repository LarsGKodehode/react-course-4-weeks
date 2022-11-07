# CSS Modules for styling
This is my recomended way to apply basic styling to components, requiring nearly no new knowledge.

### Relevant files
- [StylingCSSModules.jsx](./StylingCSSModules.module.css)
- [StylingCSSModules.module.css](./StylingCSSModules.module.css)
Note the file extension here, you have to have use '\*.module.css' instead of only '\*.css'.

## Pros
- No new knowledge required
- Compartmentalized styling keeping all the dependencies contained in the component folder
## Cons
- This does require another dependencies (this is included with create-react-app), altough it is only a development dependency.
- Not as flexible as defining styling using JavaScript.
The most complex thing achiveable with this method is changing class names inside components. If you want to do more dynamic styling requiring some JavaScript logic, you will have to use inline styling or add some 3rd party library.