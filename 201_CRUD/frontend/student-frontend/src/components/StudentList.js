import React, { useState } from "react";
import "./StudentList.css";

const StudentList = ({ students, onEdit, onDelete }) => {
  const [deleteId, setDeleteId] = useState(null);

  const confirmDelete = () => {
    onDelete(deleteId);
    setDeleteId(null);
  };

  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Parent</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.studentName}</td>
              <td>{s.studentClass}</td>
              <td>{s.parentName}</td>
              <td>{s.studentEmail}</td>
              <td>{s.parentContactNumber}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(s)}>Edit</button>
                <button className="delete-btn" onClick={() => setDeleteId(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ MODAL */}
      {deleteId && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Delete Student?</h3>
            <p>This action cannot be undone.</p>

            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;