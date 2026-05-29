// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RegistrationForm from "./component/registration/RegistrationForm.js";
// import LoginForm from "./component/login/LoginForm.js";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/register" element={<RegistrationForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./component/registration/RegistrationForm.js";
import LoginForm from "./component/login/LoginForm.js";
import Navbar from "./component/navbar/navbar.js";
import Footer from "./component/footer/footer.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
