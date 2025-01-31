import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import bg from '../../public/bg.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "process", label: "Process", path: "/process" },
    { id: "faqs", label: "FAQs", path: "/faqs" },
  ];

  return (
    <footer className="bg-[#EDF3FF] text-white py-8 relative" style={{marginTop:"200px"}}>
      {/* Positioned Div */}
      <div style={{ backgroundImage: `url(${bg})` }} className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-y-[-50%]  bg-cover w-[90%] md:w-[70%] p-10 md:px-20 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-10">
          If your resume has not been updated in a while, let us update it
          first.
        </h3>
        <form className="flex justify-center items-center mt-5">
          <div className="relative w-96">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 pr-16 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 w-full"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#0A66C2] text-white px-4 py-1 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center items-center mt-36 md:mt-28">
        <nav className="bg-[#EDF3FF] border-b-2 w-[85%] md:w-[70%] text-black font-medium flex flex-wrap justify-between items-center relative pb-10 md:pb-20">
          {/* Logo */}
          <h1 className="text-lg text-black font-bold">SearchAndApply.io</h1>

          {/* Desktop Menu */}
          <div className="flex space-x-5 md:space-x-10">
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
          </div>
        </nav>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-center items-center mt-2">
        <nav className="bg-[#EDF3FF] w-[90%] md:w-[70%] text-black flex flex-wrap justify-between items-center">
          {/* Copyright */}
          <p className="text-black">
            Copyright, SearchAndApply.io {new Date().getFullYear()} All Rights
            Reserved
          </p>

          {/* Social Media */}
          <div className="flex justify-center items-center gap-3">
            <span>Follow Us:</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <FaTwitter />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
