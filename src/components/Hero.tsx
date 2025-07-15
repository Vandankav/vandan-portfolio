import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Vandan Kava
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Computer Engineering Student
              <div className="text-blue-600 dark:text-blue-400">
                MERN Stack Developer
              </div>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I'm passionate about creating efficient and user-friendly web
              applications. With experience in MongoDB, Express.js, React, and
              Node.js, I build full-stack applications that are both robust and
              elegant.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-md transition-colors shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-400 dark:border-blue-400"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 dark:opacity-30 transform scale-110" />
              <div className="relative overflow-hidden rounded-full h-72 w-72 sm:h-80 sm:w-80 mx-auto border-4 border-white shadow-xl dark:border-gray-700">
                <img
                  src="/images/Vandan.png"
                  alt="Vandan Kava"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-10 sm:mt-24"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex space-x-6">
            <a
              href="https://github.com/Vandankav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/VandanKava"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:kava.vandan@gmail.com"
              className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
              Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div> */}
    </section>
  );
};

export default Hero;
