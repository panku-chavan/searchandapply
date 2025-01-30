import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserPlus, FaHandHoldingDollar, FaPersonWalkingDashedLineArrowRight, FaPeopleArrows } from "react-icons/fa6";
import { TbLockCheck } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineImageSearch, MdOutlineScreenShare } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { AiOutlineFileDone } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";

const ProcessProgress = () => {
  const signUpRef = useRef(null);
  const payRef = useRef(null);
  const fillOutRef = useRef(null);
  const emailRef = useRef(null);
  const linkedInRef = useRef(null);
  const resumeRef = useRef(null);
  const careerRef = useRef(null);
  const consultRef = useRef(null);
  const selectJobRef = useRef(null);
  const applyJobRef = useRef(null);
  const jobListRef = useRef(null);
  const interviewRef = useRef(null);
  const preperationRef = useRef(null);
  const jobRef = useRef(null);

  const signUpInView = useInView(signUpRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const payInView = useInView(payRef, { triggerOnce: true, margin: "-100px" });
  const fillOutInView = useInView(fillOutRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const emailInView = useInView(emailRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const linkedInInView = useInView(linkedInRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const resumeInView = useInView(resumeRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const careerInView = useInView(careerRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const consultInView = useInView(consultRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const selectJobInView = useInView(selectJobRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const applyJobInView = useInView(applyJobRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const jobListInView = useInView(jobListRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const interviewInView = useInView(interviewRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const preperationInView = useInView(preperationRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const jobInView = useInView(jobRef, { triggerOnce: true, margin: "-100px" });

  return (
    <div className="container mx-auto mt-10">
      {/* Sign up section */}
      <motion.div
        ref={signUpRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={signUpInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#21D1F7] rounded-full flex justify-center items-center">
            <h2 className="text-[#21D1F7] font-bold text-lg md:text-2xl">
              <FaUserPlus />
            </h2>
          </div>
          <div className="w-1/2 text-center">
            <h1 className="text-[#21D1F7] font-bold text-xl md:text-2xl">
              Sign Up
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
              Sign up for my newsletter to get tips for your job search
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={signUpInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#21D1F7] rounded-full flex justify-center items-center">
              <h2 className="text-[#21D1F7] font-bold text-2xl">1</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#21D1F7] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

      {/* Pay section */}
      <motion.div
        ref={payRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={payInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={payInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#C8532E] rounded-full flex justify-center items-center">
              <h2 className="text-[#C8532E] font-bold text-2xl">2</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#C8532E] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
            <h1 className="text-[#C8532E] font-bold text-xl md:text-2xl">
              Pay
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
              Pay for the service
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#C8532E] rounded-full flex justify-center items-center">
            <h2 className="text-[#C8532E] font-bold text-lg md:text-2xl">
              <FaHandHoldingDollar />
            </h2>
          </div>
        </div>
      </motion.div>
      {/* fill out section */}
      <motion.div
        ref={fillOutRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={fillOutInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#F4A120] rounded-full flex justify-center items-center">
            <h2 className="text-[#F4A120] font-bold text-lg md:text-2xl">
              <LuNotebookPen />
            </h2>
          </div>
          <div className="w-1/2 text-center">
            <h1 className="hidden md:block text-[#F4A120] font-bold text-xl md:text-2xl">
              Fill Out in-take form
            </h1>
            <h1 className="md:hidden  text-[#F4A120] font-bold text-xl md:text-2xl">
              Fill Form
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
              Job seeker fill out in teck form
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={fillOutInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#F4A120] rounded-full flex justify-center items-center">
              <h2 className="text-[#F4A120] font-bold text-2xl">3</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#F4A120] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

      {/* email */}
      <motion.div
        ref={emailRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={emailInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={emailInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#0B6C81] rounded-full flex justify-center items-center">
              <h2 className="text-[#0B6C81] font-bold text-2xl">4</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#0B6C81] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
            <h1 className="hidden md:block text-[#0B6C81] font-bold text-xl md:text-2xl">
              We create new gmail account
            </h1>
            <h1 className="md:hidden  text-[#0B6C81] font-bold text-xl md:text-2xl">
              Create new gmail
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
              We create new gmail account and provide you with user Id and
              password.
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#0B6C81] rounded-full flex justify-center items-center">
            <h2 className="text-[#0B6C81] font-bold text-lg md:text-2xl">
              <TbLockCheck />
            </h2>
          </div>
        </div>
      </motion.div>
{/* linked in section */}
      <motion.div
        ref={linkedInRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={linkedInInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#21D1F7] rounded-full flex justify-center items-center">
            <h2 className="text-[#21D1F7] font-bold text-lg md:text-2xl">
             <CiLinkedin />
            </h2>
          </div>
          <div className="w-1/2 text-center">
          <h1 className="hidden md:block text-[#21D1F7] font-bold text-xl md:text-xl">
              Provides LinkedIn UserId and Password
            </h1>
            <h1 className="md:hidden  text-[#21D1F7] font-bold text-xl md:text-2xl">
              LinkedIn Id
            </h1>

            <p className="hidden md:block text-[#B6B9BB] text-md">
              Job seeker provides LinkedIn user-id and password to (new OR
              existing) account
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={linkedInInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#21D1F7] rounded-full flex justify-center items-center">
              <h2 className="text-[#21D1F7] font-bold text-2xl">5</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#21D1F7] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

      {/* resume section */}
      <motion.div
        ref={resumeRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={resumeInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={resumeInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#FF0000] rounded-full flex justify-center items-center">
              <h2 className="text-[#FF0000] font-bold text-2xl">6</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#FF0000] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
          <h1 className="text-[#C8532E] font-bold text-xl md:text-2xl">
              Share Resume
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
              Job seeker shares resume with us
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#FF0000] rounded-full flex justify-center items-center">
            <h2 className="text-[#FF0000] font-bold text-lg md:text-2xl">
              <MdOutlineScreenShare />
            </h2>
          </div>
        </div>
      </motion.div>
      {/* career section */}
      <motion.div
        ref={careerRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={careerInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#0B6C81] rounded-full flex justify-center items-center">
            <h2 className="text-[#0B6C81] font-bold text-lg md:text-2xl">
              <FaPersonWalkingDashedLineArrowRight />
            </h2>
          </div>
          <div className="w-1/2 text-center">
          <h1 className="hidden md:block text-[#0B6C81] font-bold text-xl md:text-2xl">
              Career coach review
            </h1>
            <h1 className="md:hidden  text-[#0B6C81] font-bold text-xl md:text-2xl">
              Career coach
            </h1>

            <p className="hidden md:block text-[#B6B9BB] text-md">
              Career coach reviews the in-take form and resume
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={careerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#0B6C81] rounded-full flex justify-center items-center">
              <h2 className="text-[#0B6C81] font-bold text-2xl">7</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#0B6C81] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

     {/*consultation section  */}
      <motion.div
        ref={consultRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={consultInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={consultInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#F4A120] rounded-full flex justify-center items-center">
              <h2 className="text-[#F4A120] font-bold text-2xl">8</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#F4A120] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
          <h1 className="hidden md:block text-[#F4A120] font-bold text-xl md:text-xl">
              Consultation to review and discuss job criteria
            </h1>
            <h1 className="md:hidden text-[#F4A120] font-bold text-xl md:text-xl">
              Consult and review job criteria
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-sm">
              Consultation to review answers from in-take form and discuss job
              search criteria
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#F4A120] rounded-full flex justify-center items-center">
            <h2 className="text-[#F4A120] font-bold text-lg md:text-2xl">
              <SiGooglemessages />
            </h2>
          </div>
        </div>
      </motion.div>

      {/* seect section */}
      <motion.div
        ref={selectJobRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={selectJobInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#C8532E] rounded-full flex justify-center items-center">
            <h2 className="text-[#C8532E] font-bold text-lg md:text-2xl">
              <MdOutlineImageSearch />
            </h2>
          </div>
          <div className="w-1/2 text-center">
          <h1 className=" text-[#C8532E] font-bold text-xl md:text-2xl">
              Select jobs
            </h1>
            

            <p className="hidden md:block text-[#B6B9BB] text-md">
            We provide a list of jobs and the job seeker will select the jobs that we should apply to
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={selectJobInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#C8532E] rounded-full flex justify-center items-center">
              <h2 className="text-[#C8532E] font-bold text-2xl">9</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#C8532E] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

      {/* apply job */}
      <motion.div
        ref={applyJobRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={applyJobInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={applyJobInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#ABCB9C] rounded-full flex justify-center items-center">
              <h2 className="text-[#ABCB9C] font-bold text-2xl">10</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#ABCB9C] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
          <h1 className="text-[#ABCB9C] font-bold text-xl md:text-2xl">
              Apply for jobs
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
              We apply for the selected jobs
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#ABCB9C] rounded-full flex justify-center items-center">
            <h2 className="text-[#ABCB9C] font-bold text-lg md:text-2xl">
              <AiOutlineFileDone />
            </h2>
          </div>
        </div>
      </motion.div>
{/* job list section */}
      <motion.div
        ref={jobListRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={jobListInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#0A66C2] rounded-full flex justify-center items-center">
            <h2 className="text-[#0A66C2] font-bold text-lg md:text-2xl">
             <AiOutlineFileDone />
            </h2>
          </div>
          <div className="w-1/2 text-center">
          <h1 className="hidden md:block text-[#0A66C2] font-bold text-xl md:text-2xl">
            Send list of applied jobs
            </h1>
            <h1 className="md:hidden  text-[#0A66C2] font-bold text-xl md:text-2xl">
            Send job list
            </h1>

            <p className="hidden md:block text-[#B6B9BB] text-md">
            Send list of applied jobs to job seeker
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={jobListInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#0A66C2] rounded-full flex justify-center items-center">
              <h2 className="text-[#0A66C2] font-bold text-2xl">11</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#0A66C2] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

      {/* interview section */}
      <motion.div
        ref={interviewRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={interviewInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={interviewInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#C8532E] rounded-full flex justify-center items-center">
              <h2 className="text-[#C8532E] font-bold text-2xl">12</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#C8532E] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
          <h1 className="hidden md:block text-[#C8532E] font-bold text-xl md:text-2xl">
            Get interviews
            </h1>
            <h1 className="md:hidden text-[#C8532E] font-bold text-lg  pt-6">
            Get Interviews
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
            All responses to job applications will go directly to the job seeker
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#C8532E] rounded-full flex justify-center items-center">
            <h2 className="text-[#C8532E] font-bold text-lg md:text-2xl">
              <FaPeopleArrows />
            </h2>
          </div>
        </div>
      </motion.div>
      {/* preparation section */}
      <motion.div
        ref={preperationRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={preperationInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#F4A120] rounded-full flex justify-center items-center">
            <h2 className="text-[#F4A120] font-bold text-lg md:text-2xl">
              <CgUserList />
            </h2>
          </div>
          <div className="w-1/2 text-center">
          <h1 className="hidden md:block text-[#F4A120] font-bold text-xl md:text-2xl">
            Preparation for the interview
            </h1>
            <h1 className="md:hidden  text-[#F4A120] font-bold text-xl md:text-2xl">
            Prepare for interview
            </h1>

            <p className="hidden md:block text-[#B6B9BB] text-md">
            Prepare for your interview
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={preperationInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#F4A120] rounded-full flex justify-center items-center">
              <h2 className="text-[#F4A120] font-bold text-2xl">13</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#F4A120] rounded-full right-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>

     {/*jobin section  */}
      <motion.div
        ref={jobRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={jobInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center -mt-3"
      >
        <div className="w-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={jobInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="flex justify-center items-center w-36 h-36 relative">
            <div className="w-20 h-20 border-[10px] border-[#0B6C81] rounded-full flex justify-center items-center">
              <h2 className="text-[#0B6C81] font-bold text-2xl">14</h2>
            </div>
            <div
              className="absolute w-36 h-36 border-[12px] border-[#0B6C81] rounded-full right-0"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center md:gap-5">
          <div className="w-1/2 text-center">
          <h1 className="text-[#0B6C81] font-bold text-xl md:text-2xl">
              Get the job
            </h1>
            <p className="hidden md:block text-[#B6B9BB] text-md">
            Get your job offers and negotiate your salary
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#0B6C81] rounded-full flex justify-center items-center">
            <h2 className="text-[#0B6C81] font-bold text-lg md:text-2xl">
              <SiGooglemessages />
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessProgress;
