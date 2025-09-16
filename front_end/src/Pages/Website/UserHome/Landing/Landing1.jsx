import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-home">
      <div className="container-home">
        <div className="course-info-home">
          {/* Course Text Section */}
          <div className="course-text-home">
            <h1>Learn</h1>
            <p className="brief">
              <i className="fa-solid fa-book-open"></i> Hands-on Hacking
            </p>
            <p>
              Our content is guided with interactive exercises based on
              real-world scenarios, from hacking machines to investigating
              attacks, we've got you covered.
            </p>
          </div>

          {/* Course Icon Section */}
          <div className="course-icon-home">
            <div className="border-home">
              <div className="content-home">
                <i className="fas fa-book-open"></i>
                <p>Learn</p>
                <i className="fas fa-bullseye"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
