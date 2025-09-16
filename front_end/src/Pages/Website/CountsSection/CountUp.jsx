import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ start = 0, end, duration = 1, ...props }) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef(null);
  const wasVisible = useRef(false);
  const requestRef = useRef(null);
    useEffect(() => {
      const animateCount = () => {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
          setCount(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            requestRef.current = window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !wasVisible.current) {
            setCount(start); 
            animateCount();
            wasVisible.current = true;
          } else if (!entry.isIntersecting) {
            wasVisible.current = false;
            if (requestRef.current) {
              window.cancelAnimationFrame(requestRef.current);
            }
          }
        });
      },
      { threshold: 0.5 } 
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, [start, end, duration]);

  return (
    <span ref={elementRef} {...props}>
      {count}
    </span>
  );
};

export default CountUp;
