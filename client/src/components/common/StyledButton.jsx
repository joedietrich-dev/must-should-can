import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.main};
  color: white;
  padding: 0.75em 1.25em;
`;
export default StyledButton;
