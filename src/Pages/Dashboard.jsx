import React from "react";
import "../Assets/Css/Dashboard.css";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/tripnest logo.png";
import paris from "../Assets/Images/paris.webp";
import pondicherry from "../Assets/Images/pondicherry.jpg";
import dubai from "../Assets/Images/dubai.webp";
import switzerland from "../Assets/Images/switzerland.webp";
import bali from "../Assets/Images/bali.webp";
import goa from "../Assets/Images/goa.webp";
import dashboardBg from "../Assets/Images/dashboard-bg.jpeg";

function Dashboard() {
  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img className="logo me-3" src={logo} alt="TripNest Logo" />

            <Link
              to="/dashboard"
              className="navbar-brand text-warning fw-bold fs-3 text-decoration-none"
            >
              TripNest
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4 align-items-center">
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link active text-white fw-semibold"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/packages"
                  className="nav-link text-white fw-semibold"
                >
                  Packages
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/wishlist"
                  className="nav-link text-white fw-semibold"
                >
                  Wishlist
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/mybookings"
                  className="nav-link text-white fw-semibold"
                >
                  Bookings
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/customize">
                  <button className="btn btn-warning">
                    Customize Trip
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="btn btn-warning px-4 fw-semibold"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>

      <section
        className="welcome-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${dashboardBg})`,
        }}
      >
        <div className="container text-center">
          <h1>Explore Your Dream Destinations</h1>

          <p>
            Discover beautiful places, plan exciting adventures, and enjoy
            unforgettable travel experiences with TripNest.
          </p>

          <Link to="/packages">
            <button className="btn btn-warning px-4 py-2 fw-semibold mt-3">
              Start Exploring
            </button>
          </Link>
        </div>
      </section>

      <section className="places-section py-5">
        <div className="container">
          <h2 className="text-center text-warning fw-bold mb-5">
            Popular Destinations
          </h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card place-card">
                <img src={paris} className="card-img-top" alt="Paris" />
                <div className="card-body text-center">
                  <h3>Paris</h3>
                  <p>
                    Experience the beauty of the Eiffel Tower and romantic
                    streets.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card place-card">
                <img
                  src={pondicherry}
                  className="card-img-top"
                  alt="Pondicherry"
                />
                <div className="card-body text-center">
                  <h3>Pondicherry</h3>
                  <p>
                    Experience a unique blend of Indian and French cultures.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card place-card">
                <img src={dubai} className="card-img-top" alt="Dubai" />
                <div className="card-body text-center">
                  <h3>Dubai</h3>
                  <p>
                    Discover modern architecture, luxury shopping and desert
                    adventures.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card place-card">
                <img
                  src={switzerland}
                  className="card-img-top"
                  alt="Switzerland"
                />
                <div className="card-body text-center">
                  <h3>Switzerland</h3>
                  <p>
                    Explore snowy mountains, beautiful lakes and peaceful
                    landscapes.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card place-card">
                <img src={bali} className="card-img-top" alt="Bali" />
                <div className="card-body text-center">
                  <h3>Bali</h3>
                  <p>
                    Relax in tropical beaches and enjoy the peaceful island
                    lifestyle.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card place-card">
                <img src={goa} className="card-img-top" alt="Goa" />
                <div className="card-body text-center">
                  <h3>Goa</h3>
                  <p>
                    Enjoy beach parties, seafood and vibrant nightlife
                    experiences.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center text-white py-3">
        <p className="mb-0">
          © 2026 TripNest | Designed For Travelers Around The World
        </p>
      </footer>
    </>
  );
}

export default Dashboard;