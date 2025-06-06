import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import Products from "./Products";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => product.bestseller);

    setBestProducts(filteredProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <Title
        titleText_1="BEST"
        titleText_2="SELLERS"
        paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
      />

      {/* Render Best Seller Products */}
      <Products products={bestProducts} />
    </div>
  );
};

export default BestSeller;
