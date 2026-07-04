import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import ArticleModal from '../components/ArticleModal';

const articlesData = [
  {
    id: 1,
    title: 'Why I Chose Django & Next.js for the Justice Hub',
    excerpt: 'A deep dive into the architectural decisions behind building a modern, scalable case management system for the Hawassa primary courts.',
    content: 'When designing the Justice Hub project for the Hawassa primary courts, the choice of technology stack was critical. The system needed to handle complex relational data regarding legal cases, while providing a blazing-fast, accessible user interface for judges, clerks, and citizens.\n\nI chose Django for the backend because of its incredible ORM and built-in administrative tools. The Python ecosystem also opens doors for future AI integrations, such as automated document parsing or case summarization.\n\nFor the frontend, Next.js was the clear winner. Server-Side Rendering (SSR) ensures that pages load instantly, which is vital for users accessing the system on older government hardware or slow network connections. By decoupling the frontend and backend, we achieved a highly secure, scalable microservices architecture that can evolve with the court\'s needs.',
    date: 'Oct 15, 2025',
    readTime: 5,
    tags: ['Architecture', 'Django', 'Next.js'],
    image: '/projects/justicehub.png' // Using project images as placeholders
  },
  {
    id: 2,
    title: 'Mastering React State Management in 2025',
    excerpt: 'Comparing Zustand, Context API, and Redux Toolkit based on my experience building large-scale applications like the Book Library.',
    content: 'State management in React has evolved significantly over the past few years. While Redux was once the undisputed king, modern applications often require more lightweight and flexible solutions.\n\nIn my recent Book Library project, I opted for Zustand. Unlike the Context API, which can cause unnecessary re-renders if not carefully memoized, Zustand provides a simplified, hook-based API that subscribes components only to the specific slices of state they need.\n\nRedux Toolkit is still fantastic for massive enterprise applications, but for most mid-sized projects, a combination of React Query (for server state) and Zustand (for UI state) is the ultimate developer experience. In this article, I share code snippets and performance benchmarks comparing these three approaches.',
    date: 'Nov 02, 2025',
    readTime: 7,
    tags: ['React', 'State Management', 'Frontend'],
    image: '/projects/portfolio.jpg'
  },
  {
    id: 3,
    title: 'Optimizing Mobile App Performance with React Native',
    excerpt: 'Lessons learned while building the Unifix mobile application for university students to report maintenance issues.',
    content: 'Building the Unifix mobile application presented unique performance challenges. The app needed to feel native and fluid, allowing students to quickly snap photos of maintenance issues and upload them without draining their battery or data plans.\n\nOne major optimization was implementing efficient list rendering using FlashList instead of the standard FlatList. This drastically reduced blank spaces during fast scrolling through hundreds of maintenance tickets.\n\nAdditionally, I implemented aggressive image compression on the client side before uploading to our Node.js server. This not only improved upload speeds but also reduced our cloud storage costs. React Native provides incredible cross-platform capabilities, but understanding these low-level performance tweaks is essential for delivering a truly native feel.',
    date: 'Jan 12, 2026',
    readTime: 6,
    tags: ['React Native', 'Mobile', 'Performance'],
    image: '/projects/taskapp.png'
  }
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Latest <span className="text-primary-light dark:text-primary-dark">Articles</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and architectural deep dives from my experience building software. 
            I write to share knowledge and document my continuous learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {article.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-4">
                  <span className="flex items-center"><FiCalendar className="mr-1" /> {article.date}</span>
                  <span className="flex items-center"><FiClock className="mr-1" /> {article.readTime} min</span>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3 dark:text-white line-clamp-2 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  onClick={() => setSelectedArticle(article)}
                >
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-primary-light dark:text-primary-dark font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-auto"
                >
                  Read Article <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ArticleModal 
        article={selectedArticle} 
        isOpen={!!selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </section>
  );
};

export default Blog;
