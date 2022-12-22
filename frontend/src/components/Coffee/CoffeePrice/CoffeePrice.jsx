import React from "react";
import "./CoffeePrice.css";

function CoffeePrice() {
  return (
    <div className="coffee__price__container">
      <div className="coffee__price__wrapper">
        <div className="coffee__price__header">
          <h1 className="coffee__price__title">
            MỨC GIÁ BÁN TRÊN THỊ TRƯỜNG (GIÁ NIÊM YẾT)
          </h1>
        </div>
        <div className="price__box__container">
          <div className="price__box__wrapper">
            <div className="price__box__left">
              <div className="price__box__inner">
                <div className="price__box__title">ROBUSTA PHIN GIẤY</div>
                <div className="price__box__price">
                  <span>70.000đ</span>
                  <span>&nbsp;/&nbsp; </span>
                  <span>gói 6 phin giấy</span>
                </div>
              </div>
              <div className="price__box__btn">
                <button type="button" className="price__box__btn-buy">
                  Mua ngay
                </button>
              </div>
            </div>
            <div className="price__box__right">
              <div className="price__box__inner">
                <div className="price__box__title">ROBUSTA PHIN GIẤY</div>
                <div className="price__box__price">
                  <span>70.000đ</span>
                  <span>&nbsp;/&nbsp; </span>
                  <span>gói 6 phin giấy</span>
                </div>
              </div>
              <div className="price__box__btn">
                <button type="button" className="price__box__btn-buy">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeePrice;
