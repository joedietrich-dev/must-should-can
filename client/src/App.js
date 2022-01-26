import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then(setUser);
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleLogin = (user) => {
    setUser(user);
    navigate("/main");
  };

  return (
    <div>
      <Navigation user={user} onLogout={handleLogout} />
      {user ? <p>Welcome {user.name ? user.name : user.email}</p> : null}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
