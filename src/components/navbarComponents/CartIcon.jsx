import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const CartIcon = ({ cartAmount }) => {
  return (
    <Link to="/cart" className="relative">
      <img
        src={assets.cart_icon}
        alt="Cart icon"
        className="w-5 cursor-pointer"
      />
      <p className="absolute bg-black text-white rounded-full w-4 leading-4 text-center text-[8px] left-2 top-3 aspect-square">
        {cartAmount}
      </p>
    </Link>
  );
};

export default React.memo(CartIcon);
