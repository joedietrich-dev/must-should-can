import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./App.css";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import { UserContext } from "./components/common/UserContext";

function App() {
  const { user, persist } = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    persist();
  }, [persist]);

  return (
    <div>
      <Navigation user={user} />
      {user ? <p>Welcome {user.name ? user.name : user.email}</p> : null}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
