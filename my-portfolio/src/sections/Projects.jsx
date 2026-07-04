import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const projectsData = [
  {
    title: 'Justice Hub Project',
    description: 'A comprehensive full-stack system developed for the Hawassa primary courts to digitize and manage court proceedings, case files, and scheduling.',
    image: '/projects/justicehub.png',
    stack: ['Python', 'Django', 'Next.js', 'React'],
    liveLink: 'https://justicehub-beige.vercel.app/',
    githubLink: 'https://github.com/Degaga-Emiru/justicehub',
    problemSolved: 'Streamlined court processes, reducing paper waste and manual errors. Improved access to case information for all authorized parties.',
    architecture: 'Microservices architecture with a Django REST API for the backend and a fast, SSR Next.js application for the frontend interface.',
    actors: 'Judges, Court Clerks, Lawyers, Citizens'
  },
  {
    title: 'Unifix Mobile Application',
    description: 'A mobile application that allows students to report university maintenance issues, track progress, and have problems fixed simply and easily.',
    image: '/projects/unifix_app_mockup.png',
    stack: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    liveLink: '#',
    githubLink: 'https://github.com/Degaga-Emiru/Unifix-Mobile-app',
    problemSolved: 'Eliminated the slow, paper-based maintenance request system. Increased transparency and reduced average fix times for dorm issues.',
    architecture: 'Mobile-first client application communicating with a centralized Node.js/Express API, using MongoDB for scalable document storage.',
    actors: 'Students, Maintenance Staff, Dorm Administrators'
  },
  {
    title: 'Travel Touring Guide',
    description: 'A web platform for visitors to discover travel destinations, search for hotels, book car rentals, and plan their entire itinerary seamlessly.',
    image: '/projects/traveltouring.png',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    liveLink: '#',
    githubLink: 'https://github.com/Degaga-Emiru/Travel-Booking-API',
    problemSolved: 'Fragmented travel booking. Brought hotel, car, and location discovery into a single unified search experience.',
    architecture: 'React SPA frontend with a Node.js API layer. PostgreSQL relational database ensures ACID compliance for booking transactions.',
    actors: 'Tourists, Travel Agents, Hotel Owners'
  },
  {
    title: 'Job Portal Website',
    description: 'A comprehensive job board with employer dashboards, applicant tracking, and advanced search functionality.',
    image: '/projects/jobportal.jpg',
    stack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
    liveLink: '#',
    githubLink: '#',
    problemSolved: 'Connecting local talent with employers effectively.',
    architecture: 'Monolithic PHP architecture with MySQL for fast relational queries.',
    actors: 'Job Seekers, Employers, Admin'
  },
  {
    title: 'Modern E-commerce Platform',
    description: 'Full-featured online store with product management, cart system, and secure payment processing.',
    image: '/projects/ecommerce.jpeg',
    stack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    liveLink: '#',
    githubLink: 'https://github.com/Degaga-Emiru/e-commerce',
    problemSolved: 'Providing a scalable digital storefront for small businesses.',
    architecture: 'MERN Stack with TypeScript for type safety.',
    actors: 'Customers, Store Owners'
  },
  {
    title: 'Book Library',
    description: 'A modern web application for browsing, searching, and saving books. Features include user authentication, reading list management, and book reviews.',
    image: '/projects/book-library.jpg',
    stack: ['React', 'Tailwind CSS', 'Zustand', 'Open Library API'],
    liveLink: 'https://alx-capstone-project-app-i28s.vercel.app/',
    githubLink: 'https://github.com/Degaga-Emiru/alx-capstone-project-app.git',
    problemSolved: 'Personal book tracking and discovery.',
    architecture: 'React SPA integrating with third-party public APIs.',
    actors: 'Readers, Book Enthusiasts'
  },
  {
    title: 'Currency Exchange',
    description: 'A real-time currency converter web application that supports 160+ currencies with live exchange rates, country flags, and dark mode.',
    image: '/projects/currency-exchange.jpg',
    stack: ['React', 'Tailwind CSS', 'Java', 'Spring Boot'],
    liveLink: 'https://currency-app-two-black.vercel.app/',
    githubLink: 'https://github.com/your-username/currency-converter-app.git',
    problemSolved: 'Quick and accurate currency conversions for travelers and traders.',
    architecture: 'React frontend with a reliable Spring Boot backend service for rate caching.',
    actors: 'Travelers, Financial Analysts'
  }
];

const filters = ['ALL', 'React', 'Django', 'Java', 'Node.js', 'Spring Boot', 'PHP'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'ALL') return true;
    return project.stack.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white"
        >
          Recent <span className="text-primary-light dark:text-primary-dark">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-10"
        >
          Explore my latest work. Click on any project to view detailed information, architecture, and the problems solved.
        </motion.p>
        
        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary-light dark:bg-primary-dark text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  stack={project.stack}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No projects found matching the selected filter.
          </div>
        )}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;