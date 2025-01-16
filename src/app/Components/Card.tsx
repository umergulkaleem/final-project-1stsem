import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-between sm:space-y-6 sm:px-4 sm:mt-6 ml-[200px] lg:ml-0 lg:px-0">
      <div className="w-full sm:w-[287px] h-[373px] mx-2 sm:mb-6 md:w-[287px] lg:w-[287px]">
        <Image
          src="Trenton modular sofa_3 1.svg"
          width={255}
          height={185}
          alt="For You"
          className="sm:w-full sm:h-auto"
        />
        <div className="mt-4 ml-[-50px] lg:ml-0">
          <p className="text-center text-[16px] font-normal leading-[24px] sm:text-[14px]">
            Trenton modular sofa_3
          </p>
          <p className="text-center mt-2 text-[24px] font-medium sm:text-[20px] leading-[36px]">
            Rs. 25,000.00
          </p>
        </div>
      </div>

      <div className="w-full sm:w-[287px] h-[397px] mx-2 sm:mb-6 md:w-[287px] lg:w-[287px]">
        <Image
          className="sm:w-full sm:h-auto"
          src="Granite dining table with dining chair 1.svg"
          width={255}
          height={185}
          alt="For You2"
        />
        <div className="mt-4 ml-[-50px] lg:ml-0">
          <p className="text-center text-[16px] font-normal leading-[24px] sm:text-[14px]">
            Granite dining table with dining chair
          </p>
          <p className="text-center mt-2 text-[24px] font-medium sm:text-[20px] leading-[36px]">
            Rs. 25,000.00
          </p>
        </div>
      </div>

      <div className="w-full sm:w-[287px] h-[397px] mx-2 sm:mb-6 md:w-[287px] lg:w-[287px]">
        <Image
          className="sm:w-full sm:h-auto"
          src="Outdoor bar table and stool 1.svg"
          width={250}
          height={376}
          alt="For You3"
        />
        <div className="mt-4 ml-[-50px] lg:ml-0">
          <p className="text-center text-[16px] font-normal leading-[24px] sm:text-[14px]">
            Outdoor bar table and stool
          </p>
          <p className="text-center mt-2 text-[24px] font-medium sm:text-[20px] leading-[36px]">
            Rs. 25,000.00
          </p>
        </div>
      </div>

      <div className="w-full sm:w-[287px] h-[397px] mx-2 sm:mb-6 md:w-[287px] lg:w-[287px]">
        <Image
          className="sm:w-full sm:h-auto"
          src="Plain console with teak mirror 1.svg"
          width={240}
          height={174}
          alt="For You4"
        />
        <div className="mt-4 ml-[-50px] lg:ml-0">
          <p className="text-center text-[16px] font-normal leading-[24px] sm:text-[14px]">
            Plain console with teak mirror
          </p>
          <p className="text-center mt-2 text-[24px] font-medium sm:text-[20px] leading-[36px]">
            Rs. 25,000.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
