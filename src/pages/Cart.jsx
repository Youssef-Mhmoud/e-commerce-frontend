import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductCart from "../components/cartComponents/ProductCart";

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
          <div className="flex flex-col items-end my-10">
            <div className="w-full sm:w-1/2">
              <div className="text-2xl mb-[-30px]">
                <Title titleText_1="CART" titleText_2="TOTALS" />
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
                <p>Subtotal</p>
                <p>{currency}</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
                <p>Shipping Fee</p>
                <p>{currency}</p>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <p className="font-semibold">Total</p>
                <p>{currency}</p>
              </div>
              <button className="bg-black text-white py-3 px-8 text-sm block ml-auto mt-5">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center py-10 text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
