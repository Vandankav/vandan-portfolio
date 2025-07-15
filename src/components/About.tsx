import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a Computer Engineering student at Dwarkadas J. Sanghvi College
              of Engineering, passionate about web development and creating
              meaningful digital experiences. I'm particularly focused on the
              MERN stack, which allows me to build robust, scalable, and
              high-performance web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My journey in programming started during high school, and I've
              since been honing my skills through both academic coursework and
              personal projects. I enjoy solving complex problems and turning
              ideas into reality through code.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and continuously improving
              my skill set to stay at the forefront of web development trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>

            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dwarkadas J. Sanghvi College of Engineering
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 ml-5 pl-3 border-l-2 border-blue-600 dark:border-blue-400">
                Bachelors in Computer Engineering, 3rd Year
                <br />
                2022 - 2026
                <br />
                CGPA: 8.91/10
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Prakash College of Commerce and Science
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 ml-5 pl-3 border-l-2 border-blue-600 dark:border-blue-400">
                HSC Maharashtra
                <br />
                2022
                <br />
                Percentage: 73.2%
                <br />
                MHT-CET Entrance Exam: 98.8 percentile
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sri Sri Ravishankar Vidya Mandir (SSRVM)
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 ml-5 pl-3 border-l-2 border-blue-600 dark:border-blue-400">
                SSC Maharashtra
                <br />
                2020
                <br />
                Percentage: 91.2%
              </p>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-24 font-semibold text-gray-900 dark:text-white">Name:</span>
                  <span className="text-gray-700 dark:text-gray-300">Vandan Kava</span>
                </li>
                <li className="flex items-start">
                  <span className="w-24 font-semibold text-gray-900 dark:text-white">Email:</span>
                  <a href="mailto:kava.vandan@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">kava.vandan@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <span className="w-24 font-semibold text-gray-900 dark:text-white">Phone:</span>
                  <a href="tel:+919619137441" className="text-gray-700 dark:text-gray-300">+91-9619137441</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-24 font-semibold text-gray-900 dark:text-white">GitHub:</span>
                  <a href="https://github.com/Vandankav" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/Vandankav</a>
                </li>
                <li className="flex items-start">
                  <span className="w-24 font-semibold text-gray-900 dark:text-white">LinkedIn:</span>
                  <a href="https://linkedin.com/in/VandanKava" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">linkedin.com/in/VandanKava</a>
                </li>
                <li className="flex items-start">
                  <span className="w-24 font-semibold text-gray-900 dark:text-white">Resume:</span>
                  <a href="/images/VandanKava_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Download PDF</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
