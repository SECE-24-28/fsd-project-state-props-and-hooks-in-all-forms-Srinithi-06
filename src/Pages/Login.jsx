import React, { useState } from "react";
import "../Assets/Css/Login.css";

import loginBg from "../Assets/Images/login.webp";
import logo from "../Assets/Images/tripnest logo.png";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
      if (
  email === "sri@gmail.com" &&
  password === "Sri@2006"
) {

  alert("Admin Login Successful");

  window.location.href = "/admin-dashboard";

  return;
}
    const users =
      JSON.parse(localStorage.getItem("tripnestUsers")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (foundUser) {

      localStorage.setItem(
        "currentUser",
        JSON.stringify(foundUser)
      );

      alert("Login Successful");

      window.location.href = "/dashboard";

    } else {

      alert("Invalid Email Or Password");

    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.6)
        ), url(${loginBg})`,
      }}
    >
      <div className="login-box">

        <img src={logo} alt="TripNest" />

        <h2>Welcome Back</h2>

        <p>Login to continue your journey</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="extra-links">

          <a href="/forgot-password">
            Forgot Password?
          </a>

          <a href="/signup">
            Create Account
          </a>

        </div>

      </div>
    </div>
  );
}

export default Login;