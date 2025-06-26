import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

const ProjectDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  
  // In a real app, you would fetch project data based on the ID
  const project = {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration and admin dashboard.",
    longDescription: "This project was built for a client in the retail industry who needed a complete e-commerce solution. The platform includes product listings, shopping cart functionality, user authentication, and payment processing through Stripe. The admin dashboard allows for inventory management, order tracking, and sales analytics.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
    image: "/project1.jpg",
    github: "https://github.com",
    live: "https://example.com",
    features: [
      "Product catalog with filtering and search",
      "Shopping cart functionality",
      "User authentication and profiles",
      "Stripe payment integration",
      "Admin dashboard for management",
      "Responsive design for all devices"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing performance for large product catalogs",
      "Creating a scalable backend architecture"
    ]
  };

  return (
    <div className="min-h-screen bg-light">
      <div className="container mx-auto px-6 py-24">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <FiArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-full bg-gray-300 flex items-center justify-center p-8">
                {/* Project image placeholder */}
                <div className="text-gray-500 text-center">
                  <p className="text-xl mb-2">Project Image</p>
                  <p>{project.title}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-dark mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-6">{project.longDescription}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-dark mb-3">Features</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-dark mb-3">Challenges & Solutions</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-dark text-white rounded-lg hover:bg-gray-800 transition"
                >
                  <FiGithub className="mr-2" /> View Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;