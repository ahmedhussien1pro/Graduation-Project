import React, { useEffect } from "react";
import "./services.css";
import Aos from "aos";

const ServiceCard = ({ iconClass, title, description, path, color }) => {
  // Aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
      <div
        className="services__card"
        style={{ "--clr": color }}
        data-aos="zoom-in"
      >
        <div className="services__card__content">
          <div className="services__card__icon">
            <i className={iconClass}></i>
          </div>
          <div className="services__card__text">
            <h3 className="services__card__title">{title}</h3>
            <p className="services__card__description">{description}</p>
            <a href="/home" className="services__card__link">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      iconClass: "fa fa-shield-alt",
      title: "Cybersecurity Fundamentals",
      description: "Learn key concepts and best practices for cybersecurity.",
      path: "/cybersecurity-fundamentals",
      color: "#007BFF",
    },
    {
      iconClass: "fa fa-network-wired",
      title: "Network Security",
      description: "Master techniques to protect and monitor networks.",
      path: "/network-security",
      color: "#28a745",
    },
    {
      iconClass: "fa fa-exclamation-triangle",
      title: "Threat Detection & Response",
      description: "Identify and counter security threats effectively.",
      path: "/threat-detection-response",
      color: "#dc3545",
    },
    {
      iconClass: "fa fa-user-secret", // Ethical Hacking & Pen Testing
      title: "Ethical Hacking & Pen Testing",
      description: "Practice ethical hacking to find vulnerabilities.",
      path: "/ethical-hacking-penetration-testing",
      color: "#ffc107", // Yellow
    },
    {
      iconClass: "fa fa-cogs", // Incident Response & Management
      title: "Incident Response & Management",
      description: "Manage cybersecurity incidents with proven strategies.",
      path: "/incident-response-management",
      color: "#17a2b8", // Teal
    },
    {
      iconClass: "fa fa-cloud", // Cloud Security
      title: "Cloud Security",
      description: "Secure cloud environments with best practices.",
      path: "/cloud-security",
      color: "#6f42c1", // Purple
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="courses__header container" data-aos="fade-up">
          <h2 className="courses__title">Learning Pathways </h2>
          <p className="courses__subtitle">Our Learning Pathways</p>
        </div>
        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
