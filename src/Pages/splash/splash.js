import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out effect before navigating
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => navigate('/home'), 1000); // Navigate after animation
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div
      className={`flex items-center justify-center h-screen transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary animate-fadeIn">
          Welcome!
        </h1>
        <p className="text-lg md:text-xl delay-500">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default SplashPage;
