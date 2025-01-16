import React from "react";
import Image from "next/image";

const Newarrival = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[1476px] h-auto lg:h-[799px] items-center justify-center p-4 lg:p-0">
      <div className="w-full lg:w-[983px] h-auto lg:h-[799px] mb-4 lg:mb-0">
        <Image
          className="w-full h-full"
          src="Asgaard sofa 1.svg"
          width={983}
          height={799}
          alt="Sofa Asgard"
        />
      </div>
      <div className="lg:ml-[30px] text-center lg:text-left">
        <div className="w-full lg:w-[331px] h-auto lg:h-[108px] flex flex-col items-center lg:items-start justify-center">
          <p className="font-medium text-[24px] lg:text-[24px] leading-[36px]">
            New Arrivals
          </p>
          <div className="font-bold text-[36px] lg:text-[48px] leading-[48px] lg:leading-[72px] mt-2">
            Asgaard sofa
          </div>
        </div>
        <div className=" lg:ml-[40px] w-full lg:w-[255px] h-auto lg:h-[64px] border-[1px] border-black mt-[20px] flex items-center justify-center bg-white">
          <p className="font-normal text-[20px] leading-[30px]">Order Now</p>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
