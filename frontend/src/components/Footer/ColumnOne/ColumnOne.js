import React from "react";
import { Link } from "react-router-dom";
import { ColumnOneInfo } from "../../../data/FooterItems/FooterItems";
import "./ColumnOne.css";

function ColumnOne() {
  return (
    <>
      {ColumnOneInfo.map((item, index) => {
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

export default ColumnOne;
