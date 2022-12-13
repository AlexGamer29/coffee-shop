import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header id="home-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="home-header-blur">
          <img id="home-header-image" src="https://milanocoffee.com.vn/wp-content/uploads/2022/06/banner-cf-01-02-02-1.jpeg" />
        </div>
        <h1 className="home-header-title">SẢN PHẨM MILANO COFFEE</h1>
        <p className="home-header-text">Chúng tôi muốn bán một sản phẩm cà phê sạch, chất lượng, với giá thành bình dân để người tiêu dùng được tận hưởng chính xác vị của cà phê</p>
        <button className="home-header-button">TÌM HIỂU THÊM</button>
      </header>
    </>
  );
}

export default Header;
