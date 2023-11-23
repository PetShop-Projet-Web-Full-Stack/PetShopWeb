import "./App.css";
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
import Test from "./components/pages/test";
import { useEffect } from "react";
import { doConnectSessionUser } from "./store/user";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/animals", element: <Animals /> },
    { path: "/animaleries", element: <Animalerie /> },
    { path: "/connexion", element: <Connexion /> },
    { path: "/inscription", element: <Inscription /> },
    { path: "/animalerie/:id", element: <AnimalerieAnimals /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/animal-details/:id", element: <AnimalDetails /> },
    { path: "/test", element: <Test /> },
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
