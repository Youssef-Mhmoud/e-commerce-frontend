import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            className="w-32 mb-5"
            src={assets.logo}
            alt="Forever company logo"
          />
          <p className="text-gray-600 w-full sm:w-3/4 md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className="font-medium text-xl mb-5">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>
              <Link to="/" className="hover:text-black duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black duration-200">
                About us
              </Link>
            </li>
            <li className="hover:text-black duration-200">
              <Link>Delivery</Link>
            </li>
            <li className="hover:text-black duration-200">
              <Link>Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-xl mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a
                href="tel:+1-000-000-0000"
                className="hover:text-black duration-200"
              >
                +1-000-000-0000
              </a>
            </li>
            <li>
              <a
                href="mail:contact@foreveryou.com"
                className="hover:text-black duration-200"
              >
                contact@foreveryou.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t-2 border-t-gray-200 py-6 text-gray-800 text-sm">
        Copyright {year}@ Forever.com - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
