import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const LoggedInNavLinks = ({ onLogout }) => {
  return (
    <>
      <li>
        <NavLink to="/tasks">Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/archive">Archive</NavLink>
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
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );
};

function Navigation({ user, onLogout }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? <LoggedInNavLinks onLogout={onLogout} /> : <LoggedOutNavLinks />}
      </ul>
    </nav>
  );
}

export default Navigation;
