import React from "react";
import Image from "next/image";

const Ourblog = () => {
  return (
    <div>
      <div className="w-full lg:w-full h-auto lg:h-[944px] p-4 lg:p-0">
        <div className="w-full lg:w-[479px] h-auto lg:h-[91px] mx-auto lg:ml-[140px] text-center lg:text-left">
          <p className="w-full lg:w-[174px] h-auto lg:h-[54px] mx-auto lg:ml-[480px] font-medium text-[24px] lg:text-[36px] leading-[36px] lg:leading-[54px] mt-[30px] lg:mt-[55px]">
            Our Blogs
          </p>
          <p className="w-full lg:w-[479px] h-auto lg:h-[24px] mx-auto lg:ml-[325px] font-medium text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] mt-[13px] text-[#9F9F9F]">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[1240px] h-auto lg:h-[679px] mx-auto lg:ml-[100px] mt-[30px] lg:mt-[70px]">
          <div className="w-full lg:w-[393px] h-auto lg:h-[393px] mb-[30px] lg:mb-0">
            <Image
              src="Rectangle 13.svg"
              width={393}
              height={393}
              alt="blog1"
              className="w-full h-auto"
            />
            <div className="mt-[20px] lg:mt-[30px] text-center lg:text-left">
              <p className="mx-auto lg:ml-[25px] w-full lg:w-[339px] h-auto font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
                Going all-in with millennial design
              </p>
              <p className="mx-auto lg:ml-[140px] w-full lg:w-[130px] h-auto lg:h-[36px] text-[18px] lg:text-[24px] font-medium leading-[28px] lg:leading-[36px] mt-[10px]">
                Read More
              </p>
              <p className="mx-auto lg:ml-[140px] w-full lg:w-[130px] border-[1px] border-black mt-[10px]"></p>
              <div className="flex justify-center lg:justify-start items-center lg:ml-[100px] mt-[20px]">
                <Image src="/clock.svg" width={18} height={17.83} alt="clock" />
                <p className="ml-[8px] font-light text-[14px] lg:text-[16px] leading-[24px]">
                  5 min
                </p>
                <Image
                  src="/calendar.svg"
                  width={18.33}
                  height={18.33}
                  alt="calendar"
                  className="ml-[16px]"
                />
                <p className="ml-[8px] font-light text-[14px] lg:text-[16px] leading-[24px]">
                  12th Oct 2022
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[393px] h-auto lg:h-[393px] mb-[30px] lg:mb-0">
            <Image
              src="Rectangle 14.svg"
              width={393}
              height={393}
              alt="blog2"
              className="w-full h-auto"
            />
            <div className="mt-[20px] lg:mt-[30px] text-center lg:text-left">
              <p className="mx-auto lg:ml-[25px] w-full lg:w-[339px] h-auto font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
                Going all-in with millennial design
              </p>
              <p className="mx-auto lg:ml-[140px] w-full lg:w-[130px] h-auto lg:h-[36px] text-[18px] lg:text-[24px] font-medium leading-[28px] lg:leading-[36px] mt-[10px]">
                Read More
              </p>
              <p className="mx-auto lg:ml-[140px] w-full lg:w-[130px] border-[1px] border-black mt-[10px]"></p>
              <div className="flex justify-center lg:justify-start items-center lg:ml-[100px] mt-[20px]">
                <Image src="/clock.svg" width={18} height={17.83} alt="clock" />
                <p className="ml-[8px] font-light text-[14px] lg:text-[16px] leading-[24px]">
                  5 min
                </p>
                <Image
                  src="/calendar.svg"
                  width={18.33}
                  height={18.33}
                  alt="calendar"
                  className="ml-[16px]"
                />
                <p className="ml-[8px] font-light text-[14px] lg:text-[16px] leading-[24px]">
                  12th Oct 2022
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[393px] h-auto lg:h-[393px]">
            <Image
              src="Rectangle 15.svg"
              width={393}
              height={393}
              alt="blog3"
              className="w-full h-auto"
            />
            <div className="mt-[20px] lg:mt-[30px] text-center lg:text-left">
              <p className="mx-auto lg:ml-[25px] w-full lg:w-[339px] h-auto font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
                Going all-in with millennial design
              </p>
              <p className="mx-auto lg:ml-[140px] w-full lg:w-[130px] h-auto lg:h-[36px] text-[18px] lg:text-[24px] font-medium leading-[28px] lg:leading-[36px] mt-[10px]">
                Read More
              </p>
              <p className="mx-auto lg:ml-[140px] w-full lg:w-[130px] border-[1px] border-black mt-[10px]"></p>
              <div className="flex justify-center lg:justify-start items-center lg:ml-[100px] mt-[20px]">
                <Image src="/clock.svg" width={18} height={17.83} alt="clock" />
                <p className="ml-[8px] font-light text-[14px] lg:text-[16px] leading-[24px]">
                  5 min
                </p>
                <Image
                  src="/calendar.svg"
                  width={18.33}
                  height={18.33}
                  alt="calendar"
                  className="ml-[16px]"
                />
                <p className="ml-[8px] font-light text-[14px] lg:text-[16px] leading-[24px]">
                  12th Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[126px] height-[49px] mx-auto lg:ml-[46%] mt-[30px] lg:mt-[-80px] text-center">
          <div className="w-full lg:w-[200px] h-auto lg:h-[30px] text-[18px] lg:text-[20px] font-medium leading-[28px] lg:leading-[28px]">
            View All Posts
          </div>
          <div className="w-full lg:w-[115px] border-[1px] border-black mt-[10px] mx-auto lg:ml-[40px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
