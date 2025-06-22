import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Science",
    excerpt: "Artificial intelligence is transforming the world of science. Learn about its latest applications...",
    image: "https://source.unsplash.com/600x400/?technology,ai",
    date: "March 6, 2025",
  },
  {
    id: 2,
    title: "Exploring Ancient Cultures",
    excerpt: "A deep dive into the traditions and customs that shaped civilizations...",
    image: "https://source.unsplash.com/600x400/?history,culture",
    date: "March 4, 2025",
  },
  {
    id: 3,
    title: "Climate Change: What Can We Do?",
    excerpt: "Understanding climate change and how we can contribute to a sustainable future...",
    image: "https://source.unsplash.com/600x400/?nature,climate",
    date: "March 1, 2025",
  },
];

export default function BlogSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Blog & Articles
        </h2>

        {/* Featured Article */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative w-full mb-8 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-semibold">{articles[0].title}</h3>
            <p className="text-sm mb-2">{articles[0].excerpt}</p>
            <button className="flex items-center gap-2 text-sm underline">
              Read More <FaArrowRight />
            </button>
          </div>
        </motion.div>

        {/* Blog List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              onMouseEnter={() => setHovered(article.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.excerpt}</p>
                <p className="text-xs text-gray-500 mt-2">{article.date}</p>
                <button
                  className={`flex items-center gap-2 mt-2 text-sm font-medium transition-all ${
                    hovered === article.id ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  Read More <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
