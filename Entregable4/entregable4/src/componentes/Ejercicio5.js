// src/components/Ejercicio5.js
import React, { useState } from 'react';

function Ejercicio5() {
  const products = ['Manzana', 'Platano', 'Cereza', 'Melocoton', 'Pera', 'Uva'];
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Buscador de productos</h2>
      <input
        type="text"
        placeholder="Buscar producto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio5;
