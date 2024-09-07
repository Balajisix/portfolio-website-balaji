import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; // Importing an external link icon

const achievementsData = [
  {
    title: "Web Design winner - 2022",
    description:
      "Awarded with First prize for outstanding performance in developing innovative web design at National Symposium around the pool of 40 participants",
    date: "OCT 2022",
    link: "https://drive.google.com/file/d/1XZXBNTb9F0QFjFN5tFxpEtiroeukQdA6/view?usp=sharing",
  },
  {
    title: "Internship Certification",
    description:
      "Collobarated with a team of 4 members, led a development on interactive quiz application for students which is based on healthcare. This project is build for Machenn Innovations Pvt Ltd",
    date: "MAY 2023",
    link: "https://drive.google.com/file/d/1cqSMatR9Oq-pVUyMKg260-w6n-DJyYrF/view?usp=sharing",
  },
  {
    title: "Technovation",
    description:
      "Awarded with Third prize for giving the best idea solution from the given problem statement based on canteen rush control at KPR College of Arts, Sciences and Research",
    date: "March 2022",
    link: "https://drive.google.com/file/d/1bC8fTP38_ovEHfvsOa23OzMhlv3szziV/view?usp=sharing",
  },
  {
    title: "Paper Presentation",
    description:
      "Secured with Second prize in Paper Presentation competition. The idea of the presentation is about Artificial Intelligence and Machine Learning, explained it's concept and future scope AI & ML.",
    date: "August 2022",
    link: "https://drive.google.com/file/d/1PbN8_7nYYKtnLcyiOxPrrPjIz7zhxaX3/view?usp=sharing",
  },
];

const Achievements = () => {
  return (
    <div id="achievements" className="bg-gray-950 py-24 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Achievements
        </motion.h2>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 p-8 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Background Animation Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-10 group-hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                {achievement.title}
              </h3>
              <p className="text-gray-300 relative z-10">
                {achievement.description}
              </p>

              {/* Date Badge */}
              <div className="relative z-10 mt-4">
                <span className="inline-block px-4 py-1 bg-blue-500 text-gray-100 rounded-full text-sm font-semibold shadow-md">
                  {achievement.date}
                </span>
              </div>

              {/* Certificate Credential Button */}
              <div className="relative z-10 mt-4">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-300 text-gray-900 font-bold rounded-full hover:bg-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Show Credential
                  <FiExternalLink className="text-lg" /> {/* External link icon */}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
