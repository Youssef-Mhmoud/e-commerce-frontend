import { useMemo, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "./ShopContext";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = useMemo(
    () => ({
      products,
      currency,
      search,
      setSearch,
      showSearch,
      setShowSearch,
    }),
    [search, showSearch]
  );
  

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
