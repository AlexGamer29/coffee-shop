import React from "react";
import {
  Navbar,
  Footer,
  HomeHeader,
  HomeFeaturedProducts,
} from "../../components/index";
import "./Home.css";

const Home = () => {
  return (
    <div id="page">
      <HomeHeader />
      <HomeFeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home;
