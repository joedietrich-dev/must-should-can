import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const LoggedInNavLinks = () => {
  return (
    <li>
      <LogoutButton />
    </li>
  );
};

const LoggedOutNavLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );
};

function Navigation({ user }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? <LoggedInNavLinks /> : <LoggedOutNavLinks />}
      </ul>
    </nav>
  );
}

export default Navigation;
