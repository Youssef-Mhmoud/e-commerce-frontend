import { useEffect, useState } from "react";

const Images = ({ product }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product?.image?.length > 0 && !image) {
      setImage(product.image[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <div className="flex-1 flex gap-3 flex-col-reverse sm:flex-row h-1/2">
      <div className="flex sm:gap-3 sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
        {/* Images if existing */}
        {product.image &&
          product.image.map((img, index) => (
            <img
              className={`cursor-pointer w-[24%] mb-3 sm:mb-0 sm:w-full shrink-0 hover:opacity-75 duration-300 border-2 ${
                image === img ? "border-gray-500" : "border-transparent"
              }`}
              src={img}
              alt={`${product.name} Image - ${index + 1}`}
              key={index}
              onClick={() => setImage(img)}
            />
          ))}
      </div>

      {/* Show main image */}
      {product.image && (
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-full" src={image} alt={product.name} />
        </div>
      )}
    </div>
  );
};

export default Images;
