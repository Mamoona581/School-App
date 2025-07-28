import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">
        Mamoona's School
      </NavLink>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admission"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Admission Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/students"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Student List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
