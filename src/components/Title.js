import React from "react";

//Note: Here, 'name' and 'title' are props from the '''<Title name="our" title="products" />''' of ProductList.js
export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h1
          className="text-capitalize font-weight-bold"
          style={{ color: "#f76008" }}
        >
          {name} <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
}
