import React from "react";
import "./MenuList.css";
import { MenuItem } from "./index";

function MenuList() {
  return (
    <div className="menu__list__container">
      <div className="menu__list">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default MenuList;
