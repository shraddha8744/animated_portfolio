import React from "react";
import { motion } from "framer-motion";
import my from "../assets/my.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="about-section flex flex-col md:flex-row justify-between items-center py-[100px] px-[10%]  bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] text-white h-[100vh] relative overflow-hidden"
    >
      {/* About Text */}
      <div className="about-text max-w-[600px] text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold mb-6 text-[#333]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am passionate web developer with a strong intrest in building modern
          websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4"
        >
          <p className="text-lg mb-4 ">
            <strong className="text-gray-600 text-2xl">Skills:</strong> Html,
            CSS, JavaScript, React, Node.js, Express.js, MongoDB
          </p>
          <p className="text-lg mb-6">
            <strong className="text-gray-600 text-2xl">Experience:</strong> 1+
            years of web development, building dynamic websites
          </p>
          <div className="about-social flex justify-center md:justify-start space-x-4 text-2xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#333] transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0072b1] transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0088cc] transition duration-300"
            >
              <FaTelegram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* About Image */}
      <div className="about-image max-w-[500px] mt-8 md:mt-0">
        <motion.img
          src={my}
          alt="My portrait"
          className="rounded-full shadow-lg border-4 border-white "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
      </div>
    </section>
  );
};

export default About;
