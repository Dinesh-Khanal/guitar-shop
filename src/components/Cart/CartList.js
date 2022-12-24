import React from "react";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <div className="container-fluid">
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartList;
