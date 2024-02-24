import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './context/CartContext';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();

  // Define your products with unique IDs, titles, descriptions, prices, and image URLs
  const products = [
    { id: 1, title: 'Film Roll', description: 'Capture memories with timeless film', price: 10, image: '/images/product1.jpg' },
    { id: 2, title: 'Casio Watch', description: 'Sleek style, precise timekeeping, durability.', price: 20, image: '/images/product2.jpg' },
    { id: 3, title: 'Camera Lens', description: 'Crystal-clear vision, precision crafted optics.', price: 30, image: '/images/product3.jpg' },
  ];

  // Find the product with the matching ID
  const product = products.find(product => product.id === parseInt(id));

  // Handle adding the selected product to the cart
  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-page-container">
      <h2>Product Page</h2>
      <div className="product-details">
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} className="product-image" />
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <button className="stylish-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
