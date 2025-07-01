// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 characters'),
      message: Yup.string().required('Required').min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
        alert('Thank you for contacting us! We will reply to your message soon.');
      }, 400);
    },
  });

  const socialLinks = [
    { icon: <FiGithub size={24} />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FiTwitter size={24} />, url: 'https://twitter.com/yourusername' },
    { icon: <FiMail size={24} />, url: 'mailto:your.email@example.com' },
    { icon: <FiFacebook size={24} />, url: 'https://facebook.com/yourusername' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Get In <span className="text-primary-light dark:text-primary-dark">Touch</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Your name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.name}</div>
                ) : null}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='youremail@gmail.com'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder='Phone number'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.phone}</div>
                ) : null}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='write your message here'
                  rows={5}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.message}</div>
                ) : null}
              </div>
              
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2" >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out to me for any questions or opportunities. I'm always open 
                to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiMail className="text-primary-light dark:text-primary-dark mr-4" size={20} />
                  <span className="dark:text-white">your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <FiLinkedin className="text-primary-light dark:text-primary-dark mr-4" size={20} />
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dark:text-white hover:underline"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
                <div className="flex items-center">
      <FiPhone className="text-primary-light dark:text-primary-dark mr-4" size={20} />
      <a 
        href="tel:+1234567890" 
        className="dark:text-white hover:underline"
      >
        +1 (234) 567-890
      </a>
    </div>
    <div className="flex items-start">
      <FiMapPin className="text-primary-light dark:text-primary-dark mr-4 mt-1" size={20} />
      <span className="dark:text-white">
        123 Main Street<br />
        City, State 10001<br />
        Country
      </span>
    </div>
                <div className="flex items-center">
                  <FiGithub className="text-primary-light dark:text-primary-dark mr-4" size={20} />
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dark:text-white hover:underline"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 dark:text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;