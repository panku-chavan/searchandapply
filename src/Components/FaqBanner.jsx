import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import p1 from "../assets/faqimg/person1.png";
import p2 from "../assets/faqimg/card1.png";
import p3 from "../assets/faqimg/card2.png";

const FaqBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full md:mt-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-[#CCDDFF] md:h-[536px] flex flex-col md:flex-row items-center md:items-start"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-[30%] flex justify-center md:justify-start"
        >
          <img
            src={p1}
            className="md:absolute md:-top-16 md:left-5 h-[400px] md:h-[600px]"
            alt="Person Illustration"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-[70%] text-center px-6 py-8 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#002E5B] text-4xl md:text-5xl font-bold leading-snug"
          >
            Complete the last step by filling out the{" "}
            <span className="text-[#F4A120]">in-take form</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-[#002E5B] w-full md:w-[70%] mx-auto"
          >
            We understand how time-consuming and tedious it is to find work.
            That is why we have developed services to assist you at every
            step of the way.
          </motion.p>

          {/* Stats Section */}
          <div className="mt-6 md:mt-10 flex justify-center items-center gap-8">
            {[
              { number: "3K+", text: "Users" },
              { number: "500K+", text: "Jobs" },
              { number: "100+", text: "Partners" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                <h1 className="text-[#002E5B] text-3xl md:text-4xl font-bold leading-snug">
                  {item.number}
                </h1>
                <p className="mt-4 text-lg text-[#002E5B]">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Cards Section */}
          <motion.div
            className="flex justify-between items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.img
              src={p2}
              alt="Card 1"
              className="hidden md:block"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.img
              src={p3}
              alt="Card 2"
              className="hidden md:block relative -top-10"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FaqBanner;
