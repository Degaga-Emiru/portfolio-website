import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
//this section contain my projects of what i did 
const ProjectCard = ({ 
  title, 
  description, 
  image, 
  stack, 
  liveLink, 
  githubLink, 
  index,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 dark:text-white line-clamp-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 shrink-0">
          {stack.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-white whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <FiGithub className="mr-2" /> Code
          </a>
          {liveLink !== '#' && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              <FiExternalLink className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
