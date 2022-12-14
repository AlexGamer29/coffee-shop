import "./App.css";
import { Home, Contact, Coffee, NewProduct, Menu } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    </>
  );
}

export default App;
