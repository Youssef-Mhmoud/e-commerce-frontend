const Alert = ({
  removeProduct,
  removeSizeCart,
  onClose,
  quantity,
  productName,
  productId,
}) => {
  const handleDelete = () => {
    if (quantity === 0) {
      removeSizeCart(productId, productName, quantity);
      onClose();
      return;
    }
    removeProduct(productId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white text-center w-[95%] sm:w-2/3 py-6 px-8 rounded shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800">Are you sure?</h2>
        <div className="text-lg font-light text-gray-600">
          {quantity === 0 ? (
            <p className="mt-3">
              You want to delete size:
              <span className="font-medium"> "{productName}"</span>?
              <br />
              You won't be able to revert this!
            </p>
          ) : (
            <p className="mt-3">
              You want to delete
              <span className="font-medium">"{productName}"</span>?
              <br />
              You won't be able to revert this!
            </p>
          )}
        </div>
        <div className="flex justify-center items-center gap-5 mt-7 text-white">
          <button
            className="bg-blue-600/85 rounded px-4 py-2 cursor-pointer"
            onClick={handleDelete}
          >
            Yes, delete it!
          </button>
          <button
            className="bg-red-600/85 rounded px-4 py-2 cursor-pointer"
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
