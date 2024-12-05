import React, { useEffect, useState, useContext } from "react";
import "./Orders.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import CartContext from "./CartContext";
import Order from "./Order";

const Orders = () => {
  const { user } = useContext(CartContext);
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("users", users);
    };
    getUsers();
  });

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      {user &&
        users.map((userData) => {
          return (
            <>
              {userData.user === user.email && (
                <>
                  <div className="orders__order">
                    <Order order={userData} />
                  </div>
                </>
              )}
            </>
          );
        })}
    </div>
  );
};

export default Orders;
