// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import TestimonialCarousel from '../components/TestimonialCarousel';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at Company A',
    content: 'Working with this developer was a fantastic experience. They delivered our project on time and exceeded our expectations.',
    image: '/testimonials/john.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director at Company B',
    content: 'The website they built for us has significantly improved our online presence and customer engagement.',
    image: '/testimonials/jane.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Founder of Startup C',
    content: 'Highly skilled and professional. They understood our vision perfectly and brought it to life.',
    image: '/testimonials/michael.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'Product Manager at Company D',
    content: 'Exceptional attention to detail and great communication throughout the project.',
    image: '/testimonials/sarah.jpg',
  },
  {
    name: 'David Brown',
    role: 'CTO at Company E',
    content: 'One of the best developers I\'ve worked with. The code quality and architecture were outstanding.',
    image: '/testimonials/david.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Client <span className="text-primary-light dark:text-primary-dark">Testimonials</span>
        </motion.h2>
        
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;