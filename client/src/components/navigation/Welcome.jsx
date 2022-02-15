import React from "react";
import styled from "styled-components";

const WelcomeBanner = styled.div`
  background-color: ${(props) => props.theme.color.mainLighter};
  margin: 0;
  padding: 0.5rem 1.5rem;
`;

const WelcomeText = styled.p`
  color: ${(props) => props.theme.color.mainContrast};
  margin: 0;
`;

function Welcome({ user }) {
  return (
    <WelcomeBanner>
      {user ? <WelcomeText>Welcome, {user.name ? user.name : user.email}</WelcomeText> : <WelcomeText>&nbsp;</WelcomeText>}
    </WelcomeBanner>
  );
}

export default Welcome;
