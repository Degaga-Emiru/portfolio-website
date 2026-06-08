import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiClock } from 'react-icons/fi';

const ArticleModal = ({ article, isOpen, onClose }) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              <FiX className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>

            {/* Header Image */}
            <div className="w-full h-64 md:h-80 relative shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-light/90 text-white rounded-full text-xs font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                    {article.title}
                  </h1>
                  <div className="flex items-center text-gray-300 text-sm gap-4">
                    <span className="flex items-center"><FiCalendar className="mr-1" /> {article.date}</span>
                    <span className="flex items-center"><FiClock className="mr-1" /> {article.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full p-6 md:p-10 overflow-y-auto custom-scrollbar bg-white dark:bg-gray-900">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                {article.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6">{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;
