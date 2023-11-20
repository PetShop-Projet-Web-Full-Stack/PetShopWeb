import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Connexion from "./components/pages/Connexion/Connexion";
import Animalerie from "./components/pages/Animalerie/Animalerie";
import Animals from "./components/pages/Animals/Animals";
import Inscription from "./components/pages/Inscription/Inscription";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import AnimalDetails from "./components/pages/AnimalDetails/AnimalDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/animals" element={<Animals />}></Route>
        <Route exact path="/animaleries" element={<Animalerie />}></Route>
        <Route exact path="/connexion" element={<Connexion />}></Route>
        <Route exact path="/inscription" element={<Inscription />}></Route>
        <Route
          exact
          path="/forgot-password"
          element={<ForgotPassword />}
        ></Route>
        <Route
          exact
          path="/animal-details/:id"
          element={<AnimalDetails />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
