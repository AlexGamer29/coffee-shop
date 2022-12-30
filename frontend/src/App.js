import React, { useEffect } from "react";
import { Home, Contact, Coffee, Menu, NewProduct } from "./pages/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Footer, Navbar } from "./components";
import ReactGA from "react-ga";

import "./App.css";

function App() {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/coffee" element={<Coffee />} />
            <Route exact path="/new-product" element={<NewProduct />} />
            <Route exact path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
