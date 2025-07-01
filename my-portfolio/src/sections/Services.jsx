// eslint-disable-next-line no-unused-vars
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
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          My <span className="text-primary-light dark:text-primary-dark">Services</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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