import React, { useState } from "react";
import "./Login.css";
import Logo from "../../image/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with: ${emailOrMobile}`);
    setEmailOrMobile("");
    setPassword("");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="left-section">
          <img src={Logo} alt="Wallantics Logo" className="logo-img" />
          <h1 className="logo">WALLANTICS</h1>
          <h2>Login</h2>
          <p>Get access to your orders, wishlist and recommendations</p>
        </div>

        <div className="right-section">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Email/Mobile number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-link">
              <a href=" ">Forgot?</a>
            </div>
            <p className="terms">
              By continuing, you agree to Paperwall <a href=" ">Terms of use</a>
              and <a href=" ">Privacy policy</a>
            </p>
            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="register-link">
              Don't have an account? <Link to="/register">Register Now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
