import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image2 from "../assets/img/landingImage.png";
import "./HomeLanding.css";

const ParticlesComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 90,
              density: { enable: true, value_area: 500 },
            },
            color: { value: "#00e77f" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#00e77f" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00e77f",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="landing-section">
      <div id="particles-js"></div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 landing-text mb-4 mb-lg-0">
            <h3 className="landing-text__header">
              Elevate Your Cybersecurity Skills
            </h3>

            <h1 className="landing-text__headline">
              Comprehensive Cybersecurity Training for All Levels
            </h1>

            <p>
              Join our academy to gain practical skills and knowledge to protect
              against cyber threats and secure your future in the digital world.
            </p>

            <div className="mt-4">
              <Link to="#courses" className="btn btn-custom me-3 mb-2">
                Discover Our Popular Courses
              </Link>
              <Link to="#" className="text-white fw-bold mb-2 d-inline-block">
                <i className="fas fa-play me-2"></i>Watch Demo
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-12 text-center landing-image">
            <img
              src={image2}
              className="landing-image__banner"
              alt="Cybersecurity Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticlesComponent;
