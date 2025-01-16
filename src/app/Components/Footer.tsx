import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:w-full h-auto lg:h-[300px] bg-[#FFFFFF] mt-[120px] lg:mt-[100px] p-4 lg:p-0">
      <div className="w-full lg:w-[1240.01px] h-auto lg:h-[300px] mx-auto lg:ml-[100px]">
        <div className="w-full lg:w-[1131px] h-auto lg:h-[312px] mx-auto lg:ml-[102.01] flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="w-full lg:w-[285px] h-auto lg:h-[72px] font-normal text-[16px] leading-[24px] text-[#9F9F9F] text-center lg:text-left">
            400 University Drive Suite 200 Coral
            <p>Gables, FL 33134 USA</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-center lg:justify-start items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start lg:ml-[150px]">
              <ul>
                <li className="w-auto h-[24px] font-medium text-[16px] leading-[24px] text-[#9F9F9F] mb-[15px] lg:mb-[65px] text-center lg:text-left">
                  Links
                </li>
                <li className="w-auto h-[24px] text-[16px] font-medium leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  <Link href="/"> Home</Link>
                </li>
                <li className="w-auto h-[24px] text-[16px] font-medium leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  <Link href="/shop"> Shop</Link>
                </li>
                <li className="w-auto h-[24px] text-[16px] font-medium leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  <Link href="/blog"> About</Link>
                </li>
                <li className="w-auto h-[24px] text-[16px] font-medium leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  <Link href="/contact"> Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:ml-[145px] mt-[30px] lg:mt-0">
              <ul>
                <li className="w-auto h-[24px] font-medium text-[16px] text-[#9F9F9F] leading-[24px] mb-[15px] lg:mb-[65px] text-center lg:text-left">
                  Help
                </li>
                <li className="w-auto h-[24px] font-medium text-[16px] leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  Payment Options
                </li>
                <li className="w-auto h-[24px] font-medium text-[16px] leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  Returns
                </li>
                <li className="w-auto h-[24px] font-medium text-[16px] leading-[24px] mb-[10px] lg:mb-[45px] text-center lg:text-left">
                  Privacy Policies
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:ml-[58px] mt-[30px] lg:mt-0">
              <div className="w-auto h-[24px] font-medium text-[16px] text-[#9F9F9F] leading-[24px] mb-[15px] lg:mb-[65px] text-center lg:text-left">
                Newsletter
              </div>
              <div className="w-full lg:w-[286px] mb-[-20px] h-auto text-[#9F9F9F] text-center lg:text-left">
                Enter Your Email Address
                <p className="font-medium  mt-[10px] lg:mt-0 lg:ml-[230px] text-[#000000]">
                  SUBSCRIBE
                </p>
                <p className="lg:w-[195px] w-[100px] border-[1px] border-[#000000] mx-auto lg:mx-0"></p>
                <p className="lg:w-[78.01px] sm:w-0 border-[1px] mt-[10px] lg:mt-0 lg:ml-[232px] border-black"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[1240.01px] h-auto lg:h-[59px] mx-auto lg:ml-[20px] border-t border-[#D9D9D9] mt-[10px] text-center lg:text-left">
          <p className="w-full mt-2 lg:w-[306px] h-auto lg:h-[24px] font-normal text-[16px] leading-[24px]">
            2022 Meubel House. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
