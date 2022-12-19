import React from "react";
import {
  HomeRibbon,
  HomeHeader,
  HomeFeaturedProducts,
  HomeCoffeeCarousel,
} from "../../components/index";
import "./Home.css";

const Home = () => {
  return (
    <div id="page">
      <HomeHeader />
      <HomeFeaturedProducts />
      <HomeRibbon />
      <HomeCoffeeCarousel />
    </div>
  );
};

export default Home;
