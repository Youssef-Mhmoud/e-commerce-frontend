import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductCart from "../components/cartComponents/ProductCart";
import CartTotal from "../components/cartComponents/CartTotal";

const Cart = () => {
  const { products, currency, cartItems } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!products.length) return;

    const selectedProducts = Object.entries(cartItems)
      .map(([productId, sizes]) => {
        const product = products.find((p) => p._id === productId);
        return product ? { product, size: sizes } : null;
      })
      .filter(Boolean);

    setCartData(selectedProducts);
  }, [cartItems, products]);

  return (
    <div className="border-top pt-6">
      <div className="text-2xl mb-[-20px]">
        <Title titleText_1="YOUR" titleText_2="CART" />
      </div>
      {/* Product */}
      {cartData.length > 0 ? (
        <>
          <div className="border-t border-b border-gray-200 text-gray-700">
            <ProductCart cartData={cartData} currency={currency} />
          </div>
          <div className="my-10 sm:w-1/2 w-full ml-auto">
            <CartTotal />
          </div>
        </>
      ) : (
        <p className="text-center py-10 text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
