import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  product: IProduct;
}
const Product = ({ product }: IProps) => {
  let inCart = false;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <Link to="/details">
            <img src={product.img} alt="product" className="card-img-top" />
          </Link>
          <button className="cart-btn" disabled={inCart ? true : false}>
            {inCart ? (
              <p className="text-capitalize">In Cart</p>
            ) : (
              <i className="fas fa-cart-plus fa-lg" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <h5 className="align-self-center mb-0">{product.title}</h5>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {product.price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: #d9fcdb;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container: hover .card-img-top {
    transform: scale(1.1);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: #cd956b;
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }

  .img-container: hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: black;
    cursor: pointer;
  }
`;
