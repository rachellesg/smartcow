import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

// Elements
import { PrimaryButton } from "../../../elements/Button";

function Login() {
  const token = "sm4rtcow";
  const [email, setEmail] = useState("13bala90@gmail.com");
  const [password, setPassword] = useState("");

  const checkToken = () => {
    if (email === "13bala90@gmail.com" && password === "123") {
      return sessionStorage.setItem("token", token.toString());
    } else {
      return <Navigate to="/home" />;
    }
  };

  const submitForm = (e) => {
    console.log("clicked");
    checkToken();
    e.preventDefault();
  };
  return (
    <form className="register-form row">
      <div className="col s12 l4">
        <div className="label">
          <label htmlFor={email}>Email</label>
        </div>
        <input
          id={email}
          value={email}
          type="text"
          className="validate"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="col s12 l4">
        <div className="label">
          <label htmlFor={password}>Password</label>
          <div className="forgot-password">Forgot?</div>
        </div>
        <input
          id={password}
          value={password}
          type="password"
          className="validate"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="col s12 l5 center-align">
        <PrimaryButton onClick={submitForm}>
          <Link to="/videos/saved">Login</Link>
        </PrimaryButton>
        <p className="sign-up">
          New here? <a href="#">Sign up</a>
        </p>
      </div>
    </form>
  );
}

export default Login;
