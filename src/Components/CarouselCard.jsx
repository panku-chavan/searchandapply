import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion'; // Import necessary hooks from Framer Motion

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger animation once when it enters the viewport
    threshold: 0.2,    // 20% of the element must be visible before triggering
  });

  return (
    <motion.div
      className="bg-white md:w-[500px] py-4 rounded-lg shadow-md"
      ref={inViewRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-start items-start cursor-pointer" onClick={toggleCollapse}>
        <button className={`text-2xl font-bold pl-3 pr-3 ${isOpen ? 'text-[#F4A120]' : 'text-[#002E5B]'}`}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
        <h2 className="text-lg md:w-[450px] text-left font-semibold px-2">{question}</h2>
      </div>
      <motion.div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        initial={{ opacity: 0 }}
        animate={isOpen && inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-4 pl-14 text-[#7A91A8]">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const Faqs = () => {
  const faqItems = [
    {
      question: 'Do you apply on company websites and ATS systems?',
      answer: 'Yes, we understand that applying for jobs can be time-consuming. When applying for jobs, we will apply on the company website, usually an "applicant tracking system" (ATS).',
    },
    {
      question: "Do you optimize job seeker's Indeed or LinkedIn before applying for jobs?",
      answer: "Yes, we optimize job seekers' profiles to increase their chances of getting noticed by employers.",
    },
    {
      question: "Do you connect the job seeker's LinkedIn profile with the direct manager for the job?",
      answer: "Yes, we make connections with direct managers to facilitate better job matches.",
    },
    {
      question: 'Do you have an initial consultation before beginning the job search?',
      answer: "Yes, we have an initial consultation to understand the job seeker's needs and preferences.",
    },
    {
      question: 'Do you assist in reviewing and updating resumes?',
      answer: 'Yes, we assist in reviewing and updating resumes to make them more attractive to employers.',
    },
  ];

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative md:h-[400px] w-full md:mb-[800px]" ref={inViewRef}>
      {/* Background div */}
      <div className="absolute inset-0 bg-[#CCDDFF]"></div>

      {/* Gradient rotated div on top */}
      <div className="absolute -left-52 top-10 h-[600px] w-[90%] bg-gradient-to-l from-[#ECF2FE] via-[#ECF2FE] via-[20%] to-transparent rounded-3xl shadow-lg rotate-[25deg]"></div>

      {/* Text content */}
      <motion.div
        className="relative p-6 text-black z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="md:flex justify-start items-center">
          <motion.div
            className="md:w-[80%]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img src="Group.png" alt="faqs group" />
          </motion.div>
          <div>
            <motion.h1
              className="text-[#002E5B] text-3xl md:text-6xl font-bold mb-5 text-center md:text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              You Have questions,
            </motion.h1>
            <motion.h1
              className="text-[#F4A120] text-3xl md:text-6xl font-bold text-center md:text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              We have answers
            </motion.h1>
          </div>
        </div>
        <div className="mt-10">
          <motion.h1
            className="text-[#002E5B] text-3xl md:text-6xl font-bold mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Frequently Asked <span className="text-[#F4A120]">Questions</span>
          </motion.h1>
          <div className="flex flex-wrap justify-center items-stretch gap-5">
            {faqItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Faqs;
