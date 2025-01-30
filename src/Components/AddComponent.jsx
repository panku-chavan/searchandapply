import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const AddComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="bg-[#EDF3FF] pb-20 md:rounded-bl-[30%] md:rounded-br-[10%]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        {/* Text Section */}
        <motion.div
          className="py-20 px-10 md:px-0 md:pl-20 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-[#f4a120] mb-4">
            The Smarter Way To Get
          </h2>
          <h2 className="text-4xl font-bold text-[#002E5B] mb-4">
            Your Dream Job
          </h2>
          <p className="text-gray-700 text-lg mb-6 md:w-3/4 w-full">
            SearchAndApply.io helps you 10x your chances of getting your dream job while increasing your lifetime salary by $200,000.
          </p>
          <div className="flex flex-wrap items-center gap-10">
            {/* Main Button with Animation */}
            <motion.button
              className="bg-[#F4A120] text-white px-6 py-3 rounded-lg md:rounded-3xl text-lg hover:shadow-lg transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find My Dream Job
            </motion.button>
            <div className="flex gap-5 items-center">
              {/* Play Button with Animation */}
              <motion.button
                className="bg-white p-5 rounded-full hover:shadow-lg transition-transform duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="text-blue-600" />
              </motion.button>
              <motion.span
                className="hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Watch How it Works
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img src="bgc.png" alt="Dream Job Visual" className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AddComponent;
