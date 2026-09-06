// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Tareas from './components/Tareas';
import TarjetaPresentacion from './pages/tareas/TarjetaPresentacion';
import FondoBurbujas from './components/FondoBurbujas';

function App() {
  return (
    <BrowserRouter>
      <FondoBurbujas />
            <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tareas" element={<Tareas />} /> 
          <Route
            path="/tareas/tarjeta-de-presentacion"
            element={<TarjetaPresentacion />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;