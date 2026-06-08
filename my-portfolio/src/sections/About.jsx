import { motion } from 'framer-motion';
import { FiAward, FiCode, FiGithub, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-scroll';

const About = () => {
  const stats = [
    { value: '2+', label: 'Years Experience', icon: <FiBriefcase className="text-2xl" />, color: 'bg-blue-100 dark:bg-blue-900' },
    { value: '20+', label: 'Projects Completed', icon: <FiCode className="text-2xl" />, color: 'bg-purple-100 dark:bg-purple-900' },
    { value: '10+', label: 'Certifications', icon: <FiAward className="text-2xl" />, color: 'bg-green-100 dark:bg-green-900' },
    { value: '413+', label: 'Github Contributions', icon: <FiGithub className="text-2xl" />, color: 'bg-yellow-100 dark:bg-yellow-900' }
  ];

   return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
          >  Full-stack developer specializing in building modern, dynamic, and AI-driven websites that excel in both problem-solving and user experience. Explore my journey in technology, from academic foundations to practical applications, 
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
            className="lg:w-1/3 order-2 lg:order-1"
          >
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg border-4 border-gray-50 dark:border-gray-800">
              <img 
                src="/testimonials/profilephoto.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">What Drives Me</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I’m passionate about creating solutions that make a real difference, whether through AI-driven applications or responsive, user-friendly web designs. My drive comes from a commitment to constant growth – the excitement of learning new technologies, tackling complex problems, and contributing to projects that push boundaries. I’m always eager to collaborate and share my expertise, 
                and I’m dedicated to delivering high-quality work that exceeds expectations.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 order-1 lg:order-2">
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
                  className={`${stat.color} p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-1 transition-transform`}
                >
                  <div className="flex flex-col h-full justify-between gap-3">
                    <div className="text-gray-700 dark:text-gray-300 self-end">
                      {stat.icon}
                    </div>
                    <div>
                      <motion.p 
                        className="text-3xl font-bold dark:text-white mb-1"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* New Collaboration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-8 border-2 border-primary-light/30 dark:border-primary-dark/30 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-2xl"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center relative z-10">
                <div className="bg-primary-light/10 dark:bg-primary-dark/20 p-4 rounded-full mr-6 mb-4 md:mb-0">
                  <FiMessageSquare className="text-primary-light dark:text-primary-dark text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">
                    Ready to build something great?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
                    I believe great projects are built through teamwork and transparent dialogue. 
                    Let's connect and explore how we can work together to bring your ideas to life.
                  </p>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="inline-flex items-center px-8 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
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
