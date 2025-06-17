import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Cart = () => {
  const { products, currency, cartItems } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const selectedProducts = [];

    for (const productId in cartItems) {
      let product = products.find((product) => product._id === productId);
      selectedProducts.push({ product, size: cartItems[productId] });
    }

    setCartData(selectedProducts);
  }, [cartItems]);

  return (
    <div className="border-top pt-6">
      <div className="text-2xl">
        <Title titleText_1="YOUR" titleText_2="CART" />
      </div>
      {/* Product */}
      {cartData.length > 0 ? (
        <div className="border-t border-b border-gray-200 text-gray-700">
          {cartData.map(({ product, size }) => (
            <div
              key={product._id}
              className="flex gap-6 items-center justify-between py-4 last:border-b-0 border-b-2 border-gray-200"
            >
              <div className="flex gap-3">
                <img
                  className="w-20 sm:w-22"
                  src={product.image[0]}
                  alt={product.name}
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {product.name}
                  </p>
                  <div className="flex gap-5 mt-5">
                    <p>
                      {currency}
                      {product.price}
                    </p>
                    <img
                      className="w-5 cursor-pointer"
                      src={assets.bin_icon}
                      alt="clear product from your cart"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-end gap-4">
                {Object.entries(size).map(
                  ([sizeLabel, { quantity }], index) => (
                    <div
                      key={index}
                      className="flex sm:flex-col gap-3 items-center"
                    >
                      <div>{sizeLabel}</div>
                      <input
                        type="number"
                        defaultValue={quantity}
                        min="1"
                        className="border max-w-10 sm:max-w-14 px-1 sm:px-2 py-1 outline-0 rounded"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Product In Cart</p>
      )}
    </div>
  );
};

export default Cart;
