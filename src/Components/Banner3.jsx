import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Banner3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <div className="md:mt-20 " ref={ref}>
      <motion.img
        src="bg4c.png"
        width="100%"
        alt="bg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default Banner3;
