// Cart.js
import React from 'react';
import { useCart } from './context/CartContext';
import './Cart.css';

function Cart() {
  const { items, removeItem } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <div className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove from Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
