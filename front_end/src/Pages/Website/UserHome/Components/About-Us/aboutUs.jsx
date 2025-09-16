import React from "react";
import "./First_Lab.css";
import Img from "./student.jpg";
const RedCircles = () => {
  const teamData = [
    {
      id: 1,
      name: "Student 1",
      role: "Student",
      img: Img,
    },
    {
      id: 2,
      name: "Student 2",
      role: "Student",
      img: Img,
    },
    {
      id: 3,
      name: "Student 3",
      role: "Student",
      img: Img,
    },
    {
      id: 4,
      name: "Student 4",
      role: "Student",
      img: Img,
    },
    {
      id: 5,
      name: "Student 5",
      role: "Student",
      img: Img,
    },
    {
      id: 6,
      name: "Student 6",
      role: "Student",
      img: Img,
    },
    {
      id: 7,
      name: "Student 7",
      role: "Student",
      img: Img,
    },
  ];

  const teacher = {
    id: 8,
    name: "Dr. Marwa",
    role: "Doctor",
    img: Img,
  };
  return (
    <div className="circle-container">
      {/* Large circle for the teacher */}
      <div className="circle large">
        <img src={teacher.img} alt={teacher.name} className="circle-img" />
        <div className="circle-content">
          <h3 className="circle-name">{teacher.name}</h3>
        </div>
        <div className="card-details">
          <h3>{teacher.name}</h3>
          <p>{teacher.role}</p>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>

      {/* Small circles for students */}
      {teamData.map((student, index) => (
        <div key={student.id} className={`circle small circle-${index + 1}`}>
          <img src={student.img} alt={student.name} className="circle-img" />
          <div className="circle-content">
            <h3 className="circle-name">{student.name}</h3>
          </div>
          <div className="card-details">
            <h3>{student.name}</h3>
            <p>{student.role}</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RedCircles;
