import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">Home Content</div>
      <Footer />
    </div>
  );
};

export default Home;
