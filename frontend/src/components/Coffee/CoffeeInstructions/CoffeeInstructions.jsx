import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const CoffeeInstructions = () => {
  return (
    <div className="instruction w-full px">
      <div className="content_1 w-full flex flex-row px-44 py-12">
        <video autoPlay muted type="video/mp4" className="w-2/4 border-0">
          <source
            src="https://milanocoffee.com.vn/wp-content/uploads/2022/05/huong-dan-pha-che-ca-phe-phin-giay.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-2/4s items-center py-28 px-8">
          <h1 className="content1 font-bold pb-8 text-3xl">
            CÀ PHÊ SỮA SOCOLA
          </h1>
          <div className="text-2xl inline">
            <p className="flex">
              <GoPrimitiveDot />
              Bước 1: Xé phin giấy theo đường chấm có sẵn
            </p>
            <br />
            <p className="flex">
              <GoPrimitiveDot />
              Bước 2: Gắn quai phin giấy lên miệng ly / cốc.
            </p>
            <br />
            <p className="flex">
              <GoPrimitiveDot />
              Bước 3: Rót nước nóng đều cà phê trong phin giấy, sau đó rót thêm
              120ml vào.
            </p>
            <br />
            <p className="flex">
              <GoPrimitiveDot />
              Bước 4: Thưởng thức cà phê theo cách riêng của bạn.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoffeeInstructions;
