// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-primary font-medium mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-dark">{title}</h2>
      <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;