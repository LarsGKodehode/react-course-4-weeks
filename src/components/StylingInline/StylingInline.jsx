/**
 * This component is styled using inline styling by using the props named 'style'
 * The 'style' props takes a JavaScript object as its input.
 * This forces us to use two sets of curly braces.
 * 1. First for escaping JSX into JavaScript
 * 2. Second for defining a JavaScript ojbect.
 * 
 * Alternativly you can define the JavaScript object before hand
 * and just pass a reference to the 'style' props, see the <p> element
 */

// We can use the fact that every component
// is a function and define stuff outside here
// You will miss out on intellisenses code completion feature
// of VS Code though
const paragraphStyling = {
  backgroundColor: "purple",
  color: "white",
};


const StylingInline = () => {
  
  return (
    <div 
      style={
        {
          margin: "3em",
          padding: ".8em",
          backgroundColor: "orange",
        }
      }
    >
      <h1 className="example-h1">Inline CSS</h1>
      <p style={paragraphStyling}>This component utilizes inline styling.</p>
      <p style={paragraphStyling}>Generally speaking, do not use this.</p>
    </div>
  );
};

export default StylingInline;