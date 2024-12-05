import React from "react";
import "./CheckoutProduct.css";
import { useContext } from "react";
import CartContext from "./CartContext";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const { items, setItems } = useContext(CartContext);
  const removeFromBasket = () => {
    setItems(items.filter((item) => item.id !== id));
    console.log(items);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
