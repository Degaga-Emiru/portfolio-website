import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiDjango, SiSpring, SiMongodb, SiPostgresql, SiMysql, SiJavascript, SiPython, SiPostman } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-500" size={24} /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={24} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={24} /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" size={24} /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} /> },
        { name: 'Python', icon: <SiPython className="text-blue-500" size={24} /> },
        { name: 'Django', icon: <SiDjango className="text-green-700" size={24} /> },
        { name: 'Spring Boot', icon: <SiSpring className="text-green-500" size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" size={24} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" size={24} /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" size={24} /> },
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" size={24} /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" size={24} /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" size={24} /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" size={24} /> },
      ]
    }
  ];

  const coreProficiencies = [
    { name: 'Frontend (React, Tailwind)', level: 90 },
    { name: 'Backend (Node.js, Express)', level: 85 },
    { name: 'Python (Django, REST)', level: 80 },
    { name: 'Database (SQL, NoSQL)', level: 85 },
    { name: 'Java (Spring Boot)', level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            My <span className="text-primary-light dark:text-primary-dark">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, categorized by domain. 
            I continuously learn and adapt to new technologies to build modern, scalable solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Categorized Badges Section */}
          <div className="lg:w-1/2 space-y-10">
            {categories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="flex items-center px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
                    >
                      <div className="mr-3">{skill.icon}</div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Proficiencies (Progress Bars) Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
                Core Proficiencies
              </h3>
              
              <div className="space-y-8">
                {coreProficiencies.map((prof, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{prof.name}</span>
                      <span className="font-bold text-primary-light dark:text-primary-dark">{prof.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${prof.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-light to-blue-500 dark:from-primary-dark dark:to-blue-400 h-3 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
