import React, { useEffect } from "react";

import { Home, Contact, Coffee, Menu, NewProduct } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";

import "./App.css";

import ReactGA from "react-ga";
const TRACKING_ID = "UA-230322881-1";
ReactGA.initialize(TRACKING_ID);

function App() {
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
