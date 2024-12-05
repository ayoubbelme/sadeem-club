import React, { useState } from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord, faFilePowerpoint, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const icons = [
    { 
        icon: faFileWord, 
        alt: 'Word Course',
        title: 'Word tutorial',
        description: 'غير متاحة حاليا',
        color: '#2B579A', // Word Blue
    },
    { 
        icon: faFilePowerpoint, 
        alt: 'PowerPoint Course',
        title: 'PowerPoint tutorial',
        description: 'غير متاحة حاليا',
        color: '#D24726', // PowerPoint Orange
    },
    { 
        icon: faFileExcel, 
        alt: 'Excel Course',
        title: 'Excel tutorial',
        description: 'غير متاحة حاليا',
        color: '#217346', // Excel Green
    },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleModalOpen = (course) => {
        setSelectedCourse(course);
    };

    const handleModalClose = () => {
        setSelectedCourse(null);
    };

    return (
        <>
            <h1 className="text-4xl font-semibold text-gray-800 mb-6 mt-28 text-center" id="courses">
                الدورات التي نقدمها
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-10 p-6 md:mx-60 mx-50">
                {icons.map((iconData, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg h-24 sm:h-56 md:h-48 lg:h-20 cursor-pointer flex items-center justify-center"
                        onClick={() => handleModalOpen(iconData)}
                        style={{ backgroundColor: iconData.color, color: 'white' }}
                    >
                        <FontAwesomeIcon 
                            icon={iconData.icon} 
                            className="text-6xl group-hover:scale-105 transition-transform duration-300 bg-transparent"
                        />
                        <button
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-white font-semibold text-2xl"
                        >
                            سجل الان
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-3/4 md:w-1/2 text-center relative">
                        <button
                            onClick={handleModalClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4 bg-transparent">{selectedCourse.title}</h2>
                        <FontAwesomeIcon 
                            icon={selectedCourse.icon} 
                            className="text-6xl mb-4 bg-transparent" 
                            style={{ color: selectedCourse.color }}
                        />
                        <p className="text-red-400 font-extrabold text-xl bg-transparent">{selectedCourse.description}</p>
                        <button
                            onClick={handleModalClose}
                            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-third transition"
                        >
                            إغلاق
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Courses;