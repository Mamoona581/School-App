import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/students/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Student not found");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched student:", data); // ✅ Debug log
        setStudent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error || !student) {
    return (
      <div className="container mt-5">
        <h3>{error || "Student not found"}</h3>
        <Link to="/students" className="btn btn-secondary mt-3">
          Back to list
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>👤 {student.name}'s Details</h2>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Father's Name:</strong> {student.fatherName}
        </li>
        <li className="list-group-item">
          <strong>Age:</strong> {student.age}
        </li>
        <li className="list-group-item">
          <strong>Email:</strong> {student.emailAddress}
        </li>
        <li className="list-group-item">
          <strong>Contact:</strong> {student.contactNumber}
        </li>
        <li className="list-group-item">
          <strong>Class:</strong> {student.class}
        </li>
        <li className="list-group-item">
          <strong>Address:</strong> {student.address}
        </li>
      </ul>
      <Link to="/students" className="btn btn-secondary mt-4">
        Back to list
      </Link>
    </div>
  );
};

export default StudentDetails;
