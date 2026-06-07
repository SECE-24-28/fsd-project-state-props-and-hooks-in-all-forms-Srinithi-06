import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import logo from "../../Assets/Images/tripnest logo.png";

function DashboardOverview() {
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [customTrips, setCustomTrips] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData =
    async () => {
      try {
        const [
          packageRes,
          bookingRes,
          userRes,
          customTripRes,
        ] = await Promise.all([
          api.get("/packages"),
          api.get("/bookings"),
          api.get("/users"),
          api.get("/customtrips"),
        ]);

        setPackages(packageRes.data || []);
        setBookings(bookingRes.data || []);
        setUsers(userRes.data || []);
        setCustomTrips(
          customTripRes.data || []
        );
      } catch (error) {
        console.log(error);
      }
    };

  const filteredPackages =
    packages.filter((pkg) =>
      (
        pkg.packageName ||
        pkg.name ||
        ""
      )
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const displayedPackages =
    selectedCategory === "All"
      ? packages
      : packages.filter(
          (pkg) =>
            pkg.category ===
            selectedCategory
        );

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <img
          src={logo}
          alt="TripNest"
          style={{
            width: "80px",
            height: "80px",
          }}
        />

        <div>
          <h1
            style={{
              color: "#f4b400",
              margin: 0,
            }}
          >
            Admin Dashboard
          </h1>

          <p
            style={{
              color: "#ccc",
            }}
          >
            Manage Packages,
            Bookings, Users and
            Custom Trips
          </p>
        </div>
      </div>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Packages</h3>
          <h1>{packages.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <h1>{bookings.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Custom Trips</h3>
          <h1>{customTrips.length}</h1>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Packages..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        style={searchInput}
      />

      {search && (
        <>
          <h2
            style={{
              color: "#f4b400",
              marginBottom: "20px",
            }}
          >
            Search Results
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {filteredPackages.map(
              (pkg) => (
                <div
                  key={pkg._id}
                  style={cardStyle}
                >
                  <h3>
                    {pkg.packageName ||
                      pkg.name}
                  </h3>

                  <p>
                    {pkg.category}
                  </p>
                </div>
              )
            )}
          </div>
        </>
      )}

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Package Categories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {[
          "All",
          "International",
          "Family",
          "Friends",
          "Adventure",
          "Honeymoon",
        ].map((category) => (
          <div
            key={category}
            onClick={() =>
              setSelectedCategory(
                category
              )
            }
            style={{
              background:
                selectedCategory ===
                category
                  ? "#f4b400"
                  : "#111",

              color:
                selectedCategory ===
                category
                  ? "#000"
                  : "#fff",

              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              cursor: "pointer",
              border:
                "1px solid #f4b400",
            }}
          >
            <h3>{category}</h3>

            <h2>
              {category === "All"
                ? packages.length
                : packages.filter(
                    (pkg) =>
                      pkg.category ===
                      category
                  ).length}
            </h2>
          </div>
        ))}
      </div>

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Available Packages
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        {displayedPackages.map(
          (pkg) => (
            <div
              key={pkg._id}
              style={{
                background:
                  "#111",
                borderRadius:
                  "20px",
                overflow:
                  "hidden",
                border:
                  "1px solid #333",
              }}
            >
              {pkg.packageImage && (
                <img
                  src={
                    pkg.packageImage
                  }
                  alt={
                    pkg.packageName
                  }
                  style={{
                    width:
                      "100%",
                    height:
                      "220px",
                    objectFit:
                      "cover",
                  }}
                />
              )}

              <div
                style={{
                  padding:
                    "20px",
                }}
              >
                <h3
                  style={{
                    color:
                      "#f4b400",
                  }}
                >
                  {
                    pkg.packageName
                  }
                </h3>

                <p>
                  {
                    pkg.category
                  }
                </p>

                <p>
                  {
                    pkg.duration
                  }
                </p>

                <h4
                  style={{
                    color:
                      "#28a745",
                  }}
                >
                  {pkg.price}
                </h4>
              </div>
            </div>
          )
        )}
      </div>

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Recent Bookings
      </h2>

      {bookings
        .slice(-3)
        .reverse()
        .map((booking) => (
          <div
            key={booking._id}
            style={listCard}
          >
            <strong>
              {
                booking.packageName
              }
            </strong>

            <p>
              {booking.userName}
            </p>

            <p>
              Status:
              {" "}
              {booking.status}
            </p>
          </div>
        ))}

      <h2
        style={{
          color: "#f4b400",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Recent Custom Trips
      </h2>

      {customTrips
        .slice(-3)
        .reverse()
        .map((trip) => (
          <div
            key={trip._id}
            style={listCard}
          >
            <strong>
              {
                trip.destination
              }
            </strong>

            <p>
              {trip.userName}
            </p>

            <p>
              Status:
              {" "}
              {trip.status}
            </p>
          </div>
        ))}
    </>
  );
}

const cardStyle = {
  background: "#111",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid #f4b400",
};

const searchInput = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "white",
  marginBottom: "30px",
};

const listCard = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "15px",
};

export default DashboardOverview;