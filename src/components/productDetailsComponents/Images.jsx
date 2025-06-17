import React, { useEffect, useState } from "react";

const Images = ({ images, name }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (images?.length > 0) {
      setImage(images[0]);
    }
  }, [images]);

  return (
    <div className="flex-1 flex gap-3 flex-col-reverse sm:flex-row h-1/2">
      <div className="flex sm:gap-3 sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
        {/* Images if existing */}
        {images &&
          images.map((img, index) => (
            <img
              className={`cursor-pointer w-[24%] mb-3 sm:mb-0 sm:w-full shrink-0 hover:opacity-75 duration-300 border-2 ${
                image === img ? "border-gray-500" : "border-transparent"
              }`}
              src={img}
              alt={`${name} Image - ${index + 1}`}
              key={index}
              onClick={() => setImage(img)}
            />
          ))}
      </div>

      {/* Show main image */}
      {images && (
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-full" src={image} alt={name} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Images);
