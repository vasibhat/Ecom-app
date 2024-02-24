import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const products = [
    { id: 1, title: 'Product 1', price: 10, image: './' },
    { id: 2, title: 'Product 2', price: 20, image: '/images/product2.jpg' },
    { id: 3, title: 'Product 3', price: 30, image: '/images/product3.jpg' },
  ];

  return (
    <div>
      <h2>Home Page</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <img src="./" alt={product.title} />
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
