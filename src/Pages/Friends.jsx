import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Category.css";

import logo from "../Assets/Images/tripnest logo.png";
import heroBg from "../Assets/Images/friends background.jpg";

import goa from "../Assets/Images/goa.webp";
import pondicherry from "../Assets/Images/pondicherry.jpg";
import gokarna from "../Assets/Images/gorkana.jpg";
import manali from "../Assets/Images/Manali.jpg";
import kasol from "../Assets/Images/kasoli.jpg";
import rishikesh from "../Assets/Images/rishikesh.jpg";

function Friends() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
  <div className="container-fluid">

    <div className="d-flex align-items-center">
      <img className="logo me-2" src={logo} alt="logo" />

      <Link
        className="navbar-brand text-warning fw-bold fs-4"
        to="/dashboard"
      >
        TripNest
      </Link>
    </div>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarNav"
    >
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
          <Link className="category-btn" to="/international">International</Link>
          <Link className="category-btn" to="/family">Family</Link>
          <Link className="category-btn active-btn" to="/friends">Friends</Link>
          <Link className="category-btn" to="/adventure">Adventure</Link>
          <Link className="category-btn" to="/honeymoon">Honeymoon</Link>
        </div>
      </section>

      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(${heroBg})`
        }}
      >
        <div className="hero-content">
          <h1>Travel Better Together</h1>
          <p>Enjoy unforgettable adventures and fun moments with your friends.</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-4">
          <Card image={goa} title="Goa" price="₹25,000" />
          <Card image={pondicherry} title="Pondicherry" price="₹18,000" />
          <Card image={gokarna} title="Gokarna" price="₹20,000" />
          <Card image={manali} title="Manali" price="₹28,000" />
          <Card image={kasol} title="Kasol" price="₹24,000" />
          <Card image={rishikesh} title="Rishikesh" price="₹22,000" />
        </div>
      </div>
    </>
  );
}

function Card({ image, title, price }) {
  return (
    <div className="col-md-4">
      <div className="card package-card">
        <img src={image} alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <h5>{price}</h5>
          <button className="btn btn-warning w-100">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Friends;