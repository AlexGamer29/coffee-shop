import React from "react";
import { NewProductHeader } from "../../components";
import "./NewProduct.css";

import { NewProductImage1, NewProductImage2 } from "../../constants/image";

const NewProduct = () => {
  return (
    <>
      <div id="page">
        <NewProductHeader />
        <div className="new_product w-full py-12">
          <div classNane="main_content flex flex-column w-full ">
            <div className="content_1 w-full flex flex-row px-44 py-12">
              <img className="w-2/4" src={NewProductImage1} alt="" />
              <div className="w-2/4s items-center py-28 px-8">
                <h1 className="content1 font-bold pb-8 text-3xl">
                  CÀ PHÊ SỮA SOCOLA
                </h1>
                <p className="text-2xl">
                  Đây là một sự lựa chọn ngọt ngào, vị thơm béo của cà phê sữa,
                  vị đắng thanh thoát của Socola. Là sự kết hợp đậm đà của cả
                  hai nguyên liệu nhưng không hề bị trộn lẫn, lựa chọn thích hợp
                  cho bạn cần chút năng lực vực dậy tinh thần khi uể oải.
                </p>
              </div>
            </div>
            <div className="content_2 w-full flex flex-row px-44 py-12">
              <div className="w-2/4s items-center py-28 px-8">
                <h1 className="font-bold pb-8 text-3xl">CÀ PHÊ KEM CHEESE</h1>
                <p className="text-2xl">
                  Sự kết hợp hoàn hảo của cà phê Milano đậm vị, quyện cùng kem
                  Cheese thơm ngon dịu nhẹ mang đến cảm giác khoan khoái ngay
                  lần đầu tiên thưởng thức, topping thạch cà phê dai giòn, vui
                  miệng. Một cuộc “dạo chơi” của vị giác, mang đến nhiều hương
                  vị cho bạn những trải nghiệm tươi mới.
                </p>
              </div>
              <img className="w-2/4" src={NewProductImage2} alt="" />
            </div>
            <button className="newproduct_button">
              XEM THÊM
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
