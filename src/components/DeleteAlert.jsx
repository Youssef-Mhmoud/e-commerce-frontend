const DeleteAlert = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50">
      <div className="absolute top-1/2 left-1/2 translate-[-50%] bg-white text-center w-[95%] sm:w-2/3 py-6 px-8 rounded">
        {/* <img src="" alt="" /> */}
        <h2 className="text-4xl">Are you sure?</h2>
        <p className="mt-3 text-lg font-light">
          You won't be able to revert this!
        </p>
        <div className="flex justify-center items-center gap-5 mt-7 text-white">
          <button className="bg-blue-600/85 rounded px-4 py-2 cursor-pointer">
            Yes, delete it!
          </button>
          <button className="bg-red-600/85 rounded px-4 py-2 cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlert;
