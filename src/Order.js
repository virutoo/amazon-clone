import React from "react";
import "./Order.css";
import moment from "moment/moment";
import CheckoutProduct from "./CheckoutProduct";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.orders.created).format("MMMM Do, h:mma")}</p>

      {order.orders.items.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}

      <h3 className="order__total">Order Total: ₹{order.orders.amount}</h3>
    </div>
  );
};

export default Order;
