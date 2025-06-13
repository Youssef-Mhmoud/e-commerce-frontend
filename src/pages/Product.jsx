import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import CenteredMessage from "../components/CenteredMessage";
import Images from "../components/productDetailsComponents/Images";
import ProductDetails from "../components/productDetailsComponents/ProductDetails";
import RelatedProducts from "../components/productDetailsComponents/RelatedProducts";

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
      <div className="flex items-center mt-20 text-sm">
        <p className="border border-gray-200 px-5 py-3 font-bold">
          Description
        </p>
        <p className="border border-gray-200 px-5 py-3">Reviews (122)</p>
      </div>
      <div className="text-sm text-gray-500 border border-gray-200 p-6">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p className="mt-4">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
      {/* Related Products */}
      <RelatedProducts products={products} productItem={product} />
    </div>
  );
};

export default Product;
