import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import StudentProfile from "./components/StudentProfile";
import StudentsList from "./components/StudentsList";
import LogoutButton from "./components/LogoutButton";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Maithrivanam Academy</h2>

        {/* Burger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {user ? (
            <>
              <li>
                <Link to="/student-profile" onClick={() => setMenuOpen(false)}>
                  My Profile
                </Link>
              </li>

              {/* Only show All Students for STAFF or ADMIN */}
              {(user.role === "STAFF" || user.role === "ADMIN") && (
                <li>
                  <Link to="/students" onClick={() => setMenuOpen(false)}>
                    All Students
                  </Link>
                </li>
              )}

              <li>
                <LogoutButton />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/admin-login" onClick={() => setMenuOpen(false)}>
                  Admin Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;