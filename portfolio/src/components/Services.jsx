// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import { FiCode, FiDatabase, FiSmartphone, FiCloud, FiLayers, FiServer } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="text-3xl text-primary" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Tailwind CSS."
    },
    {
      icon: <FiDatabase className="text-3xl text-primary" />,
      title: "Backend Development",
      description: "Robust backend solutions with Node.js, Express, Django, and database management."
    },
    {
      icon: <FiSmartphone className="text-3xl text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native for iOS and Android."
    },
    {
      icon: <FiCloud className="text-3xl text-primary" />,
      title: "Cloud Services",
      description: "Deployment and management of applications on AWS, Azure, and Google Cloud."
    },
    {
      icon: <FiLayers className="text-3xl text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces with Figma and Adobe XD."
    },
    {
      icon: <FiServer className="text-3xl text-primary" />,
      title: "DevOps",
      description: "CI/CD pipelines, Docker containers, and server management."
    }
  ];

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Services" 
          subtitle="What I offer" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;