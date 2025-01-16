import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="bg-[#FBEBB5] flex flex-col-reverse lg:flex-row w-full lg:w-[1440px] h-auto lg:h-[900px] p-4 lg:p-0">
      <div className="w-full lg:w-[440px] h-auto lg:h-[276px] mt-4 lg:mt-[328px] ml-0 lg:ml-[220px] text-[32px] lg:text-[64px] font-medium leading-[48px] lg:leading-[96px] flex flex-col justify-center items-start">
        <div className="flex gap-2 lg:gap-4">
          <div>Rocket</div>
          <div>single</div>
        </div>
        <div>seater</div>
        <Link href="/shop">
          <div className="w-[121px] h-[36px] font-medium text-[22px] lg:text-[24px] leading-[24px] lg:leading-[36px] mt-4 lg:mt-0">
            Shop Now
            <div className="border-[1px] border-black"></div>
          </div>
        </Link>
      </div>
      <div className="flex-shrink-0 mt-4 lg:mt-0">
        <Image
          src="/Rocket single seater 1.svg"
          width={853}
          height={1000}
          alt="sofa image"
          className="  lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Herosection;
