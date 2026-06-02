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
        background: "#111",
        color: "white",
        padding: "80px 8%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#f4b400",
          fontSize: "45px",
          marginBottom: "50px",
        }}
      >
        Contact Us
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "40px",
        }}
      >
        {/* Left Side */}

        <div
          style={{
            background: "#181818",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #8d1616",
          }}
        >
          <h2
            style={{
              color: "#f4b400",
            }}
          >
            TripNest Travel Agency
          </h2>

          <h5>
            📧 support@tripnest.com
          </h5>

          <h5>
            📞 +91 9876543210
          </h5>

          <h4>
            📍 Chennai, Tamil Nadu, India
          </h4>

          <h5
            style={{
              color: "#ccc",
              marginTop: "20px",
              lineHeight: "1.8",
             
            }}
          >
            We help travelers explore
            beautiful destinations around
            the world with comfort and safety.
          </h5>
        </div>

        {/* Right Side Form */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#181818",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #8d1616",
          }}
        >
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
            rows="5"
            placeholder="Your Message"
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
              padding: "15px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
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
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#222",
  color: "white",
};

export default Contact;