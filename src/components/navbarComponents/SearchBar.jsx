import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    visible && (
      <div className="w-full flex items-center justify-center gap-2 bg-gray-50 border-b border-b-gray-200 border-t border-t-gray-200 py-5">
        <div className="border border-gray-400 rounded-full flex items-center justify-between px-5 mx-3 w-3/4">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-inherit text-sm w-full py-2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="cursor-pointer w-3">
            <img src={assets.search_icon} alt="Search for products" />
          </button>
        </div>
        <button
          className="cursor-pointer w-3"
          onClick={() => setShowSearch(false)}
        >
          <img src={assets.cross_icon} alt="Close search bar button" />
        </button>
      </div>
    )
  );
};

export default SearchBar;
