import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-lg-block mt-5 mb-3">
      <div className="row">
        <div className="col d-none d-sm-block">
          <h4 className="text-uppercase">Products</h4>
        </div>
        <div className="col d-none d-sm-block">
          <h4 className="text-uppercase">Name of Product</h4>
        </div>
        <div className="col d-none d-sm-block">
          <h4 className="text-uppercase">Price</h4>
        </div>
        <div className="col d-none d-sm-block">
          <h4 className="text-uppercase">Quantity</h4>
        </div>
        <div className="col d-none d-sm-block">
          <h4 className="text-uppercase">Remove</h4>
        </div>
        <div className="col d-none d-sm-block">
          <h4 className="text-uppercase">Total</h4>
        </div>
      </div>
    </div>
  );
}
