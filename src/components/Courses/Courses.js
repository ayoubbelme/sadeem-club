import React, { useState } from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileWord,
  faFilePowerpoint,
  faFileExcel,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  {
    icon: faFileWord,
    title: 'Word tutorial',
    color: '#2B579A',
    link: null,
  },
  {
    icon: faFilePowerpoint,
    title: 'PowerPoint tutorial',
    color: '#D24726',
    link: null,
  },
  {
    icon: faFileExcel,
    title: 'Excel tutorial',
    color: '#217346',
    link: null,
  },
  {
    icon: faPalette,
    title: 'Design Course',
    color: '#F28B02',
    link: null,
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleClick = (course) => {
    course.link ? window.location.href = course.link : setSelectedCourse(course);
  };

  const handleClose = () => setSelectedCourse(null);

  return (
    <>
      <section id="courses" className="py-24 px-4 bg-gradient-to-br ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          الدورات التي نقدمها
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {icons.map((course, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(course)}
              className="group relative h-48 rounded-2xl shadow-xl cursor-pointer overflow-hidden transform transition duration-300 hover:scale-105"
              style={{ backgroundColor: course.color }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <FontAwesomeIcon icon={course.icon} className="text-5xl mb-3 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold">{course.title}</h3>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-xl font-bold text-white">سجل الآن</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm px-4">
          <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md animate-fade-in relative text-center">
            <button onClick={handleClose} className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl">
              &times;
            </button>
            <FontAwesomeIcon
              icon={selectedCourse.icon}
              className="text-6xl mb-4"
              style={{ color: selectedCourse.color }}
            />
            <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
            <p className="text-red-500 text-lg font-semibold">
              {selectedCourse.link === null
                ? 'هذه الدورة غير متاحة حالياً'
                : 'الدورة متاحة الآن'}
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
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
