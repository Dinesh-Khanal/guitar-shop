import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { useSelector } from "react-redux";

const Details = () => {
  const { detailProduct } = useSelector((state) => state.products);
  const { id, company, img, info, price, title, inCart } = detailProduct;
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

      {/* Product Info starts */}
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
            <ButtonContainer className="mr-3">Back to Products</ButtonContainer>
          </Link>

          <ButtonContainer
            cart
            disabled={inCart ? true : false}
            // onClick={() => {
            //   value.addToCart(id);
            //   value.openModal(id);
            // }}
          >
            {inCart ? "inCart" : "Add to Cart"}
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
};

export default Details;
