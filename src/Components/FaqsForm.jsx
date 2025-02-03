import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FaqsForm = () => {
  const formik = useFormik({
    initialValues: {
      jobTitles: '',
      jobResponsibilities: '',
      jobFunctions: '',
      whyCompany: '',
      dreamCompanies: '',
      salaryExpectation: '',
      workLocation: '',
      workPreferences: '',
      uniqueAboutYou: '',
    },
    validationSchema: Yup.object({
      jobTitles: Yup.string().required('Required'),
      jobResponsibilities: Yup.string().required('Required'),
      jobFunctions: Yup.string().required('Required'),
      whyCompany: Yup.string().required('Required'),
      dreamCompanies: Yup.string().required('Required'),
      salaryExpectation: Yup.string().required('Required'),
      workLocation: Yup.string().required('Required'),
      workPreferences: Yup.string().required('Required'),
      uniqueAboutYou: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Hook to detect when the form is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-trigger when the form comes back into view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div className="py-6">
      <motion.h1
        className="text-[#002E5B] text-4xl md:text-5xl font-bold text-center py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : -20,
        }}
        transition={{ duration: 0.6 }}
      >
        Fill Out the <span className="text-[#F4A120]">in-take form</span>
      </motion.h1>

      <div ref={ref} className="m-5 p-5 md:p-10 bg-[#E8EEFB] rounded-lg">
        <motion.form
          onSubmit={formik.handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12">
            <div>
              <label className="block text-[#0B043C] mb-2">
                What are your desired job titles?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('jobTitles')}
              />
              {formik.touched.jobTitles && formik.errors.jobTitles && (
                <p className="text-red-500 text-sm">{formik.errors.jobTitles}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                Describe your current job responsibilities?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('jobResponsibilities')}
              />
              {formik.touched.jobResponsibilities && formik.errors.jobResponsibilities && (
                <p className="text-red-500 text-sm">{formik.errors.jobResponsibilities}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                What are your ideal job functions?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('jobFunctions')}
              />
              {formik.touched.jobFunctions && formik.errors.jobFunctions && (
                <p className="text-red-500 text-sm">{formik.errors.jobFunctions}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                Why do you want to work for some companies?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('whyCompany')}
              />
              {formik.touched.whyCompany && formik.errors.whyCompany && (
                <p className="text-red-500 text-sm">{formik.errors.whyCompany}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                Which dream companies do you aspire to work for?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('dreamCompanies')}
              />
              {formik.touched.dreamCompanies && formik.errors.dreamCompanies && (
                <p className="text-red-500 text-sm">{formik.errors.dreamCompanies}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                What is your minimum salary expectation?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('salaryExpectation')}
              />
              {formik.touched.salaryExpectation && formik.errors.salaryExpectation && (
                <p className="text-red-500 text-sm">{formik.errors.salaryExpectation}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                What is your preferred work location(s)?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('workLocation')}
              />
              {formik.touched.workLocation && formik.errors.workLocation && (
                <p className="text-red-500 text-sm">{formik.errors.workLocation}</p>
              )}
            </div>
            <div>
              <label className="block text-[#0B043C] mb-2">
                Do you have any other work preferences?
              </label>
              <input
                type="text"
                placeholder="Write here"
                className="w-full p-4 border-none rounded-xl h-16 placeholder-gray-300"
                {...formik.getFieldProps('workPreferences')}
              />
              {formik.touched.workPreferences && formik.errors.workPreferences && (
                <p className="text-red-500 text-sm">{formik.errors.workPreferences}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-[#0B043C] mb-2">
              Some companies want to know what is unique about you. Please provide a short answer in less than 150 characters.
            </label>
            <textarea
              placeholder="Write here"
              className="w-full p-4 border-none rounded-xl placeholder-gray-300"
              {...formik.getFieldProps('uniqueAboutYou')}
            />
            {formik.touched.uniqueAboutYou && formik.errors.uniqueAboutYou && (
              <p className="text-red-500 text-sm">{formik.errors.uniqueAboutYou}</p>
            )}
          </div>
          <p className="text-[#0A66C2]">
            *Most jobs do not share salaries in the job post, but when they do, we will only apply to those jobs that meet your salary requirements.
          </p>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-10 text-center px-12 py-2 bg-[#0A66C2] text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default FaqsForm;
