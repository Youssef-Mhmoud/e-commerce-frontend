import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/frontend_assets/assets";
import { CartContext } from "./ShopContext";

const CartContextProvider = ({ children }) => {
  const delivery_fee = 10;
  const currency = "$";

  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);

  const addToCart = useCallback((productId, size) => {
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
  }, []);

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

  const updateQuantity = useCallback((productId, size, newQuantity) => {
    setCartItems((prevCart) => {
      const cartData = { ...prevCart };

      cartData[productId][size].quantity = newQuantity;
      return cartData;
    });
  }, []);

  const removeSizeCart = useCallback((productId, size, quantity) => {
    if (quantity === 0) {
      setCartItems((prevCart) => {
        if (!prevCart[productId] || !prevCart[productId][size]) {
          return prevCart;
        }

        const { [size]: _, ...updateSize } = prevCart[productId];

        if (Object.keys(updateSize).length === 0) {
          const { [productId]: _, ...newCart } = prevCart;
          return newCart;
        }
        return {
          ...prevCart,
          [productId]: updateSize,
        };
      });
    }
  }, []);

  const removeProductCart = useCallback((productId) => {
    setCartItems((prevCart) => {
      const { [productId]: _, ...updateCart } = prevCart;
      return updateCart;
    });
  }, []);

  const addToOrders = useCallback(() => {
    const newOrders = [];
    const productIdsToRemove = [];

    for (const productId in cartItems) {
      const product = products.find((product) => product._id === productId);
      if (!product) continue;

      const sizes = cartItems[productId];

      // Adding a product in order page
      newOrders.push({
        id: product._id,
        image: product.image,
        title: product.name,
        price: product.price,
        sizes,
      });

      productIdsToRemove.push(productId);
    }

    setOrders((prevOrders) => [...prevOrders, ...newOrders]);
    productIdsToRemove.map((id) => removeProductCart(id));
  }, [cartItems, removeProductCart]);

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
      orders,
      addToOrders,
    }),
    [
      cartItems,
      getCartCount,
      getTotalAmount,
      addToCart,
      updateQuantity,
      removeProductCart,
      removeSizeCart,
      orders,
      addToOrders,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
