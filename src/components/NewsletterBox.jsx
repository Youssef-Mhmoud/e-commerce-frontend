const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </h2>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-200 pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10 cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
