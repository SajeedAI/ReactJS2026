import React, { useState, useEffect } from "react";
import API from "../api";
import "./StudentForm.css";

const StudentForm = ({ selectedStudent, refresh, clear }) => {
  const [form, setForm] = useState({
    studentName: "",
    studentEmail: "",
    studentClass: "",
    parentName: "",
    parentContactNumber: "",
    address: ""
  });

  useEffect(() => {
    if (selectedStudent) setForm(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => {
    setForm({
      studentName: "",
      studentEmail: "",
      studentClass: "",
      parentName: "",
      parentContactNumber: "",
      address: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedStudent) {
      await API.put(`/students/${selectedStudent._id}`, form);
    } else {
      await API.post("/students", form);
    }

    refresh();
    handleCancel();
  };

  const handleCancel = () => {
    clear();       // remove selected student
    resetForm();   // clear form
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h3>{selectedStudent ? "Update Student" : "Add Student"}</h3>

      <input name="studentName" placeholder="Student Name" value={form.studentName} onChange={handleChange} required />
      <input name="studentEmail" placeholder="Email" value={form.studentEmail} onChange={handleChange} />
      <input name="studentClass" placeholder="Class" value={form.studentClass} onChange={handleChange} required />
      <input name="parentName" placeholder="Parent Name" value={form.parentName} onChange={handleChange} required />
      <input name="parentContactNumber" placeholder="Parent Contact" value={form.parentContactNumber} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />

      {/* ✅ Buttons */}
      <div className="form-actions">
        <button type="submit">
          {selectedStudent ? "Update Student" : "Add Student"}
        </button>

        {selectedStudent && (
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default StudentForm;
