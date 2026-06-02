import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import RegistrationForm from "./component/registration/RegistrationForm.js";
import LoginForm from "./component/login/LoginForm.js";
import Navbar from "./component/navbar/navbar.js";
import Footer from "./component/footer/footer.js";
import TravelCard from "./component/cards/travelcard.js";
import Hero from "./component/hero/hero.js";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment><Hero /><TravelCard /></Fragment>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<LoginForm />}
        />

        <Route
          path="/register"
          element={<RegistrationForm />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;