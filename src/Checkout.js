import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useContext } from "react";
import CartContext from "./CartContext";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { items, user } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/Anniversary_CB/1520_AB_AS_TopBanner_1242x450.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>

        {items.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
