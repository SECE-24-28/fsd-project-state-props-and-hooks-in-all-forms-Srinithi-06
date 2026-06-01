import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Category.css";

import logo from "../Assets/Images/tripnest logo.png";
import heroBg from "../Assets/Images/family background.jpg";

import ooty from "../Assets/Images/ooty.jpg";
import kodaikanal from "../Assets/Images/kodaikanal.jpg";
import munnar from "../Assets/Images/munnar.jpg";
import kerala from "../Assets/Images/kerela.jpg";
import coorg from "../Assets/Images/coorg.jpg";
import mysore from "../Assets/Images/mysore.jpg";

function Family() {
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
          <Link className="category-btn" to="/international">
            International
          </Link>

          <Link className="category-btn active-btn" to="/family">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(${heroBg})`,
        }}
      >
        <div className="hero-content">
          <h1>Create Memories With Family</h1>
          <p>
            Enjoy peaceful destinations and unforgettable moments with your
            loved ones.
          </p>
        </div>
      </section>

      <section className="packages py-5">
        <div className="container">
          <h2 className="text-center text-warning fw-bold mb-5">
            Best Family Packages
          </h2>

          <div className="row g-4">
            <PackageCard
              image={ooty}
              title="Ooty"
              days="4 Days / 3 Nights"
              desc="Beautiful hill station with cool climate and gardens."
              price="₹18,000"
            />

            <PackageCard
              image={kodaikanal}
              title="Kodaikanal"
              days="4 Days / 3 Nights"
              desc="Enjoy lakes, waterfalls and scenic mountain views."
              price="₹20,000"
            />

            <PackageCard
              image={munnar}
              title="Munnar"
              days="5 Days / 4 Nights"
              desc="Tea plantations and peaceful green landscapes."
              price="₹22,000"
            />

            <PackageCard
              image={kerala}
              title="Kerala"
              days="6 Days / 5 Nights"
              desc="Backwaters, houseboats and cultural experiences."
              price="₹28,000"
            />

            <PackageCard
              image={coorg}
              title="Coorg"
              days="4 Days / 3 Nights"
              desc="Coffee plantations and relaxing family vacations."
              price="₹21,000"
            />

            <PackageCard
              image={mysore}
              title="Mysore"
              days="3 Days / 2 Nights"
              desc="Historic palaces and rich cultural heritage."
              price="₹15,000"
            />
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center text-white py-3">
        <p className="mb-0">
          © 2026 TripNest | Family Travel Experiences
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
          <button className="btn btn-warning w-100">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Family;