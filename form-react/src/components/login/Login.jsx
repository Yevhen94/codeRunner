import React from "react";
import Form from "../form/Form";
import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="login">
        <h5 className="login__subtitle">Welcome</h5>
        <h3 className="login__title">Join The Community</h3>
        <Form />
        <div className="login__router">
          <span className="login__router__question">Already a member?</span>
          <span className="login__router__link">Login here →</span>
        </div>
      </div>
    </>
  );
};

export default Login;
