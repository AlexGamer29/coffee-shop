import React from "react";
import { Footer } from "../../components";
import {HomeHeader,HomeFeaturedProducts} from "../../components/index"
import "./Home.css";

const Home = () => {
  return (
    <div id="page">
      <HomeHeader />
      <HomeFeaturedProducts/>

      <Footer />
    </div>
  );
};

export default Home;
