// src/components/Ejercicio2.js
import React, { useState } from 'react';

function Ejercicio2() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Formulario simple</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {submitted && <p>Bienvenido/a, {name}!</p>}
    </div>
  );
}

export default Ejercicio2;
