import React, { useState } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Modal = () => {
  const { detailProduct } = useSelector((state) => state.products);
  const [modalOpen, setModalOpen] = useState(false);
  const { img, title, price } = detailProduct;
  const closeModal = () => {
    setModalOpen(false);
  };
  if (!modalOpen) return null;
  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col -lg-4 text-center text-capitalize py-5"
          >
            <h5>Item added to the cart.</h5>
            <img src={img} className="img-fluid" alt="product"></img>
            <h5 className="mt-2">{title}</h5>
            <h5 className="text-muted">Price: ${price}</h5>
            <Link to="/">
              <ButtonContainer
                onClick={() => {
                  closeModal();
                }}
              >
                Continue shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer
                cart
                onClick={() => {
                  closeModal();
                }}
                className="ml-3"
              >
                Go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;
