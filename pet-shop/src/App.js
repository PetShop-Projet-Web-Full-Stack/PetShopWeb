import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Connexion from "./components/pages/Connexion/Connexion";
import Animalerie from "./components/pages/Animalerie/Animalerie";
import Animals from "./components/pages/Animals/Animals";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/animals" element={<Animals />}></Route>
        <Route exact path="/animaleries" element={<Animalerie />}></Route>
        <Route exact path="/connexion" element={<Connexion />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
