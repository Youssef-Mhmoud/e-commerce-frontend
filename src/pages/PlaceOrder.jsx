import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/cartComponents/CartTotal";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <form className="flex justify-between">
      <div className="basis-1/2">
        <div>
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className="flex flex-col">
          <input type="email" placeholder="Email address" required />
          <input type="text" placeholder="Street" required />
        </div>
        <div>
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div>
          <input type="text" placeholder="Zipcode" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone" required />
      </div>

      <div className="basis-1/2">
        <div>
          <CartTotal />
        </div>
        <div>
          <Title titleText_1="PAYMENT" titleText_2="METHOD" />
          <div>
            <input type="checkbox" />
            <img src={assets.stripe_logo} alt="Stripe payment method" />
          </div>
          <div>
            <input type="checkbox" />
            <img src={assets.stripe_logo} alt="Stripe payment method" />
          </div>
          <div>
            <input type="checkbox" />
            <img src={assets.stripe_logo} alt="Stripe payment method" />
          </div>
        </div>
        <button>PLACE ORDER</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
