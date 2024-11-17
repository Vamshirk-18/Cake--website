
import React, { useState } from 'react';


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chocolate Delight', price: 25, quantity: 1 },
    { id: 2, name: 'Fruit Fantasy', price: 30, quantity: 2 }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ${item.price} x {item.quantity}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${totalPrice}</h3>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
