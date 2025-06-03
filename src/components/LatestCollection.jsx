// import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  // const { products } = useContext(ShopContext);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title titleText_1="LATEST" titleText_2="COLLECTION" />
      </div>
    </div>
  );
};

export default LatestCollection;
