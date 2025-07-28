import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editStudent, setStudents } from "./admissionSlice";
import { useNavigate, Link } from "react-router-dom";

const StudentList = () => {
  const students = useSelector((state) => state.admissionPage.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Fetch students from backend when component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/students");
        const data = await res.json();
        dispatch(setStudents(data));
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, [dispatch]);

  const handleEdit = (id) => {
    dispatch(editStudent(id));
    navigate("/admission");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const res = await fetch(`http://localhost:3000/api/students/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          // Refresh list from DB
          const updated = await fetch("http://localhost:3000/api/students");
          const data = await updated.json();
          dispatch(setStudents(data));
        }
      } catch (err) {
        console.error("Failed to delete:", err);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul className="list-group mt-3">
          {students.map((student) => (
            <li
              key={student._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>{student.name}</div>
              <div>
                <Link
                  to={`/students/${student._id}`}
                  className="btn btn-info btn-sm me-2"
                >
                  View
                </Link>
                <button
                  onClick={() => handleEdit(student._id)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
