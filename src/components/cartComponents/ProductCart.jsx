import { useCallback, useContext, useState } from "react";
import { CartContext } from "../../context/ShopContext";
import { assets } from "../../assets/frontend_assets/assets";
import Alert from "../Alert";

const ProductCart = ({ currency, cartData }) => {
  const { removeProductCart, updateQuantity, removeSizeCart } =
    useContext(CartContext);
  const [alert, setAlert] = useState({
    show: false,
    productId: null,
    productName: "",
    quantity: 1,
    sizeLabel: "",
  });

  const handleShowAlert = useCallback(
    (productId, productName, quantity = 1, sizeLabel = "") => {
      setAlert({ show: true, productId, productName, sizeLabel, quantity });
    },
    []
  );

  const handleCloseAlert = useCallback(() => {
    setAlert({
      show: false,
      productId: null,
      productName: "",
      quantity: null,
      sizeLabel: "",
    });
  }, []);

  return (
    <>
      <Alert
        removeProduct={removeProductCart}
        removeSizeCart={removeSizeCart}
        onClose={handleCloseAlert}
        productId={alert.productId}
        productName={alert.productName}
        quantity={alert.quantity}
        sizeLabel={alert.sizeLabel}
        showAlert={alert.show}
      />

      {cartData.map(({ product, size }) => (
        <div
          key={product._id}
          className="flex gap-6 items-center justify-between py-4 last:border-b-0 border-b-2 border-gray-200"
        >
          <div className="flex gap-3">
            <img
              className="w-20 sm:w-22"
              src={product.image?.[0]}
              alt={product.name}
            />
            <div>
              <p className="text-sm sm:text-lg font-medium">{product.name}</p>
              <div className="flex gap-5 mt-5">
                <p>
                  {currency}
                  {product.price}
                </p>
                <img
                  className="w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="remove product from cart"
                  onClick={() => handleShowAlert(product._id, product.name)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-end gap-4">
            {Object.entries(size).map(([sizeLabel, { quantity }], index) => (
              <div key={index} className="flex sm:flex-col gap-3 items-center">
                <div className="py-1 px-3 border border-gray-300 bg-gray-50">
                  {sizeLabel}
                </div>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? handleShowAlert(
                          product._id,
                          product.name,
                          +e.target.value,
                          sizeLabel
                        )
                      : updateQuantity(product._id, sizeLabel, +e.target.value)
                  }
                  min={0}
                  max={99}
                  className="border max-w-10 sm:max-w-14 px-1 sm:px-2 py-1 outline-0 rounded text-center"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
