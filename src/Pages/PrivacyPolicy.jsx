import React from "react";

function PrivacyPolicy() {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "80px 10%",
      }}
    >
      <h1
        style={{
          color: "#f4b400",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Privacy Policy
      </h1>

      <div
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          lineHeight: "1.9",
        }}
      >
        <h2 style={{ color: "#f4b400" }}>
          1. Information Collection
        </h2>

        <p>
          We collect your name, email,
          contact number and travel details
          for booking and customer support.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          2. Data Storage
        </h2>

        <p>
          User information is currently
          stored securely in Local Storage
          for project purposes.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          3. Information Usage
        </h2>

        <p>
          We use customer information only
          for booking management, customer
          support and service improvement.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          4. Data Protection
        </h2>

        <p>
          TripNest takes reasonable measures
          to protect user information from
          unauthorized access.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          5. Third Party Services
        </h2>

        <p>
          We do not sell or share customer
          data with third parties without
          consent.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          6. Cookies & Local Storage
        </h2>

        <p>
          The website may use Local Storage
          to improve user experience and
          maintain login sessions.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          7. Contact Us
        </h2>

        <p>
          For privacy-related concerns,
          contact us at
          support@tripnest.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;