// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';

const About = () => {
  const stats = [
    { value: '3+', label: 'Years of Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '10+', label: 'Certifications' },
    { value: '210+', label: 'GitHub Contributions' },
  ];

  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden">
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Your Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary w-32 h-32 rounded-lg z-10 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3+ Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-dark mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm Samuel Ephrem, a Fullstack Web Developer based in [Your Location]. I have a passion for creating beautiful, functional, and user-friendly websites and applications.
            </p>
            <p className="text-gray-600 mb-6">
              With a background in Computer Science, I bring both technical expertise and creative problem-solving to every project I work on. My goal is to build solutions that not only meet but exceed client expectations.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;