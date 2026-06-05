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
import PackageDetails from "./component/package details/packageDetails.js";
import Category from "./component/category/category.js";
import Testimonials from "./component/testimonials/testimonials.js";
import Destinations from "./component/destinations/destinations.js";
import Booking from "./component/booking/booking.js";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <TravelCard />
      <Category />
      <Testimonials />
      <Destinations />
    </Fragment>
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

        <Route
          path="/package/:id"
          element={<PackageDetails />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;