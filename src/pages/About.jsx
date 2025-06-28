import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="text-2xl text-center">
        <Title titleText_1="ABOUT" titleText_2="US" />
      </div>
      <div className="flex flex-col lg:flex-row gap-16">
        <img
          className="w-full lg:max-w-[450px]"
          src={assets.about_img}
          alt="About image"
        />
        <div className="text-gray-600 flex flex-col gap-6 lg:self-center">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h3 className="font-bold text-gray-800">Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-xl mt-5 mb-[-15px]">
        <Title titleText_1="WHY" titleText_2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm text-gray-600">
        <div className="border border-gray-200 py-20 px-10">
          <h3 className="font-bold text-black mb-5">Quality Assurance:</h3>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-200 py-20 px-10">
          <h3 className="font-bold text-black mb-5">Convenience:</h3>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-200 py-20 px-10">
          <h3 className="font-bold text-black mb-5">
            Exceptional Customer Service:
          </h3>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <div className="my-20">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
