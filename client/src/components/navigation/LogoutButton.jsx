import StyledButton from "../common/StyledButton";

function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    fetch("api/logout", { method: "DELETE" }).then(() => onLogout());
  };
  return <StyledButton onClick={handleLogout}>Logout</StyledButton>;
}

export default LogoutButton;
