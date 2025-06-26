// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert('Message sent successfully!');
      console.log(values);
      resetForm();
    },
  });

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Let’s <span className="text-purple-600">create something</span> amazing together!
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Feel free to reach out for projects, collaborations, or web development inquiries via the form or email!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/hexagon.svg')] opacity-10" />

            <div className="space-y-6 relative z-10">
              {/* Email */}
              <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-4">
                <FiMail className="text-2xl" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-sm">samuelephrem07@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-4">
                <FiPhone className="text-2xl" />
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-sm">+251983094987</p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center space-x-4">
                <FiMapPin className="text-2xl" />
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-sm">NSL, A.A, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={formik.handleSubmit}
            className="bg-white p-6 rounded-3xl shadow-md space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Let's Work <span className="text-purple-600">Together!</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className="border-2 border-purple-500 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className="border-2 border-purple-500 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="border-2 border-purple-500 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="border-2 border-purple-500 rounded-lg px-4 py-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full border-2 border-purple-500 rounded-lg px-4 py-2"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Send Now
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
