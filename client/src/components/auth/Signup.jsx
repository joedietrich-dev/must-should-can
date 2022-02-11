import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormGroup from "../common/FormGroup";
import Input from "../common/Input";
import Label from "../common/Label";
import PageForm from "../common/PageForm";
import StyledButton from "../common/StyledButton";

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
      navigate("/signup-success");
    } else {
      const data = await res.json();
      setErrors(data.errors);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <PageForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password_confirmation">Password Confirmation:</Label>
          <Input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </FormGroup>
        <StyledButton as={"input"} type="submit" value="Create Account" />
      </PageForm>
      {errors ? errors.map((error) => <p key={error}>{error}</p>) : null}
    </div>
  );
}

export default Signup;
