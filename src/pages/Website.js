import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";
import profileImage from "../images/me.png";
import luxebelle from "../images/website1.png";
import fitnessapp from "../images/website2.png";
import movieapp from "../images/website3.png";
import website4 from "../images/website4.png";
import website5 from "../images/website5.png";
import website6 from "../images/website6.png";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <ul>
          <li><Link to="/">API</Link></li>
          <li><Link to="/websites">Websites</Link></li>
          <li><Link to="/tools">Tools</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* Left Panel - Profile Section */}
        <motion.div className="profile" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.img className="profile-image" src={profileImage} alt="Profile" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}>I'm Elaine</motion.h1>
          <motion.p className="name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
            I love problem-solving and constantly learning new technologies to improve my skills.
          </motion.p>
          <motion.p className="email" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
            elaineibanez@gmail.com <FaEnvelope className="icon" />
          </motion.p>
        </motion.div>

        {/* Right Panel - Portfolio Section */}
        <div className="portfolio">
          <h1 className="portfolio-title">PORTFOLIO</h1>
          <div className="portfolio-grid">
            <motion.div className="portfolio-item1 large" whileHover={{ scale: 1.05 }}>
              <h1>WEBSITE PROJECTS</h1>
            </motion.div>
            {[luxebelle, fitnessapp, movieapp, website4, website5, website6].map((image, index) => (
              <motion.div key={index} className="portfolio-item small" whileHover={{ scale: 1.1 }}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={`Project ${index + 1}`} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
