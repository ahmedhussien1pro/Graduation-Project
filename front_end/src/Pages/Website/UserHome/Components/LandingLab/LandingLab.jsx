import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LandingLab = ({
  background,
  backgroundStyle,
  imagecourse,
  courseImage,
  courseTitle = "Course Title",
  courseDescription = "Course Description",
  difficulty = "Course Difficulty",
  duration = "Course Duration",
  onSaveRoom = () => {},
  onLike = () => {},
  onDislike = () => {},
}) => {
  // State to track toggled states
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("buttonStates")) || {};
    setIsSaved(savedState.isSaved || false);
    setIsLiked(savedState.isLiked || false);
    setIsDisliked(savedState.isDisliked || false);
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const buttonStates = { isSaved, isLiked, isDisliked };
    localStorage.setItem("buttonStates", JSON.stringify(buttonStates));
  }, [isSaved, isLiked, isDisliked]);

  // Toggle Save Room state
  const toggleSaveRoom = () => {
    setIsSaved((prev) => !prev); // Toggle saved state
    onSaveRoom(); // Call the passed prop function
  };

  // Toggle Like state
  const toggleLike = () => {
    setIsLiked((prev) => !prev); // Toggle liked state
    if (isDisliked) setIsDisliked(false); // Turn off dislike if it's active
    onLike(); // Call the passed prop function
  };

  // Toggle Dislike state
  const toggleDislike = () => {
    setIsDisliked((prev) => !prev); // Toggle disliked state
    if (isLiked) setIsLiked(false); // Turn off like if it's active
    onDislike(); // Call the passed prop function
  };

  return (
    <div className="landing-labd">
      <div className="banner">
        <img src={background} alt="background Image2" style={backgroundStyle} />
      </div>
      <div className="container-labd">
        <div className="breadcrumb">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="">{courseTitle}</Link>
            </li>
          </ul>
        </div>
        <div className="course-info">
          <img src={imagecourse || courseImage} alt="Course" />
          <div className="course-text">
            <h1>{courseTitle}</h1>
            <p>{courseDescription}</p>
            <div className="course-icons">
              <div className="diff">
                <div className="easy">
                  <i className="fa-solid fa-signal"></i>
                  <p>{difficulty}</p>
                </div>
              </div>
              <div className="duration">
                <i className="fa-solid fa-clock"></i>
                <p className="time">{duration}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="options">
          <button
            onClick={toggleSaveRoom}
            className={isSaved ? "active" : ""}
          >
            <i className="far fa-bookmark"></i>
            <p>{isSaved ? "Remove from Favorite" : "Add to Favorite"}</p>
          </button>
          <div className="like">
            <button
              onClick={toggleLike}
              className={isLiked ? "active" : ""} 
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button
              onClick={toggleDislike}
              className={isDisliked ? "active" : ""}
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLab;