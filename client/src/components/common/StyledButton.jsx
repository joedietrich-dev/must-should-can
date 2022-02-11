import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.textOnMain};
  outline: solid 1px ${(props) => props.theme.color.textOnMain};
  box-shadow: ${(props) => props.theme.shadow.levelOne};
  padding: 0.5rem 1rem;

  :hover {
    background-color: ${(props) => props.theme.color.mainLighter};
  }
`;
export default StyledButton;
