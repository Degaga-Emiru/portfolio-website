// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import { Link } from 'react-scroll';
import resume from '../assets/Degaga_Emiru_resume.pdf';
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
            I am a Computer Science student, web designer, and full-stack developer with a passion for building modern, responsive, 
            and AI-powered websites. I specialize in creating dynamic user experiences and solving real-world problems through clean, 
            efficient code and seamless UI/UX design. My skillset spans both front-end and back-end development, as well as networking fundamentals. 
            I’m always eager to collaborate and help bring your ideas to life with scalable, high-performance web solutions. 
            I love turning ideas into reality through code.
          </p>
          <div className="flex space-x-4">
            <Link
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
  >
    Contact Me
  </Link>
            <a
    href={resume}
    download="Degaga_Emiru_resume.pdf"
    className="px-6 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
  >
    Download Resume
  </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark">
            <img 
  src={profileImage} 
  alt="Profile" 
  className="w-full h-full object-cover"
/>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homes;
