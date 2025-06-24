import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    category: 'رئيس النادي',
    members: [
      { name: 'عبد الرحمان بن قايد علي', role: 'رئيس النادي', icon: '🎯' },
      { name: 'نوفل بن سالم ', role: 'نائب الرئيس', icon: '🤝' },
    ],
  },
  {
    category: 'الفريق الإعلامي',
    members: [
      { name: 'أيوب بلمباركي', role: 'المسؤول الإعلامي', icon: '📸' },
      { name: ' بشير قودري', role: 'نائب مسؤول الاعلام ', icon: '📢' },
    ],
  },
  {
    category: 'النشاطات',
    members: [
      { name: 'الياس بحرية ', role: ' مسؤول النشاطات', icon: '🎉' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 60 },
  }),
};

export default function TeamSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br text-right" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          فريق النادي
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          نعمل معًا لنصنع تأثيرًا حقيقيًا
        </motion.p>

        {team.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-20">
            <motion.div
              className="text-2xl font-bold text-primary mb-8 border-r-4 border-primary pr-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {group.category}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {group.members.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {/* Icon Bubble */}
                  <div className="absolute -top-6 -left-6 bg-indigo-100 text-indigo-700 w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
                    {member.icon}
                  </div>

                  <div className="text-right">
                    <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
