import React from "react";
import { Link } from "react-router-dom";
import { ColumnTwoInfo } from "../../../data/FooterItems/FooterItems";
import "./ColumnTwo.css";

function ColumnTwo() {
  return (
    <>
      {ColumnTwoInfo.map((item, index) => {
        return (
          <div className="footer__info__item">
            <p>
              <Link to={item.path} className="footer__info__links">
                {item.title}
              </Link>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default ColumnTwo;
