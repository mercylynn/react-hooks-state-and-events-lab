import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const itemClass = cart ? 'in-cart' : ''

  const handleClick = () => {
    setCart(cart => !cart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
