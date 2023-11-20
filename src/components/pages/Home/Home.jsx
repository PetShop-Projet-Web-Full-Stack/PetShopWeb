import HomeBannerComponent from "../../organisms/Home/HomeBannerComponent";
import HomeDescriptionComponent from "../../organisms/Home/HomeDescriptionComponent";
import HomeDiscoverComponent from "../../organisms/Home/HomeDiscoverComponent";

const Home = () => {
  return (
    <div className="flex-col">
      <HomeBannerComponent />
      <HomeDescriptionComponent />
      <HomeDiscoverComponent />
    </div>
  );
};

export default Home;
