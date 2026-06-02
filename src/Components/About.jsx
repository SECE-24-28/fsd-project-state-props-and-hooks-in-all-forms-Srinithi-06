import React from "react";

function About() {
  const features = [
    {
      title: "Customized Tours",
      desc:
        "Travel plans designed according to your budget and preferences.",
    },
    {
      title: "Affordable Pricing",
      desc:
        "Best travel experiences at competitive prices.",
    },
    {
      title: "24/7 Support",
      desc:
        "Dedicated customer support throughout your journey.",
    },
    {
      title: "Trusted Guides",
      desc:
        "Professional travel experts and verified tour guides.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "#111",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#f4b400",
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        Why Choose TripNest?
      </h2>

      <h3
        style={{
          textAlign: "center",
          color: "#ccc",
          maxWidth: "800px",
          margin: "0 auto 50px",
          
        }}
      >
        We create memorable travel experiences with
        premium destinations, customized packages and
        exceptional customer support.
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#811e1e",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid #bc1212",
            }}
          >
            <h3
              style={{
                color: "#f4b400",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#ccc",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;