import StyledButton from "./StyledButton";

function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => onLogout());
  };
  return <StyledButton onClick={handleLogout}>Logout</StyledButton>;
}

export default LogoutButton;
