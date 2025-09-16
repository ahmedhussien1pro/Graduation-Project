import React from "react";
import "../../assets/css/Landing.css";
import defaultBg from "../../assets/css/bg.jpg";

const LearnLanding = () => {
  return (
    <div className="my-landing" style={{ backgroundImage:`url(${defaultBg})`, backgroundSize: "cover", backgroundPosition: "center" } }>
      <div className="landing__overlay"></div>
      <div className="landing__content section">
        <div className="landing__text">
          <h1 className="landing__title">Learn Cybersecurity</h1>
          <h2 className="landing__subtitle">Hands-on Hacking</h2>
          <p className="landing__description">
            Our content is guided by interactive exercises based on real-world
            scenarios—from hacking machines to investigating attacks, we’ve got you covered.
          </p>
          <button className="landing__cta">Start Learning</button>
        </div>

        <div className="landing__icon">
          <div className="landing__icon-border">
            {/* Edge Icons */}
            <div className="landing__edge-icon landing__edge-icon--top landing__edge-icon--active">
              <i className="fas fa-user-secret"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--right">
              <i className="fas fa-book-open"></i>
            </div>
            {/* <div className="landing__edge-icon landing__edge-icon--bottom">
              <i className="fas fa-chalkboard-teacher"></i>
            </div> */}
            <div className="landing__edge-icon landing__edge-icon--left">
              <i className="fas fa-lightbulb"></i>
            </div>

            {/* Center Circle */}
            <div className="landing__icon-circle">Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnLanding;
