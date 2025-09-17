import React, { useState, useEffect, useRef } from "react";

const Content = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window.IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          rootMargin: "0px 0px -50% 0px",
        }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }
  }, []);

  return (
    <div
      ref={elementRef}
      className={`section-content ${isVisible ? "is-visible" : ""}`.trim()}
    >
      {children}
    </div>
  );
};

export default Content;
