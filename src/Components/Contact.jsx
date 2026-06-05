import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingQueries =
      JSON.parse(
        localStorage.getItem("contactQueries")
      ) || [];

    existingQueries.push(formData);

    localStorage.setItem(
      "contactQueries",
      JSON.stringify(existingQueries)
    );

    alert("Message Sent Successfully");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      style={{
        background: "#000",
        color: "white",
        padding: "80px 8%",
      }}
    >
      {/* Heading */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            color: "#f4b400",
            fontSize: "52px",
            marginBottom: "15px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            color: "#bbb",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Have questions about a destination,
          package, booking, or custom tour?
          Our travel experts are here to help.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "40px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            background:
              "linear-gradient(145deg,#111,#1a1a1a)",
            padding: "45px",
            borderRadius: "25px",
            border: "1px solid #222",
          }}
        >
          <h2
            style={{
              color: "#f4b400",
              marginBottom: "20px",
              fontSize: "35px",
            }}
          >
            TripNest Travel Agency
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.9",
              marginBottom: "35px",
            }}
          >
            We help travelers discover amazing
            destinations, luxury experiences,
            family vacations, adventure tours and
            honeymoon packages with complete
            comfort and safety.
          </p>

          <div style={contactCard}>
            <span style={iconStyle}>📧</span>

            <div>
              <h4 style={labelStyle}>
                Email
              </h4>

              <p style={valueStyle}>
                support@tripnest.com
              </p>
            </div>
          </div>

          <div style={contactCard}>
            <span style={iconStyle}>📞</span>

            <div>
              <h4 style={labelStyle}>
                Phone
              </h4>

              <p style={valueStyle}>
                +91 9876543210
              </p>
            </div>
          </div>

          <div style={contactCard}>
            <span style={iconStyle}>📍</span>

            <div>
              <h4 style={labelStyle}>
                Office
              </h4>

              <p style={valueStyle}>
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background:
                "rgba(244,180,0,0.08)",
              borderRadius: "15px",
              border:
                "1px solid rgba(244,180,0,0.2)",
            }}
          >
            <h4
              style={{
                color: "#f4b400",
                marginBottom: "10px",
              }}
            >
              Business Hours
            </h4>

            <p
              style={{
                color: "#ccc",
                margin: 0,
              }}
            >
              Monday - Sunday
              <br />
              24/7 Customer Support
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          style={{
            background:
              "linear-gradient(145deg,#111,#1a1a1a)",
            padding: "45px",
            borderRadius: "25px",
            border: "1px solid #222",
          }}
        >
          <h3
            style={{
              color: "#f4b400",
              marginBottom: "25px",
            }}
          >
            Send Us A Message
          </h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            style={inputStyle}
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: "#f4b400",
              color: "#000",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #333",
  background: "#181818",
  color: "white",
  fontSize: "15px",
};

const contactCard = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "25px",
};

const iconStyle = {
  fontSize: "28px",
};

const labelStyle = {
  color: "#f4b400",
  margin: 0,
};

const valueStyle = {
  color: "#ddd",
  margin: "5px 0 0",
};

export default Contact;