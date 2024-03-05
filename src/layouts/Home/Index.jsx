import About2 from "../../components/home/About-2/Index";
import About from "../../components/home/About/Index";
import Banner from "../../components/home/Banner/Index";
import Doctors from "../../components//home/Doctors/Index";
import Footer from "../../components/home/Footer/Index";
import HomeStats from "../../components/home/HomeStats/Index";
import News from "../../components/home/News/Index";
import Offer from "../../components/home/Offer/Index";
import Header from "../../components/home/Header/Index";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "MedTrack | Home";
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Offer />
      <About />
      <About2 />
      <Doctors />
      <HomeStats />
      <News />
      <Footer />
    </>
  );
};

export default HomePage;
