import React, { useState, createContext } from "react";
import { storeProducts, dtlProduct } from "./data";

export const ProductContext = createContext<IProductContext | null>(null);

interface IProps {
  children: React.ReactNode;
}
const ProductProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<IProduct[]>(storeProducts);
  const [detailProduct, setDetailProduct] = useState<IProduct>(dtlProduct);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getItem = (id: number) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id: number) => {
    const product = getItem(id);
    if (product) {
      setDetailProduct(product);
    }
  };

  const addToCart = (id: number) => {
    const tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id)!);
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  const increment = (id: number) => {
    let tempCart = [...cart];
    const product = tempCart.find((item) => item.id === id);
    if (product?.count !== undefined) {
      product.count += 1;
      product.total = product.count * product.price;
    }
    // same logic can be done as follow
    // const tempCart = cart.map((itm) =>
    //   itm.id === id
    //     ? { ...itm, count: itm.count + 1, total: itm.price * (itm.count + 1) }
    //     : itm
    // );

    setCart(tempCart);
    addTotals();
  };

  const decrement = (id: number) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct!);
    const product = tempCart[index];
    if (product.count !== undefined) {
      product.count = product.count - 1;

      if (product.count === 0) {
        removeItem(id);
      } else {
        product.total = product.count * product.price;
        setCart(tempCart);
        addTotals();
      }
    }
  };

  const removeItem = (id: number) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(getItem(id)!);
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

    cart.map((item) => (subTotal += item.total!));
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
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
