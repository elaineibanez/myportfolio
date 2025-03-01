import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";
import profileImage from "../images/me.png";
import luxebelle from "../images/website1.png";
import fitnessapp from "../images/website2.png";
import movieapp from "../images/website3.png";
import booksite from "../images/website4.png";
import luxestore from "../images/website5.png";
import skyward from "../images/website6.png";
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
            I love problem-solving and constantly learning new technologies to improve my skills. My goal is to create efficient, scalable, and responsive web applications while growing as a developer. I’m excited to take on new challenges and contribute to innovative projects!
          </motion.p>
          <motion.p className="email" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
            elaineibanez@gmail.com <FaEnvelope className="icon" />
            (+63) 9151989058 <FaPhone className="icon" />
          </motion.p>
        </motion.div>

        {/* Right Panel - Portfolio Section */}
        <div className="portfolio">
          <h1 className="portfolio-title">PORTFOLIO</h1>
          <div className="portfolio-grid">
            <motion.div className="portfolio-item1 large" whileHover={{ scale: 1.05 }}>
              <h1>WEBSITE PROJECTS</h1>
            </motion.div>

            <motion.div className="portfolio-item small" id="ecom1" whileHover={{ scale: 1.5 }}>
              <a href="  http://zuitt-bootcamp-prod-520-8523-ibanez.s3-website.us-east-1.amazonaws.com" target="_blank">
                <img src={luxebelle} alt="E-commerce" />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small purple" id="ecom2" whileHover={{ scale: 1.5 }}>
              <a href="https://fitnessapp-nine.vercel.app/" target="_blank">
                <img src={fitnessapp} />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small dark" id="ecom3" whileHover={{ scale: 1.5 }}>
              <a href="https://movieappclient-gamma.vercel.app/" target="_blank">
                <img src={movieapp} />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small dark" id="ecom3" whileHover={{ scale: 1.5 }}>
              <a href="https://elaineibanez.github.io/s82/" target="_blank">
                <img src={booksite} />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small dark" id="ecom3" whileHover={{ scale: 1.5 }}>
              <a href="https://elaineibanez.github.io/home-page-exam/" target="_blank">
                <img src={luxestore} />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small dark" id="ecom3" whileHover={{ scale: 1.5 }}>
              <a href="https://movieappclient-gamma.vercel.app/" target="_blank">
                <img src={skyward} />
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
