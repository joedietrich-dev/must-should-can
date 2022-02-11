import { useState } from "react";
import { Navigate } from "react-router-dom";
import Input from "../common/Input";
import FormGroup from "../common/FormGroup";
import PageForm from "../common/PageForm";
import StyledButton from "../common/StyledButton";
import Label from "../common/Label";

function Login({ user, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      onLogin(data);
    } else {
      const data = await res.json();
      setError([data.error]);
      console.log(data);
    }
  }

  if (user) {
    return <Navigate to="/tasks" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <PageForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <StyledButton as={"input"} type="submit" value="Login" />
      </PageForm>
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default Login;
