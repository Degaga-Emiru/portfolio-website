// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import { Link } from 'react-scroll';
import { FiGithub, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import resume from '../assets/Degaga_Emiru_Resume.pdf';
import profileImage from '../assets/images/profile.jpg'; // adjust path based on your file location

const Homes = () => {
  const professions = ['Web Developer', 'UI/UX Designer', 'Full Stack Developer', 'React Specialist'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Hi, I'm <span className="text-primary-light dark:text-primary-dark">Degaga Emiru</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 dark:text-gray-300">
            <Typewriter words={professions} />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I am a Recent Computer Science Graduate, web designer, and full-stack developer with a passion for building modern, responsive, 
            and AI-powered websites. I specialize in creating dynamic user experiences and solving real-world problems through clean, 
            efficient code and seamless UI/UX design. My skillset spans both front-end and back-end development, as well as networking fundamentals. 
            I’m always eager to collaborate and help bring your ideas to life with scalable, high-performance web solutions. 
            I love turning ideas into reality through code.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer font-medium"
            >
              Hire Me
            </Link>
            <a
              href={resume}
              download="Degaga_Emiru_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out font-medium"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/Degaga-Emiru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub size={28} />
            </a>
            <a 
              href="https://t.me/yourtelegramusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0088cc] dark:text-gray-400 dark:hover:text-[#0088cc] transition-colors transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={28} />
            </a>
            <a 
              href="mailto:youremail@example.com" 
              className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <FiMail size={28} />
            </a>
          </div>

        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-xl hover:shadow-primary-light/50 transition-shadow duration-300">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homes;
