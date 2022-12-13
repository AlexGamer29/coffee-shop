import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { ColumnOne, ColumnTwo } from "./index";

import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer">
        <div className="footer__row">
          <div className="footer__column column__one">
            <div className="footer__column__one">
              <ColumnOne />
            </div>
          </div>
          <div className="footer__column column__two">
            <div className="footer__column__two">
              <ColumnTwo />
            </div>
          </div>
          <div className="footer__column column__three">
            <div className="footer__column__three">
              <div className="footer__info__item">
                <p>
                  <Link to="/hotline" className="footer__info__links">
                    <FaPhoneAlt />
                    &nbsp; Đặt hàng: 1800 6936
                  </Link>
                </p>
              </div>
              <div className="footer__info__item">
                <p>
                  <Link to="/location" className="footer__info__links">
                    <FaMapMarkerAlt />
                    &nbsp; Liên hệ
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer__column column__four">
            <div className="footer__column__four">
              <div className="footer__info__item">
                <p>
                  <Link to="/facebook" className="footer__info__links">
                    <AiOutlineFacebook size={24} />
                  </Link>
                </p>
              </div>
              <div className="footer__info__item">
                <p>
                  <Link to="/instagram" className="footer__info__links">
                    <AiOutlineInstagram size={24} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
