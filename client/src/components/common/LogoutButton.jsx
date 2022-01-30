import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function LogoutButton() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    user.logout(() => navigate("/"));
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
