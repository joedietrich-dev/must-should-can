import React from "react";
import { Link } from "react-router-dom";

function SignupSuccess() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>
        You have successfully created an account, please <Link to="/login">Login</Link> using your new credentials.
      </p>
    </div>
  );
}

export default SignupSuccess;
