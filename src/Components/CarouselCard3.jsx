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

const CarouselCard3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  const listItems = [
    "So, you've found your dream job and are ready to submit your job application. Wait!",
    "Ensure that you are applying in the correct manner, so that when you check your emails, you will find a ton of job interview invitations.",
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
         GET FLOODED WITH <span className="text-[#f4a121]">JOB INTERVIEWS</span>
        {" "}
          
        </h2>
        <p className="text-xl text-[#002D59] max-w-2xl mx-auto mb-10 font-medium">
          From job search strategy to resume reviews, we do everything for you.
        </p>

        {listItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start items-center gap-5 mb-6 md:mb-20"
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
          I WANT MORE JOB INTERVIEW
        </motion.button>
      </motion.div>

      <motion.img
        src="Group124.png"
        className=" rounded-2xl md:w-[50%] mix-blend-multiply"
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
          I WANT MORE JOB INTERVIEW
        </motion.button>
    </motion.div>
  );
};

export default CarouselCard3;
