import React from 'react';

function AdminDashboard() {


  return (
    <div style={{padding:"40px"}}>

      <h1>
        TripNest Admin Dashboard
      </h1>

      <hr />

      <h3>
        Welcome Admin
      </h3>

      <p>
        Email:
        sri@gmail.com
      </p>

      <div>

        <button>
          Add Places
        </button>

        <button>
          Manage Places
        </button>

        <button>
          Received Customers
        </button>

      </div>

    </div>
  );
}

export default AdminDashboard;