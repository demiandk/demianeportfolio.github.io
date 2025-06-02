import React from "react";
import "./EPortfolio.css";
import image from "../assets/selfImage.jpeg";
const EPortfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        {/* Title */}
        <h1 className="portfolio-title">Demian Kochubei</h1>

        {/* Top Content: Image + About Me */}
        <div className="portfolio-content">
          <img
            src={image}
            alt="Profile"
            className="profile-image"
          />

          <div className="about-me">
            <h2>About Me</h2>
            <p>
              Hi! I'm a passionate developer who enjoys creating web applications
              and learning new technologies. I'm currently focused on improving
              my Java and React skills. I also enjoy solving problems and
              collaborating with others on meaningful projects.
            </p>
          </div>
        </div>

        {/* Bottom Section: Skills and Experience */}
        <div className="portfolio-bottom">
          {/* Skills */}
          <div className="skills-section">
            <h3>Skills</h3>
            <ul>
              <li>Java</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>GitHub</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="experience-section">
            <h3>Experience</h3>
            <ul>
              <li><strong>Software Team Member</strong><br />Robotics 6324 - semester 2 2025</li>
              <li><strong>Operations Intern</strong><br />Autotiv MFG - 2023</li>
              <li><strong>Coder</strong><br />BattleShips - 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPortfolio;