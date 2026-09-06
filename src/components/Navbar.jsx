import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    { id: 1, link: 'home', text: 'Inicio' },
    { id: 2, link: 'about', text: 'Sobre Mi' },
    { id: 3, link: 'experience', text: 'Experiencia' },
    { id: 4, link: 'projects', text: 'Proyectos' },
    { id: 5, link: 'tasks', text: 'Tareas' },
    { id: 6, link: 'contact', text: 'Contáctame' },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 80);
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 25 },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-2 sm:pt-3 md:pt-4"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`
          relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 
          mx-auto rounded-4xl transition-all duration-300
          ${shadow 
            ? 'shadow-[0_0_20px_rgb(34_211_238)] dark:shadow-[0_0_30px_rgb(34_211_238)]' 
            : 'shadow-md'
          }
          bg-white/70 dark:bg-gray-900/70 backdrop-blur-md
          border border-white/20 dark:border-gray-700/30
        `}
      >
        <div className="flex justify-between items-start pt-1 w-full h-14 sm:h-16 px-4 sm:px-6 md:px-8">

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold tracking-tight pt-3"
            >
            <span className="text-cyan-400 dark:text-white">BRITTANY</span>
            <span className="text-black dark:text-cyan-300">.PORT</span>
          </motion.a>

          {/* Enlaces - escritorio (tamaño reducido) */}
          <ul className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-8 text-gray-700 dark:text-gray-200">
            {links.map(({ id, link, text }) => (
              <li key={id}>
                <a
                  href={`#${link}`}
                  className="text-xs sm:text-sm lg:text-base font-medium hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300"
                >
                  {text}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className="p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>

          {/* Botones móvil (tamaño y posición ajustados) */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 text-base"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-gray-800 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil (sin cambios, se ve bien) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-2xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map(({ id, link, text }) => (
              <a
                key={id}
                href={`#${link}`}
                onClick={closeMobileMenu}
                className="text-gray-800 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors text-xl sm:text-2xl"
              >
                {text}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;