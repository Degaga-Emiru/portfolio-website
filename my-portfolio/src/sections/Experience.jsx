import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FiCpu,
  FiAward,
  FiStar,
  FiGrid
} from 'react-icons/fi';
import { FaGraduationCap, FaUniversity, FaMedal } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const experienceData = [
    {
      id: 'tech-vision',
      type: 'work',
      company: 'Tech Vision',
      role: 'Backend Developer Intern',
      period: '2026',
      location: 'Ethiopia',
      badgeColor: 'from-blue-500 to-indigo-600',
      summary: 'Backend development and software architecture during internship at Tech Vision.',
      projects: [
        {
          name: 'Learning Management System (LMS)',
          icon: <FiBookOpen className="text-blue-500" size={18} />,
          description: 'LMS backend functionality, database models, and APIs built with Frappe Framework.',
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
          description: 'Telegram-native marketplace for Ethiopia enabling skill-based candidate discovery & employer credential inspection.',
          highlights: [
            { text: 'Backend architecture & API development', icon: <FiServer className="text-emerald-500" size={14} /> },
            { text: 'Authentication & user registration', icon: <FiLock className="text-emerald-500" size={14} /> },
            { text: 'Employee & employer profile management', icon: <FiUserCheck className="text-emerald-500" size={14} /> },
            { text: 'Candidate discovery & skill filtering', icon: <FiSearch className="text-emerald-500" size={14} /> },
            { text: 'Hiring workflow & Chapa payment integration', icon: <FiCreditCard className="text-emerald-500" size={14} /> },
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
      id: 'dx-valley',
      type: 'work',
      company: 'DX Valley',
      role: 'Backend Developer Intern',
      period: '2025–2026',
      location: 'Ethiopia',
      badgeColor: 'from-purple-500 to-pink-600',
      summary: 'Backend development and system implementation for fintech solutions.',
      projects: [
        {
          name: 'Loan Management System',
          icon: <FiCreditCard className="text-purple-500" size={18} />,
          description: 'Backend services & frontend integration for automated loan management.',
          highlights: [
            { text: 'Developed backend APIs with Spring Boot', icon: <FiServer className="text-purple-500" size={14} /> },
            { text: 'Implemented business logic & backend services', icon: <FiCpu className="text-purple-500" size={14} /> },
            { text: 'PostgreSQL database design & persistence', icon: <FiDatabase className="text-purple-500" size={14} /> },
            { text: 'Integrated APIs with React & TypeScript frontend', icon: <FiCode className="text-purple-500" size={14} /> },
            { text: 'Testing, debugging & team collaboration', icon: <FiCheckCircle className="text-purple-500" size={14} /> },
          ],
          techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST API']
        }
      ]
    },
    {
      id: 'hawassa-uni',
      type: 'education',
      company: 'Hawassa University',
      role: 'BSc in Computer Science',
      period: 'Graduated',
      location: 'Ethiopia',
      badgeColor: 'from-amber-500 to-orange-600',
      summary: 'Solid foundation in software engineering, algorithms, databases, web development, and system architecture.',
      distinction: 'Graduated with Distinction',
      gpa: '3.55 / 4.00',
      projects: [
        {
          name: 'Computer Science Core Principles',
          icon: <FaUniversity className="text-amber-500" size={18} />,
          description: 'Comprehensive software engineering program focused on practical and theoretical computing skills.',
          highlights: [
            { text: 'Software engineering & software architecture', icon: <FiCpu className="text-amber-500" size={14} /> },
            { text: 'Algorithms & data structures', icon: <FiCode className="text-amber-500" size={14} /> },
            { text: 'Databases & web development principles', icon: <FiDatabase className="text-amber-500" size={14} /> },
          ],
          techStack: ['Software Engineering', 'Algorithms', 'Databases', 'Web Dev', 'Software Architecture']
        }
      ]
    },
    {
      id: 'alx-africa',
      type: 'education',
      company: 'ALX',
      role: 'Software Engineering — Front-End Web Development',
      period: 'Professional Program',
      location: 'Online',
      badgeColor: 'from-cyan-500 to-blue-600',
      summary: 'Intensive professional training program building responsive and interactive web applications.',
      projects: [
        {
          name: 'Front-End Web Development',
          icon: <FaGraduationCap className="text-cyan-500" size={18} />,
          description: 'Hands-on experience developing modern, responsive user interfaces and web apps.',
          highlights: [
            { text: 'Building responsive & interactive web applications', icon: <FiLayers className="text-cyan-500" size={14} /> },
            { text: 'Modern JavaScript & Git/GitHub collaboration', icon: <FiCode className="text-cyan-500" size={14} /> },
          ],
          techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'Git', 'GitHub']
        }
      ]
    }
  ];

  const filteredData = activeTab === 'all'
    ? experienceData
    : experienceData.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/60 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark mb-4">
            <FiBriefcase className="w-4 h-4" /> CAREER & ACADEMICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            💼 Experience & <span className="text-primary-light dark:text-primary-dark">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My backend development internships, software projects, and academic background in computer science.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-primary-light text-white dark:bg-primary-dark dark:text-gray-900 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark'
              }`}
            >
              <FiGrid size={15} /> All Journey
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-primary-light text-white dark:bg-primary-dark dark:text-gray-900 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark'
              }`}
            >
              <FiBriefcase size={15} /> Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-primary-light text-white dark:bg-primary-dark dark:text-gray-900 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark'
              }`}
            >
              <FaGraduationCap size={16} /> Education & Training
            </button>
          </div>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-primary-light/30 dark:border-primary-dark/30 ml-4 md:ml-8 space-y-10">
          <AnimatePresence mode="wait">
            {filteredData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative pl-6 md:pl-10"
              >
                {/* Timeline Icon Node */}
                <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gradient-to-r ${exp.badgeColor} flex items-center justify-center text-white shadow-md ring-4 ring-gray-50 dark:ring-gray-800`}>
                  {exp.type === 'work' ? <FiBriefcase size={14} /> : <FaGraduationCap size={14} />}
                </div>

                {/* Main Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700/80 hover:shadow-lg transition-all duration-300">
                  {/* Header Row: Role & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 flex-wrap">
                        {exp.role}
                        <span className="text-gray-400 font-normal">@</span>
                        <span className="text-primary-light dark:text-primary-dark">{exp.company}</span>
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
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

                  {/* Distinction / GPA Badges for Education */}
                  {(exp.distinction || exp.gpa) && (
                    <div className="flex flex-wrap gap-2.5 mb-4">
                      {exp.distinction && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <FaMedal size={12} /> {exp.distinction}
                        </span>
                      )}
                      {exp.gpa && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          <FiAward size={12} /> GPA: {exp.gpa}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Short Summary */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Projects / Highlights */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-5">
                      {exp.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-gray-50/80 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200/80 dark:border-gray-700/60 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-colors"
                        >
                          {/* Project Header */}
                          <div className="flex items-center gap-2 mb-2">
                            {proj.icon}
                            <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                              {proj.name}
                            </h4>
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {proj.description}
                          </p>

                          {/* Highlights */}
                          {proj.highlights && (
                            <div className="mb-4">
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block">
                                Key Highlights:
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

                          {/* Tech Stack */}
                          {proj.techStack && (
                            <div>
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block">
                                Skills & Tech:
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
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;


