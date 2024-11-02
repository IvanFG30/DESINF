import React from 'react';
import Saludo from './Saludo';
import Despedida from './Despedida';
import ListadoCoches from './ListadoCoches';

function App() {
  const mostrarSaludo = true;
  const nombre = "Ivan";

  return (
    <div>
      {mostrarSaludo ? <Saludo nombre={nombre} /> : <Despedida nombre={nombre} />}
      <ListadoCoches />
    </div>
  );
}

export default App;

