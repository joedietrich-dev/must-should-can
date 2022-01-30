import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      }),
    });
    if (res.ok) {
      const data = await res.json();
      navigate("/signup-success");
    } else {
      const data = await res.json();
      setErrors(data.errors);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <input type="submit" value="Create Account" />
      </form>
      {errors ? errors.map((error) => <p key={error}>{error}</p>) : null}
    </div>
  );
}

export default Signup;
