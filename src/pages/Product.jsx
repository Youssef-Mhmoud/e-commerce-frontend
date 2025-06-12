import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { products } = useContext(ShopContext);
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
  }, [products, productId]);

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
        <div
          className="flex-1 flex gap-3 flex-col-reverse sm:flex-row
         
        "
        >
          <div className="flex sm:gap-3 sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.image &&
              product.image.length > 1 &&
              product.image.map((img, index) => (
                <img
                  className="cursor-pointer w-[24%] mb-3 sm:mb-0 sm:w-full shrink-0"
                  src={img}
                  alt={`${product.name} Image - ${index + 1}`}
                  key={index}
                />
              ))}
          </div>
          {product.image && (
            <div className="w-full sm:w-[80%]">
              <img
                className="w-full h-full"
                src={product.image[0]}
                alt={product.name}
              />
            </div>
          )}
        </div>
        {/* Details */}
        <div>
          <p>{product.name}</p>
          <div>
            <div className="flex text-yellow-500">
              {/* Rating stars placeholder */}
              ★★★★☆
            </div>
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
