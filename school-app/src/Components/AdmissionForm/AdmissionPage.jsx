import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputField, setStudents } from "./admissionSlice";
import { useNavigate } from "react-router-dom";

const AdmissionPage = () => {
  const dispatch = useDispatch();
  const inputData = useSelector((state) => state.admissionPage.studentsInput);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(inputField({ name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (!response.ok) {
        throw new Error("Failed to save student");
      }

      const savedStudent = await response.json();

      // Fetch updated student list
      const res = await fetch("http://localhost:3000/api/students");
      const list = await res.json();
      dispatch(setStudents(list));

      navigate(`/students/${savedStudent._id}`);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Check the console.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Admission Form</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="fatherName"
            value={inputData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="age"
            value={inputData.age}
            onChange={handleChange}
            placeholder="Age"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-9">
          <input
            type="email"
            name="emailAddress"
            value={inputData.emailAddress}
            onChange={handleChange}
            placeholder="Email"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            name="contactNumber"
            value={inputData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="class"
            value={inputData.class}
            onChange={handleChange}
            placeholder="Class"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            name="address"
            value={inputData.address}
            onChange={handleChange}
            placeholder="Address"
            className="form-control"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionPage;
