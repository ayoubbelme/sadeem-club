import React, { useEffect, useRef, useState } from 'react';

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

export default function TeamSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br text-right">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2"> فريق النادي</h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          نعمل معًا لنصنع تأثيرًا حقيقيًا 
        </p>

        {team.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-16">
            {/* Category Title */}
            <div
              className={`text-2xl font-bold text-primary mb-8 border-r-4 border-primary pr-4 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {group.category}
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {group.members.map((member, index) => (
                <div
                  key={index}
                  className={`relative bg-white border border-gray-200 rounded-xl p-6 shadow-md transition duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-2 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon Bubble */}
                  <div className="absolute -top-6 -left-6 bg-indigo-100 text-indigo-700 w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg transform group-hover:scale-110 transition">
                    {member.icon}
                  </div>

                  <div className="text-right">
                    <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
