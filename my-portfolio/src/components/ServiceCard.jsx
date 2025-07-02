// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';
const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full h-full flex flex-col"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white dark:bg-gray-600 rounded-full shadow-md">
          {icon}
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-center mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">{description}</p>
      </div>

      <div className="flex justify-center">
      <Link
  to="contact"
  smooth={true}
  duration={500}
  offset={-70}
  className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
  <span>Let's Talk</span>
  <FiArrowRight className="w-4 h-4" />
</Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;