// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiDjango } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" size={24} /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" size={24} /> },
  { name: 'Django', icon: <SiDjango className="text-green-700" size={24} /> },
];

const About = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          About <span className="text-primary-light dark:text-primary-dark">Me</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate web developer with over 5 years of experience in building modern 
              web applications. My journey in web development started when I was in college and 
              I've been in love with coding ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I specialize in creating responsive, user-friendly websites and applications using 
              the latest technologies. My goal is to build products that not only look great but 
              also provide exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing 
              to open-source projects.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">My Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <div className="mr-3">{skill.icon}</div>
                  <span className="font-medium dark:text-white">{skill.name}</span>
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