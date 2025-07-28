import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div
    className="d-flex flex-column align-items-center justify-content-center text-white"
    style={{
      backgroundImage: "url('/school.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
    }}
  >
    <h1 className="bg-dark bg-opacity-50 p-3 rounded">
      Welcome to Mamoona's School
    </h1>
    <div className="mt-4">
      <Link to="/admission" className="btn btn-primary mx-2">
        Admission Form
      </Link>
      <Link to="/students" className="btn btn-secondary mx-2">
        View Students
      </Link>
    </div>
  </div>
);

export default HomePage;
