import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
