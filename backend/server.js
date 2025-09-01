const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Habilita o CORS para que o React (que roda em outra porta) possa acessar esta API
app.use(cors());

// Nosso "banco de dados" de produtos em memória
const products = [
  {
    id: 1,
    name: 'Notebook Gamer Avançado',
    price: 6499.99,
    image: 'https://placehold.co/300x200/2d3748/ffffff?text=Notebook'
  },
  {
    id: 2,
    name: 'Mouse Óptico Vertical',
    price: 249.90,
    image: 'https://placehold.co/300x200/2d3748/ffffff?text=Mouse'
  },
  {
    id: 3,
    name: 'Teclado Mecânico RGB',
    price: 499.50,
    image: 'https://placehold.co/300x200/2d3748/ffffff?text=Teclado'
  },
  {
    id: 4,
    name: 'Monitor Ultrawide 29"',
    price: 1899.00,
    image: 'https://placehold.co/300x200/2d3748/ffffff?text=Monitor'
  },
    {
    id: 5,
    name: 'Headset Gamer 7.1',
    price: 399.90,
    image: 'https://placehold.co/300x200/2d3748/ffffff?text=Headset'
  },
    {
    id: 6,
    name: 'Cadeira Gamer Confort',
    price: 1299.99,
    image: 'https://placehold.co/300x200/2d3748/ffffff?text=Cadeira'
  }
];

// Rota da API que retorna a lista de produtos
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend rodando em http://localhost:${PORT}`);
});
