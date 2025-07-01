// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and payment processing.',
    image: '/projects/ecommerce.jpeg',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example-ecommerce.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: '/projects/portfolio.jpeg',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks with drag-and-drop functionality.',
    image: '/projects/taskapp.png',
    stack: ['React', 'TypeScript', 'Firebase'],
    liveLink: 'https://taskapp.example.com',
    githubLink: 'https://github.com/yourusername/task-app',
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
          My <span className="text-primary-light dark:text-primary-dark">Projects</span>
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