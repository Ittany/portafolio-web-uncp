// src/components/Tareas.jsx
import { Link } from 'react-router-dom';

const Tareas = () => {
  return (
    <section id="tareas" className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          📋 Tareas
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/tareas/tarjeta-de-presentacion"
            className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">📄 Tarjeta de presentación</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Actividad calificada - Fundamentos de Desarrollo Web</p>
          </Link>
          {/* Aquí puedes agregar más tareas en el futuro */}
        </div>
      </div>
    </section>
  );
};

export default Tareas;