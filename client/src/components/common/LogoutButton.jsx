function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => onLogout());
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
