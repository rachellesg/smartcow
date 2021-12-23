import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../../components/Header";
import { HomeWrapper } from "../styles";

// Elements
import { PrimaryButton } from "../../../elements/Button";

function Register() {
  const pageHeaderDetails = {
    pageTitle: "Register",
  };
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    console.log("clicked");
    e.preventDefault();
  };
  return (
    <HomeWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <form className="register-form row">
        <div className="col s12 l4">
          <div className="label">
            <label htmlFor={firstName}>First Name</label>
          </div>
          <input
            id={firstName}
            type="text"
            className="validate"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>
        <div className="col s12 l4">
          <div className="label">
            <label htmlFor={email}>Email</label>
          </div>
          <input
            id={email}
            type="text"
            className="validate"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="col s12 l4">
          <div className="label">
            <label htmlFor={password}>New Password</label>
          </div>
          <input
            id={password}
            type="password"
            className="validate"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="col s12 l5 center-align">
          <PrimaryButton onClick={submitForm}>
            <Link to="/videos/saved">Signup</Link>
          </PrimaryButton>
          <p className="sign-up">
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
      <div className="fullwidth-background" />
    </HomeWrapper>
  );
}

export default Register;
