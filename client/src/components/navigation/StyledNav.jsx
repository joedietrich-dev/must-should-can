import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: ${(props) => props.theme.color.accent};
  padding: 1em;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  color: ${(props) => props.theme.color.textOnMain};
  align-items: baseline;
  justify-content: end;
  gap: 1em;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.color.textOnMain};
  &:visited {
    color: ${(props) => props.theme.color.secondaryAccent};
  }
  &.active {
    color: ${(props) => props.theme.color.highlight};
  }
`;

export { StyledNavigation, StyledNavList, StyledNavLink };
