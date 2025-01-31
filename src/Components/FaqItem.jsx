import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Framer Motion variants for the FAQ item
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-white md:w-[500px] py-4 rounded-lg shadow-md"
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      viewport={{ once: false }} // Trigger animation both when it enters and leaves the viewport
    >
      <div className="flex justify-start items-start cursor-pointer" onClick={toggleCollapse}>
        <button className={`text-2xl font-bold pl-3 pr-3 ${isOpen ? 'text-[#F4A120]' : 'text-[#002E5B]'}`}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
        <h2 className="text-lg md:w-[450px] text-left font-semibold px-2">{question}</h2>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="mt-4 pl-14 text-[#7A91A8]">{answer}</p>
      </div>
    </motion.div>
  );
};

export default FaqItem;
