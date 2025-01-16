import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="relative w-full lg:w-full mt-[40px] h-auto lg:h-[450px]">
      <Image
        src="Rectangle 17.svg"
        height={450}
        width={1440}
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:mt-[-150px] mt-0 p-4 lg:p-0">
        <div className="w-full lg:w-[454px] h-auto lg:h-[120px]">
          <div className="text-[36px] lg:text-[60px] font-bold leading-[48px] lg:leading-[90px]">
            Our Instagram
          </div>
          <div className="w-full lg:w-[454px] h-auto lg:h-[30px] font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] mt-2 mx-auto">
            Follow our store on Instagram
          </div>
        </div>
        <div className="relative mt-4 lg:mt-[15px] w-full lg:w-[255px] h-auto lg:h-[64px] rounded-[50px] bg-[#F4F4F4] flex items-center justify-center shadow-lg">
          <p className="font-normal text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] text-black">
            Follow Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
