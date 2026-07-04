import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ title, description, icon, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col w-full h-full p-8 rounded-2xl overflow-hidden transition-all duration-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-light/50 dark:hover:border-primary-dark/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex justify-center mb-8">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-light/10 to-primary-light/30 dark:from-primary-dark/20 dark:to-primary-dark/40 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out">
          {icon}
        </div>
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col items-center">
        <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex justify-center mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50 w-full">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 font-medium text-primary-light dark:text-primary-dark group-hover:bg-primary-light dark:group-hover:bg-primary-dark group-hover:text-white rounded-xl transition-all duration-300 cursor-pointer w-full"
        >
          <span>Let's Talk</span>
          <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;