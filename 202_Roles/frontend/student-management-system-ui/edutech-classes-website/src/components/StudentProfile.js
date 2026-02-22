import React, { useState, useEffect } from "react";
import API from "../api";
import "./StudentProfile.css";

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({
    studentName: "",
    studentParentsName: "",
    studentParentContact: "",
    studentAddress: "",
    studentClass: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/students/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
        setForm(res.data);
      } catch (err) {
        console.error(err.response);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setImageFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let key in form) formData.append(key, form[key]);
      if (imageFile) formData.append("studentImage", imageFile);

      const res = await API.post("/students", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });
      setProfile(res.data);
      alert("Profile saved!");
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div className="profile-form">
      {user && <h3>Welcome, {user.name} ({user.role})</h3>}
      <h3>My Profile</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} /><br/>
        <input name="studentName" placeholder="Name" value={form.studentName} onChange={handleChange} /><br/>
        <input name="studentParentsName" placeholder="Parents Name" value={form.studentParentsName} onChange={handleChange} /><br/>
        <input name="studentParentContact" placeholder="Parent Contact" value={form.studentParentContact} onChange={handleChange} /><br/>
        <input name="studentAddress" placeholder="Address" value={form.studentAddress} onChange={handleChange} /><br/>
        <input name="studentClass" placeholder="Class" value={form.studentClass} onChange={handleChange} /><br/>
        <button type="submit">{profile ? "Update Profile" : "Create Profile"}</button>
      </form>

      {profile && (
        <div className="student-list">
          <h4>Student Details</h4>
          {profile.studentImage && (
            <img src={`http://localhost:5050${profile.studentImage}`} alt="student" width="150" />
          )}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Parents Name</th>
                <th>Parent Contact</th>
                <th>Address</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{profile.studentName}</td>
                <td>{profile.studentParentsName}</td>
                <td>{profile.studentParentContact}</td>
                <td>{profile.studentAddress}</td>
                <td>{profile.studentClass}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}