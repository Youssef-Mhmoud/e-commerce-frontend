import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Products from "./Products";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="my-10">
      <Title
        titleText_1="LATEST"
        titleText_2="COLLECTION"
        paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
      />

      {/* Rendering Products */}
      {products.length > 0 ? (
        <Products products={products.slice(0, 10)} />
      ) : (
        <p className="text-center text-gray-500">
          Sorry, no products in the latest collection right now.
        </p>
      )}
    </div>
  );
};

export default LatestCollection;
