import styled from "styled-components";
import background from "./background.svg";

const Page = styled.div`
  height: 100vh;
  /* background-image: url(${background});
  background-attachment: fixed; */
  background-color: ${(props) => props.theme.color.mainContrast};
`;

export default Page;
