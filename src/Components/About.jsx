import React from "react";

function About() {
  const features = [
    {
      icon: "🎯",
      title: "Customized Tours",
      desc:
        "Travel plans designed according to your budget, destination preferences and travel style.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc:
        "Get premium travel experiences at competitive prices without compromising quality.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc:
        "Dedicated customer support available anytime before, during and after your trip.",
    },
    {
      icon: "🧑‍✈️",
      title: "Trusted Guides",
      desc:
        "Professional and verified travel guides ensuring a safe and enjoyable experience.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "#000",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h2
          style={{
            color: "#f4b400",
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          Why Choose TripNest?
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "22px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          We create unforgettable travel experiences
          through premium destinations, personalized
          itineraries and world-class customer support.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "30px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              border: "1px solid #2a2a2a",
              borderRadius: "25px",
              padding: "35px",
              transition: "0.3s",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(244,180,0,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
              e.currentTarget.style.border =
                "1px solid #f4b400";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(244,180,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.border =
                "1px solid #2a2a2a";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(244,180,0,0.08)";
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#f4b400",
                fontSize: "32px",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#ccc",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "25px",
          textAlign: "center",
        }}
      >
        <div>
          <h2
            style={{
              color: "#f4b400",
              fontSize: "45px",
              marginBottom: "10px",
            }}
          >
            500+
          </h2>

          <p style={{ color: "#ccc" }}>
            Destinations
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#f4b400",
              fontSize: "45px",
              marginBottom: "10px",
            }}
          >
            10K+
          </h2>

          <p style={{ color: "#ccc" }}>
            Happy Travelers
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#f4b400",
              fontSize: "45px",
              marginBottom: "10px",
            }}
          >
            24/7
          </h2>

          <p style={{ color: "#ccc" }}>
            Customer Support
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#f4b400",
              fontSize: "45px",
              marginBottom: "10px",
            }}
          >
            100%
          </h2>

          <p style={{ color: "#ccc" }}>
            Satisfaction
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;