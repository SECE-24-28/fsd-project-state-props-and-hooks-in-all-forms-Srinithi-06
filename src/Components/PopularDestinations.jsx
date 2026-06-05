import React from "react";

import paris from "../Assets/Images/paris.webp";
import bali from "../Assets/Images/bali.webp";
import dubai from "../Assets/Images/dubai.webp";
import switzerland from "../Assets/Images/switzerland.webp";

function PopularDestinations() {
  const places = [
    {
      name: "Paris",
      country: "France",
      image: paris,
      rating: "4.9 ★",
      desc: "Romantic city with iconic landmarks.",
    },
    {
      name: "Bali",
      country: "Indonesia",
      image: bali,
      rating: "4.8 ★",
      desc: "Beautiful beaches and tropical adventures.",
    },
    {
      name: "Dubai",
      country: "UAE",
      image: dubai,
      rating: "4.9 ★",
      desc: "Luxury shopping and modern attractions.",
    },
    {
      name: "Switzerland",
      country: "Europe",
      image: switzerland,
      rating: "5.0 ★",
      desc: "Snow mountains and breathtaking scenery.",
    },
  ];

  return (
    <section
      style={{
        background: "#000",
        padding: "40px 8% 80px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#f4b400",
            fontSize: "50px",
            marginBottom: "10px",
          }}
        >
          Popular Destinations
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "18px",
          }}
        >
          Discover our most loved travel destinations.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {places.map((place) => (
          <div
            key={place.name}
            style={{
              perspective: "1000px",
              height: "330px",
            }}
          >
            <div
              className="destination-card"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transition: "transform 0.8s",
                transformStyle: "preserve-3d",
              }}
            >
              {/* FRONT */}

              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #222",
                }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                    background:
                      "linear-gradient(transparent,rgba(0,0,0,0.9))",
                    padding: "25px",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* BACK */}

              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "#111",
                  borderRadius: "20px",
                  border: "1px solid #f4b400",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "25px",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "#f4b400",
                  }}
                >
                  {place.name}
                </h2>

                <h4
                  style={{
                    color: "#fff",
                  }}
                >
                  {place.country}
                </h4>

                <p
                  style={{
                    color: "#ccc",
                    marginTop: "10px",
                  }}
                >
                  {place.desc}
                </p>

                <p
                  style={{
                    color: "#f4b400",
                    fontWeight: "bold",
                  }}
                >
                  {place.rating}
                </p>

                <button
                  style={{
                    background: "#f4b400",
                    color: "#000",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .destination-card:hover{
            transform: rotateY(180deg);
          }
        `}
      </style>
    </section>
  );
}

export default PopularDestinations;