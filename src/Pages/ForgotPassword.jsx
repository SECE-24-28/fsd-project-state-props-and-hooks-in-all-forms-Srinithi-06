import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/Css/ForgotPassword.css";
import api from "../Services/api";

import logo from "../Assets/Images/tripnest logo.png";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleResetPassword = async (
    e
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await api.put(
        "/users/reset-password",
        {
          email,
          newPassword,
        }
      );

      alert(
        "Password Updated Successfully"
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Link
        to="/login"
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          textDecoration: "none",
        }}
      >
        <button
          style={{
            background: "#f4b400",
            color: "#000",
            border: "none",
            padding: "12px 25px",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          ← Back
        </button>
      </Link>

      <div
        style={{
          width: "420px",
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          border:
            "1px solid #f4b400",
          boxShadow:
            "0 0 30px rgba(244,180,0,0.25)",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={logo}
            alt="TripNest"
            style={{
              width: "90px",
              marginBottom: "15px",
            }}
          />

          <h2
            style={{
              color: "#f4b400",
              marginBottom: "10px",
            }}
          >
            Reset Password
          </h2>

          <p
            style={{
              color: "#ccc",
              marginBottom: "25px",
            }}
          >
            Create your new password
          </p>
        </div>

        <form
          onSubmit={
            handleResetPassword
          }
        >
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(
                e.target.value
              )
            }
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: loading
                ? "#888"
                : "#f4b400",
              color: "#000",
              fontWeight: "bold",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              fontSize: "16px",
            }}
          >
            {loading
              ? "Updating..."
              : "Save Password"}
          </button>
        </form>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "#f4b400",
              textDecoration:
                "none",
              fontWeight: "bold",
            }}
          >
            Back To Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;