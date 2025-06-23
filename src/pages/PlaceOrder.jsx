import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/cartComponents/CartTotal";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="flex">
      <form>
        <div>
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div>
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
      </form>
      <div>
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
      </div>
    </div>
  );
};

export default PlaceOrder;
