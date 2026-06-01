import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Category.css";

import logo from "../Assets/Images/tripnest logo.png";
import heroBg from "../Assets/Images/packages-db.avif";

import paris from "../Assets/Images/paris.webp";
import maldives from "../Assets/Images/maldives.webp";
import switzerland from "../Assets/Images/switzerland.webp";
import goa from "../Assets/Images/goa.webp";
import dubai from "../Assets/Images/dubai.webp";
import bali from "../Assets/Images/bali.webp";

function Packages() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img className="logo me-3" src={logo} alt="logo" />
            <Link className="navbar-brand text-warning fw-bold fs-3" to="/dashboard">
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
                <Link className="nav-link text-warning" to="/packages">
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
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="package-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${heroBg})`,
        }}
      >
        <div className="hero-content">
          <h1>Choose Your Dream Package</h1>
          <p>
            Explore beautiful destinations with family, friends and loved ones.
          </p>
        </div>
      </section>

      <div className="category-nav text-center">
        <Link className="category-btn" to="/international">
          International
        </Link>

        <Link className="category-btn" to="/family">
          Family Trips
        </Link>

        <Link className="category-btn" to="/friends">
          Friends Tours
        </Link>

        <Link className="category-btn" to="/adventure">
          Adventure
        </Link>

        <Link className="category-btn" to="/honeymoon">
          Honeymoon
        </Link>
      </div>

      <div className="container py-5">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card package-card">
              <img src={paris} alt="Paris" />
              <div className="card-body">
                <h3>Paris Vacation</h3>
                <p>Enjoy romantic streets and the Eiffel Tower.</p>
                <h5>₹1,20,000</h5>
                <button className="btn btn-warning w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card package-card">
              <img src={maldives} alt="Maldives" />
              <div className="card-body">
                <h3>Maldives Resort</h3>
                <p>Luxury water villas and crystal clear beaches.</p>
                <h5>₹95,000</h5>
                <button className="btn btn-warning w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card package-card">
              <img src={switzerland} alt="Switzerland" />
              <div className="card-body">
                <h3>Switzerland Tour</h3>
                <p>Snowy mountains and beautiful train journeys.</p>
                <h5>₹1,50,000</h5>
                <button className="btn btn-warning w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card package-card">
              <img src={goa} alt="Goa" />
              <div className="card-body">
                <h3>Goa Friends Trip</h3>
                <p>Beach parties and adventure activities.</p>
                <h5>₹25,000</h5>
                <button className="btn btn-warning w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card package-card">
              <img src={dubai} alt="Dubai" />
              <div className="card-body">
                <h3>Dubai Luxury Tour</h3>
                <p>Desert safari and luxury shopping experiences.</p>
                <h5>₹1,10,000</h5>
                <button className="btn btn-warning w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card package-card">
              <img src={bali} alt="Bali" />
              <div className="card-body">
                <h3>Bali Honeymoon</h3>
                <p>Romantic beaches and luxury resorts.</p>
                <h5>₹85,000</h5>
                <button className="btn btn-warning w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Packages;