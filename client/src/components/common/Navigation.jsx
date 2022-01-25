import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Navigation({ user, onLogout }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        {user ? <LogoutButton onLogout={onLogout} /> : null}
      </ul>
    </nav>
  );
}

export default Navigation;
