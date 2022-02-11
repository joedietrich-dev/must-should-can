import styled from "styled-components";

const Description = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.color.main};
  box-shadow: ${(props) => props.theme.shadow.levelOne};

  input:checked + & {
    text-decoration: line-through ${(props) => props.theme.color.accent};
  }
`;

export default Description;
