import React from "react";
import { Link } from "react-router-dom";

import heroBg from "../Assets/Images/packages-db.avif";

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.70),
            rgba(0,0,0,0.75)
          ),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 8%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "1000px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "75px",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "25px",
            textShadow:
              "0px 4px 15px rgba(0,0,0,0.6)",
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
            color: "#f5f5f5",
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "850px",
            margin: "0 auto 35px",
          }}
        >
          Discover breathtaking destinations,
          luxury vacations, adventure tours,
          family getaways and unforgettable
          travel experiences crafted specially
          for you.
        </p>

        {/* Feature Tags */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "40px",
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

        {/* Special Feature */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            border:
              "1px solid rgba(244,180,0,0.4)",
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          <h3
            style={{
              color: "#f4b400",
              marginBottom: "10px",
            }}
          >
            🌟 Customize Your Dream Trip
          </h3>

          <p
            style={{
              color: "#f1f1f1",
              margin: 0,
              lineHeight: "1.7",
            }}
          >
            Tell us your destination, budget,
            travel dates and preferences.
            TripNest will create a completely
            personalized package tailored just
            for you.
          </p>
        </div>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/packages">
            <button
              style={{
                background: "#f4b400",
                color: "#000",
                border: "none",
                padding: "16px 40px",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Explore Tours
            </button>
          </Link>

          <Link to="/customize">
            <button
              style={{
                background: "transparent",
                color: "#fff",
                border:
                  "2px solid #f4b400",
                padding: "16px 40px",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Customize Trip
            </button>
          </Link>
        </div>

        {/* Statistics */}

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                color: "#f4b400",
                margin: 0,
              }}
            >
              500+
            </h2>

            <p style={{ color: "#fff" }}>
              Destinations
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#f4b400",
                margin: 0,
              }}
            >
              10K+
            </h2>

            <p style={{ color: "#fff" }}>
              Happy Travelers
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#f4b400",
                margin: 0,
              }}
            >
              24/7
            </h2>

            <p style={{ color: "#fff" }}>
              Customer Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const featureStyle = {
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "30px",
  border: "1px solid rgba(255,255,255,0.2)",
  fontWeight: "600",
  backdropFilter: "blur(5px)",
};

export default Hero;