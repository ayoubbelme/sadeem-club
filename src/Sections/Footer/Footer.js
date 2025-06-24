import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative bg-black/80 text-white py-10 mt-20 backdrop-blur-sm border-t border-gray-600/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-fifth via-white to-primary rounded-full" />

      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="text-sm sm:text-base font-light text-gray-300">
          Designed & Developed by{" "}
          <a
            href="https://www.instagram.com/ay.oub514/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fifth hover:text-gray-400 font-semibold transition duration-300 border-b border-transparent hover:border-fifth"
          >
            Ayoub Blm
          </a>
        </p>

        <p className="text-xs text-gray-400 tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">SADEEM CLUB</span> — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
