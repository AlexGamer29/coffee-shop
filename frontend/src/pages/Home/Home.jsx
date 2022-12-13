import React from "react";
import {HomeHeader,HomeFeaturedProducts} from "../../components/index"
import "./Home.css";

const Home = () => {
  return (
    <div id="page">
      <HomeHeader />
      <HomeFeaturedProducts/>

    </div>
  );
};

export default Home;
