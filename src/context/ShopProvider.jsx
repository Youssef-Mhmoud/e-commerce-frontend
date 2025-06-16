import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "./ShopContext";
import { toast } from "react-toastify";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId, size) => {
    if (!productId) return;

    if (!size) {
      toast.error("Select Product Size!");
      return;
    }

    if (size) toast.apply("Add Product Successfully");

    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      if (!newCart[productId]) newCart[productId] = {};

      if (!newCart[productId][size]) newCart[productId][size] = { quantity: 0 };

      newCart[productId][size].quantity += 1;

      return newCart;
    });
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
