import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi';

const SocialIcons = ({ size = 20, className = "" }) => {
  const socialLinks = [
    { icon: <FiGithub size={size} />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin size={size} />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FiTwitter size={size} />, url: 'https://twitter.com/yourusername' },
    { icon: <FiMail size={size} />, url: 'mailto:your.email@example.com' },
    { icon: <FiFacebook size={size} />, url: 'https://facebook.com/yourusername' },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors"
          aria-label={link.url.split('/')[2]}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;