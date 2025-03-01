import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";
import { Link } from "react-router-dom";
import profileImage from "../images/me.png";
import ecommerce from "../images/ecommerce.png";
import movie from "../images/movie.png";
import fitness from "../images/fitness.png";
import html5 from "../images/logo-html5.png";
import css3 from "../images/logo-css3.png";
import bootstrap from "../images/logo-bootstrap.png";
import javascript from "../images/logo-javascript.png";
import mongodb from "../images/logo-mongodb.png";
import expressjs from "../images/logo-expressjs.png";
import react from "../images/logo-react.png";
import nodejs from "../images/logo-nodejs.png";
import git from "../images/logo-git.png";
import postman from "../images/logo-postman.png";
import sublime from "../images/logo-sublime.png";


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
            (+63) 9151989058 <FaPhone className="icon" />
          </motion.p>
        </motion.div>

        {/* Right Panel - Portfolio Section */}
        <div className="tech-stack">
          <h1 className="tech-stack-title"> TECH STACK TOOLS </h1>
          <div className="tech-stack-grid">
            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50  }}>
              <img src={html5} alt="HTML" />
              <h2>HTML</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={css3} alt="CSS" />
              <h2>CSS</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={bootstrap} alt="CSS" />
              <h2>BOOTSTRAP</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={javascript} alt="CSS" />
              <h2>JAVASCRIPT</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={mongodb} alt="CSS" />
              <h2>MONGO DB</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={expressjs} alt="CSS" />
              <h2>EXPRESS JS</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={react} alt="CSS" />
              <h2>REACT</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={nodejs} alt="CSS" />
              <h2>NODE JS</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={git} alt="CSS" />
              <h2>GIT</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={postman} alt="CSS" />
              <h2>POSTMAN</h2>
            </motion.div>

            <motion.div className="tech-stack-item" whileHover={{ scale: 1.50 }}>
              <img src={sublime} alt="CSS" />
              <h2>SUBLIME</h2>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
