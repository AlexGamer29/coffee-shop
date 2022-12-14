import React from "react";
import "./MenuList.css";

function MenuList() {
  return (
    <div className="menu__list__container">
      <img
        className="menu__list__img"
        src="https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_75185017016d4a9da8ac60fb1c68a072_large.jpg"
        alt=""
      />
      <div className="menu__list__content">
        <h1 className="menu__list__product-title">Cà phê sữa đá</h1>
        <h3 className="menu__list__product-price">35.000đ</h3>
      </div>
    </div>
  );
}

export default MenuList;
