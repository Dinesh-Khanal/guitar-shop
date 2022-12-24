import React, { useState } from "react";
import { storeProducts, dtlProduct } from "./data";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [detailProduct, setDetailProduct] = useState(dtlProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct] = useState(dtlProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  const addToCart = (id) => {
    const tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  const openModal = (id) => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const product = tempCart.find((item) => item.id === id);
    product.count = product.count + 1;
    product.total = product.count * product.price;
    // same logic can be done as follow
    // const tempCart = cart.map((itm) =>
    //   itm.id === id
    //     ? { ...itm, count: itm.count + 1, total: itm.price * (itm.count + 1) }
    //     : itm
    // );

    setCart(tempCart);
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart(tempCart);
      addTotals();
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = () => {
    setCart([]);
    addTotals();
  };

  const addTotals = () => {
    let subTotal = 0;

    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct,
        cart,
        modalOpen,
        modalProduct,
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
