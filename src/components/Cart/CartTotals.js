import React from "react";
import { clearCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import PayPalButton from "./PayPalButton";

const CartTotals = ({ items, history }) => {
  const dispatch = useDispatch();
  const cartSubTotal = items.reduce((a, c) => a + c.count * c.price, 0);
  const cartTax = (cartSubTotal * 0.1).toFixed(2);
  const cartTotal = Number(cartSubTotal) + Number(cartTax);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <h3>cart total:</h3>
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm8 text-capitalize text-right">
            <Link to="/emptycart">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">Sub-total: </span>
              <strong> $ {cartSubTotal}</strong>
            </h5>

            <h5>
              <span className="text-title">Tax: </span>
              <strong> $ {cartTax}</strong>
            </h5>

            <h5>
              <span className="text-title">Total: </span>
              <strong> $ {cartTotal}</strong>
            </h5>
            {/* <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
