import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Products from "../components/productComponents/Products";
import { assets } from "../assets/frontend_assets/assets";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { products } = useContext(ShopContext);

  const showFilterHandler = () => {
    setShowFilter((isShowing) => !isShowing);
  };

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
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <div className="flex items-center gap-2">
              <input className="w-3" type="checkbox" id="men" value="Men" />
              <label htmlFor="men">Men</label>
            </div>
            <div className="flex items-center gap-2">
              <input className="w-3" type="checkbox" id="kids" value="Kids" />
              <label htmlFor="kids">Kids</label>
            </div>
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
            <div className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                id="topwear"
                value="Topwear"
              />
              <label htmlFor="topwear">Topwear</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                id="bottomwear"
                value="Bottomwear"
              />
              <label htmlFor="bottomwear">Bottomwear</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                id="winterwear"
                value="Winterwear"
              />
              <label htmlFor="winterwear">Winterwear</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-1">
          <div className="flex items-center justify-between text-base sm:text-2xl mb-4">
            <Title titleText_1="ALL" titleText_2="COLLECTIONS"/>
            <select className="border-2 border-gray-300 text-sm p-2">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Collection;
