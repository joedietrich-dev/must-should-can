import styled from "styled-components";

const Check = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  border-bottom: 2px solid ${(props) => props.theme.color.main};
  box-shadow: ${(props) => props.theme.shadow.levelOne};
  font-size: 1rem;
  width: 100%;
  display: grid;
  place-content: center;

  ::before {
    content: "✓";
    font-weight: bold;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  :checked::before {
    transform: scale(1);
  }
`;

export default Check;
