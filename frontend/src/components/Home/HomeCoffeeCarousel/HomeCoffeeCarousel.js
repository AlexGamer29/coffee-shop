import React from "react";
import "./HomeCoffeeCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useAnalyticsEventTracker } from "../../../hooks";

function HomeCoffeeCarousel() {
  const gaEventTracker = useAnalyticsEventTracker("Xem slider");

  return (
    <>
      <div className="homeCarousel-container">
        <Carousel
          className="homeCarousel"
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div
            className="homeCarousel-imageContainer"
            onClick={() => gaEventTracker("HOME Cà phê đen đá")}
          >
            <img
              className="homeCarousel-image"
              src="https://milanocoffee.com.vn/wp-content/uploads/2022/10/Untitled-1-1.jpg"
            />
          </div>
          <div
            className="homeCarousel-imageContainer"
            onClick={() => gaEventTracker("HOME Hạt cà phê")}
          >
            <img
              className="homeCarousel-image"
              src="https://wallpaperaccess.com/full/1320595.jpg"
            />
          </div>
          <div
            className="homeCarousel-imageContainer"
            onClick={() => gaEventTracker("HOME Cà phê Ý")}
          >
            <img
              className="homeCarousel-image"
              src="https://images5.alphacoders.com/905/905439.jpg"
            />
          </div>
          <div
            className="homeCarousel-imageContainer"
            onClick={() => gaEventTracker("HOME Cà phê Cappuccino")}
          >
            <img
              className="homeCarousel-image"
              src="https://wallpaperaccess.com/full/1320593.jpg"
            />
          </div>
          <div
            className="homeCarousel-imageContainer"
            onClick={() => gaEventTracker("HOME Cà phê rang")}
          >
            <img
              className="homeCarousel-image"
              src="https://images6.alphacoders.com/430/thumbbig-430851.webp"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HomeCoffeeCarousel;
