import React, { useState, useEffect } from "react";
import API from "../api";
import "./StudentsList.css";

export default function StudentsList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get("/students", { headers: { Authorization: `Bearer ${token}` } });
        setStudents(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching students");
      }
    };
    fetchStudents();
  }, [token]);

  if (error) return <p style={{ color: "#d32f2f" }}>{error}</p>;

  return (
    <div className="student-list">
      <h3>All Students (Staff/Admin)</h3>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Student Name</th>
              <th>Parents Name</th>
              <th>Parent Contact</th>
              <th>Address</th>
              <th>Class</th>
              <th>User</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td>{s.studentImage && <img src={`http://localhost:5050${s.studentImage}`} alt={s.studentName} width={50} />}</td>
                <td>{s.studentName}</td>
                <td>{s.studentParentsName}</td>
                <td>{s.studentParentContact}</td>
                <td>{s.studentAddress}</td>
                <td>{s.studentClass}</td>
                <td>{s.userId?.name} ({s.userId?.role})</td>
                <td>{new Date(s.createdAt).toLocaleString()}</td>
                <td>{new Date(s.updatedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
