import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);
  if (items.length > 0) {
    return (
      <section>
        <Title name="your" title="cart"></Title>
        <CartColumns />
        <CartList items={items} />
        <CartTotals items={items} history={props.history} />
      </section>
    );
  }
  return (
    <section>
      <EmptyCart />;
    </section>
  );
};

export default Cart;
