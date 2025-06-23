import { useContext } from "react";
import Title from "../Title";
import { CartContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { getTotalAmount, delivery_fee, currency } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="w-full">
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

      <div className="flex justify-between py-2 text-sm font-bold">
        <p>Total</p>
        <p>
          {currency}
          {getTotalAmount() + delivery_fee}
        </p>
      </div>
      <button
        onClick={() => navigate("/place-order")}
        className="bg-black text-white py-3 px-8 text-sm block ml-auto mt-5 cursor-pointer hover:opacity-80 duration-300"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartTotal;
