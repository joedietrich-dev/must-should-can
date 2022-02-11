import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.textOnMain};
  outline: solid 1px ${(props) => props.theme.color.textOnMain};
  padding: 0.5rem 1rem;
`;
export default StyledButton;
