import React from "react";
import { motion } from "framer-motion";
import FaqItem from "../Components/FaqItem";

const Faqs = () => {
  const faqItems = [
    { question: "Do you apply on company websites and ATS systems?", answer: "Yes, we understand..." },
    { question: "Do you optimize job seeker's Indeed or LinkedIn?", answer: "Yes, we optimize..." },
    { question: "Do you connect the job seeker's LinkedIn profile?", answer: "Yes, we make connections..." },
    { question: "Do you have an initial consultation?", answer: "Yes, we have an initial consultation..." },
    { question: "Do you assist in reviewing and updating resumes?", answer: "Yes, we assist..." },
  ];

  // Framer Motion variants for the text (h1)
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Framer Motion variants for the image
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative md:h-[400px] w-full md:mb-[800px] z-10"> {/* Set z-index here */}
      {/* Background div */}
      <div className="absolute inset-0 bg-[#CCDDFF]"></div>

      {/* Gradient rotated div on top */}
      <div className="absolute -left-52 top-10 h-[600px] w-[90%] bg-gradient-to-l from-[#ECF2FE] via-[#ECF2FE] via-[20%] to-transparent rounded-3xl shadow-lg rotate-[25deg]"></div>

      {/* Text content */}
      <div className="relative p-6 text-black z-10">
        <div className="md:flex justify-start items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imgVariants}
            viewport={{ once: false }} // Animate when the image comes in or goes out of view
          >
            <img src="Group.png" className="md:w-[80%]" alt="faqs group" />
          </motion.div>
          <div>
            <motion.h1
              className="text-[#002E5B] text-3xl md:text-6xl font-bold mb-5 text-center md:text-start"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: false }} // Animate when the h1 comes in or goes out of view
            >
              You Have questions,
            </motion.h1>
            <motion.h1
              className="text-[#F4A120] text-3xl md:text-6xl font-bold text-center md:text-start"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: false }} // Animate when the h1 comes in or goes out of view
            >
              We have answers
            </motion.h1>
          </div>
        </div>
        <div className="mt-10">
          <motion.h1
            className="text-[#002E5B] text-3xl md:text-6xl font-bold mb-14 text-center"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: false }} // Animate when the h1 comes in or goes out of view
          >
            Frequently Asked <span className="text-[#F4A120]">Questions</span>
          </motion.h1>
          <div className="flex flex-wrap justify-center items-stretch gap-5">
            {faqItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
