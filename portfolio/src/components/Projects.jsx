// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for team collaboration and task tracking.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/project2.jpg",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast and location search.",
      tags: ["JavaScript", "API", "CSS"],
      image: "/project3.jpg",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics and engagement tracking.",
      tags: ["React", "Chart.js", "Express"],
      image: "/project4.jpg",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Projects" 
          subtitle="Recent work" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                {/* Project image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Project Image {index + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition flex items-center"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition flex items-center"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-primary hover:underline ml-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;