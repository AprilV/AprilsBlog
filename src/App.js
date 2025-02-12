import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ThreeD from "./pages/ThreeD"; // Import 3D Page

function App() {
  return (
    <Router>
      <nav style={{
        padding: "15px",
        fontSize: "18px",
        background: "#f8f9fa",
        borderBottom: "2px solid #ddd",
        textAlign: "center",
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0"
      }}>
        <Link to="/" style={{ margin: "0 15px", textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>Home</Link>
        <Link to="/blog" style={{ margin: "0 15px", textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>Blog</Link>
        <Link to="/3d" style={{ margin: "0 15px", textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>3D App</Link>
      </nav>

      <div style={{ marginTop: "60px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/3d" element={<ThreeD />} /> {/* 3D Page Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
