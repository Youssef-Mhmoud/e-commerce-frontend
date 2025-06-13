import { useEffect, useState } from "react";
import Title from "../Title";
import Products from "../productComponents/Products";

const RelatedProducts = ({ products, productItem }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!products.length || !productItem) return;

    const related = products.filter(
      (item) =>
        item._id !== productItem._id &&
        item.category.includes(productItem.category) &&
        item.subCategory.includes(productItem.subCategory)
    );

    setRelatedProducts(related);
  }, [products, productItem]);

  return (
    <div className="my-24">
      <div className="text-3xl text-center">
        <Title titleText_1="RELATED" titleText_2="PRODUCTS" />
      </div>
      {relatedProducts.length > 0 ? (
        <Products products={relatedProducts} />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No related products found.
        </p>
      )}
    </div>
  );
};

export default RelatedProducts;
