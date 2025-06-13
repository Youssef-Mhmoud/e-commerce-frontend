import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import CenteredMessage from "../components/CenteredMessage";
import Images from "../components/productDetailsComponents/Images";
import ProductDetails from "../components/productDetailsComponents/ProductDetails";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { products, currency } = useContext(ShopContext);
  const { productId } = useParams();

  useEffect(() => {
    if (!products || products.length === 0) {
      setLoading(true);
      return;
    }

    try {
      const foundProduct = products.find(
        (product) => product._id === productId
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
  if (loading) return <CenteredMessage>Loading product...</CenteredMessage>;

  // Check product existing
  if (!product) return <CenteredMessage>Product not found</CenteredMessage>;

  // Error handling
  if (error)
    return <CenteredMessage className="text-red-500">{error}</CenteredMessage>;

  return (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Details box */}
      <div className="flex flex-col sm:flex-row gap-12">
        {/* Image preview */}
        <Images product={product} />
        {/* Details */}
        <ProductDetails product={product} currency={currency} />
      </div>
      {/* Reviews */}
      <div></div>
      {/* Related Products */}
      <div></div>
    </div>
  );
};

export default Product;
