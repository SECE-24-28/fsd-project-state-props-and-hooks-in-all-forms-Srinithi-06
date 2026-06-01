import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Category.css";

import logo from "../Assets/Images/tripnest logo.png";
import heroBg from "../Assets/Images/dashboard-bg.jpeg";

function Customize() {

  const [tripData, setTripData] = useState({
    destination: "",
    members: "",
    budget: "",
    days: "",
    transport: "",
    hotel: "",
    food: ""
  });

  const handleChange = (e) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requests =
      JSON.parse(localStorage.getItem("tripRequests")) || [];

    requests.push(tripData);

    localStorage.setItem(
      "tripRequests",
      JSON.stringify(requests)
    );

    alert("Trip Request Submitted Successfully");

    setTripData({
      destination: "",
      members: "",
      budget: "",
      days: "",
      transport: "",
      hotel: "",
      food: ""
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid">

          <div className="d-flex align-items-center">
            <img
              className="logo me-3"
              src={logo}
              alt="logo"
            />

            <Link
              className="navbar-brand text-warning fw-bold fs-3"
              to="/dashboard"
            >
              TripNest
            </Link>
          </div>

        </div>
      </nav>

      <section
        className="hero-section"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.65),
            rgba(0,0,0,0.65)),
            url(${heroBg})`
        }}
      >
        <div className="hero-content">
          <h1>Customize Your Dream Trip</h1>

          <p>
            Tell us your requirements and
            we will create a personalized package.
          </p>
        </div>
      </section>

      <div className="container py-5">

        <div className="card p-4 shadow">

          <h2 className="text-center text-warning mb-4">
            Trip Requirements
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Destination</label>

              <input
                type="text"
                className="form-control"
                name="destination"
                value={tripData.destination}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Number Of Members</label>

              <input
                type="number"
                className="form-control"
                name="members"
                value={tripData.members}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Budget</label>

              <input
                type="text"
                className="form-control"
                name="budget"
                value={tripData.budget}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Trip Duration</label>

              <input
                type="text"
                className="form-control"
                name="days"
                value={tripData.days}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Transportation</label>

              <select
                className="form-control"
                name="transport"
                value={tripData.transport}
                onChange={handleChange}
              >
                <option>Bus</option>
                <option>Train</option>
                <option>Flight</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Hotel Type</label>

              <select
                className="form-control"
                name="hotel"
                value={tripData.hotel}
                onChange={handleChange}
              >
                <option>3 Star</option>
                <option>4 Star</option>
                <option>5 Star</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Food Preference</label>

              <select
                className="form-control"
                name="food"
                value={tripData.food}
                onChange={handleChange}
              >
                <option>Veg</option>
                <option>Non Veg</option>
                <option>Both</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100"
            >
              Submit Request
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Customize;