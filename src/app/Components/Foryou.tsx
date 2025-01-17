import React from "react";
import Image from "next/image";
import Link from "next/link";

const Foryou = () => {
  return (
    <div className="">
      <div>
        <Link href="/singleProduct">
          <h1 className="w-auto lg:w-[311px] h-auto lg:h-[54px] mx-auto lg:ml-[564px] text-[24px] lg:text-[36px] font-medium leading-[36px] lg:leading-[54px] mt-[30px] lg:mt-[55px] text-center lg:text-left">
            Top Picks For You
          </h1>
          <p className="text-[#9F9F9F] w-auto lg:w-[773px] h-auto lg:h-[24px] mx-auto lg:ml-[333px] text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] mt-[13px] text-center lg:text-left">
            Find a bright idea to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
          <div className="flex flex-col lg:flex-row mt-[30px] lg:mt-[60px] justify-center items-center lg:items-start">
            <div className="w-[287px] h-auto mx-auto lg:ml-[100px] mb-[30px] lg:mb-0">
              <Image
                src="Trenton modular sofa_3 1.svg"
                width={750}
                height={384.46}
                alt="For You"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Trenton modular sofa_3
                </p>
                <p className="mt-[9px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-auto mx-auto lg:ml-[30px] mb-[30px] lg:mb-0">
              <Image
                className="h-[287px]"
                src="Granite dining table with dining chair 1.svg"
                width={255}
                height={185}
                alt="For You2"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Granite dining table with dining chair
                </p>
                <p className="mt-[9px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-auto mx-auto lg:ml-[30px] mb-[30px] lg:mb-0">
              <Image
                className="h-[287px]"
                src="Outdoor bar table and stool 1.svg"
                width={250}
                height={376}
                alt="For You3"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Outdoor bar table and stool
                </p>
                <p className="mt-[9px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-auto mx-auto lg:ml-[30px]">
              <Image
                className="h-[287px]"
                src="Plain console with teak mirror 1.svg"
                width={240}
                height={174}
                alt="For You4"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Plain console with teak mirror
                </p>
                <p className="mt-[9px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>
          </div>
          <p className="w-auto h-[30px] mx-auto lg:ml-[667px] font-medium text-[18px] lg:text-[20px] leading-[30px] mt-[50px] lg:mt-[100px] text-center lg:text-left">
            View More
          </p>
          <p className="border-[1px] border-black w-[115px] mt-[20px] mx-auto lg:ml-[662px]"></p>
        </Link>
      </div>
    </div>
  );
};

export default Foryou;
