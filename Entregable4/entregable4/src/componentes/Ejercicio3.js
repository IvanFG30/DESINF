// src/components/Ejercicio3.js
import React, { useState } from 'react';

function Ejercicio3() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Toggle de visibilidad</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'} Elemento
      </button>
      {visible && <p>Elemento visible</p>}
    </div>
  );
}

export default Ejercicio3;
