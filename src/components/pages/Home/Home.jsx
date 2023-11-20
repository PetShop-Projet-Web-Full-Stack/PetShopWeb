import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import HomeBannerComponent from "../../organisms/Home/HomeBannerComponent";
import HomeDescriptionComponent from "../../organisms/Home/HomeDescriptionComponent";
import HomeDiscoverComponent from "../../organisms/Home/HomeDiscoverComponent";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex-col">
        <HomeBannerComponent />
        <HomeDescriptionComponent />
        <HomeDiscoverComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
