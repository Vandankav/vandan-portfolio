import { motion } from 'framer-motion';

type Skill = {
  name: string;
  icon: string;
  color: string;
};

const Skills = () => {
  const skills: Record<string, Skill[]> = {
    'Programming Languages': [
      { name: 'JavaScript', icon: 'devicon-javascript-plain', color: 'text-yellow-500' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', color: 'text-blue-600' },
      { name: 'Python', icon: 'devicon-python-plain', color: 'text-blue-500' },
      { name: 'C++', icon: 'devicon-cplusplus-plain', color: 'text-blue-700' },
      { name: 'HTML5', icon: 'devicon-html5-plain', color: 'text-orange-500' },
      { name: 'CSS3', icon: 'devicon-css3-plain', color: 'text-blue-500' },
    ],
    'Frontend': [
      { name: 'React', icon: 'devicon-react-original', color: 'text-blue-400' },
      { name: 'Redux', icon: 'devicon-redux-original', color: 'text-purple-600' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: 'text-blue-400' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: 'text-purple-600' },
    ],
    'Backend': [
      { name: 'Node.js', icon: 'devicon-nodejs-plain', color: 'text-green-600' },
      { name: 'Express.js', icon: 'devicon-express-original', color: 'text-gray-700 dark:text-gray-300' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: 'text-green-500' },
    ],
    'Tools & Others': [
      { name: 'Git', icon: 'devicon-git-plain', color: 'text-orange-600' },
      { name: 'GitHub', icon: 'devicon-github-original', color: 'text-gray-900 dark:text-white' },
      { name: 'Firebase', icon: 'devicon-firebase-plain', color: 'text-yellow-500' },
      { name: 'Heroku', icon: 'devicon-heroku-plain', color: 'text-purple-500' },
      { name: 'VS Code', icon: 'devicon-vscode-plain', color: 'text-blue-500' },
    ],
  };

  // Custom skill items without icons from devicon
  const customSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Team Collaboration', level: 88 },
    { name: 'Adaptability', level: 92 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I have experience with a variety of programming languages, frameworks, and tools. Here are some of the technologies I work with:
          </p>
        </motion.div>

        {/* Add DevIcons CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mb-3 transition-transform group-hover:scale-110">
                      <i className={`${skill.icon} text-3xl ${skill.color}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">Soft Skills</h3>
          <div className="space-y-6">
            {customSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="h-2.5 rounded-full bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Relevant Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">Relevant Coursework</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Data Structures',
              'Algorithms',
              'Database Management System',
              'Data Warehouse and Mining',
              'Web Development',
              'Object-Oriented Programming'
            ].map((course) => (
              <div key={course} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <span className="text-gray-800 dark:text-gray-200">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
