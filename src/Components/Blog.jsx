import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  const cards = [
    {
      icon: <GrNotes aria-label="Notes Icon" />,
      text: "Are you ready to leave your job?",
      bg: "bg-[#0A66C2]",
    },
    {
      icon: <SlCalender aria-label="Calendar Icon" />,
      text: "Are you looking for a new and exciting position but don’t have time?",
      bg: "bg-[#F48C06]",
    },
    {
      icon: <FaUsers aria-label="Users Icon" />,
      text: "Are you frustrated with the application process?",
      bg: "bg-[#29B8E5]",
    },
  ];

  return (
    <div ref={ref} className="container mx-auto max-w-6xl px-4 mb-10">
      {/* Header */}
      <motion.div
        className="text-center mb-28"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-[#002D59] text-3xl font-bold mb-4">
          This service is
          <span className="text-[#F5A832]"> unique</span>,
          <span className="text-[#F5A832]"> time-saving</span>,
          <span className="text-[#F5A832]"> personalized</span> and gets
          <span className="text-[#F5A832]"> results</span>.
        </h2>
        <h2 className="text-2xl text-gray-700">
          WE CAN HELP YOU, just sit back and let us do the work.
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-20 md:gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-[250px] h-[250px] p-8 pt-12 text-center group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Floating Icon (Fixing Hover Position Shift) */}
            <motion.div
              className={`absolute top-[-30px] left-1/2 transform -translate-x-1/2 ${card.bg} h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl`}
            >
              {card.icon}
            </motion.div>

            {/* Card Text */}
            <p className="text-gray-800 font-medium text-xl mt-10">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
