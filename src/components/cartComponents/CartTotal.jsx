import { useContext } from "react";
import Title from "../Title";
import { CartContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ currency }) => {
  const { getTotalAmount, delivery_fee } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-end my-10">
      <div className="w-full sm:w-1/2">
        <div className="text-2xl mb-[-30px]">
          <Title titleText_1="CART" titleText_2="TOTALS" />
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
          <p>Subtotal</p>
          <p>
            {currency}
            {getTotalAmount()}
          </p>
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
<<<<<<< HEAD
        <div className="flex justify-between py-2 text-sm font-bold">
          <p>Total</p>
          <p>{currency}</p>
=======
        <div className="flex justify-between py-2 text-sm">
          <p className="font-semibold">Total</p>
          <p>
            {currency}
            {getTotalAmount() + delivery_fee}
          </p>
>>>>>>> 5df01b0968bf3980244e938791a51515680516a7
        </div>
        <button
          onClick={() => navigate("/place-order")}
          className="bg-black text-white py-3 px-8 text-sm block ml-auto mt-5 cursor-pointer hover:opacity-80 duration-300"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
