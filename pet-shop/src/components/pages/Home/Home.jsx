import CardComponent from "../../molecules/CardComponent/CardComponent";
import Header from "../../organisms/Header/Header";

const Home = () => {
  const cards = [
    {
      title: "Test 1",
      description: "Description test 1",
      imgSrc:
        "https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA",
    },
    {
      title: "Test 2",
      description: "Description test 2",
      imgSrc:
        "https://imgs.search.brave.com/6yz2O2VMpgQz_QxPjezntKKQCz7JzLGM10nxx8rjT9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
    },
    {
      title: "Test 3",
      description: "Description test 3",
      imgSrc:
        "https://imgs.search.brave.com/nhDizHNGc5q-bgrcxRQWu2cu8EIrEHKQxG9Bp6YLkGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA",
    },
    {
      title: "Test 2",
      description: "Description test 2",
      imgSrc:
        "https://imgs.search.brave.com/6yz2O2VMpgQz_QxPjezntKKQCz7JzLGM10nxx8rjT9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
    },
  ];

  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <div className="flex flex-wrap gap-20 p-5 justify-between">
        {cards.map((card, index) => {
          return (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
              btnClazz={"bg-gray-900"}
              btnContent="Voir plus"
              srcImg={card.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
