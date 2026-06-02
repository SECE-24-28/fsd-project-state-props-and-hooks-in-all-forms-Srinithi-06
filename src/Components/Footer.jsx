import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "white",
        padding: "50px 8%",
        borderTop: "1px solid #222",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#f4b400",
            }}
          >
            TripNest
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8",
            }}
          >
            Explore the world with comfort,
            safety and unforgettable
            travel experiences.
          </p>
        </div>

        <div>
          <h3
            style={{
              color: "#f4b400",
            }}
          >
            Quick Links
          </h3>

          <p>
            <Link
              to="/terms"
              style={linkStyle}
            >
              Terms & Conditions
            </Link>
          </p>

          <p>
            <Link
              to="/privacy"
              style={linkStyle}
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        <div>
          <h3
            style={{
              color: "#f4b400",
            }}
          >
            Contact
          </h3>

          <p>support@tripnest.com</p>

          <p>+91 9876543210</p>

          <p>Chennai, Tamil Nadu</p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#222",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#888",
        }}
      >
        © 2026 TripNest | All Rights Reserved
      </p>
    </footer>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Footer;