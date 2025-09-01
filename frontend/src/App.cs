body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f4f7f6;
  color: #333;
  margin: 0;
}

.App {
  text-align: center;
}

.App-header {
  background-color: #2d3748;
  padding: 20px;
  color: white;
  margin-bottom: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card-info {
  padding: 1.5rem;
}

.product-card h2 {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
}

.product-card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin: 0;
}
