import React from "react";
import { Link } from "react-router-dom";
import logo from "../phone.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img
          src={logo}
          alt="store"
          className="navbar-brand"
          style={{ height: 80, width: "auto" }}
        />
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            <h2>Products</h2>
          </Link>
        </li>
      </ul>
      <div className="cartBtn">
        <Link to="/cart">
          <button className="btn btn-light btn-lg">
            {" "}
            <span className="glyphicon glyphicon-shopping-cart"></span> My Cart
          </button>
        </Link>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
background= var(--mainBlue);
.nav-link{
  color: #eec49f !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`;
