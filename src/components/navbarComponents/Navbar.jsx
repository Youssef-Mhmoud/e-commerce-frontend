import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center font-medium py-5">
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="Forever company logo" />
        </Link>
        <ul className="hidden sm:flex gap-5 text-gray-700">
          <NavbarLinks
            hrTag={true}
            classes="flex flex-col items-center gap-1"
          />
        </ul>

        <div
          className="flex items-center gap-6"
          onClick={() => setShowSearch(true)}
        >
          <img
            src={assets.search_icon}
            alt="Search icon"
            className="w-5 cursor-pointer"
          />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt="Profile icon"
              className="w-5 cursor-pointer"
            />
            <div className="pt-2 absolute right-0 hidden group-hover:block">
              <div className="flex flex-col gap-2 w-36 bg-slate-100 rounded px-5 py-3 text-gray-500">
                <p className="hover:text-black cursor-pointer duration-300">
                  My Profile
                </p>
                <p className="hover:text-black cursor-pointer duration-300">
                  Orders
                </p>
                <p className="hover:text-black cursor-pointer duration-300">
                  Logout
                </p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart icon"
              className="w-5 cursor-pointer"
            />
            <p className="absolute bg-black text-white rounded-full w-4 leading-4 text-center text-[8px] left-2 top-3 aspect-square">
              0
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Menu icon"
            className="cursor-pointer w-5 sm:hidden"
          />
        </div>

        {/* Sidebar menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all  ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                alt="Dropdown icon"
                className="h-4 rotate-180"
              />
              <button className="cursor-pointer">Back</button>
            </div>
            <NavbarLinks
              hideSidebar={setVisible}
              hrTag={false}
              classes="py-2 pl-6 border border-gray-200"
            />
          </div>
        </div>
      </nav>
      {showSearch && <SearchBar setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Navbar;
