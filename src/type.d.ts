interface IProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  company: string;
  info: string;
  inCart?: boolean;
  count?: number;
  total?: number;
}

interface IProductContext {
  products: IProduct[];
  detailProduct: IProduct;
  cart: IProduct[];
  cartSubTotal: number;
  cartTax: number;
  cartTotal: number;
  handleDetail: (id: number) => void;
  addToCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}
