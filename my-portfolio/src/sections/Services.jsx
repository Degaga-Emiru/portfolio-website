import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { FiCode, FiLayout, FiSmartphone, FiServer } from 'react-icons/fi';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Node.js, and more.',
    icon: <FiCode className="text-primary-light dark:text-primary-dark" size={32} />,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed with your users in mind.',
    icon: <FiLayout className="text-primary-light dark:text-primary-dark" size={32} />,
  },
  {
    title: 'Responsive Design',
    description: 'Websites that look great on all devices, from desktop to mobile.',
    icon: <FiSmartphone className="text-primary-light dark:text-primary-dark" size={32} />,
  },
  {
    title: 'API Integration',
    description: 'Connect your application with third-party services and APIs.',
    icon: <FiServer className="text-primary-light dark:text-primary-dark" size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-500 dark:from-primary-dark dark:to-blue-400">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Delivering high-quality solutions tailored to your needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;