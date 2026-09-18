import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCode,
  FiLayers,
  FiServer,
  FiDatabase,
  FiLock,
  FiUserCheck,
  FiSearch,
  FiCreditCard,
  FiBookOpen,
  FiSend,
  FiCheckCircle,
  FiFolder,
  FiCpu
} from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Vision',
      role: 'Backend Developer Intern',
      period: '2026',
      location: 'Ethiopia',
      badgeColor: 'from-blue-500 to-indigo-600',
      summary: 'Contributed to backend development and participated in the design and implementation of software projects during my internship at Tech Vision.',
      projects: [
        {
          name: 'Learning Management System (LMS)',
          icon: <FiBookOpen className="text-blue-500" size={18} />,
          description: 'Contributed to the development of an LMS using Frappe Framework, focusing on backend functionality, database models, APIs, and system features.',
          highlights: [
            { text: 'Backend API & business logic implementation', icon: <FiServer className="text-blue-500" size={14} /> },
            { text: 'Frappe Framework & ERPNext customization', icon: <FiLayers className="text-blue-500" size={14} /> },
            { text: 'Database modeling with MariaDB', icon: <FiDatabase className="text-blue-500" size={14} /> },
          ],
          techStack: ['Python', 'Frappe Framework', 'ERPNext', 'MariaDB', 'REST API', 'JavaScript']
        },
        {
          name: 'TeleBot — Telegram Reverse Employment Marketplace',
          icon: <FiSend className="text-emerald-500" size={18} />,
          description: 'Contributed to an innovative Telegram-native reverse employment marketplace for Ethiopia enabling candidate discovery based on verified skills and credentials.',
          highlights: [
            { text: 'Backend architecture & API development', icon: <FiServer className="text-emerald-500" size={14} /> },
            { text: 'Authentication & user registration', icon: <FiLock className="text-emerald-500" size={14} /> },
            { text: 'Employee & employer profile management', icon: <FiUserCheck className="text-emerald-500" size={14} /> },
            { text: 'Candidate discovery & skill filtering', icon: <FiSearch className="text-emerald-500" size={14} /> },
            { text: 'Hiring workflow & business logic', icon: <FiCpu className="text-emerald-500" size={14} /> },
            { text: 'Database models & API integration', icon: <FiDatabase className="text-emerald-500" size={14} /> },
            { text: 'Chapa payment functionality integration', icon: <FiCreditCard className="text-emerald-500" size={14} /> },
          ],
          techStack: [
            'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis',
            'Celery', 'React', 'TypeScript', 'Tailwind CSS', 'Telegram Bot API',
            'Telegram Mini Apps', 'Chapa', 'Docker'
          ]
        }
      ]
    },
    {
      company: 'DX Valley',
      role: 'Backend Developer Intern',
      period: '2025–2026',
      location: 'Ethiopia',
      badgeColor: 'from-purple-500 to-pink-600',
      summary: 'Contributed to backend development and system implementation as part of the internship program.',
      projects: [
        {
          name: 'Loan Management System',
          icon: <FiCreditCard className="text-purple-500" size={18} />,
          description: 'Contributed to the development of a Loan Management System, working on backend services and integration with the frontend.',
          highlights: [
            { text: 'Developed backend APIs using Spring Boot', icon: <FiServer className="text-purple-500" size={14} /> },
            { text: 'Implemented business logic & backend services', icon: <FiCpu className="text-purple-500" size={14} /> },
            { text: 'PostgreSQL database design & persistence', icon: <FiDatabase className="text-purple-500" size={14} /> },
            { text: 'Integrated APIs with React & TypeScript frontend', icon: <FiCode className="text-purple-500" size={14} /> },
            { text: 'Testing, debugging & team collaboration', icon: <FiCheckCircle className="text-purple-500" size={14} /> },
          ],
          techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST API']
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/60 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark mb-4">
            <FiBriefcase className="w-4 h-4" /> CAREER & EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            💼 Work <span className="text-primary-light dark:text-primary-dark">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hands-on software development internships focusing on backend architecture, database systems, APIs, and real-world web solutions.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-primary-light/30 dark:border-primary-dark/30 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-6 md:pl-10"
            >
              {/* Timeline Icon Node */}
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gradient-to-r ${exp.badgeColor} flex items-center justify-center text-white shadow-md ring-4 ring-gray-50 dark:ring-gray-800`}>
                <FiBriefcase size={14} />
              </div>

              {/* Main Company Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700/80 hover:shadow-lg transition-shadow">
                {/* Header Row: Role & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      {exp.role}
                      <span className="text-gray-400 font-normal">@</span>
                      <span className="text-primary-light dark:text-primary-dark">{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <FiCalendar className="text-primary-light dark:text-primary-dark" size={12} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <FiMapPin className="text-emerald-500" size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Company Overview */}
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Projects Section */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                    <FiFolder size={14} /> Featured Projects
                  </h4>

                  <div className="grid grid-cols-1 gap-6">
                    {exp.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-gray-50/80 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200/80 dark:border-gray-700/60 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-colors"
                      >
                        {/* Project Name */}
                        <div className="flex items-center gap-2 mb-2">
                          {proj.icon}
                          <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                            {proj.name}
                          </h5>
                        </div>

                        {/* Project Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {proj.description}
                        </p>

                        {/* Highlights Grid */}
                        {proj.highlights && proj.highlights.length > 0 && (
                          <div className="mb-4">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block">
                              Key Contributions:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {proj.highlights.map((hl, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="mt-0.5 shrink-0">{hl.icon}</span>
                                  <span>{hl.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack Pills */}
                        <div>
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block">
                            Tech Stack:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.techStack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80 hover:border-primary-light dark:hover:border-primary-dark transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

