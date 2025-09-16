import React, { useEffect } from "react";
import "./team.css";
import Aos from "aos";
import image1 from "../assets/img/team-img/member1.jpg";
import PhotoDeveloperAhmed from "../assets/img/team-img/Team-4.webp";
import PhotoDeveloperFront from "../assets/img/team-img/4.jpg";
import PhotoDeveloperBack from "../assets/img/team-img/9.jpg";
import PhotoCyberTeam1 from "../assets/img/team-img/Team-3.webp";
import PhotoCyberTeam2 from "../assets/img/team-img/team-7UT4L65.jpg";
import PhotoCyberTeam3 from "../assets/img/team-img/team-52G3BWD.jpg";

const teamMembers = [
  {
    id: 1,
    name: "A7med Hussien",
    role: "Full Stack Developer",
    department: "Frontend",
    image: image1,
    links: {
      fb: "https://www.facebook.com/",
      twit: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 2,
    name: "Ahmed Sherif",
    role: "Frontend Developer",
    department: "Frontend",
    image: PhotoDeveloperAhmed,
    links: {
      fb: "https://www.facebook.com/profile.php?id=100004491948645",
      twit: "https://x.com/AhmedSh33249042",
      linkedin: "https://www.linkedin.com/in/ahmed-sherif-096804264/",
    },
  },
  {
    id: 3,
    name: "Ebrahiem Gamal",
    role: "Frontend Developer",
    department: "Frontend",
    image: PhotoDeveloperFront,
    links: {
      fb: "https://www.facebook.com/",
      twit: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 4,
    name: "M'omen Mustafa",
    role: "Backend Developer",
    department: "Backend",
    image: PhotoDeveloperBack,
    links: {
      fb: "https://www.facebook.com/",
      twit: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 5,
    name: "Ebrahim Nassar",
    role: "Cyber Security Specialist",
    department: "Cyber",
    image: PhotoCyberTeam1,
    links: {
      fb: "https://www.facebook.com/",
      twit: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 6,
    name: "Ahmed Rdwan",
    role: "Cyber Security Specialist",
    department: "Cyber",
    image: PhotoCyberTeam2,
    links: {
      fb: "https://www.facebook.com/",
      twit: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 7,
    name: "Mohamed Emad",
    role: "Cyber Security Specialist",
    department: "Cyber",
    image: PhotoCyberTeam3,
    links: {
      fb: "https://www.facebook.com/",
      twit: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

const departments = ["Cyber", "Frontend", "Backend"];

const TeamSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="team" className="team-section section">
      <div className="container">
        <div className="courses__header container" data-aos="fade-up">
          <h2 className="courses__title">Our Team</h2>
          <p className="courses__subtitle">team members</p>
        </div>
        {departments.map((dept) => {
          const deptMembers = teamMembers.filter(
            (member) => member.department === dept
          );
          return (
            <div key={dept} className="team-section__department mb-5">
              <h3 className="team-section__department-title text-center mb-4">
                {dept} Team
              </h3>

              <div className="row justify-content-center">
                {deptMembers.map((member) => (
                  <div
                    key={member.id}
                    className="col-md-4 col-sm-6 mb-4 team-section__member-wrapper  team-section__member card bg-transparent"
                  >
                    {/* <div className="team-section__member card bg-transparent col-md-4 col-sm-6 mb-4"> */}
                    <div className="team-section__member-img card-img-top">
                      <img
                        // src="https://bit.ly/3kPjqKZ"
                        src={member.image}
                        alt={member.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="team-section__member-content card-body">
                      <h4 className="team-section__member-name card-title">
                        {member.name} <br />
                        <span className="team-section__member-role card-text">
                          {member.role}
                        </span>
                      </h4>
                      <div className="team-section__member-social">
                        <a href={member.links.fb} className="mx-2">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={member.links.twit} className="mx-2">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href={member.links.linkedin} className="mx-2">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
