// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div 
      ref={carousel} 
      className="cursor-grab overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div 
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="min-w-[300px] md:min-w-[400px] px-4 py-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full">
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
              <p className="text-gray-600 dark:text-gray-300">
                "{testimonial.content}"
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCarousel;