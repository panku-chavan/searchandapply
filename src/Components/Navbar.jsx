import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "process", label: "Process", path: "/process" },
    { id: "faqs", label: "FAQs", path: "/faqs" },
  ];

  const buttonStyles =
    "px-4 py-2 font-medium rounded transition";

  return (
    <nav className="bg-[#EDF3FF] text-black font-medium py-4 px-8 flex justify-between items-center relative z-10">
      {/* Logo */}
      <h1 className="text-2xl text-blue-900 font-bold">
        <i>SearchAndApply.io</i>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        {menuItems.map((menu) => (
          <NavLink
            key={menu.id}
            to={menu.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 font-semibold"
                : "hover:text-blue-900 transition duration-300"
            }
          >
            {menu.label}
          </NavLink>
        ))}
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-6">
        <button className={`${buttonStyles} bg-[#EDF3FF] text-blue-900 hover:bg-blue-100`}>
          Login
        </button>
        <button className={`${buttonStyles} bg-blue-900 text-white shadow-md hover:bg-blue-800 px-8`}>
          Sign Up
        </button>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-blue-900 focus:outline-none"
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-[#EDF3FF] shadow-md flex flex-col items-center space-y-4 py-4 z-50"
          >
            {menuItems.map((menu) => (
              <NavLink
                key={menu.id}
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-900 font-semibold"
                    : "hover:text-blue-900 transition duration-200"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.label}
              </NavLink>
            ))}
            <div className="space-y-4">
              <button className={`${buttonStyles} bg-[#EDF3FF] text-blue-900 hover:bg-blue-100`}>
                Login
              </button>
              <button className={`${buttonStyles} bg-blue-900 text-white shadow-md hover:bg-blue-800 px-8`}>
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
