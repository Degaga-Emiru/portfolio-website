// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; // Update path to match your logo file location

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between"
        >
          {/* Left section with logo and description */}
          <div className="mb-10 md:mb-0 max-w-md">
            <img src={logo} alt="SAM TECH logo" className="h-14 mb-4" />
            <p className="text-lg">
              Crafting responsive, high-performance websites 🌐 with clean code 💻 and a user-focused approach 🎥.
              Let’s build something amazing together 🚀.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right section with links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hot Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom copyright section */}
        <div className="mt-12 text-center">
          <p className="text-purple-600 font-semibold">
            Copyright © {currentYear} Sami. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-1">Built with love by Samuel Ephrem</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
