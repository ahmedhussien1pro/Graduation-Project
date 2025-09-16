import React from 'react';
import './Preloader.css';

const Preloader = ({ loaded = false }) => {
  return (
    <div className={loaded ? "loaded" : ""}>
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
        <div className="logo">CyberLabs</div>
      </div>
    </div>
  );
};

export default Preloader;
