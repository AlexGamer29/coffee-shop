import React from "react";
import {
  CoffeeHeader,
  CoffeeInstructions,
  CoffeeProductContent,
} from "../../components";

import "./Coffee.css";

const Coffee = () => {
  return (
    <div id="page">
      <CoffeeHeader />
      <CoffeeProductContent />
      <CoffeeInstructions />
    </div>
  );
};

export default Coffee;
