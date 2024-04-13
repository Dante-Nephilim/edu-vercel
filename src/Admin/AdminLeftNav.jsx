import React, { useState } from "react";
import logo from "../../Assets/Images/Logo.svg";
import { Link } from "react-router-dom";
import "./AdminLeftNav.css";

export default function AdminLeftNav() {
  return (
    <>
      <div className="admin-left">
        <div className="admin-logo">
          <Link className="navbar-brand" to="/admin-dashboard">
            <img src={logo} alt="Eduphiser" className="img-fluid" />
          </Link>
        </div>
        <div className="admin-nav">
          <Link to="/admin-dashboard" className="card left-active-box">
            <i className="ri-dashboard-line "></i> Dashboard
          </Link>
          <Link to="/admin-dashboard/admin-details" className="card">
            <i className="ri-user-settings-fill"></i> Admin Profile
          </Link>
          <Link to="/admin-dashboard/loan-details" className="card">
            <i className="ri-team-fill"></i> Loan Details
          </Link>
          <Link to="/" className="card">
            <i className="ri-logout-circle-line"></i> Log Out
          </Link>
        </div>
      </div>
    </>
  );
}
