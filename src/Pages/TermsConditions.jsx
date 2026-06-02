import React from "react";

function TermsConditions() {
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
        Terms & Conditions
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
          1. Booking Policy
        </h2>

        <p>
          All bookings are subject to
          availability and confirmation by
          TripNest Travel Agency.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          2. Payment Terms
        </h2>

        <p>
          Customers must complete payment
          before travel confirmation.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          3. Cancellation Policy
        </h2>

        <p>
          Cancellation requests must be
          submitted before the departure
          date. Refunds depend on package
          policies.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          4. User Responsibilities
        </h2>

        <p>
          Users must provide accurate
          information during booking and
          follow destination regulations.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          5. Travel Documents
        </h2>

        <p>
          Customers are responsible for
          carrying valid passports, visas
          and identification documents.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          6. Changes To Packages
        </h2>

        <p>
          TripNest reserves the right to
          modify itineraries due to weather,
          safety concerns or unavoidable
          circumstances.
        </p>

        <h2 style={{ color: "#f4b400" }}>
          7. Acceptance
        </h2>

        <p>
          By using this website, users agree
          to all terms and conditions
          mentioned above.
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;