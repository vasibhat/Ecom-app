
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext"; 
import "./Home.css"; 

function Home() {
  const products = [
    { id: 1, title: "Film Roll", price: 10, image: "/images/product1.jpg" },
    { id: 2, title: "Casio Watch", price: 20, image: "/images/product2.jpg" },
    { id: 3, title: "Camera Lens", price: 30, image: "/images/product3.jpg" },
  ];

  const { addItem } = useCart(); 

  return (
    <div>
      <h2>Home Page</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <button onClick={() => addItem(product)}>Add to Cart</button> 
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
