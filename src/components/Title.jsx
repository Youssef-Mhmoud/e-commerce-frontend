const Title = ({ titleText_1, titleText_2, paragraphText }) => {
  return (
    <div className="py-8">
      <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-gray-500">
          {titleText_1}{" "}
          <span className="font-medium text-gray-700">{titleText_2}</span>
        </p>
        <p className="w-8 sm:w-11 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      {paragraphText && (
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          {paragraphText}
        </p>
      )}
    </div>
  );
};

export default Title;
