import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Top Section */}
        <div className="footer__top row">
          {/* Column 1: Company */}
          <div
            className="footer__top--item col-sm-6 col-md-3"
            data-aos="fade-up"
          >
            <div className="d-flex align-items-center logo">
              <h2 className="our__logo">Cyber Labs</h2>
            </div>
            <p>
              Your trusted partner in cybersecurity education. We empower
              individuals with the knowledge and skills to combat cyber threats
              and secure the digital landscape.
            </p>
            <div className="footer__social-icons">
              <Link to="#" className="footer__social-icons--item">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="footer__social-icons--item">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="footer__social-icons--item">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#" className="footer__social-icons--item">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          {/* Column 2: Policies */}
          <div
            className="footer__top--item col-sm-6 col-md-3"
            data-aos="fade-up"
          >
            <h3 className="fw-normal">Policies</h3>
            <ul className="footer__links">
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              <li>
                <Link to="#">Acceptable Use Policy</Link>
              </li>
              <li>
                <Link to="#">Data Protection Policy</Link>
              </li>
              <li>
                <Link to="#">Cookies Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div
            className="footer__top--item col-sm-6 col-md-3"
            data-aos="fade-up"
          >
            <h3 className="fw-normal">Useful Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/about-us" className="footer__links--item">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__links--item">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__links--item">
                  Reservation
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__links--item">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__links--item">
                  Terms &amp; Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div
            className="footer__top--item col-sm-6 col-md-3"
            data-aos="flip-up"
          >
            <h3 className="fw-normal">Contact</h3>
            <ul className="footer__top--location">
              <li>Faculty of Electronic Engineering</li>
              <li>Menouf City, Menofia Governorate</li>
              <li>📞 +201000000000</li>
              <li>📧 support@cyberlabs.com</li>
            </ul>
          </div>
        </div>
        {/* End Top Section */}

        {/* Bottom Section */}
        <div className="footer__bottom row w-100 justify-content-between">
          <div className="footer__bottom--copyright col-lg-9 col-sm-12">
            &copy; 2025 - Designed by{" "}
            <Link
              to=""
              target="_blank"
              rel="noopener noreferrer"
              className="fw-bold"
            >
              CyberLabs Team
            </Link>
          </div>
          <div className="footer__bottom--menu col-lg-3 col-sm-12">
            <Link to="/home">Home</Link>
            <Link to="#">Cookies</Link>
            <Link to="#">Help</Link>
            <Link to="#">FQAs</Link>
          </div>
        </div>
        {/* End Bottom Section */}
      </div>
    </footer>
  );
}
