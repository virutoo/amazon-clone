import "./Payment.css";
import { useContext } from "react";
import CartContext from "./CartContext";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import { db, collection, addDoc } from "./firebase";

const Payment = () => {
  const { user, items, total, setItems } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("total is ", total);

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{items?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123, user street</p>
            <p>user city,State-123456</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {items.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <GooglePayButton
              environment="TEST"
              buttonColor="default"
              buttonType="pay"
              buttonRadius="4"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: "googlePayMerchantID",
                  merchantName: "googlePayMerchantName",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: total.toString(),
                  currencyCode: "INR",
                  countryCode: "IN",
                },
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log("load payment data", paymentRequest);

                const myCollection = collection(db, "users");
                const myDocumentData = {
                  user: user?.email,
                  orders: {
                    items: items,
                    amount: total,
                    created: new Date(Date.now()),
                  },
                };
                addDoc(myCollection, myDocumentData);

                setItems([]);

                navigate("/orders");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
