import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useState } from "react";
import ProductItem from "./ProductItem";
import Products from "./Products";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <Title
        titleText_1="LATEST"
        titleText_2="COLLECTION"
        paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
      />

      {/* Rendering Products */}
      {latestProducts.length > 0 ? (
        <Products products={latestProducts} />
      ) : (
        <p className="text-center text-gray-500">No latest collection found.</p>
      )}
    </div>
  );
};

export default LatestCollection;
