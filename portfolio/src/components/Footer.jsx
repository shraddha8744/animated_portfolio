import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-8 px-4"
      id="footer"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto text-center"
      >
        <motion.h3
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl font-bold mb-4"
        >
          Let's Connect
        </motion.h3>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-2 text-lg"
        >
          <p>
            Email:{" "}
            <a
              href="mailto:adlingeshraddha@gmail.com"
              className="text-[#ffd9b3] hover:underline"
            >
              adlingeshraddha@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919370916546"
              className="text-[#ffd9b3] hover:underline"
            >
              +91 9370916546
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center space-x-6 mt-6"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 text-3xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 text-3xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 text-3xl transition duration-300"
          >
            <FaTwitter />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 text-sm text-gray-500"
        >
          &copy; {new Date().getFullYear()} Shraddha Adlinge. All rights
          reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
