import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CategoryNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("adminUser");

    alert("Logged Out Successfully");

    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#000",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          color: "#f4b400",
        }}
      >
        TripNest
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link
          to="/packages"
          style={linkStyle}
        >
          Packages
        </Link>

        <Link
          to="/customize"
          style={linkStyle}
        >
          Customize Trip
        </Link>

        <Link
          to="/wishlist"
          style={linkStyle}
        >
          Wishlist
        </Link>

        <Link
          to="/mybookings"
          style={linkStyle}
        >
          My Bookings
        </Link>

        <button
          onClick={logout}
          style={logoutBtn}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};

const logoutBtn = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default CategoryNavbar;