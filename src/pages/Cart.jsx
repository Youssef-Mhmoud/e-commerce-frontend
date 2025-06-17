import { useContext, useEffect } from "react";
import { CartContext } from "../context/ShopContext";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, cartItems } = useContext(CartContext);

  useEffect(() => {
    
  }, []);

  return (
    <div className="border-top py-5">
      <div className="text-2xl">
        <Title titleText_1="YOUR" titleText_2="CART" />
      </div>
      {/* Product */}
      <div className="border-t border-b border-gray-200">
        <div>
          <img src="" alt="" />
          <div>
            <p>name</p>
            <p>price</p>
          </div>
          <div>
            <div>size</div>
            <input type="number" />
          </div>
          <img src="" alt="clear" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
