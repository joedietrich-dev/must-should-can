import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./common/UserContext";

function Main() {
  const { user } = useContext(UserContext);

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
