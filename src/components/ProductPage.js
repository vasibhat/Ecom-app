import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './context/CartContext';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();

  const product = {
    id: id,
    title: 'Product Title', 
    price: 10,
    image: `/images/product${id}.jpg` // Assuming images are located in the public/images folder
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-page-container">
      <h2>Product Page</h2>
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        <button className="stylish-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
