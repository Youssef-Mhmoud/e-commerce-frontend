import { useEffect, useState } from "react";
import Title from "../Title";
import Products from "../productComponents/Products";

const RelatedProducts = ({ products, productItem }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const pro = products.filter((item) => {
      if (
        item.category.includes(productItem.category) &&
        item.subCategory.includes(productItem.subCategory)
      ) {
        return item;
      }
    });

    setRelatedProducts(pro);
  }, [products, productItem]);

  return (
    <>
      <div className="text-3xl text-center mt-15">
        <Title titleText_1="RELATED" titleText_2="PRODUCTS" />
      </div>
      <Products products={relatedProducts} />
    </>
  );
};

export default RelatedProducts;
