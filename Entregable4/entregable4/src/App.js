import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ejercicio1 from './componentes/Ejercicio1';
import Ejercicio2 from './componentes/Ejercicio2';
import Ejercicio3 from './componentes/Ejercicio3';
import Ejercicio4 from './componentes/Ejercicio4';
import Ejercicio5 from './componentes/Ejercicio5';

function App() {
  return (
    <Router>
      <div>
        <h1>Ejercicios React</h1>
        <nav>
          <ul>
            <li><Link to="/ejercicio1">Ejercicio 1 - Contador</Link></li>
            <li><Link to="/ejercicio2">Ejercicio 2 - Formulario</Link></li>
            <li><Link to="/ejercicio3">Ejercicio 3 - Toggle Visibilidad</Link></li>
            <li><Link to="/ejercicio4">Ejercicio 4 - Lista de Tareas</Link></li>
            <li><Link to="/ejercicio5">Ejercicio 5 - Buscador de Productos</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
          <Route path="/ejercicio3" element={<Ejercicio3 />} />
          <Route path="/ejercicio4" element={<Ejercicio4 />} />
          <Route path="/ejercicio5" element={<Ejercicio5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

