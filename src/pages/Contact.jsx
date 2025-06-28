import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="text-2xl text-center">
        <Title titleText_1="CONTACT" titleText_2="US" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact image"
        />
        <div className="text-gray-600 flex flex-col gap-6 md:self-center">
          <h3 className="text-xl font-semibold">Our Store</h3>
          <div className="text-gray-500">
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className="text-gray-500">
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <h3 className="text-xl font-semibold">Careers at Forever</h3>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="self-start border px-8 py-4 text-sm text-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
      <div className="my-20">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
