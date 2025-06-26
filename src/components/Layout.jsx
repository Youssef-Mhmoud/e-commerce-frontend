import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Navbar from "./navbarComponents/Navbar";
import Footer from "./Footer";
import SearchBar from "./navbarComponents/SearchBar";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  const { showSearch } = useContext(ShopContext);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer
        // style={{ top: "25px" }}
        closeOnClick
        autoClose={3000}
      />
      <Navbar />
      {showSearch && <SearchBar />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
