import Title from "../Title";

const CartTotal = ({ currency }) => {
  return (
    <div className="flex flex-col items-end my-10">
      <div className="w-full sm:w-1/2">
        <div className="text-2xl mb-[-30px]">
          <Title titleText_1="CART" titleText_2="TOTALS" />
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
          <p>Subtotal</p>
          <p>{currency}</p>
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
          <p>Shipping Fee</p>
          <p>{currency}</p>
        </div>
        <div className="flex justify-between py-2 text-sm font-bold">
          <p>Total</p>
          <p>{currency}</p>
        </div>
        <button className="bg-black text-white py-3 px-8 text-sm block ml-auto mt-5 cursor-pointer hover:opacity-80 duration-300">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
