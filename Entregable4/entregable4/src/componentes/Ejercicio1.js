// src/components/Ejercicio1.js
import React, { useState } from 'react';

function Ejercicio1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}

export default Ejercicio1;
