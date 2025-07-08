// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Bonsa Saka',
    role: 'CEO at Bonsa General Treading PLC',
   content: 'Working with Degaga was a smooth and rewarding experience. His communication was clear, timely, and professional throughout the project. He truly understood our goals and delivered with precision. Highly recommend him for any web development needs.',
    image: '/testimonials/bonsa.jpg',
    rating: 5
  },
  {
    name: 'Chala Saka',
    role: 'Full Stack Developer',
    content: 'Working with Degaga is always a pleasure. His problem-solving skills are top-notch, and he always finds elegant solutions to complex challenges. The project was completed ahead of schedule with impressive quality. He’s a dependable developer.',
    image: '/testimonials/chala.jpg',
    rating: 5
  },
  {
    name: 'Sisay Wolde',
    role: 'Software Engineer',
    content: 'From concept to deployment, Degaga showed outstanding attention to detail. His ability to translate abstract ideas into functional features was impressive. A proactive communicator and reliable team player.',
    image: '/testimonials/sisay-wolde.jpg',
    rating: 5
  },
  {
    name: 'Firaol Adimasu',
    role: 'Software Developer',
    content: 'Exceptional attention to detail and great communication throughout the project.',
    image: '/testimonials/fira.jpg',
    rating: 5
  },
  {
    name: 'Dawit Paulos',
    role: 'AI Engineer & Entrepreneur',
    content: 'One of the best developers I\'ve worked with. Outstanding code quality and architecture.',
    image: '/testimonials/dawit-paulos.jpg',
    rating: 5
  },
  {
    name: 'Timothy Paul',
    role: 'Graphics Designer, UI/UX Designer',
    content: 'Collaborating with Degaga felt more like working with a product partner than just a developer. He cared deeply about the success of our project and brought valuable ideas to the table. Excellent coding and UX sense.',
    image: '/testimonials/timothy.jpg',
    rating: 5
  }
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
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide space-x-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-500'}`} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;