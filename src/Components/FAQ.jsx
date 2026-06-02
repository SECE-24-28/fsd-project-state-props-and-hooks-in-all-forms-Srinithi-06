import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How can I book a package?",
      answer:
        "Select your preferred package and click Book Now.",
    },
    {
      question: "Can I customize my trip?",
      answer:
        "Yes. Use the Customize Trip section to create your own itinerary.",
    },
    {
      question: "How do I track my booking?",
      answer:
        "After login, visit My Bookings to track your package.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "UPI, Credit Card, Debit Card and Net Banking.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes. Cancellation depends on package policies.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "white",
        padding: "80px 8%",
        fontSize:"500 ",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#f4b400",
          fontSize: "50px",
          marginBottom: "40px",
        }}
      >
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            background: "#111",
            marginBottom: "15px",
            borderRadius: "15px",
            overflow: "hidden",
            fontSize:"20px ",
          }}
        >
          <div
            onClick={() =>
              setOpenIndex(
                openIndex === index ? null : index
              )
            }
            style={{
              padding: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {faq.question}
          </div>

          {openIndex === index && (
            <div
              style={{
                padding: "20px",
                color: "#ccc",
                borderTop: "1px solid #222",
              }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;