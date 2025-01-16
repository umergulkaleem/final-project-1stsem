import React from "react";
import Image from "next/image";

const Sidetable = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-full h-auto lg:h-[672px] p-4 lg:p-0">
      <div className="flex flex-col w-full lg:w-[605px] h-auto lg:h-[562px] items-center lg:items-start">
        <Image
          className="mt-4 lg:mt-[71px] lg:ml-[100px] w-full lg:w-[1440px]"
          src="/Granite square side table 1.svg"
          width={1092}
          height={1641}
          alt="Side table 1"
        />
        <div className="w-auto lg:w-[182px] h-auto lg:h-[54px] mt-4 lg:mt-[-190px] font-medium leading-tight lg:leading-[54px] text-[24px] lg:text-[36px] text-center lg:ml-[270px] ">
          Side table
        </div>
        <div className="w-auto lg:w-[125px] h-auto lg:h-[36px] mt-4 lg:mt-[24px] font-medium leading-tight lg:leading-[36px] text-[18px] lg:text-[24px] text-center lg:ml-[270px]">
          View More
          <h1 className="border-[1px] mt-2 lg:mt-3 border-black"></h1>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-[605px] h-auto lg:h-[562px] items-center lg:items-start mt-8 lg:mt-0">
        <Image
          className="mt-4 lg:mt-[67px] lg:ml-[100px] w-full lg:w-[1440px]"
          src="/Cloud sofa three seater + ottoman_3 1.png"
          width={1585}
          height={1055}
          alt="Side table 1"
        />
        <div className="w-auto lg:w-[182px] h-auto lg:h-[54px] mt-4 lg:mt-[-155px] font-medium leading-tight lg:leading-[54px] text-[24px] lg:text-[36px] text-center lg:ml-[270px]">
          Side table
        </div>
        <div className="w-auto lg:w-[125px] h-auto lg:h-[36px] mt-4 lg:mt-[24px] font-medium leading-tight lg:leading-[36px] text-[18px] lg:text-[24px] text-center lg:ml-[270px]">
          View More
          <h1 className="border-[1px] mt-2 lg:mt-3 border-black"></h1>
        </div>
      </div>
    </div>
  );
};

export default Sidetable;
