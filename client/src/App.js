import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then(setUser);
      }
    });
  }, []);

  const onLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Navigation user={user} onLogout={onLogout} />
      {user ? <p>Welcome {user.name ? user.name : user.email}</p> : null}
      <Routes>
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main user={user} />} />
        <Route path="/" element={<Home user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
