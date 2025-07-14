import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../image/logo.png";

const Register = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered: ${input}`);
    setInput("");
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        
        <div className="left-section">
          <img src={Logo} alt="Wallantics Logo" className="logo-img" />
          <h1 className="logo">WALLANTICS</h1>
          <h2>Creat a Account</h2>
          <p>Register with your Mobile number to get started</p>
        </div>

        
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Email/Mobile number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <p className="terms">
              By continuing, you agree to Paperwall
              <a href=" ">Terms of use</a> and <a href=" ">Privacy policy</a>
            </p>

            <button type="submit" className="continue-btn">
              Continue
            </button>

            <button type="button" className="Reg-login-btn">
              <Link to="/" >
                Existing User? Log in
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
