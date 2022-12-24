import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/productSlice";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(storeProducts));
  }, [dispatch]);
  return (
    <div className="py-3">
      <div className="container">
        <Title name="Our" title="products" />
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductList;
