// Libraries
import styled from 'styled-components';

// Importing the styled elements/components here
import {
  StyledDiv,
  StyledH1,
  StyledP,
} from './StyledElements';

// If you have a styled-component you are only going to use in this component
// You can define it here to keep the amount of files to a minimum,
// It might get messy though, so consider using a more generic component instead
const StyledPAlternate = styled.p`
  padding: 1em;
  border-radius: 10px;

  background-color: orange;
`;

const StylingInline = () => {
  
  return (
    <StyledDiv>
      <StyledH1>styled-components</StyledH1>
      <StyledP>This component utilizes the 3rd party library styled-components.</StyledP>
      <StyledPAlternate>Pretty decent to use, though you might find it hard to find the correct CSS propterties due to no out of the box support for VS Codes Intellisense.</StyledPAlternate>
    </StyledDiv>
  );
};

export default StylingInline;