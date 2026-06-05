import React from "react";
import { Link } from "react-router-dom";
import CategoryNavbar from "../Components/CategoryNavbar";

import paris from "../Assets/Images/dubai.webp";
import kerala from "../Assets/Images/mysore.jpg";
import goa from "../Assets/Images/goa.webp";
import rishikesh from "../Assets/Images/adventure background.jpg";
import maldives from "../Assets/Images/maldives.webp";

function Packages() {
  const categories = [
    {
      name: "International Tours",
      path: "/international",
      image: paris,
      desc:
        "Explore world-famous destinations and luxury international trips.",
    },

    {
      name: "Family Packages",
      path: "/family",
      image: kerala,
      desc:
        "Memorable family vacations with comfort and fun.",
    },

    {
      name: "Friends Tours",
      path: "/friends",
      image: goa,
      desc:
        "Adventure and fun-filled trips with your friends.",
    },

    {
      name: "Adventure Trips",
      path: "/adventure",
      image: rishikesh,
      desc:
        "Trekking, rafting, biking and thrilling experiences.",
    },

    {
      name: "Honeymoon Packages",
      path: "/honeymoon",
      image: maldives,
      desc:
        "Romantic destinations for unforgettable moments.",
    },
  ];

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <CategoryNavbar />

      {/* Hero Section */}

      <section
        style={{
          textAlign: "center",
          padding: "80px 8% 50px",
        }}
      >
        <h1
          style={{
            color: "#f4b400",
            fontSize: "60px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Explore Travel Packages
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            maxWidth: "850px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Discover amazing destinations, luxury tours,
          adventure trips and unforgettable travel
          experiences designed just for you.
        </p>
      </section>

      {/* Category Cards */}

      <section
        style={{
          padding: "20px 8% 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                height: "350px",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow:
                  "0 0 25px rgba(244,180,0,0.15)",
                border:
                  "1px solid rgba(244,180,0,0.2)",
                transition: "0.4s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.25))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "25px",
                }}
              >
                <h2
                  style={{
                    color: "#f4b400",
                    marginBottom: "12px",
                    fontSize: "30px",
                  }}
                >
                  {item.name}
                </h2>

                <p
                  style={{
                    color: "#ddd",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  {item.desc}
                </p>

                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    style={{
                      background:
                        "linear-gradient(135deg,#f4b400,#ffcc00)",
                      color: "#000",
                      border: "none",
                      padding: "12px 28px",
                      borderRadius: "30px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    Explore Now →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Packages;