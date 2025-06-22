import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const events = [
  { id: 1, title: "حملة أرشدني", date: "", description: "" },
  
];

const Activities = () => {
  return (
    <div className=" py-12" id="Activities">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          النشاطات القادمة
        </h2>
        
        <div className="relative border-l-4 border-gray-300 pl-6 ">
          {events.map((event, index) => (
            <div key={event.id} className="mb-8 relative">
              {/* Timeline Circle */}
              <div className="absolute left-[-1.3rem] top-2 bg-white rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-primary text-xl" />
              </div>

              {/* Event Content */}
              <div className="p-6 rounded-lg shadow-md bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>

              {/* Connector Line */}
              {index !== events.length - 1 && (
                <div className="absolute left-[-0.5rem] top-8 h-full w-1 "></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
