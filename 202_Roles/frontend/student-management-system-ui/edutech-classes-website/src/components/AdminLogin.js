import React, { useState } from "react";
import API from "../api";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/admin-login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/";
    } catch (err) {
      setMessage(err.response?.data || "Admin login failed");
    }
  };

  return (
    <div className="admin-login">
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br/>
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        /><br/>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}