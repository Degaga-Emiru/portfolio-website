// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, 
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, 
  FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, 
  SiExpress, SiPostgresql, SiGraphql,
  SiFirebase, SiRedis, SiNextdotjs
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 80 },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: 90 },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
        { name: "Express", icon: <SiExpress className="text-black dark:text-white" />, level: 80 },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 75 },
        { name: "Java", icon: <FaJava className="text-[#007396]" />, level: 70 },
        { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" />, level: 75 },
      ]
    },
    {
      category: "Database & DevOps",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: 75 },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, level: 70 },
        { name: "Redis", icon: <SiRedis className="text-[#DC382D]" />, level: 65 },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 75 },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" />, level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies I work with" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-dark dark:text-white mb-6 text-center">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-dark dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;