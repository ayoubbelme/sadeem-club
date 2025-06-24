import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import background from '../../assets/images/a.jpg'; // your new background image

const Container = () => {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (textRef.current) observer.observe(textRef.current);

        return () => {
            if (textRef.current) observer.unobserve(textRef.current);
        };
    }, []);

    return (
        <div className="relative py-20 px-4 min-h-[calc(100vh-80px)] overflow-hidden">
      
          {/* Blurred Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 blur-sm"
            style={{ backgroundImage: `url(${background})`, zIndex: 0 }}
          ></div>
      
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
      
          {/* Foreground Content */}
          <div className="relative z-20 container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 max-w-6xl">
            {/* Text Section */}
            <div
              ref={textRef}
              className={`w-full lg:w-1/2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } text-white text-right`}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                نادي <span className="text-primary">سديم</span> يرحب بالجميع
              </h1>
              <p className="text-lg mb-6">
                نادي تربوي علمي ثقافي يسعى لتقديم برامج و فعاليات ممتعة و انشاء جو مميز
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100089022945764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-third text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition"
              >
                شاركنا التجربة
              </a>
            </div>
      
            {/* Logo Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={logo}
                alt="sadeem logo"
                className={`w-40 h-40 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full shadow-2xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            </div>
          </div>
        </div>
      );
      
};

export default Container;
