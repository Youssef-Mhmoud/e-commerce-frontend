import { useContext, useEffect, useState } from "react";
import Title from "../Title";
import { ShopContext } from "../../context/ShopContext";
import Products from "../productComponents/Products";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products
      .filter((product) => product.bestseller === true)
      .slice(0, 5);

    setBestProducts(filteredProducts);
  }, [products]);

  return (
    <div className="my-10 text-3xl text-center">
      <Title
        titleText_1="BEST"
        titleText_2="SELLERS"
        paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
      />

      {/* Render Best Seller Products */}
      {bestProducts.length > 0 ? (
        <Products products={bestProducts} />
      ) : (
        <p className="text-center text-gray-500">No best sellers found.</p>
      )}
    </div>
  );
};

export default BestSeller;
