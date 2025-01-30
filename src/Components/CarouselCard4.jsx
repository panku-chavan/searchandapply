import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdDone } from "react-icons/md";

const listVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
  }),
};

const CarouselCard4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  const listItems = [
    "Most hard-working folks never ask for a raise and this is costing them $1,000,000 over 40 years of work (assuming they could easily get a salary raise of a little more than 5,000... and this is sooo possible). Learn the exact methods our customers used to increase their salaries by $4,000, $8,000 or even $20,000.",
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-[#EDF3FF] md:flex justify-between items-center rounded-xl p-10 md:h-[650px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="md:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold capitalize text-[#002D59] mb-6">
        RAISE YOUR <span className="text-[#f4a121]">SALARY</span>
        {" "}
          
        </h2>
        <p className="text-xl text-[#002D59] max-w-2xl mx-auto mb-10 font-medium">
          From job search strategy to resume reviews, we do everything for you.
        </p>

        {listItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start items-start gap-5 mb-6 md:mb-36"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
          >
            <div className="bg-gradient-to-b from-[#1DBFEE] to-[#003264] rounded-md p-2">
              <MdDone size={25} className="text-white font-bold" />
            </div>
            <p className="text-[#415f7f]">{item}</p>
          </motion.div>
        ))}

        <motion.button
          className="hidden md:block bg-[#0A66C2] p-4 md:px-10 rounded-lg text-white font-medium hover:shadow-lg transition-transform duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          I WANT TO INCREASE MY SALARY ASAP
        </motion.button>
      </motion.div>

      <motion.img
        src="Frame2.png"
        className=" rounded-2xl md:w-[50%] "
        alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      />
      <motion.button
          className="md:hidden mt-5 bg-[#0A66C2] p-4 md:px-10 rounded-lg text-white font-medium hover:shadow-lg transition-transform duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          I WANT TO INCREASE MY SALARY ASAP
        </motion.button>
    </motion.div>
  );
};

export default CarouselCard4;
