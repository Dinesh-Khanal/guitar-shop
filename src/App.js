import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
//import Modal from "./components/Modal";
import EmptyCart from "./components/Cart/EmptyCart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      {/* <Modal /> */}
      <Footer />
    </React.Fragment>
  );
};

export default App;
