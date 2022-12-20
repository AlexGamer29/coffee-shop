import React from "react";
import {
  CoffeeContentImage1,
  CoffeeContentImage2,
  CoffeeContentImage3,
} from "../../../constants/image";

const CoffeeProductContent = () => {
  return (
    <>
      <div className="content_1 w-full flex flex-row px-44 py-12">
        <div className="w-2/4s items-center py-28 pl-8 pr-32">
          <h1 className="font-bold pb-8 text-3xl">CÀ PHÊ PHIN GIẤY LÀ GÌ</h1>
          <p className="text-2xl">
            Cà phê phin giấy (có tên tiếng anh là Drip Bag coffee), thường được
            gọi là cà phê túi lọc hoặc phin giấy lọc cà phê. Là một dạng cà phê
            rang xay được đựng trong túi giấy lọc, điều đặc biệt là chúng được
            thiết kế và sử dụng như một chiếc phin pha cà phê vô cùng tiện lợi.
            .
          </p>
        </div>
        <img className="w-4/12" src={CoffeeContentImage1} alt="" />
      </div>
      <div className="content_2 w-full flex flex-row px-44 py-12">
        <img className="w-4/12" src={CoffeeContentImage2} alt="" />
        <div className="w-2/4s items-center py-28 pl-32 pr-8">
          <h1 className="content1 font-bold pb-8 text-3xl">
            GIỚI THIỆU VỀ CÀ PHÊ PHIN GIẤY MILANO COFFEE
          </h1>
          <p className="text-2xl">
            Cà phê phin giấy MILANO COFFEE 100% là những hạt cà phê chín cây
            được trồng, thu hoạch và sản xuất theo quy trình nghiêm ngặt. Sử
            dụng phương pháp rang mộc giúp giữ nguyên hương vị thuần túy và chất
            lượng của hạt cà phê.
          </p>
        </div>
      </div>
      <div className="content_3 w-full flex flex-row px-44 py-12">
        <div className="w-2/4s items-center py-28 pl-8 pr-32">
          <h1 className="font-bold pb-8 text-3xl">
            CÁC LOẠI CÀ PHÊ PHIN GIẤY CỦA MILANO COFFEE
          </h1>
          <p className="text-2xl">
            MILANO COFFEE hiện có hai dòng sản phẩm cà phê phin giấy Robusta và
            Arabica. Nếu cà phê Robusta chín cây rang mộc được tuyển chọn với
            100% hạt Robusta, trồng theo phương pháp hữu cơ đạt chuẩn Organic,
            thu hoạch và sản xuất theo quy trình nghiêm ngặt, đem đến vị đậm và
            đắng thì cà phê Arabica chín cây rang mộc được tuyển chọn với 100%
            hạt Arabica, trồng tại vùng Cầu Đất danh tiếng mang lại vị chua đặc
            trưng, đắng dịu và hậu vị quyến rũ, nồng nàn. Bên cạnh đó, với thiết
            kế túi zip mặt nhôm cùng với nút thoáng khí giúp bảo quản sản phẩm,
            giữ nguyên hương vị cà phê thơm ngon, trọn vẹn.
          </p>
        </div>
        <img className="w-5/12" src={CoffeeContentImage3} alt="" />
      </div>
    </>
  );
};

export default CoffeeProductContent
