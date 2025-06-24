import { useContext } from "react";
import Title from "../components/Title";
import { CartContext } from "../context/ShopContext";

const Orders = () => {
  const { getOrderProducts, currency } = useContext(CartContext);
  console.log(getOrderProducts());
  return (
    <div className="border-t border-t-gray-200 pt-7">
      <div className="text-2xl mb-[-30px]">
        <Title titleText_1="MY" titleText_2="ORDERS" />
      </div>
      <div className="border-b border-t border-gray-200 py-4 text-gray-700 ">
        <div className="flex gap-4">
          <img className="w-20 sm:w-24" src={""} alt="" />
          <div>
            <p className="sm:text-base font-medium">Name</p>
            <div className="flex gap-1">
              <p>Price: </p>
              <p className="text-lg font-semibold">{currency}33</p>
            </div>
            <div className="flex gap-1">
              <p>Date: </p>
              <p className="text-gray-400">Tue Jun 24 2025</p>
            </div>
            <div className="flex gap-1">
              <p>Payment: </p>
              <p className="text-gray-400"> COD</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <p>Size: </p>
                <p>L</p>
              </div>
              <div className="flex gap-1">
                <p>Quantity: </p>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <p className="w-2 h-2 rounded-full bg-green-500"></p>
            <p className="text-sm">Order Placed</p>
          </div>
          <button className="border border-gray-200 py-2 px-4 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100 duration-200">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
