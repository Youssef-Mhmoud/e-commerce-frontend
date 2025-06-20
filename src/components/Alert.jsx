import { toast } from "react-toastify";

const Alert = ({
  removeProduct,
  removeSizeCart,
  onClose,
  quantity,
  productName,
  sizeLabel,
  productId,
  showAlert,
}) => {
  const handleDelete = () => {
    try {
      if (quantity === 0 && sizeLabel) {
        removeSizeCart(productId, sizeLabel, quantity);
      } else {
        removeProduct(productId);
      }
      onClose();
    } catch (error) {
      toast.error(`Error deleting item ${error}`);
    }
  };

  const isSize = quantity === 0 && sizeLabel;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex items-center justify-center
    ${
      showAlert
        ? "opacity-100 visible pointer-events-auto"
        : "opacity-0 invisible pointer-events-none"
    }`}
    >
      <div
        className={`bg-white text-center w-[95%] sm:w-2/3 py-6 px-8 rounded shadow-lg ${
          showAlert
            ? "opacity-100 pointer-events-auto visible animate-zoom-in"
            : "opacity-0 pointer-events-none invisible"
        } duration-150`}
      >
        <h2 className="text-3xl font-bold text-gray-800">Are you sure?</h2>
        <div className="text-lg font-light text-gray-600 mt-2">
          {isSize ? (
            <p>
              Remove size <span className="font-semibold">"{sizeLabel}"</span>{" "}
              from
              <br />
              <span className="font-semibold">"{productName}"</span>?
            </p>
          ) : (
            <p>
              Delete <span className="font-semibold">"{productName}"</span>
              <br />
              completely from your cart?
            </p>
          )}
        </div>
        <div className="flex justify-center items-center gap-5 mt-7 text-white">
          <button
            className="bg-red-700 hover:bg-red-800 transition rounded px-4 py-2 cursor-pointer"
            onClick={handleDelete}
          >
            {isSize ? "Remove Size" : "Delete Product"}
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 transition rounded px-4 py-2 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
