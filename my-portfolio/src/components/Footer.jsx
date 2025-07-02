import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi';
import logo from '../assets/logo.jpg'; // adjust path as needed
const Footer = () => {
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/Degaga-Emiru' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/degaga-emiru996' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/Degaga_Emiru' },
    { icon: <FiMail size={20} />, url: 'mailto:degagaemiru@gmail.com' },
    { icon: <FiFacebook size={20} />, url: 'https://facebook.com/degagasiwayyee' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
<img src={logo} alt="Logo" className="h-10 w-10" />              <span className="ml-2 text-xl font-bold dark:text-white">Degaga Emiru</span>
            </div>
            <p className="max-w-xs text-gray-600 dark:text-gray-400">
Crafting responsive, high-performance websites 🌐 with clean code 💻 and a user-focused approach 👥.
 Let’s build something amazing together 🚀.            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Degaga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;