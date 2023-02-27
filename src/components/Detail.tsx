import React, { useContext } from "react";
import { ProductContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Detail = () => {
  const val = useContext(ProductContext);
  if (val === null) throw new Error("Couldn't get value!");
  const { id, company, img, info, price, title, inCart } = val.detailProduct;
  return (
    <div className="container py-5">
      <div className="row">
        <div
          className="col-10 mx-auto text-center text-slanted my-5"
          style={{ color: "#f76008" }}
        >
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>Model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            Mady by: <span className="text-uppercase">{company}</span>
          </h4>

          <h4 className="text-blue">
            <strong>
              Price: <span>$</span> {price}
            </strong>
          </h4>

          <h4 className="text-info text-capitalize font-weight-bold mt-3 mb-0 py-3">
            Some info about the product:
          </h4>
          <h3 className="text-muted lead" style={{ fontFamily: "Cambria" }}>
            {info}
          </h3>

          {/* Buttons */}
          <Link to="/">
            <ButtonContainer cart={false} className="mr-3">
              Back to Products
            </ButtonContainer>
          </Link>

          <ButtonContainer
            cart
            disabled={inCart ? true : false}
            onClick={() => {
              val.addToCart(id);
            }}
          >
            {inCart ? "inCart" : "Add to Cart"}
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
};

export default Detail;
const ButtonContainer = styled.button<{ cart: boolean }>`
  text-transform: capitalize;
  font-size: 15px;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(lightBlue)"};

  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(lightBlue)")};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5 rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
