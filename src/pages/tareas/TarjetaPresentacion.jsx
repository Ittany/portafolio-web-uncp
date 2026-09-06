// src/pages/tareas/TarjetaPresentacion.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import brittanyImg from '../../assets/brittany.jpeg'; // Ajusta la ruta si tu imagen está en otro lado

const TarjetaPresentacion = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          relative
          w-full
          max-w-sm
          mx-auto
          p-6
          rounded-3xl
          bg-white/80
          dark:bg-gray-800/80
          backdrop-blur-lg
          border
          border-white/20
          dark:border-gray-700/30
          shadow-2xl
          shadow-cyan-500/10
          dark:shadow-cyan-400/5
          transition-all
          hover:shadow-cyan-500/20
          dark:hover:shadow-cyan-400/10
          hover:-translate-y-1
          duration-300
        "
      >
        {/* Foto de perfil */}
        <div className="flex justify-center -mt-12">
          <motion.img
            src={brittanyImg}
            alt="Brittany"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="
              w-28
              h-28
              rounded-full
              border-4
              border-white
              dark:border-gray-700
              shadow-lg
              object-cover
              bg-cyan-100
              dark:bg-gray-700
            "
          />
        </div>

        {/* Nombre */}
        <h3 className="text-center text-xl font-bold text-gray-800 dark:text-white mt-4">
          Brittany
        </h3>

        {/* Carrera */}
        <p className="text-center text-sm text-cyan-600 dark:text-cyan-400 font-medium">
          Ingeniería de Sistemas - UNCP
        </p>

        {/* Descripción del rol */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center">
          <p>
            <span className="font-semibold text-gray-800 dark:text-white">
              MI ROL:
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800/30 dark:to-blue-800/30 px-2 py-0.5 rounded-md">
              Full Stack Developer
            </span>
          </p>
          <p className="mt-2">
            Me apasiona conectar el mundo visual del{' '}
            <strong className="text-gray-800 dark:text-white">Frontend</strong>{' '}
            con la lógica del{' '}
            <strong className="text-gray-800 dark:text-white">Backend</strong>.
            Disfruto crear soluciones completas y escalables.
          </p>
        </div>

        {/* Enlaces */}
        <div className="mt-6 flex justify-center gap-3">
          <motion.a
            href="https://github.com/Ittany"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/brittanygonzalesq/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-[#0a66c2] text-white shadow-md hover:bg-[#004182] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </motion.a>

          <motion.a
            href="mailto:gonzalesbrittany802@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-[#ea4335] text-white shadow-md hover:bg-[#c5221f] transition-colors duration-200"
            aria-label="Correo"
          >
            <FaEnvelope size={20} />
          </motion.a>
        </div>


        <div className="mt-5 text-center text-[11px] text-gray-400 dark:text-gray-500 border-t border-gray-200/50 dark:border-gray-700/50 pt-3">
          <span>Presentación para el reto semanal</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TarjetaPresentacion;