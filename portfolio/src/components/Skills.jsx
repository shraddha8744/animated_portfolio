import React from "react";
import { FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%", color: "#e44d26", icon: <FaHtml5 /> },
    { name: "CSS", level: "80%", color: "#1572b6", icon: <FaCss3 /> },
    {
      name: "JavaScript",
      level: "75%",
      color: "#f7df1e",
      icon: <FaJsSquare />,
    },
    { name: "Node.js", level: "70%", color: "#68a063", icon: <FaNodeJs /> },
    { name: "React.js", level: "80%", color: "#61dafb", icon: <FaReact /> },
  ];

  return (
    <section
      id="skills"
      className="skills-section py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="text-lg mt-4">
            I am a passionate web developer with a solid understanding of
            frontend and backend technologies. Over the years, I have honed my
            skills in building interactive and responsive web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-600 h-4 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: skill.level,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-2 text-right">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-8 rounded-lg shadow-lg text-white"
        >
          <h3 className="text-3xl font-bold mb-6 text-[#f39c12]">
            Additional Skills
          </h3>
          <ul className="list-none space-y-4">
            <li className="text-lg">
              <strong className="text-[#ffd700]">Frontend Development:</strong>{" "}
              HTML, CSS, JavaScript, React
            </li>
            <li className="text-lg">
              <strong className="text-[#ffd700]">Backend Development:</strong>{" "}
              Node.js, Express.js
            </li>
            <li className="text-lg">
              <strong className="text-[#ffd700]">Database Management:</strong>{" "}
              MongoDB, MySQL
            </li>
            <li className="text-lg">
              <strong className="text-[#ffd700]">Version Control:</strong> Git,
              GitHub
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
