import React, { useState } from "react";
import "./style.css";

const Cart = () => {
  const items = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 5,
      image:
        "https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-promina-nam-den-trang-01-800x800.jpg.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 2,
      image:
        "https://myshoes.vn/image/cache/catalog/2024/lacoste/lc02/giay-lacoste-carnaby-pro-cgr-124-trang-den-01-800x800.jpg.webp",
    },
  ];

  const [cartItems, setCartItems] = useState(items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, event) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(event.target.value) } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-container">
      <table className="info">
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {cartItems.map((item) => (
          <tr key={item.id} className="cart-item">
            <td>
              <img src={item.image} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e)}
              />
            </td>
            <td>${item.price * item.quantity}</td>
          </tr>
        ))}
      </table>
      <div className="cart-total">
        <h1>Cart Totals</h1>
        <p>Tổng tiền: ${total}</p>
        <button className="checkout" type="submit">Xác nhận đơn hàng</button>
      </div>
    </div>
  );
};

export default Cart;