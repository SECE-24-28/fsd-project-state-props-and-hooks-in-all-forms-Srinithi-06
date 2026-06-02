import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/tripnest logo.png";

function Navbar() {
  return (
    <nav
      style={{
        background: "#000",
        padding: "12px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #222",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={logo}
            alt="TripNest Logo"
            style={{
              width: "55px",
              height: "55px",
              objectFit: "contain",
            }}
          />

          <h1
            style={{
              color: "#f4b400",
              fontSize: "40px",
              fontWeight: "700",
              margin: 0,
            }}
          >
            TripNest
          </h1>
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href="#about" style={linkStyle}>
          About
        </a>

        <a href="#categories" style={linkStyle}>
          Categories
        </a>

        <a href="#contact" style={linkStyle}>
          Contact
        </a>
        
        
        <Link to="/login">
          <button style={buttonStyle}>
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "35px",
  fontSize: "20px",
  fontWeight: "600",
};

const buttonStyle = {
  background: "#f4b400",
  color: "#000",
  border: "none",
  padding: "12px 30px",
  borderRadius: "30px",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "18px",
};

export default Navbar;