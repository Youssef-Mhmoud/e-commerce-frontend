import { assets } from "../../assets/frontend_assets/assets";

const SearchBar = ({setShowSearch}) => {
  return (
    <div className="w-full flex items-center justify-center gap-5 bg-gray-50 border-b border-b-gray-200 border-t border-t-gray-200 py-4">
      <div className="border border-gray-400 rounded-full flex items-center justify-between px-3 w-1/2">
        <input type="text" placeholder="Search" className="outline-none text-sm w-full py-2"/>
        <button className="cursor-pointer w-3">
          <img src={assets.search_icon} alt="Search for products" />
        </button>
      </div>
      <button className="cursor-pointer w-3" onClick={() => setShowSearch(false)}>
        <img src={assets.cross_icon} alt="Close search bar button" />
      </button>
    </div>
  );
};

export default SearchBar;
