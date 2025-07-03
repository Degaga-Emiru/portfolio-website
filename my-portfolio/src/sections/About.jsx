import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiDjango } from 'react-icons/si';
import { FiAward, FiCode, FiGithub, FiBriefcase,FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-scroll';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={24} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" size={24} /> },
    { name: 'Django', icon: <SiDjango className="text-green-700" size={24} /> },
  ];

  const education = [
    'BSc Computer Science - Hawassa University (2023-now)',
    'ALX Front End Engineering Program (2025)'
  ];

  const certifications = [
    'Frontend Development Certification - ALX africa',
    'JavaScript Algorithms Certification - freeCodeCamp',
    'AWS Cloud Practitioner - Amazon Web Services',
    'Data Analyst -Udacity'
  ];

  const stats = [
    { value: '2+', label: 'Years Experience', icon: <FiBriefcase className="text-2xl" />, color: 'bg-blue-100 dark:bg-blue-900' },
    { value: '20+', label: 'Projects Completed', icon: <FiCode className="text-2xl" />, color: 'bg-purple-100 dark:bg-purple-900' },
    { value: '10+', label: 'Certifications', icon: <FiAward className="text-2xl" />, color: 'bg-green-100 dark:bg-green-900' },
    { value: '310+', label: 'Github Contributions', icon: <FiGithub className="text-2xl" />, color: 'bg-yellow-100 dark:bg-yellow-900' }
  ];

   return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Mobile: About Me content above profile image */}
        <div className="block lg:hidden mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 dark:text-white"
          >
            About <span className="text-primary-light dark:text-primary-dark">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          >  Full-stack  developer specializing in building modern, dynamic, and AI-driven websites that excel in both problem-solving and user experience.Explore my journey in technology,  from academic foundations to practical applications, 
            as I bridge theory with real-world solutions through continuous learning and innovation.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Photo & Personal Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3 order-2 lg:order-1" // Changed order for mobile
          >
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/testimonials/profilephoto.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">What Drives Me</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I’m passionate about creating solutions that make a real difference, whether through AI-driven applications or responsive, user-friendly web designs. My drive comes from a commitment to constant growth – the excitement of learning new technologies, tackling complex problems, and contributing to projects that push boundaries. I’m always eager to collaborate and share my expertise, 
                and I’m dedicated to delivering high-quality work that exceeds expectations.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 order-1 lg:order-2"> {/* Changed order for mobile */}
            {/* Desktop: About Me content stays here */}
            <div className="hidden lg:block">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
              >
                About <span className="text-primary-light dark:text-primary-dark">Me</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              >
                Explore my journey in technology, from academic foundations to practical applications, 
                as I bridge theory with real-world solutions through continuous learning and innovation.
              </motion.p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${stat.color} p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <motion.p 
                        className="text-3xl font-bold dark:text-white"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {stat.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium relative ${activeTab === tab.id ? 'text-primary-light dark:text-primary-dark' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light dark:bg-primary-dark"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px]"
            >
              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                    >
                      <div className="mr-3">{skill.icon}</div>
                      <span className="font-medium dark:text-white">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <ul className="space-y-4">
                  {education.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-primary-light dark:bg-primary-dark mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {activeTab === 'certifications' && (
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <FiAward className="flex-shrink-0 text-yellow-500 mt-0.5 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
             {/* New Collaboration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 p-6 border-2 border-primary-light dark:border-primary-dark rounded-xl bg-white dark:bg-gray-800 shadow-md"
            >
              <div className="flex items-start">
                <FiMessageSquare className="text-primary-light dark:text-primary-dark text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    I'm Committed to Collaboration and Clear Communication
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I believe great projects are built through teamwork and transparent dialogue. 
                    Let's connect and explore how we can work together to bring your ideas to life.
                  </p>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="inline-flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform"
                  >
                    Let's Collaborate
                    <FiMessageSquare className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
