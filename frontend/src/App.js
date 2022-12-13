import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Home,Contact,Caphe,Newproduct,Menu} from './pages/page.js'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <>
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
