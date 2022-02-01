import { Navigate } from "react-router-dom";

function Main({ user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <main>
      <h1>TASKS</h1>
    </main>
  );
}

export default Main;
