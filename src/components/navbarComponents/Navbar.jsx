import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { ShopContext } from "../../context/ShopContext";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center font-medium py-5">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Forever company logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavbarLinks hrTag={true} classes="flex flex-col items-center gap-1" />
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="Search icon"
          className="w-5 cursor-pointer"
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
        />

        <ProfileIcon />

        <CartIcon cartAmount={getCartAmount()} />
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu icon"
          className="cursor-pointer w-5 sm:hidden"
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden z-10 transition-all  ${
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
  );
};

export default Navbar;
