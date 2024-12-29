import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Skills", icon: <FaTools /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg relative z-50">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-[#61dafb]">MyPortfolio</div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="text-[24px] cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div
        className={`flex flex-col md:flex-row gap-4 transition-transform ease-in-out absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent shadow-md md:shadow-none ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        {navLinks.map((link, index) => (
          <motion.a
            href={`#${link.name.toLowerCase()}`} // Updated href to match section IDs
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 justify-center bg-transparent rounded-[25px] overflow-hidden text-[16px] font-semibold cursor-pointer w-[140px] h-[40px] shadow-md hover:bg-[#61dafb] hover:text-gray-900 mx-auto md:mx-0"
          >
            <span className="w-[40px] h-[100%] flex items-center justify-center bg-[#333333] text-[#61dafb] rounded-l-[25px]">
              {link.icon}
            </span>
            <span className="flex-1 text-center">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
