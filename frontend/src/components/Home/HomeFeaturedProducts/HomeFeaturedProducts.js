import React from "react";
import "./HomeFeaturedProducts.css";
import { FeaturedProductItem } from "./index";

function HomeFeaturedProducts() {
  return (
    <>
      <div id="home-fProducts">
        <div className="home-fProducts-container">
          <FeaturedProductItem />
          <FeaturedProductItem />
          <FeaturedProductItem />
          <FeaturedProductItem />
          <FeaturedProductItem />
          <FeaturedProductItem />
        </div>
      </div>
    </>
  );
}

export default HomeFeaturedProducts;
