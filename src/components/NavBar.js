import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'; // Importing the CSS file for styling
import { motion, useInView, useAnimation } from "framer-motion";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/'); // State to track the active link

  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView]);

  return (
    <motion.div
      className="navbar"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="nav nav_home">
        <Link to="/" className='' onClick={() => setActiveLink('/')} >
          Type@Cooper 2024
        </Link>
      </div>
      <div className="nav nav_list">
        <Link to="/list" className={`nav_item ${activeLink === '/list' ? 'active' : ''}`} onClick={() => setActiveLink('/list')} >
          Typefaces & Designers
        </Link>
      </div>
      <div className="nav nav_about">
        <Link to="/about" className={`nav_item ${activeLink === '/about' ? 'active' : ''}`} onClick={() => setActiveLink('/about')} >
          About
        </Link>
      </div>
    </motion.div>
  );
};

export default NavBar;
