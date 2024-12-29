import React from "react";
import { motion } from "framer-motion";
import gym from "../assets/gym.jpeg";
import ecom from "../assets/ecom.jpeg";
import pizza from "../assets/pizza.jpeg";
import book from "../assets/book.jpeg";
import youtube from "../assets/youtube.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing my skills and projects.",
      image:
        "https://cdn.shortpixel.ai/spai/w_919+q_lossless+ret_img+to_webp/websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2022/02/real-estate-social-img.jpg", // Replace with actual image URL
      github: "https://github.com/your-portfolio", // Replace with actual link
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description:
        "An ecommerce website built with React, featuring a dynamic cart and checkout process.",
      image: ecom, // Replace with actual image URL
      github: "https://github.com/shraddha8744/simple_ecom_web.git", // Replace with actual link
    },
    {
      id: 3,
      title: "GYM Website",
      description:
        "A full-stack gym management platform using MERN with complete user authentication.",
      image: gym,
      github: "https://github.com/shraddha8744/gym-website.git",
    },
    {
      id: 4,
      title: "Online Pizza Delivery",
      description: "A pizza ordering application built with the MERN stack",
      image: pizza,
      github: "https://github.com/online-pizza",
    },
    {
      id: 5,
      title: "YouTube Clone",
      description:
        "A React-based YouTube clone featuring video playback, channel pages, and search functionality.",
      image: youtube,
      github: "https://github.com/shraddha8744/youtube_clone2.git",
    },
    {
      id: 6,
      title: "Book Store Website",
      description:
        "A full-stack Book Store using MERN with complete user authentication.",
      image: book,
      github: "https://github.com/shraddha8744/bookstore.git",
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffd700] font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
