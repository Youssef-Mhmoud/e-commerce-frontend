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

  const getCartCount = useCallback(() => {
    let total = 0;

    for (const productId in cartItems) {
      const sizes = cartItems[productId];
      for (const size in sizes) {
        total += sizes[size].quantity;
      }
    }

    return total;
  }, [cartItems]);

  const getTotalAmount = useCallback(() => {
    let total = 0;

    Object.keys(cartItems).forEach((id) => {
      const product = products.find((p) => p._id === id);
      if (!product) return;

      const price = product.price;
      const sizes = cartItems[id];

      for (const size in sizes) {
        const { quantity } = sizes[size];
        total += quantity * price;
      }
    });
    return total;
  }, [cartItems]);

  const updateQuantity = (productId, size, newQuantity) => {
    setCartItems((prevCart) => {
      const cartData = { ...prevCart };

      cartData[productId][size].quantity = newQuantity;
      return cartData;
    });
  };

  const removeSizeCart = (productId, size, quantity) => {
    if (quantity === 0) {
      setCartItems((prevCart) => {
        if (!prevCart[productId] || !prevCart[productId][size]) {
          return prevCart;
        }

        // eslint-disable-next-line no-unused-vars
        const { [size]: removedSize, ...updateSize } = prevCart[productId];

        if (Object.keys(updateSize).length === 0) {
          // eslint-disable-next-line no-unused-vars
          const { [productId]: removedProduct, ...newCart } = prevCart;
          return newCart;
        }
        return {
          ...prevCart,
          [productId]: updateSize,
        };
      });
    }
  };

  const removeProductCart = (productId) => {
    setCartItems((prevCart) => {
      // eslint-disable-next-line no-unused-vars
      const { [productId]: removed, ...updateCart } = prevCart;
      return updateCart;
    });
  };

  const value = useMemo(
    () => ({
      products,
      currency,
      delivery_fee,
      cartItems,
      addToCart,
      getCartCount,
      getTotalAmount,
      updateQuantity,
      removeProductCart,
      removeSizeCart,
    }),
    [cartItems, getCartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
