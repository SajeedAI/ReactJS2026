import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<h2>Classes Page</h2>} />
      <Route path="/navodaya" element={<h2>Navodaya Page</h2>} />
      <Route path="/login" element={<h2>Login Page</h2>} />
    </Routes>
  );
}

export default AppRoutes;
