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
      <p className="example-p">This component utilizes inline styling.</p>
      <p className="example-p">Generally speaking, do not use this.</p>
    </div>
  );
};

export default StylingInline;