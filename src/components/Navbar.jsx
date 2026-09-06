// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // 👈 Importa Link para navegación

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Enlaces del navbar (con submenú en "Tareas")
  const links = [
    { id: 1, link: 'home', text: 'Inicio' },
    { id: 2, link: 'about', text: 'Sobre Mi' },
    { id: 3, link: 'experience', text: 'Experiencia' },
    { id: 4, link: 'projects', text: 'Proyectos' },
    {
      id: 5,
      text: 'Tareas',
      submenu: [
        { link: '/tareas/tarjeta-de-presentacion', text: 'Tarjeta de presentación' },
        // Aquí puedes agregar más tareas en el futuro
      ],
    },
    { id: 6, link: 'contact', text: 'Contáctame' },
  ];

  // Efectos de darkMode y shadow (igual que antes)
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
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // Animaciones (iguales a las que tenías)
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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15 },
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
          {/* Logo */}
          <Link
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold tracking-tight pt-3"
          >
            <span className="text-cyan-400 dark:text-white">BRITTANY</span>
            <span className="text-black dark:text-cyan-300">.PORT</span>
          </Link>

          {/* Enlaces - escritorio */}
          <ul className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-8 text-gray-700 dark:text-gray-200">
            {links.map((item) => {
              // Si el item tiene submenu, renderiza dropdown
              if (item.submenu) {
                return (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {item.text}
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 py-2"
                        >
                          {item.submenu.map((sub) => (
                            <li key={sub.link}>
                              <Link
                                to={sub.link}
                                onClick={closeMobileMenu}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-700/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                              >
                                {sub.text}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              // Si es un enlace normal (sin submenu)
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.link}`}
                    className="text-xs sm:text-sm lg:text-base font-medium hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
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

          {/* Botones móvil */}
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

      {/* Menú móvil (con submenú) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 text-2xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.id} className="flex flex-col items-center space-y-3">
                    <span className="text-gray-800 dark:text-white font-medium">
                      {item.text}
                    </span>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.link}
                        to={sub.link}
                        onClick={closeMobileMenu}
                        className="text-lg text-gray-600 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
                      >
                        {sub.text}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <a
                  key={item.id}
                  href={`#${item.link}`}
                  onClick={closeMobileMenu}
                  className="text-gray-800 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors text-xl sm:text-2xl"
                >
                  {item.text}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;