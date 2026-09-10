import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      text: 'Inicio',
      type: 'home',
    },
    {
      id: 2,
      text: 'Sobre mí',
      type: 'section',
      link: 'about',
    },
    {
      id: 3,
      text: 'Experiencia',
      type: 'section',
      link: 'experience',
    },
    {
      id: 4,
      text: 'Proyectos',
      type: 'section',
      link: 'projects',
    },
    {
      id: 5,
      text: 'Tareas',
      type: 'dropdown',
      submenu: [
        {
          link: '/tareas/tarjeta-de-presentacion',
          text: 'Tarjeta de presentación',
        },
      ],
    },
    {
      id: 6,
      text: 'Contáctame',
      type: 'section',
      link: 'contact',
    },
  ];

  // modo oscuro

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // navegador

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 50);
    };

    window.addEventListener('scroll', handleShadow);

    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  //funciones

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // navegar

  const handleSectionNavigation = (section) => {
    closeMenus();

    // para redirigir o volver  ala parte superior
    if (window.location.pathname === '/') {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  // efectos

  const navVariants = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.18,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.97,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 flex justify-center px-3 sm:px-4 pt-2 sm:pt-3"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >

      <div
        className={`
          relative w-full max-w-6xl
          rounded-2xl
          border border-white/20 dark:border-gray-700/30
          bg-white/75 dark:bg-gray-900/75
          backdrop-blur-xl
          transition-all duration-300
          ${
            shadow
              ? 'shadow-[0_8px_30px_rgba(34,211,238,0.18)]'
              : 'shadow-md'
          }
        `}
      >
        <div
          className="
            flex items-center justify-between
            h-14 sm:h-16
            px-4 sm:px-6 lg:px-8
          "
        >
          {/* logo*/}

          <Link
            to="/"
            onClick={closeMenus}
            className="
              text-sm sm:text-base md:text-lg lg:text-xl
              font-bold tracking-tight
              transition-transform duration-200
              hover:scale-105
              select-none
            "
          >
            <span className="text-cyan-400">PORTAFOLIO</span>
            <span className="text-gray-900 dark:text-cyan-300">
              .ITTANY
            </span>
          </Link>

          {/* amburguesa menu*/}

          <div className="hidden md:flex items-center">
            <ul
              className="
                flex items-center
                gap-4 lg:gap-6 xl:gap-8
                text-gray-700 dark:text-gray-200
              "
            >
              {links.map((item) => {
                // inicio

                if (item.type === 'home') {
                  return (
                    <li key={item.id}>
                      <Link
                        to="/"
                        onClick={closeMenus}
                        className="
                          relative
                          text-sm lg:text-base
                          font-medium
                          transition-colors duration-200
                          hover:text-cyan-400
                          dark:hover:text-cyan-300
                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:w-0
                          after:h-[2px]
                          after:bg-cyan-400
                          after:transition-all
                          hover:after:w-full
                        "
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                }


                if (item.type === 'section') {
                  return (
                    <li key={item.id}>
                      <Link
                        to={`/#${item.link}`}
                        onClick={() =>
                          handleSectionNavigation(item.link)
                        }
                        className="
                          relative
                          text-sm lg:text-base
                          font-medium
                          transition-colors duration-200
                          hover:text-cyan-400
                          dark:hover:text-cyan-300
                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:w-0
                          after:h-[2px]
                          after:bg-cyan-400
                          after:transition-all
                          hover:after:w-full
                        "
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                }
                // tareas

                if (item.type === 'dropdown') {
                  return (
                    <li key={item.id} className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setDropdownOpen((prev) => !prev)
                        }
                        className="
                          relative
                          flex items-center gap-1.5
                          text-sm lg:text-base
                          font-medium
                          text-gray-700
                          dark:text-gray-200
                          transition-colors duration-200
                          hover:text-cyan-400
                          dark:hover:text-cyan-300

                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:w-0
                          after:h-[2px]
                          after:bg-cyan-400
                          after:transition-all
                          after:duration-200
                          hover:after:w-full
                        "
                      >
                        {item.text}

                        <FaChevronDown
                          className={`
                            text-[4px]
                            transition-transform duration-200
                            ${
                              dropdownOpen
                                ? 'rotate-180'
                                : ''
                            }
                          `}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="
                              absolute
                              top-full
                              left-1/2
                              -translate-x-1/2
                              pt-1
                            "
                          >
                            <div
                              className="
                                w-45
                                rounded-xl
                                border border-gray-200/70
                                dark:border-gray-700/50
                                bg-white/95
                                dark:bg-gray-900/95
                                backdrop-blur-xl
                                shadow-xl
                                overflow-hidden
                              "
                            >
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.link}
                                  to={sub.link}
                                  onClick={closeMenus}
                                  className="
                                    block
                                    px-4 py-3
                                    text-sm
                                    text-gray-700
                                    dark:text-gray-200
                                    transition-colors duration-200
                                    hover:bg-cyan-50
                                    hover:text-cyan-500
                                    dark:hover:bg-gray-800
                                    dark:hover:text-cyan-300
                                  "
                                >
                                  {sub.text}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }


                return null;
              })}
            </ul>

            {/* DARK MODE */}

            <button
              onClick={toggleDarkMode}
              className="
                ml-5 lg:ml-7
                w-9 h-9
                flex items-center justify-center
                rounded-full
                bg-gray-100
                dark:bg-gray-800
                text-gray-800
                dark:text-yellow-300
                hover:bg-gray-200
                dark:hover:bg-gray-700
                transition-all duration-200
                hover:scale-105
              "
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* botones */}

          <div className="flex md:hidden items-center gap-2">
            {/* DARK MODE */}

            <button
              onClick={toggleDarkMode}
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-full
                bg-gray-100
                dark:bg-gray-800
                text-gray-800
                dark:text-yellow-300
                transition-all duration-200
              "
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* MENU */}

            <button
              onClick={() =>
                setMobileMenuOpen((prev) => !prev)
              }
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-full
                text-gray-800
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition-all duration-200
              "
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* menu del mobil */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                md:hidden
                border-t
                border-gray-200/60
                dark:border-gray-700/50
              "
            >
              <div className="px-4 py-4">
                <div className="flex flex-col gap-1">
                  {links.map((item) => {

                    if (item.type === 'home') {
                      return (
                        <Link
                          key={item.id}
                          to="/"
                          onClick={closeMenus}
                          className="
                            px-4 py-3
                            rounded-xl
                            text-base
                            font-medium
                            text-gray-800
                            dark:text-white
                            hover:bg-cyan-50
                            hover:text-cyan-500
                            dark:hover:bg-gray-800
                            dark:hover:text-cyan-300
                            transition-colors
                          "
                        >
                          {item.text}
                        </Link>
                      );
                    }


                    if (item.type === 'section') {
                      return (
                        <Link
                          key={item.id}
                          to={`/#${item.link}`}
                          onClick={() =>
                            handleSectionNavigation(
                              item.link
                            )
                          }
                          className="
                            px-4 py-3
                            rounded-xl
                            text-base
                            font-medium
                            text-gray-800
                            dark:text-white
                            hover:bg-cyan-50
                            hover:text-cyan-500
                            dark:hover:bg-gray-800
                            dark:hover:text-cyan-300
                            transition-colors
                          "
                        >
                          {item.text}
                        </Link>
                      );
                    }
                    if (item.type === 'dropdown') {
                      return (
                        <div key={item.id}>
                          <button
                            type="button"
                            onClick={() =>
                              setDropdownOpen(
                                (prev) => !prev
                              )
                            }
                            className="
                              w-full
                              flex items-center justify-between
                              px-4 py-3
                              rounded-xl
                              text-base
                              font-medium
                              text-gray-800
                              dark:text-white
                              hover:bg-cyan-50
                              hover:text-cyan-500
                              dark:hover:bg-gray-800
                              dark:hover:text-cyan-300
                              transition-colors
                            "
                          >
                            <span>{item.text}</span>

                            <FaChevronDown
                              className={`
                                text-xs
                                transition-transform duration-200
                                ${
                                  dropdownOpen
                                    ? 'rotate-180'
                                    : ''
                                }
                              `}
                            />
                          </button>

                          <AnimatePresence>
                            {dropdownOpen && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: 'auto',
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-1 mb-1 border-l border-cyan-400/30 pl-3">
                                  {item.submenu.map(
                                    (sub) => (
                                      <Link
                                        key={sub.link}
                                        to={sub.link}
                                        onClick={closeMenus}
                                        className="
                                          block
                                          px-4 py-2.5
                                          rounded-lg
                                          text-sm
                                          text-gray-600
                                          dark:text-gray-300
                                          hover:text-cyan-500
                                          dark:hover:text-cyan-300
                                          hover:bg-cyan-50/70
                                          dark:hover:bg-gray-800/70
                                          transition-colors
                                        "
                                      >
                                        {sub.text}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
