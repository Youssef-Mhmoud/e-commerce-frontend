import { useEffect, useState } from "react";
import Title from "../Title";
import Products from "../productComponents/Products";

const RelatedProducts = ({ products, productItem }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const product = products.filter((item) => {
      if (
        item.category.includes(productItem.category) &&
        item.subCategory.includes(productItem.subCategory)
      ) {
        return item;
      }
    });

    setRelatedProducts(product);
  }, [products, productItem]);

  return (
    <div className="my-24">
      <div className="text-3xl text-center">
        <Title titleText_1="RELATED" titleText_2="PRODUCTS" />
      </div>
      <Products products={relatedProducts} />
    </div>
  );
};

export default RelatedProducts;
