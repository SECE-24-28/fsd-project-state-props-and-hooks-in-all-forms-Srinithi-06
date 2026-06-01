import React, { useState } from "react";
import "../Assets/Css/ForgotPassword.css";

import logo from "../Assets/Images/tripnest logo.png";
import forgotBg from "../Assets/Images/forgot-bg.avif";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = (e) => {

    e.preventDefault();

    let users =
      JSON.parse(localStorage.getItem("tripnestUsers")) || [];

    const userIndex = users.findIndex(
      (user) => user.email === email
    );

    if (userIndex === -1) {
      alert("Email not found");
      return;
    }

    users[userIndex].password = newPassword;

    localStorage.setItem(
      "tripnestUsers",
      JSON.stringify(users)
    );

    alert("Password Updated Successfully");

    window.location.href = "/login";
  };

  return (
    <div
      className="forgot-container"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.6)
        ), url(${forgotBg})`,
      }}
    >
      <div className="forgot-card">

        <div className="text-center">

          <img
            src={logo}
            alt="TripNest"
            className="logo"
          />

          <h2>Reset Password</h2>

          <p>
            Create your new password
          </p>

        </div>

        <form onSubmit={handleResetPassword}>

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
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Save Password
          </button>

        </form>

        <div className="back-link">

          <a href="/login">
            Back To Login
          </a>

        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;