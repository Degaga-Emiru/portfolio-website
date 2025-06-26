// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from './common/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <p className="text-lg text-primary mb-2">Hi there, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">Samuel Ephrem</h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">Fullstack Web Developer</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I am a Computer Science graduate and developer specializing in building modern, dynamic, and AI-driven websites that excel in both problem-solving and user experience.
            </p>
            <div className="flex space-x-4">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="outline">Contact Me</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full overflow-hidden shadow-xl">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Your Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;