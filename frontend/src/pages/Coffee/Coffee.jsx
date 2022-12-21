import React from "react";
import { CoffeeInstructions, CoffeeProductContent } from "../../components";


import "./Coffee.css";

const Coffee = () => {
  return (
    <div id="page">
      <CoffeeProductContent/>
      <CoffeeInstructions />
    </div>
  );
};

export default Coffee;
