import LogoutButton from "./LogoutButton";
import { Logo, StyledNavigation, StyledNavLink, StyledNavList } from "./StyledNav";

const LoggedInNavLinks = ({ onLogout }) => {
  return (
    <>
      <li>
        <StyledNavLink to="tasks">Tasks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="archive">Archive</StyledNavLink>
      </li>
      <li>
        <LogoutButton onLogout={onLogout} />
      </li>
    </>
  );
};

const LoggedOutNavLinks = () => {
  return (
    <>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/signup">Sign Up</StyledNavLink>
      </li>
    </>
  );
};

function Navigation({ user, onLogout }) {
  return (
    <StyledNavigation>
      <Logo>Must/Should/Can</Logo>
      <StyledNavList>{user ? <LoggedInNavLinks onLogout={onLogout} /> : <LoggedOutNavLinks />}</StyledNavList>
    </StyledNavigation>
  );
}

export default Navigation;
