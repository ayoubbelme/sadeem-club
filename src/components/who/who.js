import React, { useEffect, useRef, useState } from 'react'; // Make sure to import these hooks
import './who.css';

const Who = () => {
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
        <div className="flex flex-col md:flex-row items-center justify-between p-5  mt-4" id="who">
            <div className={`order-2 md:order-1 md:w-1/2 md:mr-5 text-right mt-5 md:mt-0 text-gray-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} ref={textRef}>
                <p className="text-lg leading-relaxed tracking-wide shadow-sm">
                    نادي علمي تربوي ثقافي تأسس في نوفمبر 2022 تابع للجنة التربية و التعليم و التكوين لجمعية كافل اليتيم الوطنية المكتب الولائي بالمدية تأسس على يد نخبة من الطلبة الجامعيين الناشطين في المجال العلمي ينشط على مستوى مركز التسلية العلمية بالمدية 
                </p>
                <p className="text-lg leading-relaxed text-center tracking-wide shadow-sm">
                    طريق الجزائر-بلدية المدية
                </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:w-1/2 mt-5 md:mt-0">
                <div className="flex items-center justify-center w-48 h-48 bg-primary text-white text-3xl font-bold " id="who">
                    !من نحن؟
                </div>
            </div>
        </div>
    );
};

export default Who;
