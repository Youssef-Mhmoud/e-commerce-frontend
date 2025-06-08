import BestSeller from "../components/homeComponents/BestSeller";
import Hero from "../components/homeComponents/Hero";
import LatestCollection from "../components/homeComponents/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/homeComponents/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
