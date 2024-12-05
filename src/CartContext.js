import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("");
  const [total, setTotal] = useState("10");
  const addToCart = (id, title, image, price, rating) => {
    setItems((prevState) => [
      ...prevState,
      { id, title, image, price, rating },
    ]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        setItems,
        user,
        setUser,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
