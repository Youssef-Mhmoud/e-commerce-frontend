import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";

const ProfileIcon = () => {
  return (
    <div className="group relative">
      <Link to="/login">
        <img
          src={assets.profile_icon}
          alt="Profile icon"
          className="w-5 cursor-pointer"
        />
      </Link>
      <div className="pt-2 absolute right-0 hidden group-hover:block z-10">
        <div className="flex flex-col gap-2 w-36 bg-slate-100 rounded px-5 py-3 text-gray-500">
          <p className="hover:text-black cursor-pointer duration-300">
            My Profile
          </p>
          <p className="hover:text-black cursor-pointer duration-300">Orders</p>
          <p className="hover:text-black cursor-pointer duration-300">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
