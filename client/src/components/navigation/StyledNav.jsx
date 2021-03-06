import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  color: ${(props) => props.theme.color.mainContrast};
  font-size: 2.5rem;
  font-weight: bold;
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.main};
  padding: 1rem 1.5rem;
  flex-flow: wrap;

  @media (max-width: 640px) {
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  color: ${(props) => props.theme.color.mainContrast};
  align-items: baseline;
  justify-content: end;
  gap: 1rem;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.color.mainContrast};
  &:hover {
    color: ${(props) => props.theme.color.contrastAccent};
  }
  &.active {
    color: ${(props) => props.theme.color.contrastAccent};
  }
`;

export { StyledNavigation, StyledNavList, StyledNavLink, Logo };
