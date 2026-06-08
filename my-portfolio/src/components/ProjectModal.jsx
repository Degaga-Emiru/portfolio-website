import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FiX className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-light/10 text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.problemSolved && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Problem Solved
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>
                )}

                {project.architecture && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Architecture
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {project.actors && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Target Users / Actors
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.actors}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-md"
                  >
                    <FiGithub className="mr-2" /> View Source
                  </a>
                  {project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-md"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
