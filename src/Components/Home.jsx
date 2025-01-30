import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AddComponent from "./AddComponent";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Blog from "./Blog";
import CarouselComponent from "./CarouselComponent";

const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionWrapper>
        <AddComponent />
      </SectionWrapper>

      <SectionWrapper>
        <CarouselComponent />
      </SectionWrapper>

      <SectionWrapper>
        <Banner2 />
      </SectionWrapper>

      <SectionWrapper>
        <Blog />
      </SectionWrapper>

      <SectionWrapper>
        <Banner3 />
      </SectionWrapper>
    </div>
  );
};

export default Home;
