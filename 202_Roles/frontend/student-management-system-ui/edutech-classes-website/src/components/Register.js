import React, { useState } from "react";
import API from "../api";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      setMessage("Registered successfully! You can login now.");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="register-form">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br/>
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br/>
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}