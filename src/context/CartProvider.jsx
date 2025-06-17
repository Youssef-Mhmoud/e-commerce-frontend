import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/frontend_assets/assets";
import { CartContext } from "./ShopContext";

const CartContextProvider = ({ children }) => {
  const delivery_fee = 10;
  const currency = "$";

  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId, size) => {
    if (!productId) return;

    if (!size) {
      toast.error("Select Product Size!");
      return;
    } else {
      toast.success(`Add Product Size: ${size}`);
    }

    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      if (!newCart[productId]) newCart[productId] = {};

      if (!newCart[productId][size]) newCart[productId][size] = { quantity: 0 };

      newCart[productId][size].quantity += 1;

      return newCart;
    });
  };

  const getCartAmount = useCallback(() => {
    let total = 0;

    for (const productId in cartItems) {
      const sizes = cartItems[productId];
      for (const size in sizes) {
        total += sizes[size].quantity;
      }
    }

    return total;
  }, [cartItems]);

  const value = useMemo(
    () => ({
      products,
      currency,
      delivery_fee,
      cartItems,
      addToCart,
      getCartAmount,
    }),
    [cartItems, getCartAmount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
