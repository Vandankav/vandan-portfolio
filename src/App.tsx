import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <MainLayout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
