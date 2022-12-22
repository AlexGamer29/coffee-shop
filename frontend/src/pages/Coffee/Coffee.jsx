import React from "react";
import {
  CoffeeHeader,
  CoffeeProductContent,
  CoffeePrice,
  CoffeeInstructions,
} from "../../components";

import "./Coffee.css";

const Coffee = () => {
  return (
    <div id="page">
      <CoffeeHeader />
      <CoffeeProductContent />
      <CoffeePrice />
      <CoffeeInstructions />
    </div>
  );
};

export default Coffee;
