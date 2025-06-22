import React from "react";
import './Gallery.css';


const photos = [
  "/assets/images/photo1.jfif",
  "/assets/images/photo2.jfif",
  "/assets/images/photo3.jfif",
  "/assets/images/photo4.jfif",
  "/assets/images/photo5.jfif",
  "/assets/images/photo6.jfif",
  "/assets/images/photo7.jfif",
  "/assets/images/photo8.jpg",
  "/assets/images/photo9.jpg",
  "/assets/images/photo10.jpg",
  "/assets/images/photo11.jpg",
  "/assets/images/photo12.jpg",
  "/assets/images/photo13.jpg",
  "/assets/images/photo14.jpg",
  "/assets/images/photo15.jpg",
  "/assets/images/photo16.jpg",
  
  
];

const duplicatedPhotos = [...photos, ...photos];

export default function PhotoSlider() {
  return (
    <section className="py-20 bg-gradient-to-br overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        ✨ ذكرياتنا
      </h2>

      <div className="relative perspective-1000">
        <div className="flex w-[200%] animate-slide gap-8 px-4">
          {duplicatedPhotos.map((src, index) => (
            <div
              key={index}
              className="group relative w-[200px] h-[160px] md:w-[450px] md:h-[300px] lg:w-[420px] lg:h-[240px] flex-shrink-0 rounded-3xl overflow-hidden transform hover:rotate-[-1.5deg] transition duration-500 shadow-2xl"
            >
              {/* Blurred background glow */}
              <div
                className="absolute inset-0 scale-110 blur-xl bg-cover bg-center z-0 opacity-30"
                style={{ backgroundImage: `url(${src})` }}
              ></div>

              {/* Actual image */}
              <img
                src={src}
                alt={`Slide ${index}`}
                className="relative z-10 w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
              />

              {/* Caption on hover */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <p className="text-white text-lg font-medium">sadeem club</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}