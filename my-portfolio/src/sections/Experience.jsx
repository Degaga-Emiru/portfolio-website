import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'BSc Computer Science',
      organization: 'Hawassa University',
      date: '2023 - Present',
      description: 'Studying core computer science fundamentals, including data structures, algorithms, networking, and software engineering principles. Active in programming clubs and project-based learning.',
      icon: <FiBookOpen className="text-white" size={20} />
    },
    {
      type: 'education',
      title: 'Frontend Engineering Program',
      organization: 'ALX Africa',
      date: '2024 - 2025',
      description: 'Intensive software engineering program focusing on modern frontend technologies. Built real-world applications using React, JavaScript, and Tailwind CSS. Emphasized professional collaboration and Agile methodologies.',
      icon: <FiBookOpen className="text-white" size={20} />
    },
    {
      type: 'work',
      title: 'Full Stack Web Developer (Freelance)',
      organization: 'Self-Employed',
      date: '2024 - Present',
      description: 'Developing dynamic, responsive websites and web applications for clients. Utilizing modern stacks including React, Node.js, and Django to deliver scalable solutions tailored to client needs.',
      icon: <FiBriefcase className="text-white" size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Experience & <span className="text-primary-light dark:text-primary-dark">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background. A timeline of how I've built my foundation in software engineering.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 lg:ml-1/2 lg:left-1/2 lg:-translate-x-1/2">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`mb-12 relative flex items-center w-full ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute left-[-22px] lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-primary-light dark:bg-primary-dark border-4 border-gray-50 dark:border-gray-900 flex items-center justify-center shadow-lg z-10">
                  {item.icon}
                </div>

                {/* Content Box */}
                <div className={`w-full ml-10 lg:ml-0 lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow relative">
                    {/* Arrow for Desktop */}
                    <div className={`hidden lg:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${isEven ? 'right-[-8px] border-l-8 border-l-white dark:border-l-gray-800' : 'left-[-8px] border-r-8 border-r-white dark:border-r-gray-800'}`}></div>
                    
                    {/* Arrow for Mobile */}
                    <div className="block lg:hidden absolute top-6 left-[-8px] w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white dark:border-r-gray-800"></div>

                    <span className="flex items-center text-sm font-semibold text-primary-light dark:text-primary-dark mb-2">
                      <FiCalendar className="mr-2" />
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-md font-medium text-gray-600 dark:text-gray-300 mb-4">
                      {item.organization}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
