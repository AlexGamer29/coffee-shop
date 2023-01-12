import React from "react";
import "./FeaturedProductItem.css";
import { CoffeeFeatured } from "../../../../constants/image";

function FeaturedProductItem(props) {
  return (
    <div className="menu__list__container">
      <img className="menu__list__img" src={CoffeeFeatured} alt="" />
      <div className="menu__list__content">
        <h1 className="menu__list__product-title">{props.data.name}</h1>
        <h3 className="menu__list__product-price">
          {props.data.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </h3>
      </div>
    </div>
  );
}

export default FeaturedProductItem;
