import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-10 bg-[#EDF3FF] shadow-lg rounded-lg"
      >
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! Page Not Found</p>
        <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        >
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
