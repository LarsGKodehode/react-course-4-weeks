# Using global (vanilla) CSS
A quick and dirty example of how to apply styling to React components utilizing inline styling.
### Relevant files
- [StylingInline.jsx](./StylingInline.jsx)

## Pros
- Styling is defined inside components keeping the number of files to a minimum
## Cons
- Enlargens the DOM,
 Inline styling gets added to each DOM elements, meaning the HTML parser and the React parser needs to digest the styling as well as each element. ?Normally the parsing of the DOM and CSS is done in parallel?. **TODO find links to HTML parser and React parser**
 This might slow down applications with many component instances. For smaller or more lightweight applications this is probably not unnoticable.
- ?Separation of concernce?
 CSS was invented to separate the semantic structure of webpages/application from how webpages/web applications looked.
 Inline styling makes them intertwined again.