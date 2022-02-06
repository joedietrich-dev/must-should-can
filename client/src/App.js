import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import SignupSuccess from "./components/auth/SignupSuccess";
import TaskPage from "./components/tasks/TaskPage";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchPersistedUser() {
    const res = await fetch("/me");
    if (res.ok) {
      const persistedUser = await res.json();
      setUser(persistedUser);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPersistedUser();
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleLogin = (user) => {
    setUser(user);
    navigate("/tasks");
  };

  if (isLoading) {
    return (
      <div>
        <Navigation user={user} onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div>
      <Navigation user={user} onLogout={handleLogout} />
      {user ? <p>Welcome {user.name ? user.name : user.email}</p> : null}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/tasks" element={<TaskPage user={user} />} />
        <Route path="/archived-tasks" element={<TaskPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
