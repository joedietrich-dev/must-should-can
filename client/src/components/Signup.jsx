import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

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
      console.log(data);
    } else {
      const errs = await res.json();
      setErrors(errs);
      console.log(errs);
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
      {errors ? errors.map((error) => <p>{error}</p>) : null}
    </div>
  );
}

export default Signup;