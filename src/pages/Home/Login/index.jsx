import { Navigate, Link } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "../../../components/Header";
import { HomeWrapper } from "../styles";

// Elements
import { PrimaryButton } from "../../../elements/Button";

function Login() {
  const pageHeaderDetails = {
    pageTitle: "Sign In",
  };
  const getToken = sessionStorage.getItem("token");
  const token = "sm4rtcow";
  const [email, setEmail] = useState("13bala90@gmail.com");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    console.log("clicked");
    window.location.reload();

    sessionStorage.setItem("token", "sm4rtcow");
  };
  return (
    <HomeWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      {getToken === token ? (
        <Navigate to="/videos/saved" />
      ) : (
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
      )}
      <div className="fullwidth-background" />
    </HomeWrapper>
  );
}

export default Login;
