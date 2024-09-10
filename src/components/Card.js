import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import './Card.css'; // Importing the CSS file for styling


const Card = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  const card_style = {
    backgroundColor: isHovered ? props.background : '#EFEFEF',
    transition: 'all 0.3s ease',
  };

  const top_info_style = {
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? `translateY(20px)` : 'translateY(0)',
    color: isHovered ? props.color : 'initial',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  const bottom_info_style = {
    opacity: isHovered ? 1 : 0,
    transform: isHovered ?  `translateY(-20px)` : 'translateY(0)',
    color: isHovered ? props.color : 'initial',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  <Routes location={window.location} key={window.location.pathname}>
    <Route path={props.to} element={props.to} />
  </Routes>


  return (
    <Link 
    className="card" 
    style={card_style}
    to = {props.to}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
        <div className="card_info top_info" style={top_info_style}>{props.designer}</div>
        <div className="card_info bottom_info typeface_info" style={bottom_info_style}>{props.typeface}</div>
        <div className="card_info bottom_info style_info" style={bottom_info_style}>{props.style_amount} styles</div>
        <img id="card_letter" className="card_letter"
        src={isHovered ? props.active_letter : props.default_letter}>
      </img>
      
    </Link>
  );


};

export default Card;

