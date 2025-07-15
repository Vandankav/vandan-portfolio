import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 p-2 overflow-hidden text-gray-700 transition-colors rounded-full hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon for dark mode (shown when currently in dark mode) */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        initial={false}
        animate={{
          opacity: isDarkMode ? 1 : 0,
          scale: isDarkMode ? 1 : 0,
          rotate: isDarkMode ? 0 : -90
        }}
        transition={{ duration: 0.2 }}
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </motion.svg>

      {/* Moon icon for light mode (shown when currently in light mode) */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        initial={false}
        animate={{
          opacity: isDarkMode ? 0 : 1,
          scale: isDarkMode ? 0 : 1,
          rotate: isDarkMode ? 90 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </motion.svg>
    </motion.button>
  );
};

export default ThemeToggle;
