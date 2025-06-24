import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "حملة أرشدني",
    date: "2025-?-?",
    description: "حملة توعوية للناجحين في شهادة البكالوريا حول الحياة الجامعية و كيفية اختيار التخصص الجامعي.",
  },

];

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Activities = () => {
  return (
    <section id="Activities" className="py-24 px-6 bg-gradient-to-br ">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          النشاطات القادمة
        </motion.h2>

        {events.length > 0 ? (
          <div className="relative border-r-4 border-primary border-opacity-40 pr-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="mb-12 relative"
              >
                {/* Icon Bubble */}
                <div className="absolute -right-6 top-4 bg-white rounded-full p-1 shadow">
                  <FaCheckCircle className="text-primary text-xl" />
                </div>

                {/* Content Card */}
                <div className="bg-white shadow-lg p-6 rounded-xl text-right">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <p className="text-sm text-primary mt-1">{event.date}</p>
                  <p className="text-gray-600 mt-2 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            لا توجد نشاطات قادمة حالياً.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Activities;
