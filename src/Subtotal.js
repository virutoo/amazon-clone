import React, { useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useContext } from "react";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const { items, setTotal } = useContext(CartContext);
  const itemsTotal = (items) =>
    items?.reduce((amount, item) => item.price + amount, 0);

  useEffect(() => {
    setTotal(items?.reduce((amount, item) => item.price + amount, 0));
  });

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {`Subtotal (${items.length} items):`}{" "}
              <strong>₹{itemsTotal(items)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={() => navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
