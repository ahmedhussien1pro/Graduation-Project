import { useState } from "react";
import Swal from "sweetalert2";

const itemsPerPage = 9;

const PaginatedCourses = ({ filteredCourses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState({});

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top:300 ,behavior: "smooth" });
  };

  // Toggle favorite status for a course and update in DB.
  const toggleFavorite = async (courseId) => {
    const currentStatus = favorites[courseId];
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [courseId]: !currentStatus,
    }));

    try {
      const response = await fetch("/api/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId, favorite: !currentStatus }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update favorite");
      }
    } catch (error) {
      console.error("Error updating favorite:", error);
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [courseId]: currentStatus,
      }));
      Swal.fire(
        "Error",
        "Could not update favorite status.\n DB not Ready! Please try again later.",
        "error"
      );
    }
  };

  const handleInfoClick = (course, e) => {
    e.preventDefault();
    e.stopPropagation();
    Swal.fire({
      title: course.title,
      html: `<p>${course.description}</p>
             <ul>
               ${course.topics.map((topic) => `<li>${topic}</li>`).join("")}
             </ul>`,
      icon: "info",
    });
  };

  // const handleRegister = async (course, e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   try {
  //     const response = await fetch("/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ courseId: course.id }),
  //     });
  //     const data = await response.json();
  //     if (!response.ok) {
  //       throw new Error(data.message || "Registration failed");
  //     }
  //     Swal.fire(
  //       "Success",
  //       "You have successfully registered for the course!",
  //       "success"
  //     );
  //   } catch (error) {
  //     console.error("Error registering course:", error);
  //     Swal.fire(
  //       "Error",
  //       "Could not register for the course.\n DB not Ready! Please try again later.",
  //       "error"
  //     );
  //   }
  // };

  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    return (
      <>
        
      {displayedCourses.map((course, index) => (
        <div
          key={course.id}
          className="course-card-container col-lg-4 col-md-6 col-sm-12 mb-4"
          data-aos="fade-up"
          data-aos-delay={index % 3 * 50}
        >
          <a  href={course.link} className="course-card">
            <div className="card-image-container">
              <img
                src={course.image}
                alt={course.title}
                className="card-image"
              />
              
              {/* Status Badge */}
              <div className={`status-badge ${course.state.replace('-', '')}`}>
                {course.state.replace("-", " ")}
              </div>

              {/* Card Overlay Icons */}
              <div className="card-hover-overlay">
                <button 
                  className="icon-button favorite-button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(course.id);
                  }}
                >
                  <i className={`${favorites[course.id] ? "fas fa-heart filled" : "far fa-heart"}`} />
                </button>
                <button
                  className="icon-button info-button"
                  onClick={(e) => handleInfoClick(course, e)}
                >
                  <i className="fas fa-info" />
                </button>
              </div>
            </div>

            <div className="card-content">
              <h3 className="card-title">{course.title}</h3>
              <p className="card-description">{course.description}</p>
            </div>
          </a>
        </div>
      ))}
      
      {/* Pagination */}
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-item ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default PaginatedCourses;