import React from "react";
import {
  CoffeeProductContent,
  CoffeePrice,
  CoffeeInstructions,
} from "../../components";

import "./Coffee.css";

const Coffee = () => {
  return (
    <div id="page">
      <CoffeeProductContent />
      <CoffeePrice />
      <CoffeeInstructions />
    </div>
  );
};

export default Coffee;
