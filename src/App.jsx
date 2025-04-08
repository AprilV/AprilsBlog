import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ThreeD from "./pages/ThreeD";
import WebDev from "./pages/WebDev";
import "./Navbar.css"; // ✅ Import the new CSS file

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blog" className="nav-link">IS390 AI Research Paper</Link>
          <Link to="/3d" className="nav-link">3D App</Link>
          <Link to="/Web-Dev" className="nav-link">Web Development</Link>
        </div>
      </nav>

      <div style={{ marginTop: "100px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/3d" element={<ThreeD />} />
          <Route path="/Web-Dev" element={<WebDev />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
