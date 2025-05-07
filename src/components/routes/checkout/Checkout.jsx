import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart.contexts";
import "./checkout.styles.scss"
import CheckOutItem from "../../checkoutitem/CheckOutItem";
function Checkout() {
  const { cartItems, addItem, removeItem,cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Descriptions</span>
        </div>
        <div className="header-block">
          <span>Quantithy</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Amount</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
        );
      })}
      <span className="Total">Total: $ {cartTotal}</span>
    </div>
  );
}

export default Checkout;
