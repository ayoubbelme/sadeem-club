import React, { useEffect, useRef, useState } from 'react'; // Import React and hooks
import './Container.css';
import logo from '../../assets/images/logo.jpg';

const Container = () => {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing after visibility
                }
            });
        });

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center py-12 bg-stone-300">
            <div className="container mx-auto md:mx-40 flex flex-col lg:flex-row items-center lg:space-x-10 px-6 ">
                
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <img
                        src={logo}
                        alt="sadeem picture"
                        className="w-40 h-40 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full shadow-lg logo-animation"
                    />
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col items-end">
                    <h1 className={"text-4xl font-bold text-gray-800 mb-4 "} ref={textRef}>
                        نادي <span className='text-primary'>سديم</span> يرحب بالجميع
                    </h1>
                    <p className={`text-gray-600 text-lg mb-6 text-right ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
                        نادي تربوي علمي ثقافي يسعى لتقديم برامج و فعاليات ممتعة و انشاء جو مميز
                    </p>
                    <a
                        href="https://www.facebook.com/profile.php?id=100089022945764"
                        target='_blank'
                        className="inline-block bg-third text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition"
                    >
                        شاركنا التجربة
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Container;
