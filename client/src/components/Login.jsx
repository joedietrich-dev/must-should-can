import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./common/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    user.login({ email, password }, () => navigate("/main"));
    // const res = await fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    // if (res.ok) {
    //   const returningUser = await res.json();
    //   user.login(returningUser, () => navigate("/main"));
    // } else {
    //   const data = await res.json();
    //   setError([data.error]);
    //   console.log(data);
    // }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
      {user.errors ? <p>{user.errors}</p> : null}
    </div>
  );
}

export default Login;
