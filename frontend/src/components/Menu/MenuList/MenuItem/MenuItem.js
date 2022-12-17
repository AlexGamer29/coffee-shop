import React from "react";
import "./MenuItem.css";

function MenuItem() {
  return (
    <div className="menu__item__container">
      <div className="menu__item__img-container">
        <img
          className="menu__item__img"
          src="https://milanocoffee.com.vn/wp-content/uploads/2022/05/ca-phe-da-moka.png"
          alt=""
        />
      </div>
      <div className="menu__item__title">
        <h2>CÀ PHÊ ĐÁ MOKA</h2>
      </div>
    </div>
  );
}

export default MenuItem;
