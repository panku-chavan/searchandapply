import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AddComponent from "../Components/AddComponent";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import Blog from "../Components/Blog";
import CarouselComponent from "../Components/CarouselComponent";

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
    <div className="overflow-x-hidden overflow-y-hidden">
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
