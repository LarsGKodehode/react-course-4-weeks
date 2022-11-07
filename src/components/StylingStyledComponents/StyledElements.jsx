import styled from "styled-components";

// styled-components uses a CSS preprocessor
// This enables us to simplify using CSS psudeoselectors
export const StyledDiv = styled.div`
  margin: 2em;
  padding: 1em;
  border-radius: 20px;

  background-color: teal;

  &:hover {
    background-color: green;
    filter: drop-shadow(0px 0px 20px red)
  }
`;

export const StyledH1 = styled.h1`
text-decoration: capitalize;
`;

export const StyledP = styled.p`
  padding: .4em;
  border-radius: 10px;

  background-color: blue;
  color: white;
`;