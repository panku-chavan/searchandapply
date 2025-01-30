import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProcessBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="bg-[#CCDDFF] py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-lg mx-auto">
        {/* Text Section */}
        <motion.div
          className="w-full md:px-0 px-5 md:pl-20"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-[#002E5B] mb-2">Start Your</h2>
          <h2 className="text-4xl font-bold text-[#002E5B] mb-2">
            Exciting Journey
          </h2>
          <h2 className="text-4xl font-bold text-[#002E5B] mb-2">
            With Our <span className="text-[#0A66C2]">Process.</span>
          </h2>
          <p className="text-[#676d76] text-lg mb-6 w-full">
            Tell us about your talents, experiences, and accomplishments. We'll
            take care of the rest.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {/* Button with Animation */}
            <motion.button
              className="bg-white text-[#0E68C3] px-6 py-3 rounded-md border-2 border-[#0E68C3] text-lg font-medium hover:shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Find My Dream Job"
            >
              Find My Dream Job
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center md:justify-start mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="bg5c1.png"
            alt="Illustration representing job opportunities"
            className="w-10/12 h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessBanner;
