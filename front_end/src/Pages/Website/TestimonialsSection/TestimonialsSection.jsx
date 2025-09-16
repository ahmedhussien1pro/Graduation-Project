import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import './TestimonialsSection.css';
import testImage1 from '../assets/img/test-img/test1.jpg';
import testImage2 from '../assets/img/test-img/test2.jpg';
import testImage3 from '../assets/img/test-img/test3.jpg';

SwiperCore.use([Autoplay, Pagination]);

const testimonialsData = [
  {
    image: testImage1,
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    stars: 5,
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    image: testImage2,
    name: 'Sara Wilsson',
    role: 'Designer',
    stars: 5,
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    image: testImage3,
    name: 'Jena Karlis',
    role: 'Store Owner',
    stars: 5,
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    image: testImage1,
    name: 'Matt Brandon',
    role: 'Freelancer',
    stars: 5,
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    image: testImage2,
    name: 'John Larson',
    role: 'Entrepreneur',
    stars: 5,
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
];

const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: { delay: 5000 },
  slidesPerView: 'auto',
  pagination: { clickable: true },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Header */}
      <div className="courses__header container" data-aos="fade-up">
        <h2 className="courses__title">Testimonials</h2>
        <p className="courses__subtitle">What are they saying</p>
      </div>

      <div
        className="testimonials__container container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper {...swiperConfig} className="testimonials__slider">
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonials__slide">
              <div className="testimonials__wrap">
                <div className="testimonials__item">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonials__img"
                  />
                  <h3 className="testimonials__name">{testimonial.name}</h3>
                  <h4 className="testimonials__role">{testimonial.role}</h4>
                  <div className="testimonials__stars">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star testimonials__star"
                      ></i>
                    ))}
                  </div>
                  <p className="testimonials__text">
                    <i className="fas fa-quote-left testimonials__quote-icon testimonials__quote-icon--left"></i>
                    <span>{testimonial.text}</span>
                    <i className="fas fa-quote-right testimonials__quote-icon testimonials__quote-icon--right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
