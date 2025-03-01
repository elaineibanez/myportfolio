import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";
import profileImage from "../images/me.png";
import ecommerce from "../images/ecommerce.png";
import movie from "../images/movie.png";
import fitness from "../images/fitness.png";
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
        <motion.div
          className="profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Profile Image Animation */}
          <motion.img
            className="profile-image"
            src={profileImage}
            alt="Profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Name & Description */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            I'm, Elaine
          </motion.h1>

          <motion.p
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I love problem-solving and constantly learning new technologies to improve my skills. My goal is to create efficient, scalable, and responsive web applications while growing as a developer. I’m excited to take on new challenges and contribute to innovative projects!
          </motion.p>

          {/* Email Animation */}
          <motion.p
            className="email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            elaineibanez@gmail.com <FaEnvelope className="icon" />
          </motion.p>
        </motion.div>


        {/* Right Panel - Portfolio Section */}
        <div className="portfolio">
        <h1 className="portfolio-title"> PORTFOLIO </h1>
          <div className="portfolio-grid">
            <motion.div className="portfolio-item large" whileHover={{ scale: 1.05 }}>
              <h1> API PROJECTS </h1>
            </motion.div>

            <motion.div className="portfolio-item small" id="ecom1" whileHover={{ scale: 2.00 }}>
              <a href="https://documenter.getpostman.com/view/40126425/2sAYQgiUqL" target="_blank">
                <img src={ecommerce} alt="E-commerce" />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small purple" id="ecom2" whileHover={{ scale: 2.05 }}>
              <a href="https://documenter.getpostman.com/view/40126425/2sAYdeMrhM" target="_blank">
                <img src={movie} />
              </a>
            </motion.div>

            <motion.div className="portfolio-item small dark" id="ecom3" whileHover={{ scale: 2.05 }}>
              <a href="https://documenter.getpostman.com/view/40126425/2sAYdeMrhN" target="_blank">
                <img src={fitness} />
              </a>
            </motion.div>

            <motion.div className="portfolio-item ecommerce" whileHover={{ scale: 1.05 }}>
              <h2>E - Commerce App API</h2>
            </motion.div>

            <motion.div className="portfolio-item movie" whileHover={{ scale: 1.05 }}>
              <h2>Movie App API</h2>
            </motion.div>

            <motion.div className="portfolio-item fitness" whileHover={{ scale: 1.05 }}>
              <h2>Fitness App API</h2>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
