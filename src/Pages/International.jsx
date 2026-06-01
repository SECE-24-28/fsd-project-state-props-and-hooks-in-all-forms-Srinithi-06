import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Category.css";

import logo from "../Assets/Images/tripnest logo.png";
import heroBg from "../Assets/Images/international-background.jpg";

import paris from "../Assets/Images/paris.webp";
import switzerland from "../Assets/Images/switzerland.webp";
import dubai from "../Assets/Images/dubai.webp";
import maldives from "../Assets/Images/maldives.webp";
import bali from "../Assets/Images/bali.webp";
import singapore from "../Assets/Images/singapore.jpg";

function International() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img className="logo me-3" src={logo} alt="logo" />
            <Link
              className="navbar-brand text-warning fw-bold fs-3"
              to="/dashboard"
            >
              TripNest
            </Link>
          </div>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold" to="/packages">
                  Packages
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/wishlist">
                  Wishlist
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/bookings">
                  Bookings
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/customize">
                  Customize
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="category-nav">
        <div className="container text-center">
          <Link className="category-btn active-btn" to="/international">
            International
          </Link>

          <Link className="category-btn" to="/family">
            Family
          </Link>

          <Link className="category-btn" to="/friends">
            Friends
          </Link>

          <Link className="category-btn" to="/adventure">
            Adventure
          </Link>

          <Link className="category-btn" to="/honeymoon">
            Honeymoon
          </Link>

          <Link className="category-btn" to="/customize">
            Customize
          </Link>
        </div>
      </section>

      <section
  className="hero-section"
  style={{
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.6),
      rgba(0,0,0,0.6)
    ),
    url(${heroBg})`
  }}
>
        <div className="hero-content">
          <h1>Explore The World Beyond Borders</h1>
          <p>
            Discover luxury destinations, iconic landmarks and unforgettable
            international adventures.
          </p>
        </div>
      </section>

      <section className="packages py-5">
        <div className="container">
          <h2 className="text-center text-warning fw-bold mb-5">
            Popular International Packages
          </h2>

          <div className="row g-4">
            <PackageCard
              image={paris}
              title="Paris"
              days="7 Days / 6 Nights"
              desc="Experience the Eiffel Tower and romantic streets."
              price="₹1,20,000"
            />

            <PackageCard
              image={switzerland}
              title="Switzerland"
              days="8 Days / 7 Nights"
              desc="Explore snowy mountains and peaceful landscapes."
              price="₹1,50,000"
            />

            <PackageCard
              image={dubai}
              title="Dubai"
              days="6 Days / 5 Nights"
              desc="Luxury shopping, skyscrapers and desert safari."
              price="₹1,10,000"
            />

            <PackageCard
              image={maldives}
              title="Maldives"
              days="5 Days / 4 Nights"
              desc="Luxury villas and crystal clear beaches."
              price="₹95,000"
            />

            <PackageCard
              image={bali}
              title="Bali"
              days="6 Days / 5 Nights"
              desc="Beautiful beaches and tropical adventures."
              price="₹85,000"
            />

            <PackageCard
              image={singapore}
              title="Singapore"
              days="5 Days / 4 Nights"
              desc="Modern attractions and stunning city views."
              price="₹1,00,000"
            />
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center text-white py-3">
        <p className="mb-0">
          © 2026 TripNest | International Travel Experiences
        </p>
      </footer>
    </>
  );
}

function PackageCard({ image, title, days, desc, price }) {
  return (
    <div className="col-md-4">
      <div className="card package-card">
        <img src={image} alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <p>{days}</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>{desc}</p>
          <h5>{price}</h5>
          <button className="btn btn-warning w-100">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default International;
