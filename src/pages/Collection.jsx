import { useContext, useMemo, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Products from "../components/productComponents/Products";
import { assets } from "../assets/frontend_assets/assets";
import Categories from "../components/collectionComponents/Categories";
import Filter from "../components/collectionComponents/Filter";

const Collection = () => {
  // States
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const { products, search, showSearch } = useContext(ShopContext);

  // Handlers
  const filteredAndSortedProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    let result = [...products]; // Copy products

    // Apply category filter
    if (category.length > 0) {
      result = result.filter((product) => category.includes(product.category));
    }

    // Apply subCategory filter
    if (subCategory.length > 0) {
      result = result.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    // Apply sorting
    switch (sortType) {
      case "low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    // Apply search filter
    if (search && showSearch)
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

    return result;
  }, [products, category, subCategory, sortType, search, showSearch]);

  const showFilterHandler = () => {
    setShowFilter((isShowing) => !isShowing);
  };

  const hasProducts = products && products.length > 0;
  const hasFilteredProducts = filteredAndSortedProducts.length > 0;

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-t-gray-200">
      {/* Filter options */}
      <div className="min-w-60">
        <div
          className="flex items-center gap-2 cursor-pointer w-fit"
          onClick={showFilterHandler}
        >
          <h2 className="my-2 text-xl flex items-center cursor-pointer gap-2">
            FILTERS
          </h2>
          <img
            className={`${
              showFilter ? "rotate-90" : ""
            } sm:hidden h-3 duration-300`}
            src={assets.dropdown_icon}
            alt="Open filter icon"
          />
        </div>
        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <h2 className="mb-3 text-sm font-medium">CATEGORIES</h2>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <Categories
              category={category}
              setCategory={setCategory}
              categoryLabel="Men"
            />
            <Categories
              category={category}
              setCategory={setCategory}
              categoryLabel="Kids"
            />
          </div>
        </div>

        {/* SubCategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <h2 className="mb-3 text-sm font-medium">TYPE</h2>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <Categories
              category={subCategory}
              setCategory={setSubCategory}
              categoryLabel="Topwear"
            />
            <Categories
              category={subCategory}
              setCategory={setSubCategory}
              categoryLabel="Bottomwear"
            />
            <Categories
              category={subCategory}
              setCategory={setSubCategory}
              categoryLabel="Winterwear"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex-1">
          <div className="flex items-center justify-between text-base sm:text-2xl mb-4">
            <Title titleText_1="ALL" titleText_2="COLLECTIONS" />
            <Filter sortType={sortType} setSortType={setSortType} />
          </div>
        </div>
        {/* Products */}
        {!hasProducts ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Loading products...</p>
          </div>
        ) : hasFilteredProducts ? (
          <Products products={filteredAndSortedProducts} />
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg mb-2">Sorry, no products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
