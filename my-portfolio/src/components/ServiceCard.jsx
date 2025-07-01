// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white dark:bg-gray-600 rounded-full shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;