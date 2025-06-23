import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/cartComponents/CartTotal";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <form className="flex flex-col sm:flex-row justify-between border-t border-gray-200 gap-3">
      <div className="w-full sm:w-1/2">
        <div className="text-xl">
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

      <div className="w-full sm:w-1/2">
        <div>
          <CartTotal showButton={false} />
        </div>
        <div>
          <Title titleText_1="PAYMENT" titleText_2="METHOD" />
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex border border-gray-300 gap-8 p-3">
              <input type="checkbox" />
              <img
                className="w-12"
                src={assets.stripe_logo}
                alt="Stripe payment method"
              />
            </div>
          </div>
        </div>
        <button className="bg-black text-white text-sm py-3 px-16 block ml-auto mt-5 cursor-pointer hover:opacity-80 duration-300">
          PLACE ORDER
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
