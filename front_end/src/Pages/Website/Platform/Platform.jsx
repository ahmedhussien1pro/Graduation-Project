import React, { useState, useEffect } from "react";
import "./platform.css";
import FaqSection0 from "../assets/img/core-img/Faq-Section0.jpg";
import FaqSection1 from "../assets/img/core-img/Faq-Section1.jpg";
import FaqSection2 from "../assets/img/core-img/Faq-Section2.jpg";
import FaqSection3 from "../assets/img/core-img/Faq-Section3.jpg";
import FaqSection4 from "../assets/img/core-img/Faq-Section4.jpg";
import Aos from "aos";
export default function Platform() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const faqData = [
    {
      question: "What are the objectives of this Platform?",
      answer:
        "Our platform is designed to provide users with comprehensive knowledge in cybersecurity, offering practical exercises and tutorials for real-world skills development.",
    },
    {
      question: "What are the best features and services we deliver?",
      answer:
        "We deliver hands-on cybersecurity training, LAPS implementation guidance, interactive exercises, and tailored content for users of all levels.",
    },
    {
      question: "Why is this Platform important to me?",
      answer:
        "This platform is crucial for anyone looking to build a career in cybersecurity or strengthen their knowledge in protecting systems and networks from modern threats.",
    },
    {
      question: "What are the most common cyber threats?",
      answer:
        "Common threats include phishing, ransomware, malware, social engineering, and denial-of-service attacks.",
    },
  ];

  const faqImages = [
    FaqSection0,
    FaqSection1,
    FaqSection2,
    FaqSection3,
    FaqSection4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % faqImages.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="our-faqs home-our-faqs">
      <div className="container">
        <div className="courses__header container" data-aos="fade-up">
        <h2 className="courses__title">Platform FAQ</h2>
        <p className="courses__subtitle">questions answered clearly</p>
      </div>

        <div className="row">
          {/* Left Image Section */}
          <div className="col-lg-6" data-aos="fade-right"  data-aos-delay="100">
            <div className="faq-image-container text-center">
              <img
                src={faqImages[imageIndex]}
                alt="FAQ Section"
                className="faq-image img-fluid"
              />
            </div>
          </div>

          {/* Right FAQ Section */}
          <div className="col-lg-6"  data-aos="fade-left">
            <div className="faq-section">
              <div className="faq-accordion">
                {faqData.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
