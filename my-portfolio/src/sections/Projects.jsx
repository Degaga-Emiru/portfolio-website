// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Book Library',
    description:
      'A modern web application for browsing, searching, and saving books. Features include user authentication, reading list management, book reviews, and integration with the Open Library API.',
    image: '/projects/book-library.jpg', // Make sure this image exists
    stack: ['React', 'Tailwind CSS', 'Zustand', 'Open Library API'],
    liveLink: 'https://alx-capstone-project-app-i28s.vercel.app/                                                                                                                  ',
    githubLink: 'https://github.com/Degaga-Emiru/alx-capstone-project-app.git',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website built with React and Tailwind CSS to showcase projects, skills, and contact information with smooth animations using Framer Motion.',
    image: '/projects/portfolio.jpg',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://degaga-tech.vercel.app/',
    githubLink: 'https://github.com/Degaga-Emiru/portfolio-website',
  },
  {
    title: 'Currency Exchange',
    description:
      'A real-time currency converter web application that supports 160+ currencies with live exchange rates, country flags, dark mode, and user-friendly features like FAQ and testimonials.',
    image: '/projects/currency-exchange.jpg', // Update the image if needed
    stack: ['React', 'Tailwind CSS', 'ExchangeRate API'],
    liveLink: 'https://currency-app-two-black.vercel.app/',
    githubLink: 'https://github.com/your-username/currency-converter-app.git',
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Recent <span className="text-primary-light dark:text-primary-dark">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              stack={project.stack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;