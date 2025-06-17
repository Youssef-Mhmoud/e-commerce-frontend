import React, { useState, useContext } from "react";
import { CartContext } from "../../context/ShopContext";

const ProductDetails = ({ product, currency }) => {
  const [size, setSize] = useState("");
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex-1">
      <h1 className="text-2xl mt-2 font-medium">{product.name}</h1>
      <div className="flex items-center gap-3 mt-2 text-sm">
        <div className="flex text-yellow-500">
          {/* Rating stars placeholder */}
          ★★★★☆
        </div>
        <span>(122)</span>
      </div>
      <p className="text-3xl mt-5 font-medium">
        {currency}
        {product.price}
      </p>
      <p className="text-gray-500 mt-5 sm:w-4/5">{product.description}</p>
      {product.sizes && (
        <div className="mt-5">
          <p className="text-sm mb-4">Select Size</p>
          <ul className="flex gap-2">
            {product.sizes.map((sizeProduct, index) => (
              <li
                className={`bg-gray-100 text-sm py-2 px-4 border  cursor-pointer hover:border-amber-600 duration-300
                      ${
                        size === sizeProduct
                          ? "border-orange-500"
                          : "border-gray-200"
                      }`}
                key={index}
                onClick={() => setSize(sizeProduct)}
              >
                {sizeProduct}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => addToCart(product._id, size)}
        className="bg-black text-white px-8 py-3 text-sm mt-6 active:bg-gray-700 hover:opacity-80 duration-300 cursor-pointer"
      >
        ADD TO CART
      </button>
      <hr className="mt-8 sm:w-4/5 text-gray-200" />
      <div className="flex flex-col gap-1 text-gray-500 text-sm mt-5">
        <p>100% Original product.</p>
        <p>Cash on delivery is available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
