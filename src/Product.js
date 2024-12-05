import React from "react";
import "./Product.css";
import { useContext } from "react";
import CartContext from "./CartContext";

const Product = ({ id, title, image, price, rating }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product-img" />

      <button
        className="product__button"
        onClick={() => addToCart(id, title, image, price, rating)}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
