import React, { useEffect, useState } from "react";

import { Home, Contact, Coffee, Menu, NewProduct } from "./pages/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Footer, Navbar } from "./components";

import "./App.css";

import ReactGA from "react-ga";

function App() {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);

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
