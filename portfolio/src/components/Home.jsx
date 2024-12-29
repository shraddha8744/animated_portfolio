import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import my from "../assets/my3.jpg";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-home flex justify-between gap-10 items-center h-[100vh] py-0 px-[10%] hero relative overflow-hidden text-white bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7]">
        <div className="max-w-md">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center text-white"
          >
            Hello, I'm Shraddha Adlinge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-lg mt-4 text-white"
          >
            Hi, I’m Shraddha Hanmant Adlinge, a BCA student and passionate
            developer. I specialize in building user-friendly applications using
            MERN Stack.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center space-x-4 mt-6"
          >
            <button
              onClick={() => scrollToSection("footer")}
              className="bg-[#61dafb]  text-white py-2 px-6 rounded-full hover:bg-transparent border border-white font-semibold transition duration-300"
            >
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className=" border border-white text-white py-2 px-6 hover:bg-[#61dafb]  font-semibold rounded-full transition duration-300"
            >
              View Project
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center space-x-4 mt-6"
          >
            <a
              href="#"
              className="text-white hover:text-[#2c3e50] text-3xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shraddha-adlinge-61593b300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-white hover:text-[#61dafb] text-3xl transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#61dafb] text-3xl transition duration-300"
            >
              <FaTelegram />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#61dafb] text-3xl transition duration-300"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </div>
        <div className="hidden md:block">
          <motion.img
            src={my}
            alt="my-image"
            className="w-[70%] h-auto rounded-full ml-20 mb-5 cursor-pointer border-4 border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
