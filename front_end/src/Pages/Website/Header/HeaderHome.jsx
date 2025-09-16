import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cookie from "cookie-universal";
import axios from "axios";
import Aos from "aos";
const HeaderHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  const toggleProfileList = () => {
    setProfileListVisible(!profileListVisible);
  };

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/personalInfo", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res.data.data;
        const imageUrl = data.image
          ? `http://127.0.0.1:8080/${data.image.path.replace("\\", "/")}`
          : "";
        setUserImage(imageUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (token) fetchUserProfile();
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <header
      className={`header ${isScrolled ? "sticky" : ""} px-md-0`}
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <nav className="navbar navbar-expand-lg navbar-light mx-0 mx-lg-5">
        <div className={isScrolled ? "container " : "container-fluid "}>
          {/* Logo */}
          <Link className="navbar-brand header__logo" to="/">
            <h2 className="header__logo-title">
              Cyber <span>Labs</span>
            </h2>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="main-navbar"
            aria-expanded={isDropdownOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={isDropdownOpen ? faXmark : faBars}
              className="primary-text "
            />
          </button>

          {/* Nav Links */}
          <div
            className={`collapse navbar-collapse ${
              isDropdownOpen ? "show" : ""
            }`}
            id="main-navbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {token ? (
                  <NavLink className="nav-link" to="/home">
                    Learning
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/home">
                    Learning
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about-us">
                  About Us
                </a> */}
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#allLabs">
                  All Labs
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
                
              </li>
            </ul>

            {/* Right side (Search + Profile or Login/Register) */}
            <div className="d-flex align-items-center gap-3">
              {token ? (
                <div className="header__profile">
                  <button
                    className="header__profile-btn"
                    onClick={toggleProfileList}
                  >
                    {userImage ? (
                      <img
                        src={userImage}
                        alt="Profile"
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : (
                      <i class="fa-solid fa-circle-user primary-text fs-2"></i>
                    )}
                  </button>
                  {profileListVisible && (
                    <div className="header__profile-dropdown">
                      <ul>
                        <li>
                          <NavLink
                            to="/dashboard/personal-information"
                            className="dropdown-item"
                          >
                            View Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/settings"
                            className="dropdown-item"
                          >
                            Manage Account
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="d-flex">
                  <Link to="/login" className="btn btn-secondary me-2">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-secondary">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderHome;
