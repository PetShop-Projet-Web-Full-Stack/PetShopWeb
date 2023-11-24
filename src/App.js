import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Connexion from "./components/pages/Connexion/Connexion";
import Animalerie from "./components/pages/Animalerie/Animalerie";
import Animals from "./components/pages/Animals/Animals";
import Inscription from "./components/pages/Inscription/Inscription";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import AnimalDetails from "./components/pages/AnimalDetails/AnimalDetails";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import AnimalerieAnimals from "./components/pages/AnimalerieAnimals/AnimalerieAnimals";
import { useEffect } from "react";
import { doConnectSessionUser } from "./store/user";
import { useDispatch } from "react-redux";
import Questionnaire from "./components/pages/Questionnaire/Questionnaire";
import Favorites from "./components/pages/Favorites/Favorites";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/animals", element: <Animals /> },
    { path: "/animaleries", element: <Animalerie /> },
    { path: "/connexion", element: <Connexion /> },
    { path: "/inscription", element: <Inscription /> },
    { path: "/animalerie/:id", element: <AnimalerieAnimals /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/animal-details/:id", element: <AnimalDetails /> },
    { path: "question", element: <Questionnaire /> },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doConnectSessionUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-1">{route.element}</div>
                <Footer />
              </div>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
