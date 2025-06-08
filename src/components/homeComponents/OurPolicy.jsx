import { assets } from "../../assets/frontend_assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      image: assets.exchange_icon,
      text_1: "Easy Exchange Policy",
      text_2: "We offer hassle free exchange policy",
    },
    {
      image: assets.quality_icon,
      text_1: "7 Days Return Policy",
      text_2: "We provide 7 days free return policy",
    },
    {
      image: assets.support_img,
      text_1: "Best customer support",
      text_2: "We provide 24/7 customer support",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-center py-20 text-gray-700">
      {policies.map((item, index) => (
        <div key={index}>
          <img
            className="w-12 m-auto mb-5"
            src={item.image}
            alt={item.text_1}
          />
          <p className="font-semibold">{item.text_1}</p>
          <p className="text-gray-400">{item.text_2}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
