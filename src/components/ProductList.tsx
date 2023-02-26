import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../context";

const ProductList = () => {
  const val = useContext(ProductContext);

  return (
    <div className="py-3">
      <div className="container">
        <Title name="Our" title="products" />
        <div className="row">
          {val?.products.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
