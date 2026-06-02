import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../Assets/Images/dashboard-bg.jpeg";

function Hero() {
  return (
    <section
      style={{
        background: "#000",
        minHeight: "72vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 8% 40px",
        gap: "50px",
      }}
    >
      {/* Left Content */}

      <div
        style={{
          flex: 1,
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "65px",
            fontWeight: "700",
            lineHeight: "1.15",
            marginBottom: "20px",
          }}
        >
          Explore The World
          <br />
          With
          <span
            style={{
              color: "#f4b400",
            }}
          >
            {" "}
            TripNest
          </span>
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "650px",
            marginBottom: "30px",
          }}
        >
          Discover beautiful destinations,
          luxury tours, customized travel
          experiences and unforgettable
          adventures around the globe.
        </p>

        {/* Feature Highlights */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "35px",
          }}
        >
          <div style={featureStyle}>
            ✈️ International Tours
          </div>

          <div style={featureStyle}>
            🏖 Luxury Packages
          </div>

          <div style={featureStyle}>
            ❤️ Honeymoon Trips
          </div>

          <div style={featureStyle}>
            🎯 Customize Your Trip
          </div>
        </div>

        <div
          style={{
            background: "#111",
            borderLeft: "4px solid #f4b400",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "30px",
            maxWidth: "600px",
          }}
        >
          <h4
            style={{
              color: "#f4b400",
              marginBottom: "8px",
            }}
          >
            Special Feature
          </h4>

          <p
            style={{
              color: "#ccc",
              margin: 0,
            }}
          >
            Plan your journey your way. Tell us your
            destination, budget, travel dates and
            preferences, and we'll create a completely
            personalized travel package for you.
          </p>
        </div>

        <Link to="/packages">
          <button
            style={{
              background: "#f4b400",
              color: "#000",
              border: "none",
              padding: "16px 35px",
              borderRadius: "40px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            EXPLORE TOURS
          </button>
        </Link>
      </div>

      {/* Right Image */}

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={heroImage}
          alt="Travel"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "430px",
            objectFit: "cover",
            borderRadius: "25px",
            boxShadow:
              "0 0 35px rgba(244,180,0,0.25)",
          }}
        />
      </div>
    </section>
  );
}

const featureStyle = {
  background: "#111",
  color: "#f4b400",
  padding: "10px 18px",
  borderRadius: "30px",
  border: "1px solid #333",
  fontSize: "14px",
  fontWeight: "600",
};

export default Hero;