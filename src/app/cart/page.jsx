"use client";

import { useCartContext } from "../../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCartContext();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={`/images/${item.image}`} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}
