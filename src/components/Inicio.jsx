// src/components/Inicio.jsx
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import brittanyImg from '../assets/brittany.jpeg';

const Inicio = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = [
    'Brittany',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'React Developer',
  ];

  const handleTyping = useCallback(() => {
    const currentTitle = titles[loopNum % titles.length];

    if (isDeleting) {
      setText(currentTitle.substring(0, text.length - 1));
      setTypingSpeed(40);
    } else {
      setText(currentTitle.substring(0, text.length + 1));
      setTypingSpeed(120);
    }

    if (!isDeleting && text === currentTitle) {
      setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  const icons = [
    { Icon: FaReact, color: '#61DAFB' },
    { Icon: FaNodeJs, color: '#68A063' },
    { Icon: SiNextdotjs, color: '#111827' },
    { Icon: FaJsSquare, color: '#F7DF1E' },
    { Icon: SiTailwindcss, color: '#06B6D4' },
    { Icon: FaPython, color: '#3776AB' },
    { Icon: FaVuejs, color: '#4FC08D' },
    { Icon: SiTypescript, color: '#3178C6' },
  ];

  const radius = 190;

  const getIconPosition = (index) => {
    const angle = (index / icons.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 font-sans"
    >
      {/* Burbujas de fondo */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-24 lg:flex-row lg:gap-10">
          {/* COLUMNA IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:max-w-2xl lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              Disponible para nuevos proyectos
            </motion.div>

            <motion.h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Hola, soy
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="ml-1 text-cyan-500 animate-pulse">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mx-auto mb-9 max-w-xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl lg:mx-0 dark:text-slate-300"
            >
              Desarrollo soluciones web modernas, intuitivas y funcionales,
              combinando frontend, backend y diseño de interfaces para crear
              experiencias digitales completas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <motion.a
                href="#proyectos"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Ver proyectos
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/60 px-8 py-3.5 font-semibold text-slate-700 backdrop-blur-md transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                Contáctame
              </motion.a>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA – Círculo con iconos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative flex h-[420px] w-[420px] max-w-full flex-shrink-0 items-center justify-center scale-[0.78] sm:scale-90 md:scale-100"
          >
            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-cyan-400/30"
            />

            <div
              className="absolute h-[280px] w-[280px] rounded-full border-2 border-cyan-400/70"
              style={{
                boxShadow:
                  '0 0 30px rgba(34, 211, 238, 0.20), inset 0 0 30px rgba(34, 211, 238, 0.05)',
              }}
            />

            <div className="absolute h-[235px] w-[45px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent" />

            <motion.img
              src={brittanyImg}
              alt="Brittany"
              initial={{ scale: 0.8 }}
              animate={{
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                scale: { duration: 0.7 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute z-20 h-[210px] w-[210px] rounded-full border-4 border-white object-cover shadow-2xl dark:border-slate-800"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 z-30 h-0 w-0"
            >
              {icons.map(({ Icon, color }, index) => {
                const { x, y } = getIconPosition(index);
                return (
                  <motion.div
                    key={index}
                    className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900"
                    style={{ x: x - 28, y: y - 28 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.25 }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 26,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Icon size={30} color={color} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;