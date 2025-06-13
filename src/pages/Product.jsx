import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const { products, currency } = useContext(ShopContext);
  const { productId } = useParams();

  useEffect(() => {
    if (!products || products.length === 0) {
      setLoading(true);
      return;
    }

    try {
      const foundProduct = setProduct(
        products.find((product) => product._id === productId)
      );
      if (foundProduct) {
        setProduct(foundProduct);
      }

      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Error loading product");
    } finally {
      setLoading(false);
    }
  }, [products, productId, product]);

  useEffect(() => {
    if (product && product.image && product.image.length > 0 && !image) {
      setImage(product.image[0]);
    }
  }, [product, image]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading product...</div>
      </div>
    );
  }

  // Check product existing
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Product not found</div>
      </div>
    );
  }

  // Error handling
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Details box */}
      <div className="flex flex-col sm:flex-row gap-12">
        {/* Image preview */}
        <div className="flex-1 flex gap-3 flex-col-reverse sm:flex-row h-1/2">
          <div className="flex sm:gap-3 sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.image &&
              product.image.map((img, index) => (
                <img
                  className={`cursor-pointer w-[24%] mb-3 sm:mb-0 sm:w-full shrink-0 hover:opacity-75 duration-300 border-2 ${
                    image === img ? "border-gray-500" : "border-transparent"
                  }`}
                  src={img}
                  alt={`${product.name} Image - ${index + 1}`}
                  key={index}
                  onClick={() => setImage(img)}
                />
              ))}
          </div>
          {product.image && (
            <div className="w-full sm:w-[80%]">
              <img className="w-full h-full" src={image} alt={product.name} />
            </div>
          )}
        </div>
        {/* Details */}
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
          <p className="text-xs text-gray-500 mt-5 sm:w-4/5">
            {product.description}
          </p>
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
          <button className="bg-black text-white px-8 py-3 text-sm mt-6 active:bg-gray-700 hover:opacity-80 duration-300 cursor-pointer">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 text-gray-200" />
          <div className="flex flex-col gap-1 text-gray-500 text-xs mt-5">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div></div>
      {/* Related Products */}
      <div></div>
    </div>
  );
};

export default Product;
