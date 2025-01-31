import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white md:w-[500px]  py-4 rounded-lg shadow-md  ">
      <div className="flex justify-start items-start cursor-pointer " onClick={toggleCollapse}>
        <button className={`text-2xl font-bold pl-3 pr-3 ${isOpen? 'text-[#F4A120]':'text-[#002E5B]'}`}>{isOpen ? <FaMinus/> : <FaPlus/>}</button>
        <h2 className="text-lg md:w-[450px] text-left font-semibold px-2">{question}</h2>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="mt-4 pl-14 text-[#7A91A8]">{answer}</p>
      </div>   
    </div>
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

  return (
    <div className="relative  md:h-[400px] w-full  md:mb-[800px]">
      {/* Background div */}
      <div className="absolute inset-0 bg-[#CCDDFF]"></div>

      {/* Gradient rotated div on top */}
      <div className="absolute -left-52 top-10 h-[600px] w-[90%] bg-gradient-to-l from-[#ECF2FE] via-[#ECF2FE] via-[20%] to-transparent rounded-3xl shadow-lg rotate-[25deg]"></div>

      {/* Text content */}
      <div className="relative p-6 text-black z-10">
        <div className="md:flex justify-start items-center">
          <div>
            <img src="Group.png" className="w-[80%]" alt="faqs group" />
          </div>
          <div>
            <h1 className="text-[#002E5B] text-3xl md:text-6xl font-bold mb-5">You Have questions,</h1>
            <h1 className="text-[#F4A120] text-3xl md:text-6xl font-bold">We have answers</h1>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-[#002E5B] text-3xl md:text-6xl font-bold mb-14 text-center">
            Frequently Asked <span className="text-[#F4A120]">Questions</span>
          </h1>
          <div className="flex flex-wrap justify-center items-stretch gap-5 ">
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
