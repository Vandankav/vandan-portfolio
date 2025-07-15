import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative pl-8 sm:pl-12 py-6 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Timeline marker */}
            <div className="flex flex-col items-center absolute left-0 top-0 h-full">
              <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10" />
              <div className="w-1 h-full bg-blue-600 dark:bg-blue-400 opacity-25" />
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
              <div className="flex flex-wrap justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Software Developer Intern
                </h3>
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-2 px-3 rounded-full">
                  Nov 2024 - Jan 2025
                </span>
              </div>

              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Mastical
              </h4>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Designed a robust dashboard for the Task Management
                    Application for Tushar Mistry Design Studio, enabling
                    seamless task tracking, collaboration, and management.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Built an Employee Tracking Application for Chamfers and
                    Fillets, allowing employees to securely check in and out
                    using Firebase Authentication. Admins can access
                    check-in/check-out history and view employee locations via
                    map visualizations.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Node.js
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  MongoDB
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Firebase
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Express.js
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
