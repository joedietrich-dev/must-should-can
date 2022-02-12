import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.mainContrast};
  outline: solid 1px ${(props) => props.theme.color.mainContrast};
  box-shadow: ${(props) => props.theme.shadow.levelOne};
  padding: 0.5rem 1rem;

  :hover {
    background-color: ${(props) => props.theme.color.accentLighter};
  }
`;
export default StyledButton;
