import React from "react";
import "./MenuList.css";
import { MenuItem } from "./index";

function MenuList() {
  return (
    <div className="menu__list__container">
      <div className="menu__list__item">
        <div className="home-fProducts-category">
          <h1 className="home-fProducts-category-title">CÀ PHÊ ĐÁ</h1>
        </div>
        <div className="menu__list">
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
      <div className="menu__list__item">
        <div className="home-fProducts-category">
          <h1 className="home-fProducts-category-title">CÀ PHÊ SỮA</h1>
        </div>
        <div className="menu__list">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </div>
  );
}

export default MenuList;
