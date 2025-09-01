import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Faz a chamada para a nossa API do backend
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Houve um erro ao buscar os produtos:', error));
  }, []); // O array vazio garante que isso rode apenas uma vez

  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Loja de Hardware</h1>
        <p>Produtos de alta performance para o seu setup</p>
      </header>
      <main>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-card-info">
                <h2>{product.name}</h2>
                <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
