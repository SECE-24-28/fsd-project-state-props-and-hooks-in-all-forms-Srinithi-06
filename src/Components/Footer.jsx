import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        color: "white",
        padding: "70px 8% 25px",
        borderTop: "1px solid #222",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "50px",
        }}
      >
        {/* Company Info */}

        <div>
          <h1
            style={{
              color: "#f4b400",
              marginBottom: "20px",
            }}
          >
            TripNest
          </h1>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8",
            }}
          >
            Explore the world with comfort,
            luxury and unforgettable travel
            experiences. We provide customized
            tours, family trips, adventure
            packages and international vacations.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "25px",
              fontSize: "24px",
            }}
          >
            <span style={socialStyle}>📘</span>
            <span style={socialStyle}>📸</span>
            <span style={socialStyle}>🐦</span>
            <span style={socialStyle}>▶️</span>
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3
            style={{
              color: "#f4b400",
              marginBottom: "20px",
            }}
          >
            Quick Links
          </h3>

          <p>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </p>

          <p>
            <Link
              to="/packages"
              style={linkStyle}
            >
              Packages
            </Link>
          </p>

          <p>
            <Link
              to="/customize"
              style={linkStyle}
            >
              Customize Trip
            </Link>
          </p>

          <p>
            <Link
              to="/contact"
              style={linkStyle}
            >
              Contact
            </Link>
          </p>
        </div>

        {/* Categories */}

        <div>
          <h3
            style={{
              color: "#f4b400",
              marginBottom: "20px",
            }}
          >
            Categories
          </h3>

          <p style={textStyle}>
            International Tours
          </p>

          <p style={textStyle}>
            Family Packages
          </p>

          <p style={textStyle}>
            Adventure Trips
          </p>

          <p style={textStyle}>
            Friends Tours
          </p>

          <p style={textStyle}>
            Honeymoon Packages
          </p>
        </div>

        {/* Contact */}

        <div>
          <h3
            style={{
              color: "#f4b400",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h3>

          <p style={textStyle}>
            📧 support@tripnest.com
          </p>

          <p style={textStyle}>
            📞 +91 9876543210
          </p>

          <p style={textStyle}>
            📍 Chennai, Tamil Nadu, India
          </p>

          <p style={textStyle}>
            🕒 24/7 Customer Support
          </p>
        </div>
      </div>

      {/* Terms & Privacy */}

      <div
        style={{
          marginTop: "50px",
          paddingTop: "25px",
          borderTop: "1px solid #222",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/terms"
          style={bottomLink}
        >
          Terms & Conditions
        </Link>

        <Link
          to="/privacy"
          style={bottomLink}
        >
          Privacy Policy
        </Link>
      </div>

      {/* Copyright */}

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#888",
          fontSize: "14px",
        }}
      >
        © 2026 TripNest. All Rights Reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  lineHeight: "2.2",
};

const bottomLink = {
  color: "#f4b400",
  textDecoration: "none",
  fontWeight: "600",
};

const textStyle = {
  color: "#ccc",
  lineHeight: "2",
};

const socialStyle = {
  cursor: "pointer",
};

export default Footer;