import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/cartComponents/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { addToOrders, setPayment, payment } = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <form className="flex flex-col sm:flex-row justify-between border-t border-gray-200 gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      <div className="w-full sm:max-w-[480pxs] text-gray-800">
        <div className="text-xl sm:text-2xl">
          <Title titleText_1="DELIVERY" titleText_2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            className="w-1/2 border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="First name"
            required
          />
          <input
            className="w-1/2 border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <input
            className="w-full border border-gray-300 py-1.5 px-3.5 rounded"
            type="email"
            placeholder="Email address"
            required
          />
          <input
            className="w-full border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="Street"
            required
          />
        </div>
        <div className="flex gap-3 mt-4">
          <input
            className="w-1/2 border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="w-1/2 border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-3 mt-4">
          <input
            className="w-1/2 border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="Zipcode"
            required
          />
          <input
            className="w-1/2 border border-gray-300 py-1.5 px-3.5 rounded"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          className="w-full border border-gray-300 py-1.5 px-3.5 rounded mt-4"
          type="tel"
          placeholder="Phone"
          required
        />
      </div>

      <div className="mt-8 min-w-1/2">
        <div>
          <CartTotal showButton={false} />
        </div>
        <div>
          <div className="mb-[-30px]">
            <Title titleText_1="PAYMENT" titleText_2="METHOD" />
          </div>
          <div className="flex flex-col justify-between gap-3">
            <div
              onClick={() => setPayment("STRIPE")}
              className="flex items-center border border-gray-200 gap-3 p-2 px-3 cursor-pointer hover:bg-gray-50 duration-200"
            >
              <p
                className={`w-3.5 h-3.5 rounded-full border border-gray-200 ${
                  payment === "STRIPE" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.stripe_logo}
                alt="Stripe payment method"
              />
            </div>
            <div
              onClick={() => setPayment("RAZORPAY")}
              className="flex items-center border border-gray-200 gap-3 p-2 px-3 cursor-pointer hover:bg-gray-50 duration-200"
            >
              <p
                className={`w-3.5 h-3.5 rounded-full border border-gray-200 ${
                  payment === "RAZORPAY" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="Stripe payment method"
              />
            </div>
            <div
              onClick={() => setPayment("COD")}
              className="flex items-center border border-gray-200 gap-3 p-2 px-3 cursor-pointer hover:bg-gray-50 duration-200"
            >
              <p
                className={`w-3.5 h-3.5 rounded-full border border-gray-200 ${
                  payment === "COD" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/orders");
            addToOrders(payment);
          }}
          className="bg-black text-white text-sm py-3 px-16 block ml-auto mt-5 cursor-pointer hover:opacity-80 duration-300"
        >
          PLACE ORDER
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
