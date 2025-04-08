import React from "react";
import "../WebDev.css";

export default function WebDevelopment() {
  return (
    <div className="webdev-container">
      <h1>Web Development</h1>
      <p>
        Welcome to my Web Development page! Below is a link to my self-developed website, hosted on GitHub Pages. This site highlights my HTML/CSS work and overall progress as a developer.
      </p>
      <a 
        href="https://aprilv.github.io/my-website/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="webdev-link"
      >
        Visit My Website
      </a>
    </div>
  );
}