import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    isSuccess: false
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9+-\s()]*$/, "Must be a valid phone format")
        .min(10, 'Must be at least 10 characters'),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const serviceId = 'service_0jk5z3j';
      const templateId = 'template_gejn5sa'; 
      const userId = 'Qm5-MkLlXv5hLQDQA';
      
      emailjs.send(serviceId, templateId, {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        message: values.message,
        reply_to: values.email
      }, userId)
        .then(() => {
          setNotification({
            show: true,
            message: 'Message sent successfully! I will get back to you soon.',
            isSuccess: true
          });
          resetForm();
        })
        .catch((error) => {
          // EmailJS typically returns the error inside error.text
          const errorMsg = error.text || error.message || 'Unknown error occurred.';
          
          setNotification({
            show: true,
            message: `Failed to send: ${errorMsg}. Please check your EmailJS keys.`,
            isSuccess: false
          });
          console.error('Email sending failed full error:', error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/Degaga-Emiru', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/degaga-emiru996', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/Degaga_Emiru', label: 'Twitter' },
    { icon: <FiFacebook size={20} />, url: 'https://facebook.com/degagasiwayyee', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      {/* Notification popup */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] px-6 py-4 rounded-xl shadow-2xl font-medium text-white flex items-center space-x-3 ${
            notification.isSuccess 
              ? 'bg-green-500 dark:bg-green-600' 
              : 'bg-red-500 dark:bg-red-600'
          }`}
        >
          <span>{notification.message}</span>
        </motion.div>
      )}

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Get In <span className="text-primary-light dark:text-primary-dark">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? I'm currently open to new opportunities and would love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center mb-4 text-primary-light dark:text-primary-dark">
              <FiMail size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h3>
            <a href="mailto:degagaemiru@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              degagaemiru@gmail.com
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center mb-4 text-primary-light dark:text-primary-dark">
              <FiPhone size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
            <a href="tel:+251943091493" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              +251 943 091 493
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center mb-4 text-primary-light dark:text-primary-dark">
              <FiMapPin size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ayat, Addis Ababa, Ethiopia
            </p>
          </motion.div>
        </div>

        {/* Centered Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light dark:focus:ring-primary-dark/50 dark:focus:border-primary-dark transition-colors text-gray-900 dark:text-white ${
                    formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.name}</div>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light dark:focus:ring-primary-dark/50 dark:focus:border-primary-dark transition-colors text-gray-900 dark:text-white ${
                    formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.email}</div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+251 900 000 000"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light dark:focus:ring-primary-dark/50 dark:focus:border-primary-dark transition-colors text-gray-900 dark:text-white ${
                  formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="mt-1 text-sm text-red-500">{formik.errors.phone}</div>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light dark:focus:ring-primary-dark/50 dark:focus:border-primary-dark transition-colors text-gray-900 dark:text-white resize-none ${
                  formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="mt-1 text-sm text-red-500">{formik.errors.message}</div>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-all transform hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full md:w-auto px-8 py-3.5 bg-primary-light dark:bg-primary-dark text-white font-bold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {formik.isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;